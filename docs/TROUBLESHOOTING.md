# Troubleshooting & Incident Recovery Guide — VejaraFacility.com

Step-by-step diagnostic procedures, common error scenarios, and recovery playbooks for production issues on VPS `72.61.232.252`.

---

## 1. Quick Emergency Diagnostic Checklist

When an alert or user reports downtime, run these five commands immediately via SSH:

```bash
# 1. Is port 3005 listening on the host?
ss -tlnp | grep 3005

# 2. Are Docker containers up and healthy?
docker compose ps

# 3. If running via PM2, is the service active?
pm2 status

# 4. Is the host Nginx proxy active?
systemctl status nginx

# 5. What does the internal health check return?
curl -I http://127.0.0.1:3005/api/health
```

---

## 2. Resolving "502 Bad Gateway"

A `502 Bad Gateway` error indicates that the host Nginx server received a connection refusal when attempting to reach the internal Node.js upstream on `127.0.0.1:3005`.

```
Client Request (Port 443 / SSL)
       │
       ▼
Host Nginx Reverse Proxy (72.61.232.252)
       │
       ▼  (Connection Refused / No listener on 127.0.0.1:3005)
       💥 ---> Returns 502 Bad Gateway
```

### Root Causes & Fixes:

#### Scenario A: Docker Container Exited or Stopped
**Check:**
```bash
docker compose ps
```
If `vejarafacility_app` shows `Exited` or `Restarting`:
```bash
# View last 100 log lines to identify root cause
docker compose logs --tail=100 vejarafacility

# Clean restart
docker compose down
docker compose up -d --build
```

#### Scenario B: Out of Memory (OOM Killer)
On 1GB or 2GB VPS droplets, the Linux kernel OOM killer may terminate Node.js processes during heavy traffic or build operations.
**Check:**
```bash
dmesg -T | grep -i -E "oom|killed process"
free -h
```
**Fix:**
Ensure at least 2GB of Swap space is active:
```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

#### Scenario C: PM2 Application Crashed or in Error Loop
**Check:**
```bash
pm2 status
pm2 logs vejarafacility-app --lines 50
```
**Fix:**
```bash
pm2 restart vejarafacility-app --update-env
```

#### Scenario D: Host Nginx Upstream Configuration Mismatch
**Check:**
Verify `/etc/nginx/sites-enabled/vejarafacility.conf` points to `127.0.0.1:3005`:
```bash
grep -n "proxy_pass" /etc/nginx/sites-enabled/vejarafacility.conf
```
If it points to `3000` or an incorrect port, update to:
```nginx
proxy_pass http://127.0.0.1:3005;
```
Then reload Nginx:
```bash
nginx -t && systemctl reload nginx
```

---

## 3. SQLite Database Issues

### 1. `SQLITE_BUSY: database is locked`
Occurs if concurrent write operations exceed SQLite's lock timeout.
- **Immediate Mitigation:** Restart the container to release active file locks:
  ```bash
  docker compose restart vejarafacility
  # or
  pm2 restart vejarafacility-app
  ```
- **Prisma Configuration:** Ensure WAL (Write-Ahead Logging) mode is enabled on the SQLite file:
  ```bash
  sqlite3 /var/www/vejarafacility/prisma/prod.db "PRAGMA journal_mode=WAL;"
  ```

### 2. Database File Missing or Reset After Rebuild
If inquiries or custom pages disappear after a `docker compose up -d --build`:
- **Cause:** Volume mapping was omitted or destroyed with `docker compose down -v`.
- **Prevention:** Always check `docker-compose.yml` has the named volume attached:
  ```yaml
  volumes:
    - vejara_sqlite_data:/app/prisma
  ```
- **Restore from Backup:**
  ```bash
  LATEST_BACKUP=$(ls -t /var/www/vejarafacility/backups/*.db | head -n 1)
  cp "$LATEST_BACKUP" /var/www/vejarafacility/prisma/prod.db
  docker compose restart
  ```

### 3. Schema Out of Sync (`Table not found`)
If schema changes were added to `prisma/schema.prisma` but not applied to the production database:
```bash
# Inside project directory:
npx prisma db push --skip-generate
npx prisma generate
```

---

## 4. Port 3005 Conflicts (`EADDRINUSE`)

If Node.js fails to bind to port 3005 because an old or orphaned instance is still running:

```bash
# Find process occupying port 3005
lsof -i :3005
# or
ss -lptn 'sport = :3005'

# Kill the rogue process by PID
kill -9 <PID>

# Alternatively force-release port 3005
fuser -k 3005/tcp
```

---

## 5. Next.js Standalone Missing Static Assets

### Symptom:
Site loads without styling, CSS/JS fail with 404 in browser DevTools.

### Cause:
When running Next.js in `output: "standalone"` mode (as in `ecosystem.config.cjs` or custom Dockerfiles), Next.js does NOT bundle `.next/static` or `public/` into `.next/standalone` automatically.

### Resolution:
```bash
cd /var/www/vejarafacility
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
```
In Docker, this is already handled by `COPY --from=builder /app/public ./public` and `COPY --from=builder /app/.next/static ./.next/static`.

---

## 6. Full Service Reset Playbook

If multiple failures occur simultaneously and the stack needs a clean reset:

```bash
cd /var/www/vejarafacility

# 1. Take safety backup of database
bash ./scripts/backup.sh || true

# 2. Stop running containers or PM2
docker compose down || true
pm2 stop vejarafacility-app || true

# 3. Pull clean latest code
git pull origin main

# 4. Clean rebuild
docker compose build --no-cache
docker compose up -d

# 5. Wait 15 seconds and verify
sleep 15
curl -I http://127.0.0.1:3005/api/health
curl -I https://vejarafacility.com/
```
