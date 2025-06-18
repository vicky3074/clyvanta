#!/bin/bash

echo "🌐 Testing server connectivity..."

# Replace this with your actual server IP
SERVER_IP="YOUR_DROPLET_IP_HERE"

echo "📡 Testing ping to $SERVER_IP:"
ping -c 3 $SERVER_IP

echo "🔑 Testing SSH port 22:"
nc -zv $SERVER_IP 22

echo "🌐 Testing HTTP port 80:"
nc -zv $SERVER_IP 80

echo "🌐 Testing HTTP port 8080:"
nc -zv $SERVER_IP 8080

echo "📍 Your public IP:"
curl -s https://ipinfo.io/ip

echo "🔍 Traceroute to server:"
traceroute $SERVER_IP