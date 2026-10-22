#!/bin/bash
# ==============================================================================
# VejaraFacility.com Deployment Script (VPS: 72.61.232.252 /var/www/vejarafacility)
# Supports both Docker Compose (Recommended) and PM2 Standalone modes
# ==============================================================================

set -e # Exit immediately if a command exits with a non-zero status

APP_DIR="/var/www/vejarafacility"
APP_PORT="3005"
BACKUP_DIR="${APP_DIR}/backups"

echo "=========================================="
echo "  Deploying VejaraFacility.com on VPS"
echo "  Target: ${APP_DIR} | Port: ${APP_PORT}"
echo "=========================================="

cd "${APP_DIR}"

# 1. Ensure backup directory exists & run backup
mkdir -p "${BACKUP_DIR}"
if [ -f "./scripts/backup.sh" ]; then
  echo "--> Running safety backup of SQLite database..."
  bash ./scripts/backup.sh || echo "Notice: Initial backup skipped."
fi

# 2. Pull latest changes from git cleanly
echo "--> Fetching latest changes from Git..."
git fetch origin

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "master")
echo "--> Current git branch: ${CURRENT_BRANCH}"

# Discard any local untracked file conflicts on server and sync with remote
git reset --hard "origin/${CURRENT_BRANCH}" 2>/dev/null || git reset --hard origin/master 2>/dev/null || git reset --hard origin/main

# 3. Check deployment mode (Docker vs PM2)
if command -v docker &> /dev/null && [ -f "docker-compose.yml" ]; then
  echo "--> Docker detected. Rebuilding without cache for fresh assets..."
  
  # Ensure .env exists
  if [ ! -f ".env" ]; then
    echo "Creating .env from .env.example..."
    cp .env.example .env
  fi

  # Stop old container and rebuild without cache to avoid stale layer issues
  docker compose down || true
  docker compose build --no-cache
  docker compose up -d

  echo "--> Waiting for application container to initialize..."
  sleep 10

  # Check container status
  docker compose ps

else
  echo "--> PM2 / Standalone mode detected..."

  # Install dependencies
  echo "--> Installing dependencies..."
  npm install --legacy-peer-deps

  # Generate Prisma Client & Push DB schema
  echo "--> Syncing SQLite database schema..."
  npx prisma generate
  npx prisma db push --skip-generate
  
  # Seed database if newly created
  if [ ! -f "prisma/prod.db" ]; then
    echo "--> Seeding initial services and FAQs..."
    node scripts/seed.mjs || true
  fi

  # Clean previous build cache and rebuild Next.js standalone application
  echo "--> Cleaning previous .next build cache..."
  rm -rf .next
  echo "--> Building Next.js production standalone bundle..."
  npm run build

  # Copy static assets and public folder into standalone directory
  echo "--> Copying static files to standalone folder..."
  rm -rf .next/standalone/public .next/standalone/.next/static
  cp -r public .next/standalone/
  cp -r .next/static .next/standalone/.next/
  mkdir -p .next/standalone/prisma
  cp prisma/schema.prisma .next/standalone/prisma/

  # Restart PM2 process
  echo "--> Starting/Restarting app process in PM2..."
  if pm2 describe vejarafacility-app > /dev/null 2>&1; then
    pm2 restart vejarafacility-app --update-env
  else
    pm2 start ecosystem.config.cjs
  fi
  pm2 save
fi

# 4. Verify deployment health
echo "--> Verifying application health on port ${APP_PORT}..."
sleep 3
HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:${APP_PORT}/api/health || echo "000")

if [ "$HEALTH_CHECK" = "200" ]; then
  echo "=========================================="
  echo " SUCCESS: VejaraFacility.com is LIVE!"
  echo " HTTP Status: ${HEALTH_CHECK} OK"
  echo " Local URL: http://127.0.0.1:${APP_PORT}"
  echo " Public URL: http://72.61.232.252:${APP_PORT}"
  echo "=========================================="
else
  echo "=========================================="
  echo " WARNING: Health check returned status: ${HEALTH_CHECK}"
  echo " Check logs: docker compose logs -n 50 OR pm2 logs vejarafacility-app"
  echo "=========================================="
fi
