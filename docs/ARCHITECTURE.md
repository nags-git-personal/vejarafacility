# Architecture & Technical Design — VejaraFacility.com

Complete system architecture, data models, design tokens, and technical design for **Vejara Facility Services**.

---

## 1. System High-Level Architecture

```
                                  Internet
                                     │
                                     ▼
                    [ Host Nginx Reverse Proxy (443/80) ]
                            (72.61.232.252)
                                     │
                       Reverse Proxy to 127.0.0.1:3005
                                     │
                                     ▼
          ┌────────────────────────────────────────────────────────┐
          │     Next.js 14 Standalone App / Docker Container       │
          │                                                        │
          │  ┌───────────────────────┐  ┌───────────────────────┐  │
          │  │   App Router (SSR)    │  │   Route Handlers      │  │
          │  │  - / (Landing Page)   │  │  - /api/health        │  │
          │  │  - Responsive Layout  │  │  - /api/inquiry       │  │
          │  └───────────┬───────────┘  └───────────┬───────────┘  │
          │              │                          │              │
          │              └───────────┬──────────────┘              │
          │                          │                             │
          │                          ▼                             │
          │                 [ Prisma ORM Client ]                  │
          │                          │                             │
          └──────────────────────────┼─────────────────────────────┘
                                     │
                                     ▼
                      [ SQLite Database (prod.db) ]
                     Persisted on Volume or Local Disk
```

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `14.2.18` | Server-Side Rendering, API Route Handlers |
| **UI Library** | React | `18.3.1` | Component architecture |
| **Styling** | Tailwind CSS & animate | `3.4.15` | Industrial corporate styling & micro-animations |
| **Icons** | Lucide React | `0.460.0` | High-clarity iconography |
| **Database** | SQLite | `3` | Lightweight, embedded zero-latency database |
| **ORM** | Prisma | `5.22.0` | Type-safe database queries & migration tooling |
| **Fonts** | Google Inter | Variable | Modern, highly legible industrial typography |
| **Container** | Docker & Compose | Multi-stage | Alpine Node 20/22 production container |
| **Web Server** | Nginx | 1.18+ | SSL termination, gzip compression, caching |

---

## 3. Directory Structure

```
vejarafacility/
├── docs/                      # Operations, architecture & agent knowledge
│   ├── DEPLOYMENT.md          # VPS deployment instructions
│   ├── TROUBLESHOOTING.md     # Incident recovery & 502 playbooks
│   ├── ARCHITECTURE.md        # Technical specs & database schema
│   └── AGENT_KNOWLEDGE.md     # AI agent rules & codebase context
├── nginx/
│   └── vejarafacility.conf    # Host Nginx reverse proxy configuration
├── prisma/
│   ├── schema.prisma          # Database schema (Inquiry, Service, etc.)
│   └── dev.db / prod.db       # SQLite local & production data files
├── scripts/
│   ├── backup.sh              # Database automated backup script
│   ├── deploy.sh              # Automated deployment script for VPS
│   └── seed.mjs               # Initial services, testimonials & FAQ seeder
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/        # Health check endpoint (/api/health)
│   │   ├── globals.css        # Tailwind directives & CSS variables
│   │   ├── layout.tsx         # Global layout, navbar, top-bar & footer
│   │   └── page.tsx           # Conversion landing page
│   └── lib/
│       ├── initialData.ts     # Pre-packaged service & sector data
│       ├── prisma.ts          # Singleton Prisma Client instance
│       └── utils.ts           # Classnames & Tailwind merge utility
├── .env.example               # Environment variables template
├── docker-compose.yml         # Container definitions & volume mappings
├── Dockerfile                 # Multi-stage production build container
├── ecosystem.config.cjs       # PM2 process manager configuration
├── next.config.mjs            # Next.js standalone output configuration
└── tailwind.config.ts         # Vejara corporate color palette & tokens
```

---

## 4. Prisma Database Schema & Models

### Core Models:

1. **`Inquiry`** (Quotation & Staffing Requests)
   - `id`: UUID (Primary Key)
   - `name`, `email`, `phone`, `company`
   - `service`: Selected category (e.g. Warehouse Helpers, Picker-Packer)
   - `staffCount`, `shiftType`, `urgency`
   - `location`: Deployment emirate / zone (e.g. Dubai, Abu Dhabi, Mussafah)
   - `status`: `NEW`, `CONTACTED`, `IN_PROGRESS`, `CONVERTED`, `ARCHIVED`
   - `createdAt`, `updatedAt`

2. **`Service`** (Logistics & Facility Offerings)
   - `slug`: Unique identifier URL slug
   - `title`, `shortDesc`, `fullDesc`, `category`
   - `features`, `benefits`: JSON-serialized arrays of bullet points
   - `active`: Boolean visibility toggle
   - `order`: Display sorting priority

3. **`Testimonial`** (Client Reviews)
   - `clientName`, `company`, `designation`, `quote`, `rating`, `sector`

4. **`FaqItem`** (Frequently Asked Questions)
   - `question`, `answer`, `category`, `order`

---

## 5. Design System & Corporate Tokens

### Color Palette:
- **Corporate Navy (`#080F1A`, `#0D1829`, `#1B2D4E`)**: Dominant backdrop and high-trust structural containers.
- **Industrial Amber (`#E88030` to `#FAB028`)**: High-visibility accent color representing warehouse logistics and industrial equipment.
- **Steel Grays (`#F8FAFC` to `#1E293B`)**: Neutral text, subtle borders, and secondary controls.

### Official Company Information:
- **Legal Name**: Vejara Facility Services
- **Registered Address**: `OFF404A, Mohd Abna Rashid Mana AI Maktoum, MM Towers, Al Maktoum Rd, Riggat Al Buteen, Dubai, United Arab Emirates`
- **Dispatch Phone**: `+971 4 388 5003`
- **Official Email**: `info@vejarafacility.com`
- **WhatsApp Desk**: `97143885003`
