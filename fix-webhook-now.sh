#!/bin/bash

echo "🔧 Clyvanta Webhook Fix - Immediate Solution"
echo "============================================="

echo ""
echo "📋 Summary: The webhook service on port 4040 is down, preventing all deployments."
echo "🎯 Solution: We need to restart the webhook service on your DigitalOcean server."
echo ""

echo "🚀 QUICK FIX - Run these commands on your server:"
echo ""
echo "1️⃣ SSH into your server:"
echo "   ssh root@159.203.61.237"
echo ""

echo "2️⃣ Navigate to the project directory:"
echo "   cd /var/www/clyvanta || cd /root/clyvanta"
echo ""

echo "3️⃣ Restart the webhook service:"
echo "   # Stop any existing webhook processes"
echo "   pkill -f 'deploy-webhook' || true"
echo "   docker stop clyvanta-webhook 2>/dev/null || true"
echo ""
echo "   # Start webhook service"
echo "   if [ -f 'docker-compose.webhook.yml' ]; then"
echo "     docker-compose -f docker-compose.webhook.yml up -d --build"
echo "   else"
echo "     nohup node deploy-webhook.js > /var/log/webhook.log 2>&1 &"
echo "   fi"
echo ""

echo "4️⃣ Test that it's working:"
echo "   curl http://localhost:4040/health"
echo ""

echo "✅ Once webhook is restored, all GitHub Actions deployments will work again!"
echo ""

echo "🔗 Alternative: Use our emergency deployment:"
echo "   Visit: https://github.com/vicky3074/clyvanta/actions/workflows/emergency-deploy.yml"
echo "   Click 'Run workflow' → Choose 'both' → Click 'Run workflow'"
echo ""

echo "📊 Expected result after fix:"
echo "   - Webhook health: http://159.203.61.237:4040/health returns {\"status\":\"OK\"}"
echo "   - GitHub Actions: Deployments succeed instead of failing with exit code 7"
echo "   - Sites updated: Both staging (8081) and production (8080) get latest code"