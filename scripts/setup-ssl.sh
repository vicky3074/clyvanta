#!/bin/bash
# 🔒 SSL Certificate Setup Script for clyvanta.com
# Sets up Let's Encrypt SSL certificates with automatic renewal

set -e  # Exit on any error

echo "🔒 ===== CLYVANTA SSL CERTIFICATE SETUP ====="
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
DOMAIN="clyvanta.com"
WWW_DOMAIN="www.clyvanta.com"
EMAIL="admin@clyvanta.com"  # Update this to your actual email
WEBROOT="/var/www/certbot"

log_info "Step 1: Installing Certbot..."

# Update system packages
sudo apt update

# Install Certbot and Nginx plugin
if ! command -v certbot &> /dev/null; then
    log_info "Installing Certbot..."
    sudo apt install -y certbot python3-certbot-nginx
    log_success "Certbot installed successfully"
else
    log_success "Certbot is already installed"
fi

log_info "Step 2: Creating webroot directory..."

# Create webroot directory for Let's Encrypt challenges
sudo mkdir -p "$WEBROOT"
sudo chown -R www-data:www-data "$WEBROOT"
log_success "Webroot directory created: $WEBROOT"

log_info "Step 3: Stopping existing nginx (if running)..."

# Stop any existing nginx to avoid port conflicts
sudo systemctl stop nginx 2>/dev/null || true
sudo pkill nginx 2>/dev/null || true
log_success "Nginx stopped"

log_info "Step 4: Starting temporary nginx for certificate validation..."

# Start our Docker containers first (without SSL)
cd /var/www/clyvanta
docker-compose down || true
docker-compose up -d

# Wait for services to start
sleep 10

log_info "Step 5: Generating SSL certificates..."

# Generate SSL certificate for both domains
if sudo certbot certonly \
    --webroot \
    --webroot-path="$WEBROOT" \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    --domains "$DOMAIN,$WWW_DOMAIN" \
    --non-interactive; then
    
    log_success "SSL certificates generated successfully!"
    
    # Display certificate information
    echo ""
    log_info "Certificate details:"
    sudo certbot certificates
    
else
    log_error "SSL certificate generation failed!"
    log_info "This might be because:"
    log_info "1. DNS records are not pointing to this server yet"
    log_info "2. Firewall is blocking port 80"
    log_info "3. Domain validation failed"
    echo ""
    log_info "You can run this script again after fixing the issues."
    exit 1
fi

log_info "Step 6: Setting up automatic renewal..."

# Set up automatic renewal cron job
CRON_JOB="0 12 * * * /usr/bin/certbot renew --quiet && docker-compose -f /var/www/clyvanta/docker-compose.yml restart clyvanta-nginx"

# Check if cron job already exists
if ! sudo crontab -l 2>/dev/null | grep -q "certbot renew"; then
    (sudo crontab -l 2>/dev/null; echo "$CRON_JOB") | sudo crontab -
    log_success "Automatic renewal cron job added"
else
    log_success "Automatic renewal cron job already exists"
fi

log_info "Step 7: Restarting services with SSL..."

# Restart Docker containers to pick up SSL certificates
docker-compose down
docker-compose up -d

log_success "Services restarted with SSL support"

log_info "Step 8: Testing SSL configuration..."

# Wait for nginx to start
sleep 15

# Test SSL certificate
if curl -sSf https://"$DOMAIN" >/dev/null 2>&1; then
    log_success "SSL certificate is working correctly!"
else
    log_warning "SSL test failed - certificate might still be propagating"
fi

# Check certificate expiry
log_info "Certificate expiry check:"
sudo certbot certificates | grep -A2 "$DOMAIN" || true

echo ""
log_success "===== SSL SETUP COMPLETED SUCCESSFULLY ====="
echo ""
log_info "🌍 Your website should now be available at:"
log_info "   https://$DOMAIN"
log_info "   https://$WWW_DOMAIN"
echo ""
log_info "🔄 Certificate will auto-renew every 90 days"
log_info "📋 Check renewal with: sudo certbot renew --dry-run"
log_info "📊 View certificates with: sudo certbot certificates"
echo ""
log_info "📅 Completed at: $(date)"
echo "🎉 Clyvanta is now secured with HTTPS! 🔒"