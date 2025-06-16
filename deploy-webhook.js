#!/usr/bin/env node

const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Configuration
const DEPLOY_TOKEN = 'clyvanta-deploy-2025';
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'clyvanta-webhook-secret';
const APP_DIR = '/var/www/clyvanta';

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

// Deployment function
function triggerDeployment(type, branch = 'main') {
  const environment = 'production';
  
  console.log(`📦 Starting production deployment...`);
  
  // Direct deployment command
  const deployCommand = `cd ${APP_DIR} && git fetch origin && git reset --hard origin/main && docker-compose down && docker-compose up -d --build`;

  exec(deployCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Production deployment failed:`, error);
      console.error('stderr:', stderr);
    } else {
      console.log(`✅ Production deployment successful`);
    }
    console.log('stdout:', stdout);
    if (stderr) console.error('stderr:', stderr);
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

const PORT = process.env.PORT || 4040;
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