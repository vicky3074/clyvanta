#!/usr/bin/env node

const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Configuration
const DEPLOY_TOKEN = 'clyvanta-deploy-2025';
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'clyvanta-webhook-secret';
const APP_DIR = '/home/ubuntu';
const REPO_URL = 'https://github.com/vicky3074/clyvanta.git';
const PORT = process.env.PORT || 4040;

// Verify GitHub webhook signature
function verifySignature(payload, signature) {
  const computedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(`sha256=${computedSignature}`),
    Buffer.from(signature)
  );
}

// Simple deployment endpoint (for manual triggers)
app.get('/deploy', (req, res) => {
  const token = req.query.token;
  if (token !== DEPLOY_TOKEN) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  console.log('🚀 Manual deployment triggered via GET request');
  
  res.json({ 
    status: 'accepted', 
    message: 'Deployment started',
    timestamp: new Date().toISOString(),
    type: 'manual'
  });

  // Run deployment
  triggerDeployment('manual', 'main');
});

// GitHub webhook endpoint
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-hub-signature-256'];
  const payload = JSON.stringify(req.body);
  
  // Verify webhook signature
  if (!signature || !verifySignature(payload, signature)) {
    console.error('❌ Invalid webhook signature');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const event = req.headers['x-github-event'];
  const { ref, repository } = req.body;

  // Only deploy on push to main branch
  if (event === 'push' && ref === 'refs/heads/main') {
    console.log(`🚀 GitHub webhook deployment triggered for ${repository.name}`);
    
    res.json({ 
      status: 'accepted', 
      message: 'Deployment started',
      timestamp: new Date().toISOString(),
      type: 'webhook',
      repository: repository.name,
      branch: 'main'
    });

    // Run deployment
    triggerDeployment('webhook', 'main');
  } else {
    console.log(`ℹ️ Ignoring ${event} event for ref ${ref}`);
    res.json({ status: 'ignored', message: 'Not a main branch push' });
  }
});

// Blue-Green Deployment function
function triggerDeployment(type, branch = 'main') {
  const deploymentId = `webhook-${Date.now()}`;
  
  console.log(`🚀 Starting Blue-Green deployment [${deploymentId}]`);
  console.log(`📊 Type: ${type}, Branch: ${branch}`);
  
  // Create comprehensive deployment script
  const deploymentScript = `
    set -e
    echo "💾 Creating deployment backup..."
    
    # Create backup directory with timestamp
    BACKUP_DIR="${APP_DIR}/backups/$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    
    # Backup current deployment
    if [ -d "${APP_DIR}/clyvanta-new" ]; then
      cp -r ${APP_DIR}/clyvanta-new "$BACKUP_DIR/"
      echo "✅ Backup created at: $BACKUP_DIR"
    else
      echo "ℹ️ No existing deployment to backup"
    fi
    
    # Keep only last 5 backups
    ls -t ${APP_DIR}/backups/ | tail -n +6 | xargs -I {} rm -rf ${APP_DIR}/backups/{}
    
    echo "📦 Preparing Green environment..."
    
    # Remove old green deployment if exists
    rm -rf ${APP_DIR}/clyvanta-green || true
    
    # Pull fresh code to green environment
    git clone ${REPO_URL} ${APP_DIR}/clyvanta-green
    cd ${APP_DIR}/clyvanta-green
    
    echo "🔐 Generating SSL certificates..."
    mkdir -p ssl
    openssl genrsa -out ssl/key.pem 2048
    openssl req -new -x509 -key ssl/key.pem -out ssl/cert.pem -days 365 \\
      -subj "/C=CA/ST=Ontario/L=Toronto/O=Clyvanta/CN=clyvanta.com"
    
    echo "🏗️ Building green environment..."
    docker compose build
    
    echo "🛑 Stopping Blue environment (current production)..."
    docker stop clyvanta-nginx clyvanta-website clyvanta-postgres || true
    docker rm clyvanta-nginx clyvanta-website clyvanta-postgres || true
    
    echo "🟢 Starting Green environment (new production)..."
    docker compose up -d
    
    echo "⏳ Waiting for services to start..."
    sleep 30
    
    echo "🏥 Running health checks..."
    for i in {1..5}; do
      if curl -f -s --max-time 10 "http://localhost:8080" > /dev/null; then
        echo "✅ Health check passed on attempt $i"
        break
      else
        echo "⏳ Health check attempt $i/5 failed, retrying..."
        sleep 10
      fi
      
      if [ $i -eq 5 ]; then
        echo "❌ Health checks failed - initiating rollback"
        exit 1
      fi
    done
    
    echo "🧹 Post-deployment cleanup..."
    # Move current green to blue (for next deployment)
    rm -rf ${APP_DIR}/clyvanta-new || true
    mv ${APP_DIR}/clyvanta-green ${APP_DIR}/clyvanta-new
    
    echo "🐳 Cleaning up Docker resources..."
    docker system prune -f || true
    
    echo "✅ Blue-Green deployment completed successfully!"
  `;

  exec(deploymentScript, { 
    cwd: APP_DIR,
    timeout: 600000, // 10 minutes timeout
    maxBuffer: 1024 * 1024 * 10 // 10MB buffer
  }, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Deployment [${deploymentId}] failed:`, error.message);
      console.error('stderr:', stderr);
      
      // Attempt rollback
      console.log('🔄 Attempting automatic rollback...');
      attemptRollback();
    } else {
      console.log(`✅ Deployment [${deploymentId}] completed successfully`);
      console.log('stdout:', stdout);
      
      // Verify deployment
      verifyDeployment(deploymentId);
    }
  });
}

// Rollback function
function attemptRollback() {
  console.log('🚨 Initiating emergency rollback...');
  
  const rollbackScript = `
    set -e
    echo "🔄 Rolling back to previous version..."
    
    # Find latest backup
    LATEST_BACKUP=$(ls -t ${APP_DIR}/backups/ | head -n 1)
    
    if [ -n "$LATEST_BACKUP" ]; then
      echo "📦 Rolling back to: $LATEST_BACKUP"
      
      # Stop current containers
      docker stop clyvanta-nginx clyvanta-website clyvanta-postgres || true
      docker rm clyvanta-nginx clyvanta-website clyvanta-postgres || true
      
      # Restore from backup
      rm -rf ${APP_DIR}/clyvanta-new || true
      cp -r "${APP_DIR}/backups/$LATEST_BACKUP/clyvanta-new" ${APP_DIR}/ || true
      
      # Start restored version
      cd ${APP_DIR}/clyvanta-new
      docker compose up -d
      
      echo "✅ Rollback completed"
    else
      echo "❌ No backup found for rollback"
      exit 1
    fi
  `;
  
  exec(rollbackScript, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Rollback failed:', error.message);
    } else {
      console.log('✅ Rollback completed successfully');
    }
    console.log('Rollback output:', stdout);
  });
}

// Deployment verification
function verifyDeployment(deploymentId) {
  console.log(`🔍 Verifying deployment [${deploymentId}]...`);
  
  // Test HTTP endpoint
  exec('curl -f -s --max-time 10 "http://localhost:8080"', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Deployment verification failed for [${deploymentId}]`);
    } else if (stdout.includes('Great Ideas Deserve Great Technology')) {
      console.log(`✅ Deployment verification passed for [${deploymentId}]`);
    } else {
      console.warn(`⚠️ Deployment verification warning for [${deploymentId}] - content may be outdated`);
    }
  });
}

