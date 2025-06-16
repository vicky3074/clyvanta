#!/bin/bash
# 🔒 Simple SSL Certificate Setup for clyvanta.com
# Simplified version with better error handling

set -e

echo "🔒 Starting Simple SSL Setup for clyvanta.com"
echo "📅 $(date)"

# Check if we're root or have sudo
if [ "$EUID" -ne 0 ] && ! sudo -n true 2>/dev/null; then
    echo "❌ This script needs sudo access"
    exit 1
fi

# Update package list
echo "📦 Updating package list..."
sudo apt update -qq

# Install required packages
echo "🔧 Installing required packages..."
sudo apt install -y snapd curl wget

# Install certbot via snap (more reliable)
echo "🔒 Installing Certbot via snap..."
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot

# Create certbot command symlink
sudo ln -sf /snap/bin/certbot /usr/bin/certbot

# Check if domains resolve to this server
SERVER_IP=$(curl -s ifconfig.me || curl -s ipinfo.io/ip)
DOMAIN_IP=$(dig +short clyvanta.com @8.8.8.8)
WWW_IP=$(dig +short www.clyvanta.com @8.8.8.8)

echo "🌍 Server IP: $SERVER_IP"
echo "🌍 clyvanta.com resolves to: $DOMAIN_IP"
echo "🌍 www.clyvanta.com resolves to: $WWW_IP"

if [ "$SERVER_IP" != "$DOMAIN_IP" ]; then
    echo "⚠️  Warning: clyvanta.com doesn't resolve to this server"
    echo "   This might cause certificate generation to fail"
fi

# Stop nginx temporarily for standalone mode
echo "🛑 Temporarily stopping nginx..."
sudo docker stop clyvanta-nginx 2>/dev/null || true
sudo systemctl stop nginx 2>/dev/null || true

# Generate certificate using standalone mode (more reliable)
echo "🔒 Generating SSL certificate..."
sudo certbot certonly \
    --standalone \
    --non-interactive \
    --agree-tos \
    --email admin@clyvanta.com \
    --domains clyvanta.com,www.clyvanta.com \
    --pre-hook "sudo docker stop clyvanta-nginx 2>/dev/null || true" \
    --post-hook "sudo docker start clyvanta-nginx 2>/dev/null || true"

if [ $? -eq 0 ]; then
    echo "✅ SSL certificate generated successfully!"
    
    # Display certificate info
    sudo certbot certificates
    
    # Set up auto-renewal
    echo "🔄 Setting up automatic renewal..."
    sudo systemctl enable snap.certbot.renew.timer
    
    # Test renewal
    echo "🧪 Testing certificate renewal..."
    sudo certbot renew --dry-run
    
    echo "✅ SSL setup completed successfully!"
    echo "🌍 Your website should now support HTTPS"
    
else
    echo "❌ SSL certificate generation failed"
    echo "🔍 Common causes:"
    echo "   - Domain doesn't point to this server"
    echo "   - Port 80 is blocked by firewall"
    echo "   - Another service is using port 80"
    exit 1
fi

# Restart docker containers
echo "🚀 Restarting Docker containers..."
cd /var/www/clyvanta
sudo docker-compose down 2>/dev/null || true
sudo docker-compose up -d

echo "🎉 SSL setup complete!"
echo "🔗 Test your site: https://clyvanta.com"