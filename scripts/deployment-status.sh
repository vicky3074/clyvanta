#!/bin/bash

# 📊 Clyvanta Deployment Status Dashboard
# Shows real-time deployment status and health metrics

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
DROPLET_IP="${DROPLET_IP:-159.203.61.237}"
DOMAIN="${DOMAIN:-clyvanta.com}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/clyvanta_deploy_new}"

# Functions
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

# Header
clear
echo -e "${CYAN}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                 🚀 CLYVANTA DEPLOYMENT STATUS                ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# 1. Server Connectivity
echo -e "${PURPLE}━━━ 🌐 Server Connectivity ━━━${NC}"
if ping -c 1 "$DROPLET_IP" &> /dev/null; then
    log "✅ Server is reachable at $DROPLET_IP"
else
    error "❌ Server is not reachable at $DROPLET_IP"
fi

# 2. SSH Connectivity
echo -e "\n${PURPLE}━━━ 🔐 SSH Connectivity ━━━${NC}"
if ssh -i "$SSH_KEY" -o ConnectTimeout=10 -o StrictHostKeyChecking=no ubuntu@"$DROPLET_IP" "echo 'SSH OK'" &> /dev/null; then
    log "✅ SSH connection successful"
    
    # Get server info
    SERVER_INFO=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no ubuntu@"$DROPLET_IP" "
        echo 'Hostname:' \$(hostname)
        echo 'Uptime:' \$(uptime -p)
        echo 'Memory:' \$(free -h | grep Mem | awk '{print \$3\"/\"\$2}')
        echo 'Disk:' \$(df -h / | tail -1 | awk '{print \$3\"/\"\$2\" (\"\$5\" used)\"}')
        echo 'Docker:' \$(docker --version | cut -d' ' -f3 | tr -d ',')
    " 2>/dev/null)
    
    echo "$SERVER_INFO" | while read line; do
        info "  $line"
    done
else
    error "❌ SSH connection failed"
fi

# 3. Docker Container Status
echo -e "\n${PURPLE}━━━ 🐳 Docker Container Status ━━━${NC}"
CONTAINER_STATUS=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no ubuntu@"$DROPLET_IP" "
    docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}' 2>/dev/null || echo 'Docker not accessible'
" 2>/dev/null)

if [[ "$CONTAINER_STATUS" == *"Docker not accessible"* ]]; then
    error "❌ Docker containers not accessible"
else
    echo "$CONTAINER_STATUS"
fi

# 4. Application Health Checks
echo -e "\n${PURPLE}━━━ 🏥 Application Health Checks ━━━${NC}"

# HTTP Health Check
if curl -f -s --max-time 10 "http://$DROPLET_IP:8080" > /dev/null; then
    log "✅ HTTP (Port 8080) is responding"
    
    # Content validation
    CONTENT=$(curl -s --max-time 10 "http://$DROPLET_IP:8080")
    if [[ "$CONTENT" == *"Great Ideas Deserve Great Technology"* ]]; then
        log "✅ Application content is correct"
    else
        warn "⚠️ Application content may be outdated"
    fi
else
    error "❌ HTTP health check failed"
fi

# HTTPS Health Check
if curl -f -s --max-time 10 "https://$DOMAIN" > /dev/null; then
    log "✅ HTTPS is working correctly"
else
    warn "⚠️ HTTPS check failed (may be propagating)"
fi

# 5. SSL Certificate Status
echo -e "\n${PURPLE}━━━ 🔒 SSL Certificate Status ━━━${NC}"
SSL_INFO=$(echo | openssl s_client -connect "$DOMAIN:443" -servername "$DOMAIN" 2>/dev/null | openssl x509 -noout -dates 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "$SSL_INFO" | while read line; do
        info "  $line"
    done
else
    warn "⚠️ Could not retrieve SSL certificate information"
fi

# 6. Recent Deployment History
echo -e "\n${PURPLE}━━━ 📜 Recent Deployment History ━━━${NC}"
DEPLOYMENT_LOG=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no ubuntu@"$DROPLET_IP" "
    if [ -d '/home/ubuntu/backups' ]; then
        echo 'Recent Backups:'
        ls -la /home/ubuntu/backups | tail -5
    else
        echo 'No deployment history found'
    fi
" 2>/dev/null)

echo "$DEPLOYMENT_LOG"

# 7. System Resource Usage
echo -e "\n${PURPLE}━━━ 📊 System Resource Usage ━━━${NC}"
RESOURCE_USAGE=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no ubuntu@"$DROPLET_IP" "
    echo 'CPU Usage:' \$(top -bn1 | grep 'Cpu(s)' | awk '{print \$2}' | tr -d '%us,')%
    echo 'Memory Usage:' \$(free | grep Mem | awk '{printf(\"%.2f%%\", \$3/\$2 * 100.0)}')
    echo 'Disk Usage:' \$(df / | tail -1 | awk '{print \$5}')
    echo 'Load Average:' \$(uptime | awk -F'load average:' '{print \$2}')
" 2>/dev/null)

echo "$RESOURCE_USAGE" | while read line; do
    info "  $line"
done

# 8. DNS Resolution
echo -e "\n${PURPLE}━━━ 🌍 DNS Resolution ━━━${NC}"
DNS_RESULT=$(dig +short "$DOMAIN" 2>/dev/null)
if [ -n "$DNS_RESULT" ]; then
    log "✅ DNS resolution working"
    echo "$DNS_RESULT" | while read ip; do
        info "  Resolved to: $ip"
    done
else
    error "❌ DNS resolution failed"
fi

# Summary
echo -e "\n${CYAN}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                        📊 SUMMARY                            ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Overall status
if curl -f -s --max-time 10 "https://$DOMAIN" > /dev/null; then
    log "🎉 CLYVANTA IS LIVE AND HEALTHY!"
    info "🔗 Visit: https://$DOMAIN"
else
    warn "⚠️ Some issues detected - review above for details"
fi

echo -e "\n${BLUE}Last updated: $(date)${NC}"
echo -e "${BLUE}Dashboard by: Clyvanta DevOps Team${NC}\n"