// Enhanced health check endpoint
app.get('/health', (req, res) => {
  const healthData = {
    status: 'OK', 
    service: 'clyvanta-deploy-webhook',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '2.0.0',
    memory: process.memoryUsage(),
    pid: process.pid,
    node_version: process.version,
    environment: process.env.NODE_ENV || 'production'
  };
  
  // Check disk space
  exec('df -h /', (error, stdout, stderr) => {
    if (!error) {
      const lines = stdout.split('\n');
      const rootLine = lines.find(line => line.includes('/dev/') && line.endsWith(' /'));
      if (rootLine) {
        const parts = rootLine.split(/\s+/);
        healthData.disk = {
          total: parts[1],
          used: parts[2], 
          available: parts[3],
          use_percentage: parts[4]
        };
      }
    }
    
    res.json(healthData);
  });
});

// Status endpoint
app.get('/status', (req, res) => {
  exec('cd /var/www/clyvanta && docker compose ps', (error, stdout, stderr) => {
    res.json({
      timestamp: new Date().toISOString(),
      containers: stdout || 'Unable to check containers',
      error: error ? error.message : null
    });
  });
});

// Cleanup endpoint for removing backups
app.get('/cleanup', (req, res) => {
  const token = req.query.token;
  if (token !== DEPLOY_TOKEN) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  console.log('🧹 Backup cleanup triggered via GET request');
  
  res.json({ 
    status: 'accepted', 
    message: 'Backup cleanup started',
    timestamp: new Date().toISOString(),
    type: 'cleanup'
  });

  // Remove backups directory using deployment script
  const cleanupCommand = `cd ${APP_DIR} && bash scripts/deploy.sh cleanup-backups && df -h`;

  exec(cleanupCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Backup cleanup failed:`, error);
      console.error('stderr:', stderr);
    } else {
      console.log(`✅ Backup cleanup successful`);
      console.log('Disk space after cleanup:', stdout);
    }
    if (stderr) console.error('stderr:', stderr);
  });
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
  console.error('Stack:', error.stack);
  // Don't exit - keep the service running
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit - keep the service running
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully...');
  process.exit(0);
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Clyvanta deploy webhook v2.0.0 running on port ${PORT}`);
  console.log(`📍 Production deploy: GET /deploy?token=${DEPLOY_TOKEN}`);
  console.log(`📍 GitHub webhook: POST /webhook`);
  console.log(`📍 Health check: GET /health`);
  console.log(`📍 Status check: GET /status`);
  console.log(`📍 Cleanup backups: GET /cleanup?token=${DEPLOY_TOKEN}`);
  console.log(`🕐 Started at: ${new Date().toISOString()}`);
  console.log(`💾 Memory usage: ${JSON.stringify(process.memoryUsage())}`);
});

// Keep-alive and timeout settings
server.keepAliveTimeout = 120000; // 2 minutes
server.headersTimeout = 120000; // 2 minutes

// Log server health every 5 minutes (Oracle deployment trigger)
setInterval(() => {
  console.log(`💓 Webhook service health check - Uptime: ${Math.floor(process.uptime())}s, Memory: ${JSON.stringify(process.memoryUsage())}`);
}, 5 * 60 * 1000);