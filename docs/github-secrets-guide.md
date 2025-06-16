# 🔐 Complete GitHub Actions Secrets & Variables Guide for Clyvanta

## 📋 **Current Secrets Setup**

### **Repository Secrets** (Sensitive data - encrypted)
```
CLYVANTA_ORACLE_VAULT_CLIENT_ID = "3OVMygh28PjXaTyydFJ25YzE4SLCPFYg"
CLYVANTA_ORACLE_VAULT_CLIENT_SECRET = "yQHC65X_u6HrygCw4DFkjhrm0-RuxPV-TODpZPTk_jBzzrPkbVULslyEPtVmLT4V"
ORACLE_SERVER_IP = "40.233.67.6"
ORACLE_DEPLOY_WEBHOOK_TOKEN = "clyvanta-oracle-deploy-2025"
```

### **Repository Variables** (Non-sensitive configuration)
```
ORACLE_SERVER_REGION = "ca-toronto-1"
DEPLOYMENT_ENVIRONMENT = "production"
DOCKER_REGISTRY = "ghcr.io"
NODE_VERSION = "20"
NEXT_PUBLIC_APP_ENV = "production"
```

## 🔧 **Advanced Secrets Management**

### **Environment-Based Secrets**
Set up different environments (development, staging, production):

**Development Environment:**
```
DEV_ORACLE_SERVER_IP = "40.233.67.7"
DEV_DATABASE_URL = "postgresql://dev_user:dev_pass@dev_host:5432/clyvanta_dev"
DEV_WEBHOOK_TOKEN = "clyvanta-dev-2025"
```

**Staging Environment:**
```
STAGING_ORACLE_SERVER_IP = "40.233.67.8"
STAGING_DATABASE_URL = "postgresql://staging_user:staging_pass@staging_host:5432/clyvanta_staging"
STAGING_WEBHOOK_TOKEN = "clyvanta-staging-2025"
```

**Production Environment:**
```
PROD_ORACLE_SERVER_IP = "40.233.67.6"
PROD_DATABASE_URL = "postgresql://prod_user:prod_pass@prod_host:5432/clyvanta"
PROD_WEBHOOK_TOKEN = "clyvanta-oracle-deploy-2025"
```

## 🌐 **Organization-Level Secrets** (Enterprise Feature)
Share secrets across all repositories in your organization:

```
COMPANY_DOCKER_REGISTRY_TOKEN = "your_registry_token"
COMPANY_SLACK_WEBHOOK = "https://hooks.slack.com/services/..."
COMPANY_EMAIL_API_KEY = "your_email_service_key"
```

## 📊 **Enhanced Workflow Configuration**

### **Dynamic Environment Selection**
```yaml
name: 🚀 Multi-Environment Deployment

on:
  push:
    branches: [main, develop, staging]

jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        environment: 
          - ${{ github.ref == 'refs/heads/main' && 'production' || github.ref == 'refs/heads/staging' && 'staging' || 'development' }}
    
    environment: ${{ matrix.environment }}
    
    steps:
    - name: 🔐 Use Environment-Specific Secrets
      run: |
        echo "Deploying to: ${{ matrix.environment }}"
        echo "Server IP: ${{ secrets.ORACLE_SERVER_IP }}"
        echo "Region: ${{ vars.ORACLE_SERVER_REGION }}"
```

### **Conditional Secret Usage**
```yaml
- name: 🔐 Production-Only Secrets
  if: github.ref == 'refs/heads/main'
  run: |
    echo "Using production secrets..."
    curl -H "Authorization: Bearer ${{ secrets.PROD_API_TOKEN }}" \
         "${{ vars.PROD_API_ENDPOINT }}/deploy"

- name: 🧪 Development Secrets
  if: github.ref == 'refs/heads/develop'
  run: |
    echo "Using development secrets..."
    curl -H "Authorization: Bearer ${{ secrets.DEV_API_TOKEN }}" \
         "${{ vars.DEV_API_ENDPOINT }}/deploy"
```

## 🔒 **Security Best Practices**

### **Secret Rotation Strategy**
```yaml
- name: 🔄 Rotate Secrets Monthly
  if: github.event.schedule == '0 0 1 * *'  # First day of month
  run: |
    # Rotate Oracle Cloud API keys
    NEW_TOKEN=$(generate_new_oracle_token)
    echo "::add-mask::$NEW_TOKEN"
    
    # Update HCP Vault with new token
    curl -X PUT "${{ vars.VAULT_ENDPOINT }}/rotate" \
         -H "Authorization: Bearer ${{ secrets.VAULT_ADMIN_TOKEN }}" \
         -d "{\"new_token\": \"$NEW_TOKEN\"}"
```

