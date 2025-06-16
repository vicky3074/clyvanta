#!/bin/bash
# 🚀 Clyvanta Oracle Cloud Deployment Script
# Simple script that runs on Oracle server to deploy Clyvanta

set -e  # Exit on any error

echo "🚀 ===== CLYVANTA ORACLE CLOUD DEPLOYMENT ====="
echo "📅 Started at: $(date)"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Configuration
PROJECT_DIR="/var/www/clyvanta-oracle"
DOCKER_COMPOSE_FILE="$PROJECT_DIR/docker-compose.yml"
HEALTH_URL="http://localhost:8080/health"
BACKUP_DIR="/var/backups/clyvanta"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

log_info "Step 1: Preparing deployment environment..."

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    log_error "Project directory $PROJECT_DIR not found!"
    log_info "Creating project directory..."
    sudo mkdir -p "$PROJECT_DIR"
    sudo chown ubuntu:ubuntu "$PROJECT_DIR"
    cd "$PROJECT_DIR"
    
    log_info "Cloning Clyvanta repository..."
    git clone https://github.com/your-username/clyvanta.git .
else
    cd "$PROJECT_DIR"
    log_success "Project directory found"
fi

log_info "Step 2: Backing up current deployment..."

# Create timestamp for backup
BACKUP_TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_PATH="$BACKUP_DIR/clyvanta_backup_$BACKUP_TIMESTAMP"

# Backup current containers if running
if docker-compose ps | grep -q "Up"; then
    log_info "Creating database backup..."
    docker-compose exec -T clyvanta-db pg_dump -U clyvanta clyvanta > "$BACKUP_PATH.sql" 2>/dev/null || log_warning "Database backup failed (database might not be running)"
    
    log_info "Backing up container volumes..."
    docker-compose down
    sudo cp -r "$PROJECT_DIR" "$BACKUP_PATH" 2>/dev/null || log_warning "Directory backup failed"
else
    log_info "No running containers to backup"
fi

log_success "Backup completed"

log_info "Step 3: Fetching latest code..."

# Fetch latest code from GitHub
git fetch origin main
git reset --hard origin/main
log_success "Latest code fetched from GitHub"

log_info "Step 4: Building Docker containers..."

# Build new containers
if [ -f "$DOCKER_COMPOSE_FILE" ]; then
    docker-compose build --no-cache
    log_success "Docker containers built successfully"
else
    log_error "docker-compose.yml not found!"
    exit 1
fi

log_info "Step 5: Starting services..."

# Start new containers
docker-compose up -d

log_success "Services started"

log_info "Step 6: Waiting for services to initialize..."

# Wait for services to start
sleep 30

log_info "Step 7: Checking service health..."

# Check if containers are running
RUNNING_CONTAINERS=$(docker-compose ps --services --filter "status=running" | wc -l)
TOTAL_CONTAINERS=$(docker-compose ps --services | wc -l)

log_info "Running containers: $RUNNING_CONTAINERS/$TOTAL_CONTAINERS"

if [ "$RUNNING_CONTAINERS" -gt 0 ]; then
    log_success "Containers are running"
    
    # Display container status
    echo ""
    log_info "Container status:"
    docker-compose ps
    echo ""
else
    log_error "No containers are running!"
    log_info "Container logs:"
    docker-compose logs --tail=20
    exit 1
fi

log_info "Step 8: Testing website availability..."

# Test health endpoint
if curl -f --max-time 10 "$HEALTH_URL" >/dev/null 2>&1; then
    log_success "Health endpoint is responding"
elif curl -f --max-time 10 "http://localhost:8080" >/dev/null 2>&1; then
    log_success "Website is responding (health endpoint might still be starting)"
else
    log_warning "Website is not responding yet (might need more time to start)"
fi

log_info "Step 9: Cleanup old backups..."

# Keep only last 5 backups
BACKUP_COUNT=$(ls -1 "$BACKUP_DIR"/clyvanta_backup_* 2>/dev/null | wc -l)
if [ "$BACKUP_COUNT" -gt 5 ]; then
    log_info "Removing old backups (keeping last 5)..."
    ls -1t "$BACKUP_DIR"/clyvanta_backup_* | tail -n +6 | xargs rm -rf
    log_success "Old backups cleaned up"
fi

echo ""
log_success "===== DEPLOYMENT COMPLETED SUCCESSFULLY ====="
echo ""
log_info "🌍 Website URL: http://$(curl -s ifconfig.me):8080"
log_info "🗄️  Database: PostgreSQL (container: clyvanta-db)"
log_info "🔄 Reverse Proxy: Nginx (container: clyvanta-nginx)"
log_info "📊 Monitor containers: docker-compose ps"
log_info "📋 View logs: docker-compose logs -f [service-name]"
log_info "💾 Backup location: $BACKUP_PATH"
echo ""
log_info "📅 Completed at: $(date)"
echo "🎉 Clyvanta is now live on Oracle Cloud! 🎉"