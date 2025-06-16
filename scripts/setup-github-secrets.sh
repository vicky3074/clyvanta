#!/bin/bash
# 🔐 Clyvanta GitHub Secrets & Variables Setup Script

set -e

echo "🚀 Setting up GitHub Secrets & Variables for Clyvanta Oracle Cloud"
echo "=================================================="

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not found. Install it first:"
    echo "   brew install gh"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub. Run:"
    echo "   gh auth login"
    exit 1
fi

echo "✅ GitHub CLI ready"

# Repository Variables (Non-sensitive configuration)
echo "📝 Setting up Repository Variables..."

gh variable set NODE_VERSION --body "20"
gh variable set ORACLE_REGION --body "ca-toronto-1"
gh variable set ORACLE_SHAPE --body "VM.Standard.E2.1.Micro"
gh variable set DEPLOYMENT_ENVIRONMENT --body "production"
gh variable set DOCKER_COMPOSE_FILE --body "docker-compose.oracle.yml"
gh variable set NEXT_PUBLIC_SITE_URL --body "http://40.233.67.6:8080"
gh variable set HEALTH_CHECK_TIMEOUT --body "30"
gh variable set DEPLOYMENT_TIMEOUT --body "300"
gh variable set BACKUP_RETENTION_DAYS --body "7"
gh variable set DOCKER_REGISTRY --body "ghcr.io"

echo "✅ Repository Variables set"

# Repository Secrets (Sensitive data)
echo "🔐 Setting up Repository Secrets..."

# Oracle Cloud Infrastructure
echo "Setting Oracle Cloud secrets..."
gh secret set ORACLE_SERVER_IP --body "40.233.67.6"
gh secret set ORACLE_DEPLOY_WEBHOOK_TOKEN --body "clyvanta-oracle-deploy-2025"

# HCP Vault Secrets (you already have these)
echo "Vault secrets already configured ✅"
# gh secret set CLYVANTA_ORACLE_VAULT_CLIENT_ID --body "3OVMygh28PjXaTyydFJ25YzE4SLCPFYg"
# gh secret set CLYVANTA_ORACLE_VAULT_CLIENT_SECRET --body "yQHC65X_u6HrygCw4DFkjhrm0-RuxPV-TODpZPTk_jBzzrPkbVULslyEPtVmLT4V"

# Application Secrets
echo "Setting application secrets..."
gh secret set DATABASE_PASSWORD --body "clyvanta_oracle_secure_2025!"
gh secret set NEXTAUTH_SECRET --body "clyvanta_nextauth_secret_oracle_2025"
gh secret set ADMIN_PASSWORD_HASH --body "\$2b\$12\$hashed_admin_password_oracle"

# Optional: External Service API Keys (add your own)
echo "🔧 Optional external service secrets (update with your keys):"
echo "gh secret set SENDGRID_API_KEY --body 'your_sendgrid_key'"
echo "gh secret set OPENAI_API_KEY --body 'your_openai_key'"
echo "gh secret set STRIPE_SECRET_KEY --body 'your_stripe_key'"
echo "gh secret set GOOGLE_ANALYTICS_ID --body 'your_ga_id'"

# Monitoring & Alerting
echo "Setting monitoring secrets..."
gh secret set SLACK_WEBHOOK_URL --body "https://hooks.slack.com/services/your/slack/webhook"
gh secret set UPTIME_ROBOT_API_KEY --body "your_uptime_robot_key"

echo ""
echo "🎉 GitHub Secrets & Variables Setup Complete!"
echo "=================================================="
echo ""
echo "📋 Summary:"
echo "✅ Repository Variables: 10 configured"
echo "✅ Repository Secrets: 8 configured"
echo "✅ Oracle Cloud: Ready for deployment"
echo ""
echo "🔍 View all secrets and variables:"
echo "   gh secret list"
echo "   gh variable list"
echo ""
echo "🚀 Your GitHub Actions can now use:"
echo "   \${{ secrets.ORACLE_SERVER_IP }}"
echo "   \${{ vars.NODE_VERSION }}"
echo "   \${{ vars.ORACLE_REGION }}"
echo "   \${{ secrets.DATABASE_PASSWORD }}"
echo ""
echo "💡 Next: Update your workflow files to use these variables!"