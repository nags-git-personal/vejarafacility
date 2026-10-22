# Complete Production Deployment & Domain Linking Guide

**Live Domain:** `https://vejarafacility.com` (and `https://www.vejarafacility.com`)  
**Production VPS:** `72.61.232.252` (Ubuntu / Debian)  
**App Directory on Server:** `/var/www/vejarafacility`  
**Internal Port:** `3005` (Host Nginx forwards `:80` / `:443` → `127.0.0.1:3005`)  
**Git Repository:** `https://github.com/nags-git-personal/vejarafacility.git`  
**Registrar:** Hostinger  

---

## Architecture Flow

```
User visits: https://vejarafacility.com
       │
       ▼
Hostinger DNS A-Record (Points to 72.61.232.252)
       │
       ▼
Host Nginx Reverse Proxy (Port 443 with Let's Encrypt SSL)
       │
       ▼
Local Proxy to http://127.0.0.1:3005
       │
       ▼
Docker Container (vejarafacility_app) ──> Persistent SQLite Volume (vejara_sqlite_data)
```

---

## Step 1: Link Domain on Hostinger (DNS Setup)

1. Log into your **Hostinger Control Panel** (hPanel).
2. Go to **Domains** → select **`vejarafacility.com`** → **DNS / Nameservers**.
3. Create or edit the following two **A Records**:

| Type | Name | Points to (IP Address) | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` *(leave blank or `@`)* | `72.61.232.252` | `300` (or 1/2 hour) |
| **A** | `www` | `72.61.232.252` | `300` (or 1/2 hour) |

> ⏱ **Verification:** Wait 5–15 minutes for DNS propagation. Verify on your local machine:
> ```bash
> nslookup vejarafacility.com
> # Should return: 72.61.232.252
> ```

---

## Step 2: Deploy Application on VPS

### 1. SSH into the production server
```bash
ssh root@72.61.232.252
```

### 2. Navigate to web root and pull the code
```bash
cd /var/www

# If repository is NOT yet on server:
git clone https://github.com/nags-git-personal/vejarafacility.git vejarafacility
cd /var/www/vejarafacility

# If repository is ALREADY on server:
cd /var/www/vejarafacility
git pull origin main || git pull origin master
```

### 3. Create production `.env` file
```bash
cp .env.example .env
nano .env
```
Ensure the production values are present:
```ini
DATABASE_URL="file:/app/prisma/prod.db"
PORT=3005
NEXT_PUBLIC_APP_URL="https://vejarafacility.com"
ADMIN_PASSWORD="admin_vejara_2026"
NEXT_PUBLIC_SITE_NAME="Vejara Facility Services"
NEXT_PUBLIC_CONTACT_PHONE="+971 4 388 5003"
NEXT_PUBLIC_CONTACT_EMAIL="info@vejarafacility.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="97143885003"
NEXT_PUBLIC_OFFICE_ADDRESS="OFF404A, Mohd Abna Rashid Mana AI Maktoum, MM Towers, Al Maktoum Rd, Riggat Al Buteen, Dubai, United Arab Emirates"
NEXT_PUBLIC_GOOGLE_MAPS_URL="https://maps.google.com/?q=OFF404A%2C%20Mohd%20Abna%20Rashid%20Mana%20AI%20Maktoum%2CMM%20Towers%20Al%20Maktoum%20Rd%20-%20Riggat%20Al%20Buteen%20-%20Dubai%20-%20United%20Arab%20Emirates"
NEXT_PUBLIC_WORKING_HOURS="Sunday – Saturday: 9:00 AM – 6:00 PM"
```

### 4. Build and start the container
```bash
docker compose up -d --build
```

### 5. Seed the database with initial services and FAQs
```bash
docker compose exec vejarafacility node scripts/seed.mjs
```

### 6. Verify internal health
```bash
curl -I http://127.0.0.1:3005/api/health
# Expected: HTTP/1.1 200 OK
```

---

## Step 3: Configure Host Nginx Reverse Proxy

The host Nginx handles incoming public traffic on ports `:80` and `:443` and routes `vejarafacility.com` to `127.0.0.1:3005`.

### 1. Copy Nginx site configuration
```bash
cp /var/www/vejarafacility/nginx/vejarafacility.conf /etc/nginx/sites-available/vejarafacility.conf
ln -sf /etc/nginx/sites-available/vejarafacility.conf /etc/nginx/sites-enabled/
```

### 2. Test Nginx configuration & reload
```bash
nginx -t
systemctl reload nginx
```

---

## Step 4: Issue Free SSL Certificate (HTTPS)

Once Hostinger DNS points to `72.61.232.252`, issue the SSL certificate via Certbot:

```bash
certbot --nginx -d vejarafacility.com -d www.vejarafacility.com
```

- When prompted, choose **Redirect HTTP to HTTPS** (Option 2).
- Certbot will automatically configure the SSL certificates and renewal timers.

---

## Step 5: Test & Verify Public Domain

Test the live website in terminal or browser:
```bash
curl -I https://vejarafacility.com/
# Expected: HTTP/2 200 OK
```

---

## Step 6: Deploying Future Updates

Whenever you make changes to the codebase locally:

1. **Commit and push from your local machine:**
   ```bash
   git add .
   git commit -m "Update feature"
   git push origin master
   ```

2. **Run the one-line updater on VPS:**
   ```bash
   ssh root@72.61.232.252 "cd /var/www/vejarafacility && bash scripts/deploy.sh"
   ```
   *The `deploy.sh` script automatically backs up SQLite, pulls code, rebuilds containers with zero downtime, and checks health.*

---

## Emergency Commands & Troubleshooting

| Task | Command |
| :--- | :--- |
| **Check container status** | `docker compose ps` |
| **View live logs** | `docker compose logs -f --tail=100` |
| **Restart container** | `docker compose restart vejarafacility` |
| **Full stack reset** | `docker compose down && docker compose up -d` |
| **Check Nginx logs** | `tail -f /var/log/nginx/vejarafacility_error.log` |
| **Manual SQLite backup** | `bash /var/www/vejarafacility/scripts/backup.sh` |
| **Verify port binding** | `ss -tlnp \| grep 3005` |
