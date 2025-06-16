#!/bin/bash

echo "🔧 Fixing Clyvanta Webhook Service..."

# Check current status
echo "📊 Checking current Docker containers..."
docker ps -a

echo ""
echo "🔍 Looking for webhook service..."
docker ps -a | grep -E "(webhook|deploy)"

echo ""
echo "🚀 Attempting to restart webhook service..."

# Try different restart methods
if docker ps -a | grep -q "webhook"; then
    echo "Found existing webhook container, restarting..."
    docker restart $(docker ps -aq --filter "name=webhook")
elif [ -f "docker-compose.webhook.yml" ]; then
    echo "Starting webhook service with docker-compose..."
    docker-compose -f docker-compose.webhook.yml up -d
elif [ -f "deploy-webhook.js" ]; then
    echo "Starting webhook service manually..."
    # Kill any existing processes
    pkill -f "deploy-webhook" || true
    # Start new process
    node deploy-webhook.js &
    echo "Webhook started in background"
else
    echo "❌ Could not find webhook configuration"
    exit 1
fi

echo ""
echo "⏳ Waiting 5 seconds for service to start..."
sleep 5

echo ""
echo "🧪 Testing webhook service..."
if curl -f http://localhost:4040/health 2>/dev/null; then
    echo "✅ Webhook service is now running!"
    echo "🌐 Testing external access..."
    curl -s http://159.203.61.237:4040/health
else
    echo "❌ Webhook service failed to start"
    echo "📋 Checking logs..."
    docker logs $(docker ps -aq --filter "name=webhook") 2>/dev/null || echo "No Docker logs available"
fi

echo ""
echo "📈 Final status check..."
docker ps | grep -E "(webhook|4040)" || echo "No webhook containers running"

echo ""
echo "🎉 Fix script complete!"