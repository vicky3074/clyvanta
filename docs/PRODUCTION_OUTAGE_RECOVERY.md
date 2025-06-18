# Production Outage Recovery Guide

## Incident Report: June 16, 2025

### **Timeline**
- **3:00 PM**: Website working normally with simple deployment pipeline
- **4:30 PM**: Started deploying complex 10-stage pipeline changes
- **6:30 PM**: Deployment hung for 2+ hours, manually cancelled
- **6:30 PM - 1:30 AM**: Website down with 502 Bad Gateway
- **1:30 AM**: Recovered via DigitalOcean Console access

### **Root Cause Analysis**

#### **Primary Issue: Container Shutdown**
- Failed/cancelled deployments stopped Docker containers
- Containers never restarted automatically
- nginx continued running but couldn't proxy to stopped backend

#### **Secondary Issue: SSH Connectivity**
- SSH connections to server timing out/failing
- Prevented all automated deployment attempts
- Required manual console access for recovery

#### **Contributing Factors**
1. **Complex Pipeline**: Overcomplicated deployment process
2. **No Health Monitoring**: No automatic container restart
3. **No Rollback**: Failed deployments left system in broken state

### **Recovery Procedure (TESTED & VERIFIED)**

#### **Step 1: Access Server Console**
```bash
# When SSH fails, use DigitalOcean web console:
# 1. Login to https://cloud.digitalocean.com
# 2. Find droplet: production-server (138.197.169.120)
# 3. Click "Console" button
```

#### **Step 2: Check System Status**
```bash
# Switch to ubuntu user
su - ubuntu

# Navigate to project
cd clyvanta-new

# Check container status
docker ps -a
# Expected: Should show stopped containers or no containers

# Check if code exists
ls -la
# Expected: Should see project files including docker-compose.yml
```

#### **Step 3: Restart Containers**
```bash
# Method 1: Quick restart (preferred)
docker compose up -d

# Method 2: If images are corrupted
docker compose up -d --build
# Note: This takes 3-5 minutes vs 30 seconds

# Method 3: If compose fails
docker images  # Check available images
docker run -d --name temp-web [image-id]  # Manual container start
```

#### **Step 4: Verify Recovery**
```bash
# Check container status
docker ps
# Expected: 3 containers running (nginx, website, postgres)

# Test local connectivity
curl http://localhost:8080
# Expected: HTML response with Clyvanta content

# Test external connectivity (from local machine)
curl http://138.197.169.120:8080
# Expected: Website loads normally
```

### **Prevention Measures**

#### **Immediate Actions**
1. **Document SSH Key Issues**: Investigate why SSH stopped working
2. **Add Health Monitoring**: Implement container restart policies
3. **Simplify Deployment**: Use working simple pipeline, not complex 10-stage

#### **Docker Compose Improvements**
```yaml
# Add restart policies to docker-compose.yml
services:
  clyvanta-website:
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

#### **Monitoring Setup**
```bash
# Add basic monitoring script
#!/bin/bash
# monitor-containers.sh
if ! docker ps | grep -q clyvanta-website; then
  cd /home/ubuntu/clyvanta-new
  docker compose up -d
  echo "$(date): Containers restarted" >> /var/log/clyvanta-monitor.log
fi
```

### **Emergency Contacts & Resources**

#### **DigitalOcean Access**
- **Dashboard**: https://cloud.digitalocean.com
- **Droplet**: production-server (138.197.169.120)
- **Console**: Available 24/7 when SSH fails

#### **Project Locations**
- **Code**: `/home/ubuntu/clyvanta-new`
- **Compose**: `/home/ubuntu/clyvanta-new/docker-compose.yml`
- **Logs**: `docker compose logs -f`

#### **Quick Commands**
```bash
# Essential recovery commands
su - ubuntu && cd clyvanta-new
docker ps -a
docker compose up -d
curl http://localhost:8080
```

### **Lessons Learned**

1. **Keep It Simple**: Working deployment > complex deployment
2. **Console Access**: DigitalOcean console is crucial backup access method
3. **Container Policies**: Restart policies prevent extended outages
4. **Document Everything**: This guide could have saved hours
5. **Test Recovery**: Practice recovery procedures before you need them

### **Future Improvements**

1. **SSH Diagnosis**: Fix underlying SSH connectivity issues
2. **Health Checks**: Implement comprehensive monitoring
3. **Automated Recovery**: Self-healing container policies
4. **Backup Access**: Multiple ways to access server
5. **Rollback Strategy**: Automatic rollback on deployment failure

---

**Last Updated**: June 17, 2025  
**Tested By**: Claude Code Assistant  
**Verified**: Production outage successfully resolved using this procedure