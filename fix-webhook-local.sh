#!/bin/bash

echo "🔧 Clyvanta Webhook Fix - Local Execution"
echo "========================================="

echo "📋 This script will SSH into your server and fix the webhook service."
echo "🔑 Make sure you have SSH access to root@159.203.61.237"
echo ""

read -p "🤔 Do you want to proceed with the webhook fix? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Aborted by user"
    exit 1
fi

echo ""
echo "🚀 Connecting to server and fixing webhook service..."
echo "========================================================"

ssh root@159.203.61.237 << 'EOF'
echo "🔧 Starting webhook service fix..."

# Navigate to project directory
cd /var/www/clyvanta || cd /root/clyvanta || {
    echo "❌ Could not find project directory"
    echo "🔍 Searching for deploy-webhook.js..."
    find / -name "deploy-webhook.js" -type f 2>/dev/null | head -5
    exit 1
}

echo "📂 Working in: $(pwd)"

# Pull latest code first
echo "📥 Pulling latest code..."
git fetch origin
git reset --hard origin/main
echo "✅ Code updated to latest version"

# Stop any existing webhook processes
echo "🛑 Stopping existing webhook processes..."
pkill -f "deploy-webhook" || echo "No webhook processes to kill"
docker stop clyvanta-webhook 2>/dev/null || echo "No webhook container to stop"
docker rm clyvanta-webhook 2>/dev/null || echo "No webhook container to remove"

# Start webhook service
echo "🚀 Starting webhook service..."
if [ -f "docker-compose.webhook.yml" ]; then
    echo "🐳 Starting webhook via Docker Compose..."
    docker-compose -f docker-compose.webhook.yml up -d --build
else
    echo "📦 Starting webhook manually..."
    nohup node deploy-webhook.js > /var/log/webhook.log 2>&1 &
fi

# Wait for service to start
echo "⏳ Waiting for webhook service to start..."
sleep 10

# Test webhook service
echo "🧪 Testing webhook service..."
for i in {1..5}; do
    if curl -f http://localhost:4040/health 2>/dev/null; then
        echo "✅ Webhook service is working!"
        echo "📊 Service response:"
        curl -s http://localhost:4040/health | jq . 2>/dev/null || curl -s http://localhost:4040/health
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
    echo "🔍 Checking process status..."
    ps aux | grep -v grep | grep "deploy-webhook" || echo "No webhook process found"
    docker ps | grep webhook || echo "No webhook Docker container found"
fi

# Deploy applications while we're here
echo ""
echo "🚀 Deploying applications to get them updated..."
echo "================================================"

# Deploy staging
echo "🧪 Deploying to staging (port 8081)..."
if [ -f "docker-compose.staging.yml" ]; then
    docker-compose -f docker-compose.staging.yml down || true
    docker-compose -f docker-compose.staging.yml up -d --build
else
    echo "⚠️ No staging configuration found"
fi

# Deploy production  
echo "🏭 Deploying to production (port 8080)..."
if [ -f "docker-compose.yml" ]; then
    docker-compose down || true
    docker-compose up -d --build
else
    echo "⚠️ No production configuration found"
fi

# Wait and test deployments
echo "⏳ Waiting for deployments to complete..."
sleep 30

echo ""
echo "🧪 Final status check..."
echo "======================="

# Test staging
if curl -f http://localhost:8081 2>/dev/null; then
    echo "✅ Staging (8081) is live!"
else
    echo "❌ Staging (8081) deployment failed"
fi

# Test production
if curl -f http://localhost:8080 2>/dev/null; then
    echo "✅ Production (8080) is live!"
else
    echo "❌ Production (8080) deployment failed"
fi

# Test webhook again
if curl -f http://localhost:4040/health 2>/dev/null; then
    echo "✅ Webhook service (4040) is working!"
else
    echo "❌ Webhook service (4040) needs attention"
fi

echo ""
echo "🎉 Webhook fix and deployment completed!"
echo "========================================"
echo "✅ Webhook service should now be working"
echo "✅ GitHub Actions deployments should work again"
echo "✅ Both staging and production have been updated"
echo ""
echo "🔗 Test URLs:"
echo "   - Production: http://159.203.61.237:8080"
echo "   - Staging: http://159.203.61.237:8081"
echo "   - Webhook: http://159.203.61.237:4040/health"

EOF

echo ""
echo "🎉 Local webhook fix completed!"
echo "==============================="
echo ""
echo "🔍 Testing from local machine..."

# Test external access from local machine
if curl -f http://159.203.61.237:4040/health 2>/dev/null; then
    echo "✅ Webhook service is accessible from external!"
    echo "📊 Response:"
    curl -s http://159.203.61.237:4040/health | jq . 2>/dev/null || curl -s http://159.203.61.237:4040/health
else
    echo "⚠️ Webhook service may still need attention"
fi

echo ""
echo "🚀 You can now test GitHub Actions deployment:"
echo "   git commit --allow-empty -m 'Test deployment' && git push"