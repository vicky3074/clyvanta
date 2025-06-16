#!/bin/bash

echo "🔧 Clyvanta Webhook Service Restart Script"
echo "==========================================="

# Set working directory
cd /var/www/clyvanta || cd /root/clyvanta || {
    echo "❌ Could not find Clyvanta project directory"
    echo "Checking common locations..."
    find / -name "deploy-webhook.js" -type f 2>/dev/null | head -5
    exit 1
}

echo "📂 Working in: $(pwd)"

# Stop any existing webhook processes
echo "🛑 Stopping existing webhook processes..."
pkill -f "deploy-webhook" || echo "No webhook processes found"
docker stop clyvanta-webhook 2>/dev/null || echo "No webhook container found"
docker rm clyvanta-webhook 2>/dev/null || echo "No webhook container to remove"

# Check if Docker Compose webhook file exists
if [ -f "docker-compose.webhook.yml" ]; then
    echo "🐳 Found webhook Docker Compose configuration"
    
    # Stop webhook service via compose
    echo "Stopping webhook service via Docker Compose..."
    docker-compose -f docker-compose.webhook.yml down
    
    # Start webhook service
    echo "🚀 Starting webhook service via Docker Compose..."
    docker-compose -f docker-compose.webhook.yml up -d --build
    
    # Wait for service to start
    echo "⏳ Waiting for webhook service to start..."
    sleep 10
    
else
    echo "📦 Docker Compose webhook file not found, starting manually..."
    
    # Install dependencies if needed
    if [ -f "webhook-package.json" ]; then
        echo "📦 Installing webhook dependencies..."
        cp webhook-package.json package.json
        npm install --production
    fi
    
    # Start webhook service manually
    echo "🚀 Starting webhook service manually..."
    nohup node deploy-webhook.js > /var/log/clyvanta-webhook.log 2>&1 &
    
    # Wait for service to start
    sleep 5
fi

# Test webhook service
echo "🧪 Testing webhook service..."
for i in {1..5}; do
    if curl -f http://localhost:4040/health 2>/dev/null; then
        echo "✅ Webhook service is running!"
        echo "📊 Service status:"
        curl -s http://localhost:4040/health | jq . || curl -s http://localhost:4040/health
        break
    else
        echo "Attempt $i/5: Webhook not ready yet..."
        sleep 3
    fi
done

# Test external access
echo "🌐 Testing external access..."
if curl -f http://159.203.61.237:4040/health 2>/dev/null; then
    echo "✅ Webhook service is accessible externally!"
else
    echo "⚠️ Webhook service may not be accessible externally"
    echo "Checking firewall and port forwarding..."
    
    # Check if port 4040 is listening
    netstat -tlnp | grep :4040 || ss -tlnp | grep :4040
fi

# Show final status
echo ""
echo "📈 Final Status Check:"
echo "====================="
docker ps | grep webhook || echo "No webhook Docker containers"
ps aux | grep -v grep | grep "deploy-webhook" || echo "No webhook Node.js processes"
curl -s http://localhost:4040/health 2>/dev/null || echo "Webhook health check failed"

echo ""
echo "🎉 Webhook restart script completed!"
echo "If webhook is running but not accessible externally, check:"
echo "1. Firewall rules for port 4040"
echo "2. Docker port mapping"
echo "3. Network configuration"