### **Secret Validation**
```yaml
- name: ✅ Validate Secrets
  run: |
    # Check if all required secrets are present
    REQUIRED_SECRETS=(
      "CLYVANTA_ORACLE_VAULT_CLIENT_ID"
      "CLYVANTA_ORACLE_VAULT_CLIENT_SECRET"
      "ORACLE_SERVER_IP"
      "ORACLE_DEPLOY_WEBHOOK_TOKEN"
    )
    
    for secret in "${REQUIRED_SECRETS[@]}"; do
      if [ -z "$secret" ]; then
        echo "❌ Missing required secret: $secret"
        exit 1
      fi
    done
    echo "✅ All secrets validated"
```

## 📁 **Secret Categories for Clyvanta**

### **Infrastructure Secrets**
```
ORACLE_CLOUD_API_KEY = "your_oci_api_key"
ORACLE_CLOUD_TENANCY = "ocid1.tenancy.oc1.."
TERRAFORM_CLOUD_TOKEN = "your_terraform_token"
```

### **Database Secrets**
```
DATABASE_URL = "postgresql://user:password@host:5432/database"
REDIS_URL = "redis://user:password@host:6379"
MONGODB_CONNECTION_STRING = "mongodb://user:password@host:27017/database"
```

### **External Service Secrets**
```
SENDGRID_API_KEY = "SG.your_sendgrid_key"
STRIPE_SECRET_KEY = "sk_live_your_stripe_key"
GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"
OPENAI_API_KEY = "sk-your_openai_key"
```

### **CI/CD Secrets**
```
DOCKER_HUB_USERNAME = "your_docker_username"
DOCKER_HUB_TOKEN = "your_docker_token"
GITHUB_TOKEN = "ghp_your_github_token"
SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/..."
```

## 🔐 **Environment Protection Rules**

### **Production Environment Rules**
```yaml
# In repository settings → Environments → production
protection_rules:
  required_reviewers: 2
  wait_timer: 5  # minutes
  deployment_branch_policy: "main"
  prevent_self_review: true
```

### **Staging Environment Rules**
```yaml
# In repository settings → Environments → staging  
protection_rules:
  required_reviewers: 1
  deployment_branch_policy: ["main", "staging"]
  wait_timer: 0
```

## 🔄 **Secret Synchronization with External Systems**

### **Sync with HCP Vault**
```yaml
- name: 🔄 Sync Secrets with Vault
  run: |
    # Get all secrets from GitHub and sync to Vault
    vault_token="${{ secrets.VAULT_TOKEN }}"
    
    # Sync database credentials
    vault kv put secret/clyvanta/database \
      url="${{ secrets.DATABASE_URL }}" \
      username="${{ secrets.DB_USERNAME }}" \
      password="${{ secrets.DB_PASSWORD }}"
    
    # Sync API keys
    vault kv put secret/clyvanta/apis \
      sendgrid="${{ secrets.SENDGRID_API_KEY }}" \
      stripe="${{ secrets.STRIPE_SECRET_KEY }}"
```

### **Sync with Azure Key Vault**
```yaml
- name: 🔄 Sync with Azure Key Vault
  uses: Azure/get-keyvault-secrets@v1
  with:
    keyvault: "clyvanta-keyvault"
    secrets: |
      database-url
      api-keys
      certificates
```

## 📊 **Monitoring & Alerting for Secrets**

### **Secret Expiry Monitoring**
```yaml
- name: ⏰ Check Secret Expiry
  run: |
    # Check certificate expiry
    CERT_EXPIRY=$(openssl x509 -enddate -noout -in certificate.pem)
    DAYS_LEFT=$(echo "$CERT_EXPIRY" | date -d - +%s)
    
    if [ $DAYS_LEFT -lt 604800 ]; then  # 7 days
      echo "🚨 Certificate expires in less than 7 days!"
      # Send Slack notification
      curl -X POST "${{ secrets.SLACK_WEBHOOK }}" \
           -d '{"text": "🚨 Clyvanta SSL certificate expires soon!"}'
    fi
```

### **Secret Usage Audit**
```yaml
- name: 📋 Audit Secret Usage
  run: |
    echo "📊 Secret Usage Audit for Clyvanta:"
    echo "Deployment Date: $(date)"
    echo "Branch: ${{ github.ref }}"
    echo "Environment: ${{ github.environment }}"
    echo "Secrets Used:"
    echo "  - Oracle Server IP: ✅"
    echo "  - Vault Credentials: ✅"
    echo "  - Database URL: ✅"
    
    # Log to audit system
    curl -X POST "${{ vars.AUDIT_ENDPOINT }}" \
         -H "Authorization: Bearer ${{ secrets.AUDIT_TOKEN }}" \
         -d "{\"deployment\": \"$(date)\", \"secrets_used\": 4}"
```

## 🚀 **Advanced Deployment Patterns**

