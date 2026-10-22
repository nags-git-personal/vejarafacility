# AI Agent Knowledge Base & Developer Context — VejaraFacility.com

> **Agent Invariant:** This document provides essential operational context, design philosophy, file structures, and critical invariants for any AI coding assistant or engineer working on this repository.

---

## 1. Project Identity & Business Context

- **Company Name:** Vejara Facility Services (`vejarafacility.com`)
- **Primary Business:** B2B on-demand warehouse manpower supply (helpers, picker-packers, inventory controllers, forklift operators) and facility management across the UAE.
- **Key Value Propositions:**
  - 100% MOHRE compliance, legal visas, WPS payroll, full health insurance.
  - 24 to 48-hour rapid deployment across Dubai, Abu Dhabi, Sharjah, and Northern Emirates.
  - Zero recruitment overhead and zero offboarding liabilities for clients.
- **Physical Headquarters:**  
  `OFF404A, Mohd Abna Rashid Mana AI Maktoum, MM Towers, Al Maktoum Rd, Riggat Al Buteen, Dubai, United Arab Emirates`
- **Contact Details:**
  - Phone: `+971 4 388 5003`
  - Email: `info@vejarafacility.com`
  - WhatsApp: `97143885003`

---

## 2. Infrastructure Invariants (DO NOT VIOLATE)

1. **Port Allocation:**
   - The application ALWAYS listens on port **`3005`** (`http://127.0.0.1:3005`).
   - Host Nginx on VPS `72.61.232.252` is configured to reverse-proxy `vejarafacility.com` directly to `127.0.0.1:3005`.
   - Never change the port without synchronizing `/etc/nginx/sites-available/vejarafacility.conf`, `docker-compose.yml`, and `.env`.

2. **Database Engine & Persistence:**
   - Database is **SQLite** managed via **Prisma ORM**.
   - Local development uses `file:./dev.db` (or `prisma/dev.db`).
   - Production Docker container mounts persistent volume `vejara_sqlite_data` to `/app/prisma` to prevent data loss on container rebuilds.
   - **Never run `docker compose down -v` on production** as it destroys the volume.

3. **Standalone Output Mode:**
   - `next.config.mjs` specifies `output: "standalone"`.
   - In manual or PM2 builds, `.next/static` and `public/` MUST be copied into `.next/standalone/` for styles and images to resolve.

---

## 3. Essential Commands Cheat Sheet

### Development (Local):
```bash
# Install dependencies
npm install

# Run database migration & generate Prisma Client
npm run prisma:generate
npm run prisma:push

# Seed default services, testimonials and FAQs
npm run db:seed

# Start development server on port 3005
npm run dev
```

### Production Build & Deployment:
```bash
# Validate production build locally
npm run build

# Automated VPS deployment
bash scripts/deploy.sh

# Docker stack launch
docker compose up -d --build

# Health check validation
curl -I http://127.0.0.1:3005/api/health
```

---

## 4. Design Guidelines for UI Modifications

- **Aesthetic Standard:** Modern industrial high-conversion corporate aesthetic.
- **Colors:**
  - Dark Slate/Navy background: `#080F1A`, `#0D1829`, `#1B2D4E`
  - High-visibility Industrial Amber accents: `#E88030` and `#FAB028`
  - Crisp white headlines (`text-white`) with muted slate descriptions (`text-slate-400`).
- **Icons:** Use `lucide-react` icons (e.g. `PackageCheck`, `ShieldCheck`, `Clock`, `Warehouse`, `Truck`).
- **Typography:** Google `Inter` font family (`font-sans`).

---

## 5. Contact & Support Escalation

- **VPS Server:** `72.61.232.252` (root / sudo access)
- **Root Web Path:** `/var/www/vejarafacility`
- **Nginx Config Path:** `/etc/nginx/sites-available/vejarafacility.conf`
- **Log Locations:**
  - Application: `docker compose logs -f` or `pm2 logs vejarafacility-app`
  - Nginx: `/var/log/nginx/vejarafacility_error.log`
