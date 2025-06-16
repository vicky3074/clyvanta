# 🔧 Webhook Service Fix Instructions

## 🚨 **Current Issue**
The webhook service on port 4040 is down, causing all GitHub Actions deployments to fail with "exit code 7" (connection refused).

## 📊 **Status Check**
- ✅ **Production site** (8080): Running (old version)
- ✅ **Staging site** (8081): Running (old version)  
- ❌ **Webhook service** (4040): DOWN - **This is the problem!**

## 🛠️ **Quick Fix Options**

### **Option 1: Run the Auto-Fix Script**
```bash
# SSH into your server
ssh root@159.203.61.237

# Download and run the fix script
cd /var/www/clyvanta  # or /root/clyvanta
wget https://raw.githubusercontent.com/vicky3074/clyvanta/main/restart-webhook-service.sh
chmod +x restart-webhook-service.sh
./restart-webhook-service.sh
```

### **Option 2: Manual Docker Restart**
```bash
# SSH into your server
ssh root@159.203.61.237

# Navigate to project directory
cd /var/www/clyvanta  # or wherever clyvanta is located

# Restart webhook service
docker-compose -f docker-compose.webhook.yml down
docker-compose -f docker-compose.webhook.yml up -d --build

# Test if it's working
curl http://localhost:4040/health
```

### **Option 3: Emergency Manual Start**
```bash
# SSH into your server
ssh root@159.203.61.237

# Find the project directory
cd /var/www/clyvanta  # or /root/clyvanta

# Start webhook manually
pkill -f "deploy-webhook" || true
nohup node deploy-webhook.js > /var/log/webhook.log 2>&1 &

# Test if it's working
sleep 5
curl http://localhost:4040/health
```

## 🧪 **Test After Fix**
Once you run any of the above, test that it's working:

```bash
# Test webhook health
curl http://159.203.61.237:4040/health

# If working, test a deployment
curl "http://159.203.61.237:4040/deploy-staging?token=clyvanta-deploy-2025"
```

## 🚀 **Emergency Deployment (If Webhook Still Broken)**
If webhook service can't be fixed, use the manual deployment:

```bash
# SSH into server
ssh root@159.203.61.237

# Navigate to project
cd /var/www/clyvanta

# Pull latest code
git pull origin main

# Deploy staging
docker-compose -f docker-compose.staging.yml down
docker-compose -f docker-compose.staging.yml up -d --build

# Deploy production  
docker-compose down
docker-compose up -d --build
```

## 📋 **What This Will Fix**
- ✅ Restore webhook service on port 4040
- ✅ Enable GitHub Actions deployments to work again
- ✅ Allow automatic deployments on code push
- ✅ Update staging (8081) and production (8080) with latest code

## 🎯 **Expected Result**
After fixing the webhook service:
- **Webhook health**: http://159.203.61.237:4040/health should return `{"status":"OK",...}`
- **GitHub Actions**: Should complete successfully instead of failing
- **Deployments**: Should automatically update staging and production

Let me know which option you'd like to try or if you need help with any of these steps!