# 🚨 DIRECT FIX - Copy and Paste These Commands

## The Problem
The webhook service on port 4040 is down, causing all deployments to fail.

## The Solution
Run these exact commands in your terminal:

```bash
# 1. SSH into your server
ssh root@159.203.61.237

# 2. Find and navigate to the project directory
cd /var/www/clyvanta || cd /root/clyvanta || cd /home/clyvanta

# 3. Pull latest code
git pull origin main

# 4. Kill any existing webhook processes
pkill -f "deploy-webhook" || true
docker stop clyvanta-webhook 2>/dev/null || true

# 5. Start webhook service
nohup node deploy-webhook.js > /var/log/webhook.log 2>&1 &

# 6. Wait 5 seconds
sleep 5

# 7. Test webhook
curl http://localhost:4040/health

# 8. If webhook works, deploy both environments
docker-compose -f docker-compose.staging.yml down || true
docker-compose -f docker-compose.staging.yml up -d --build

docker-compose down || true  
docker-compose up -d --build

# 9. Test everything
curl http://localhost:8081  # Staging
curl http://localhost:8080  # Production
curl http://localhost:4040/health  # Webhook

# 10. Exit SSH
exit
```

## Expected Results
- Webhook service responds: `{"status":"OK",...}`
- Staging site loads on port 8081
- Production site loads on port 8080
- GitHub Actions deployments work again

## If webhook still doesn't start
Try these alternatives:

```bash
# Alternative 1: Check if deploy-webhook.js exists
find /var/www /root /home -name "deploy-webhook.js" -type f 2>/dev/null

# Alternative 2: Start webhook with Docker if compose file exists
docker-compose -f docker-compose.webhook.yml up -d --build

# Alternative 3: Check what's running on port 4040
netstat -tlnp | grep :4040
ss -tlnp | grep :4040
```

Once webhook is working, test by pushing a change:
```bash
git commit --allow-empty -m "Test deployment after webhook fix"
git push origin main
```