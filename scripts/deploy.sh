#!/bin/bash

# Clyvanta Deployment Script
set -e

echo "🚀 Clyvanta Deployment Starting..."
echo "=================================="

# Configuration
APP_DIR="/var/www/clyvanta"
BACKUP_DIR="/backups/clyvanta/$(date +%Y%m%d_%H%M%S)"
LOG_FILE="/var/log/clyvanta-deploy.log"
ENVIRONMENT=${1:-production}

# Functions
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

error() {
    log "ERROR: $1"
    exit 1
}

success() {
    log "SUCCESS: $1"
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    command -v docker >/dev/null 2>&1 || error "Docker is not installed"
    command -v git >/dev/null 2>&1 || error "Git is not installed"
    
    if ! docker compose version >/dev/null 2>&1; then
        error "Docker Compose is not available"
    fi
    
    success "Prerequisites check passed"
}

# Create backup
create_backup() {
    if [ -d "$APP_DIR" ]; then
        log "Creating backup at $BACKUP_DIR..."
        mkdir -p $BACKUP_DIR
        cp -r $APP_DIR $BACKUP_DIR/
        success "Backup created"
    fi
}

# Pull latest code
pull_code() {
    log "Pulling latest code..."
    cd $APP_DIR
    
    if [ -d ".git" ]; then
        git fetch origin
        git reset --hard origin/main || error "Failed to pull latest code"
    else
        error "Not a git repository"
    fi
    
    success "Code updated"
}

# Deploy application based on environment
deploy_app() {
    log "Deploying application for $ENVIRONMENT environment..."
    cd $APP_DIR
    
    if [ "$ENVIRONMENT" = "staging" ]; then
        deploy_staging
    else
        deploy_production
    fi
}

# Deploy to staging
deploy_staging() {
    log "Deploying to staging (port 8081)..."
    
    # Create staging docker-compose if it doesn't exist
    if [ ! -f "docker-compose.staging.yml" ]; then
        log "Creating staging docker-compose configuration..."
        cat > docker-compose.staging.yml << EOF
version: '3.8'

services:
  clyvanta-staging:
    build: .
    ports:
      - "8081:3000"
    environment:
      - NODE_ENV=staging
    restart: unless-stopped
    container_name: clyvanta-staging
    networks:
      - clyvanta-staging-network

networks:
  clyvanta-staging-network:
    driver: bridge
EOF
    fi
    
    # Stop existing staging containers
    log "Stopping existing staging containers..."
    docker compose -f docker-compose.staging.yml down || log "No staging containers to stop"
    
    # Clean up old staging images
    log "Cleaning up old staging images..."
    docker image prune -f
    
    # Build and start staging containers
    log "Building and starting staging containers..."
    docker compose -f docker-compose.staging.yml up -d --build || error "Failed to start staging containers"
    
    success "Staging containers started on port 8081"
}

# Deploy to production
deploy_production() {
    log "Deploying to production (port 8080)..."
    
    # Stop existing production containers
    log "Stopping existing production containers..."
    docker compose down || log "No production containers to stop"
    
    # Clean up old production images
    log "Cleaning up old production images..."
    docker image prune -f
    
    # Build and start production containers
    log "Building and starting production containers..."
    docker compose up -d --build || error "Failed to start production containers"
    
    success "Production containers started on port 8080"
}

# Health check
health_check() {
    log "Performing health check..."
    
    # Determine port based on environment
    if [ "$ENVIRONMENT" = "staging" ]; then
        HEALTH_PORT=8081
    else
        HEALTH_PORT=8080
    fi
    
    # Wait for services to start
    log "Waiting for services to start..."
    sleep 30
    
    # Check health endpoint
    for i in {1..10}; do
        if curl -f http://localhost:${HEALTH_PORT} >/dev/null 2>&1; then
            success "Health check passed on port $HEALTH_PORT"
            return 0
        else
            log "Health check attempt $i/10 failed, retrying..."
            sleep 10
        fi
    done
    
    error "Health check failed after 10 attempts on port $HEALTH_PORT"
}

# Show status
show_status() {
    log "Deployment status for $ENVIRONMENT:"
    
    if [ "$ENVIRONMENT" = "staging" ]; then
        docker compose -f docker-compose.staging.yml ps
        log "Staging logs (last 20 lines):"
        docker compose -f docker-compose.staging.yml logs --tail 20
    else
        docker compose ps
        log "Production logs (last 20 lines):"
        docker compose logs --tail 20
    fi
}

# Cleanup function
cleanup() {
    log "Cleaning up..."
    # Remove old deployment archives
    find /root -name "clyvanta-deploy*.tar.gz" -mtime +7 -delete 2>/dev/null || true
}

# Backup directory cleanup
cleanup_backups() {
    log "Cleaning up backup directory..."
    
    if [ -d "/backups" ]; then
        log "Current backup directory size: $(du -sh /backups 2>/dev/null || echo 'Unknown')"
        
        log "Removing all backup files..."
        rm -rf /backups/* 2>/dev/null || true
        
        log "Backup directory cleaned. New size: $(du -sh /backups 2>/dev/null || echo 'Unknown')"
        success "Backup cleanup completed"
    else
        log "No backup directory found to clean"
    fi
}

# Trap cleanup on exit
trap cleanup EXIT

# Main deployment flow
main() {
    log "Starting Clyvanta $ENVIRONMENT deployment..."
    
    check_prerequisites
    create_backup
    pull_code
    deploy_app
    health_check
    show_status
    
    success "🎉 Clyvanta $ENVIRONMENT deployment completed successfully!"
    
    if [ "$ENVIRONMENT" = "staging" ]; then
        log "🌍 Staging is live at: http://$(curl -s ifconfig.me):8081"
    else
        log "🌍 Production is live at: http://$(curl -s ifconfig.me):8080"
    fi
}

# Check if this is a cleanup command
if [ "$1" = "cleanup-backups" ]; then
    cleanup_backups
    exit 0
fi

# Run main function
main "$@"