#!/bin/bash
# ==============================================================================
# Backup script for VejaraFacility.com SQLite database & environment config
# ==============================================================================

set -e

BACKUP_DIR="/var/www/vejarafacility/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/vejara_backup_${TIMESTAMP}.tar.gz"

mkdir -p "${BACKUP_DIR}"

echo "Creating backup: ${BACKUP_FILE}"

# Archive prisma database files and .env
tar -czf "${BACKUP_FILE}" \
  --exclude="node_modules" \
  --exclude=".next" \
  prisma/*.db* .env 2>/dev/null || true

# Keep only the latest 15 backups to save disk space
ls -t "${BACKUP_DIR}"/vejara_backup_*.tar.gz 2>/dev/null | tail -n +16 | xargs -r rm -f

echo "Backup created successfully: ${BACKUP_FILE}"
