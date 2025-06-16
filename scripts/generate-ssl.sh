#!/bin/bash

# Generate self-signed SSL certificates for Cloudflare Flexible SSL
# These certificates are only used between Cloudflare and your server

echo "🔐 Generating self-signed SSL certificates for clyvanta.com..."

# Create SSL directory
mkdir -p ssl

# Generate private key
openssl genrsa -out ssl/key.pem 2048

# Generate certificate (valid for 365 days)
openssl req -new -x509 -key ssl/key.pem -out ssl/cert.pem -days 365 -subj "/C=CA/ST=Ontario/L=Toronto/O=Clyvanta/CN=clyvanta.com"

echo "✅ SSL certificates generated:"
echo "   - Private key: ssl/key.pem"
echo "   - Certificate: ssl/cert.pem"
echo ""
echo "🚀 Ready to deploy with HTTPS support!"