### **Blue-Green Deployment with Secrets**
```yaml
- name: 🔄 Blue-Green Deployment
  run: |
    # Deploy to blue environment first
    BLUE_IP="${{ secrets.BLUE_SERVER_IP }}"
    GREEN_IP="${{ secrets.GREEN_SERVER_IP }}"
    
    echo "Deploying to Blue environment: $BLUE_IP"
    ssh ubuntu@$BLUE_IP "docker-compose up -d"
    
    # Test blue environment
    if curl -f "http://$BLUE_IP:8080/health"; then
      echo "✅ Blue deployment successful, switching traffic"
      # Update load balancer to point to blue
      echo "ACTIVE_SERVER_IP=$BLUE_IP" >> $GITHUB_ENV
    else
      echo "❌ Blue deployment failed, keeping green active"
      exit 1
    fi
```

### **Canary Deployment with Feature Flags**
```yaml
- name: 🐦 Canary Deployment
  run: |
    # Deploy to canary server with feature flags
    CANARY_PERCENTAGE="${{ vars.CANARY_PERCENTAGE }}"
    
    ssh ubuntu@${{ secrets.ORACLE_SERVER_IP }} << EOF
      export FEATURE_FLAG_CANARY=true
      export CANARY_PERCENTAGE=$CANARY_PERCENTAGE
      docker-compose -f docker-compose.canary.yml up -d
    EOF
```

## 🔐 **Secret Management CLI Commands**

### **GitHub CLI Secret Management**
```bash
# List all secrets
gh secret list

# Set a secret
gh secret set ORACLE_SERVER_IP --body "40.233.67.6"

# Delete a secret
gh secret delete OLD_SECRET_NAME

# Set secret from file
gh secret set SSH_PRIVATE_KEY < private_key.pem

# Set secrets for specific environment
gh secret set DATABASE_URL --env production
```

### **Bulk Secret Management**
```bash
# Set multiple secrets from file
while IFS='=' read -r key value; do
  gh secret set "$key" --body "$value"
done < secrets.env
```

## 📈 **Metrics & Monitoring**

### **Secret Performance Metrics**
```yaml
- name: 📊 Secret Retrieval Metrics
  run: |
    start_time=$(date +%s%N)
    
    # Retrieve secret from Vault
    SECRET=$(curl -s -H "Authorization: Bearer ${{ secrets.VAULT_TOKEN }}" \
             "${{ vars.VAULT_ENDPOINT }}/secret")
    
    end_time=$(date +%s%N)
    duration=$(( (end_time - start_time) / 1000000 ))
    
    echo "🚀 Secret retrieval took: ${duration}ms"
    
    # Send metrics to monitoring system
    curl -X POST "${{ vars.METRICS_ENDPOINT }}" \
         -d "secret_retrieval_time=${duration}"
```

## 🎯 **Clyvanta-Specific Implementation**

### **Complete Secrets Setup for Clyvanta**
```bash
# Infrastructure
gh secret set ORACLE_CLOUD_TENANCY --body "ocid1.tenancy.oc1..aaaaaaaauxugnatyt3asvjjwf4672p6sxmqs6mm2nvhvrcbsbeafbdmcghka"
gh secret set ORACLE_CLOUD_USER --body "ocid1.user.oc1..aaaaaaaa3mgmdjspgjgawye46yl5ene5rheqzvicc2vvdjs7uz5pkooxwtaa"
gh secret set ORACLE_CLOUD_FINGERPRINT --body "2f:17:77:47:be:a8:1d:ba:cf:de:7c:a2:ce:ea:ad:cd"
gh secret set ORACLE_CLOUD_PRIVATE_KEY < oracle-private-key.pem

# Application
gh secret set DATABASE_PASSWORD --body "clyvanta_secure_password_2025"
gh secret set NEXTAUTH_SECRET --body "clyvanta_nextauth_secret_2025"
gh secret set ADMIN_PASSWORD_HASH --body "\$2b\$12\$hashed_password"

# External Services
gh secret set SENDGRID_API_KEY --body "SG.your_sendgrid_key"
gh secret set OPENAI_API_KEY --body "sk-your_openai_key"

# Monitoring
gh secret set SLACK_WEBHOOK --body "https://hooks.slack.com/services/..."
gh secret set UPTIME_ROBOT_API --body "your_uptime_robot_key"
```

### **Environment Variables (Non-sensitive)**
```bash
# Application Configuration
gh variable set NODE_ENV --body "production"
gh variable set NEXT_PUBLIC_SITE_URL --body "http://40.233.67.6:8080"
gh variable set DOCKER_COMPOSE_FILE --body "docker-compose.oracle.yml"

# Oracle Cloud Configuration  
gh variable set ORACLE_REGION --body "ca-toronto-1"
gh variable set ORACLE_SHAPE --body "VM.Standard.E2.1.Micro"
gh variable set ORACLE_IMAGE --body "Canonical Ubuntu 22.04"

# Deployment Configuration
gh variable set DEPLOYMENT_TIMEOUT --body "300"
gh variable set HEALTH_CHECK_RETRIES --body "5"
gh variable set BACKUP_RETENTION_DAYS --body "7"
```

This comprehensive setup gives you enterprise-grade secret management for Clyvanta! 🚀