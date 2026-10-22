# Production Deployment Guide — VejaraFacility.com

Comprehensive operations manual for deploying, configuring, and updating **Vejara Facility Services** on the production VPS.

---

## 1. Production Server Overview

| Property | Value | Notes |
| :--- | :--- | :--- |
| **Server IP** | `72.61.232.252` | Host server on Ubuntu/Debian |
| **Project Directory** | `/var/www/vejarafacility` | Root application repository |
| **Port Mapping** | `3005:3005` | Internal upstream for host reverse proxy |
| **Public Domains** | `https://vejarafacility.com` & `https://www.vejarafacility.com` | Or via direct IP `http://72.61.232.252:3005` |
| **Database** | SQLite (`/app/prisma/prod.db` or `./prisma/prod.db`) | Persisted via Docker named volume or local filesystem |
| **Process Manager** | Docker Compose *(Default)* or PM2 *(Fallback)* | Zero-downtime execution |
| **Corporate Address** | `OFF404A, Mohd Abna Rashid Mana AI Maktoum, MM Towers, Al Maktoum Rd, Riggat Al Buteen, Dubai, United Arab Emirates` | Verified legal office address |

---

## 2. First-Time Server Setup

### Step 1: SSH into VPS
```bash
ssh root@72.61.232.252
```

### Step 2: Clone or Update Project in `/var/www`
```bash
mkdir -p /var/www
cd /var/www
git clone <repository_url> vejarafacility
cd /var/www/vejarafacility
```

### Step 3: Configure Environment
Copy the production environment template:
```bash
cp .env.example .env
nano .env
```
Ensure key environment variables are set:
```ini
DATABASE_URL="file:/app/prisma/prod.db" # in Docker, or "file:./prisma/prod.db" in PM2
PORT=3005
NEXT_PUBLIC_APP_URL="https://vejarafacility.com"
ADMIN_PASSWORD="admin_vejara_2026"
NEXT_PUBLIC_SITE_NAME="Vejara Facility Services"
NEXT_PUBLIC_CONTACT_PHONE="+971 4 388 5003"
NEXT_PUBLIC_CONTACT_EMAIL="info@vejarafacility.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="97143885003"
NEXT_PUBLIC_OFFICE_ADDRESS="OFF404A, Mohd Abna Rashid Mana AI Maktoum, MM Towers, Al Maktoum Rd, Riggat Al Buteen, Dubai, United Arab Emirates"
```

---

## 3. Host Nginx Configuration

The host Nginx acts as the SSL terminator and public reverse proxy forwarding `:80` and `:443` to `http://127.0.0.1:3005`.

### 1. Copy Nginx Configuration
```bash
cp /var/www/vejarafacility/nginx/vejarafacility.conf /etc/nginx/sites-available/vejarafacility.conf
ln -s /etc/nginx/sites-available/vejarafacility.conf /etc/nginx/sites-enabled/
```

### 2. Test and Reload Nginx
```bash
nginx -t
systemctl reload nginx
```

### 3. Issue SSL Certificate (Let's Encrypt / Certbot)
Once your domain DNS A-records (`vejarafacility.com`, `www.vejarafacility.com`) point to `72.61.232.252`:
```bash
certbot --nginx -d vejarafacility.com -d www.vejarafacility.com
```

---

## 4. Deployment Modes

### Mode A: Docker Compose (Recommended)
Docker ensures container isolation, automatic health checks, and persistent volume storage.

1. **Build and Launch Container:**
   ```bash
   cd /var/www/vejarafacility
   docker compose up -d --build
   ```

2. **Verify Container Health:**
   ```bash
   docker compose ps
   # Container vejarafacility_app should report (healthy)
   ```

3. **Check Live Application Logs:**
   ```bash
   docker compose logs -f --tail=100
   ```

4. **Verify Port Binding:**
   ```bash
   ss -tlnp | grep 3005
   # Output should show: 0.0.0.0:3005
   ```

---

### Mode B: PM2 Standalone (Alternative / Low-RAM VPS)
If Docker is unavailable or VPS RAM is constrained (< 2GB):

1. **Install Dependencies:**
   ```bash
   cd /var/www/vejarafacility
   npm install --legacy-peer-deps
   ```

2. **Sync SQLite Database & Seed Initial Data:**
   ```bash
   npx prisma generate
   npx prisma db push
   node scripts/seed.mjs
   ```

3. **Build Next.js Standalone Bundle:**
   ```bash
   npm run build
   ```

4. **Prepare Standalone Assets:**
   ```bash
   cp -r public .next/standalone/
   cp -r .next/static .next/standalone/.next/
   mkdir -p .next/standalone/prisma
   cp prisma/schema.prisma .next/standalone/prisma/
   ```

5. **Start / Reload PM2 Process:**
   ```bash
   pm2 start ecosystem.config.cjs
   pm2 save
   pm2 startup
   ```

---

## 5. Automated Updates with `deploy.sh`

A zero-friction automated deployment script is located in `scripts/deploy.sh`:

```bash
cd /var/www/vejarafacility
bash ./scripts/deploy.sh
```

**What `deploy.sh` executes automatically:**
1. Backs up the SQLite database to `/var/www/vejarafacility/backups/`.
2. Pulls the latest code (`git pull origin main`).
3. Rebuilds containers or updates PM2 standalone bundle.
4. Verifies `/api/health` returns `200 OK`.

---

## 6. Database Backups (SQLite)

Database backups must run regularly to preserve customer quotation inquiries and dynamic service content.

### Manual Backup:
```bash
cd /var/www/vejarafacility
bash ./scripts/backup.sh
```

### Automated Nightly Cron Job:
Add the following entry via `crontab -e`:
```bash
0 2 * * * /bin/bash /var/www/vejarafacility/scripts/backup.sh >> /var/log/vejara_backup.log 2>&1
```

---

## 7. Health Check Verification

Test that the application is operating correctly:
```bash
curl -I http://127.0.0.1:3005/
# Expected: HTTP/1.1 200 OK

curl -s http://127.0.0.1:3005/api/health | jq .
# Expected output:
# {
#   "status": "ok",
#   "timestamp": "2026-10-22T...",
#   "services": 6,
#   "environment": "production"
# }
```
