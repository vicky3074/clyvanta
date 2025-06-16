#!/bin/bash

# 🚀 Clyvanta Webhook Service Startup Script
# Ensures webhook service is running for dual deployment strategy

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
WEBHOOK_PORT=4040
APP_DIR="/home/ubuntu"
SERVICE_NAME="clyvanta-webhook"

log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

# Check if webhook service is running
check_webhook_service() {
    log "Checking webhook service status..."
    
    if curl -f -s "http://localhost:$WEBHOOK_PORT/health" > /dev/null 2>&1; then
        log "✅ Webhook service is running and healthy"
        return 0
    else
        warn "⚠️ Webhook service is not responding"
        return 1
    fi
}

# Stop existing webhook service
stop_webhook_service() {
    log "Stopping existing webhook service..."
    
    # Stop webhook container if running
    docker stop $SERVICE_NAME 2>/dev/null || true
    docker rm $SERVICE_NAME 2>/dev/null || true
    
    # Kill any node processes running on webhook port
    pkill -f "deploy-webhook.js" || true
    
    # Kill any processes using the webhook port
    lsof -ti:$WEBHOOK_PORT | xargs kill -9 2>/dev/null || true
    
    sleep 5
    log "✅ Webhook service stopped"
}

# Start webhook service
start_webhook_service() {
    log "Starting webhook service..."
    
    cd "$APP_DIR"
    
    # Check if we have the webhook files
    if [ ! -f "deploy-webhook.js" ]; then
        warn "⚠️ deploy-webhook.js not found, attempting to get it from clyvanta-new"
        if [ -f "clyvanta-new/deploy-webhook.js" ]; then
            cp clyvanta-new/deploy-webhook.js .
            cp clyvanta-new/webhook-package.json ./package.json
            log "✅ Webhook files copied from clyvanta-new"
        else
            error "❌ Webhook files not found"
            return 1
        fi
    fi
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log "Installing webhook service dependencies..."
        npm install express
    fi
    
    # Start webhook service
    log "Starting webhook service on port $WEBHOOK_PORT..."
    nohup node deploy-webhook.js > webhook.log 2>&1 &
    
    # Wait for service to start
    sleep 10
    
    # Verify service is running
    if check_webhook_service; then
        log "🎉 Webhook service started successfully!"
        info "📍 Health endpoint: http://localhost:$WEBHOOK_PORT/health"
        info "📍 Deploy endpoint: http://localhost:$WEBHOOK_PORT/deploy?token=clyvanta-deploy-2025"
        return 0
    else
        error "❌ Failed to start webhook service"
        return 1
    fi
}

# Install webhook service as systemd service (optional)
install_systemd_service() {
    log "Installing webhook service as systemd service..."
    
    cat > /tmp/clyvanta-webhook.service << EOF
[Unit]
Description=Clyvanta Webhook Deployment Service
After=network.target
Wants=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=$APP_DIR
ExecStart=/usr/bin/node deploy-webhook.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=$WEBHOOK_PORT

[Install]
WantedBy=multi-user.target
EOF

    sudo mv /tmp/clyvanta-webhook.service /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable clyvanta-webhook
    sudo systemctl start clyvanta-webhook
    
    log "✅ Webhook service installed as systemd service"
    log "📊 Use 'sudo systemctl status clyvanta-webhook' to check status"
}

# Main function
main() {
    log "🚀 Starting Clyvanta Webhook Service Setup..."
    
    # Stop any existing service
    stop_webhook_service
    
    # Start webhook service
    if start_webhook_service; then
        log "✅ Webhook service setup completed successfully!"
        
        # Show service status
        info "📊 Service Status:"
        info "   Port: $WEBHOOK_PORT"
        info "   PID: $(pgrep -f deploy-webhook.js || echo 'Not found')"
        info "   Log: $APP_DIR/webhook.log"
        
        # Optional: Install as systemd service
        read -p "Install as systemd service for auto-restart? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            install_systemd_service
        fi
        
    else
        error "❌ Failed to start webhook service"
        exit 1
    fi
}

# Check if running as main script
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi