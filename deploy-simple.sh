#!/bin/bash

# Simple Clyvanta Deployment Script
# Usage: ./deploy-simple.sh

set -e

echo "🚀 Starting simple deployment to production..."
echo "📅 $(date)"
echo "📊 Current commit: $(git rev-parse HEAD)"

# Commit current changes first
echo ""
echo "📝 Committing current changes..."
git add .
git status --short

if [ -n "$(git status --porcelain)" ]; then
    echo "Enter commit message:"
    read -r commit_message
    git commit -m "$commit_message

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
else
    echo "✅ No changes to commit"
fi

# Push to GitHub
echo ""
echo "⬆️ Pushing to GitHub..."
git push origin main

# Deploy to production via SSH
echo ""
echo "🚀 Deploying to production server..."
ssh -i ~/.ssh/clyvanta_deploy_new ubuntu@138.197.169.120 << 'EOF'
    set -e
    cd clyvanta-new
    
    echo "📦 Creating backup of current deployment..."
    docker tag clyvanta-website:latest clyvanta-website:backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
    docker tag clyvanta-nginx:latest clyvanta-nginx:backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
    
    echo "⬇️ Pulling latest code..."
    git fetch origin
    git reset --hard origin/main
    
    echo "🔄 Building and deploying..."
    docker compose down
    docker compose up -d --build
    
    echo "⏳ Waiting for containers to start..."
    sleep 30
    
    echo "🏥 Running health checks..."
    for i in {1..10}; do
        if curl -f http://localhost:8080 > /dev/null 2>&1; then
            echo "✅ Health check passed!"
            break
        fi
        echo "⏳ Waiting for application to start (attempt $i/10)..."
        sleep 10
    done
    
    if ! curl -f http://localhost:8080 > /dev/null 2>&1; then
        echo "❌ Health check failed! Rolling back..."
        docker compose down
        git reset --hard HEAD~1
        docker compose up -d --build
        exit 1
    fi
    
    echo "🎉 Deployment successful!"
EOF

# Final verification
echo ""
echo "🔍 Final verification..."
sleep 10

if curl -f https://clyvanta.com > /dev/null 2>&1; then
    echo "✅ Production site is live and responding!"
    echo "🔗 https://clyvanta.com"
    echo ""
    echo "🎉 Deployment completed successfully!"
else
    echo "❌ Warning: Production site is not responding"
    echo "🚨 Please check manually: https://clyvanta.com"
fi