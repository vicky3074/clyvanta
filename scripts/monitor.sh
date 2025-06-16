#!/bin/bash

# Clyvanta Monitoring Script
echo "🔍 Clyvanta System Monitor"
echo "=========================="

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    
    case $status in
        "OK")
            echo -e "${GREEN}✅ $message${NC}"
            ;;
        "WARNING")
            echo -e "${YELLOW}⚠️  $message${NC}"
            ;;
        "ERROR")
            echo -e "${RED}❌ $message${NC}"
            ;;
        "INFO")
            echo -e "${BLUE}ℹ️  $message${NC}"
            ;;
    esac
}

# Check system resources
check_system() {
    echo -e "\n${BLUE}📊 System Resources${NC}"
    echo "==================="
    
    # CPU usage
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    if (( $(echo "$cpu_usage > 80" | bc -l) )); then
        print_status "WARNING" "High CPU usage: ${cpu_usage}%"
    else
        print_status "OK" "CPU usage: ${cpu_usage}%"
    fi
    
    # Memory usage
    memory_info=$(free -m | awk 'NR==2{printf "%.1f", $3*100/$2}')
    if (( $(echo "$memory_info > 85" | bc -l) )); then
        print_status "WARNING" "High memory usage: ${memory_info}%"
    else
        print_status "OK" "Memory usage: ${memory_info}%"
    fi
    
    # Disk usage
    disk_usage=$(df -h / | awk 'NR==2{print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 85 ]; then
        print_status "WARNING" "High disk usage: ${disk_usage}%"
    else
        print_status "OK" "Disk usage: ${disk_usage}%"
    fi
}

# Check Docker containers
check_containers() {
    echo -e "\n${BLUE}🐳 Docker Containers${NC}"
    echo "===================="
    
    # Check production container
    if docker ps | grep -q "clyvanta-website"; then
        print_status "OK" "Production container running (port 8080)"
        
        # Check container health
        container_status=$(docker inspect --format='{{.State.Health.Status}}' clyvanta-website 2>/dev/null || echo "no-healthcheck")
        if [ "$container_status" = "healthy" ]; then
            print_status "OK" "Production container health: healthy"
        elif [ "$container_status" = "no-healthcheck" ]; then
            print_status "INFO" "Production container health: no healthcheck configured"
        else
            print_status "WARNING" "Production container health: $container_status"
        fi
    else
        print_status "ERROR" "Production container not running"
    fi
    
    # Check staging container
    if docker ps | grep -q "clyvanta-staging"; then
        print_status "OK" "Staging container running (port 8081)"
    else
        print_status "INFO" "Staging container not running"
    fi
    
    # Show all Clyvanta containers
    echo -e "\nContainer Status:"
    docker ps -a --filter "name=clyvanta" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
}

# Check web services
check_web_services() {
    echo -e "\n${BLUE}🌐 Web Services${NC}"
    echo "==============="
    
    # Check production website
    if curl -f -s http://localhost:8080 >/dev/null; then
        print_status "OK" "Production website responding (port 8080)"
    else
        print_status "ERROR" "Production website not responding (port 8080)"
    fi
    
    # Check staging website
    if curl -f -s http://localhost:8081 >/dev/null 2>&1; then
        print_status "OK" "Staging website responding (port 8081)"
    else
        print_status "INFO" "Staging website not responding (port 8081)"
    fi
    
    # Check webhook service
    if curl -f -s http://localhost:4040/health >/dev/null 2>&1; then
        print_status "OK" "Webhook service responding (port 4040)"
    else
        print_status "WARNING" "Webhook service not responding (port 4040)"
    fi
}

# Check recent logs
check_logs() {
    echo -e "\n${BLUE}📋 Recent Activity${NC}"
    echo "=================="
    
    # Deployment logs
    if [ -f "/var/log/clyvanta-deploy.log" ]; then
        echo "Last 5 deployment log entries:"
        tail -5 /var/log/clyvanta-deploy.log | sed 's/^/  /'
    else
        print_status "INFO" "No deployment logs found"
    fi
    
    # Container logs (last 10 lines)
    echo -e "\nRecent container logs:"
    if docker ps | grep -q "clyvanta-website"; then
        echo "Production logs:"
        docker logs --tail 10 clyvanta-website 2>/dev/null | sed 's/^/  /' || echo "  No logs available"
    fi
    
    if docker ps | grep -q "clyvanta-staging"; then
        echo "Staging logs:"
        docker logs --tail 10 clyvanta-staging 2>/dev/null | sed 's/^/  /' || echo "  No logs available"
    fi
}

# Check git status
check_git() {
    echo -e "\n${BLUE}📝 Git Status${NC}"
    echo "============="
    
    if [ -d "/var/www/clyvanta/.git" ]; then
        cd /var/www/clyvanta
        
        # Current branch and commit
        current_branch=$(git branch --show-current)
        current_commit=$(git rev-parse --short HEAD)
        print_status "INFO" "Current branch: $current_branch"
        print_status "INFO" "Current commit: $current_commit"
        
        # Check if there are any uncommitted changes
        if git diff-index --quiet HEAD --; then
            print_status "OK" "Working directory clean"
        else
            print_status "WARNING" "Uncommitted changes detected"
        fi
        
        # Check if we're behind origin
        git fetch origin >/dev/null 2>&1
        commits_behind=$(git rev-list HEAD..origin/main --count 2>/dev/null || echo "0")
        if [ "$commits_behind" -gt 0 ]; then
            print_status "WARNING" "$commits_behind commits behind origin/main"
        else
            print_status "OK" "Up to date with origin/main"
        fi
    else
        print_status "WARNING" "Git repository not found at /var/www/clyvanta"
    fi
}

# Performance summary
show_performance() {
    echo -e "\n${BLUE}⚡ Performance Summary${NC}"
    echo "====================="
    
    # Test response times
    echo "Response time tests:"
    
    # Production
    if command -v curl >/dev/null 2>&1; then
        prod_time=$(curl -o /dev/null -s -w "%{time_total}" http://localhost:8080 2>/dev/null || echo "timeout")
        if [ "$prod_time" != "timeout" ]; then
            print_status "INFO" "Production response time: ${prod_time}s"
        else
            print_status "ERROR" "Production not responding"
        fi
        
        # Staging
        staging_time=$(curl -o /dev/null -s -w "%{time_total}" http://localhost:8081 2>/dev/null || echo "timeout")
        if [ "$staging_time" != "timeout" ]; then
            print_status "INFO" "Staging response time: ${staging_time}s"
        fi
    fi
    
    # Docker stats
    echo -e "\nContainer resource usage:"
    docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" 2>/dev/null | grep clyvanta || echo "No Clyvanta containers running"
}

# Main monitoring function
main() {
    clear
    echo "🔍 Clyvanta System Monitor - $(date)"
    echo "================================================"
    
    check_system
    check_containers
    check_web_services
    check_logs
    check_git
    show_performance
    
    echo -e "\n${GREEN}✅ Monitoring complete!${NC}"
    echo "================================================"
    
    # Quick access commands
    echo -e "\n${BLUE}Quick Commands:${NC}"
    echo "Production logs:  docker logs -f clyvanta-website"
    echo "Staging logs:     docker logs -f clyvanta-staging"
    echo "Restart prod:     cd /var/www/clyvanta && docker compose restart"
    echo "Deploy staging:   curl 'http://localhost:4040/deploy-staging?token=clyvanta-deploy-2025'"
    echo "Deploy prod:      curl 'http://localhost:4040/deploy?token=clyvanta-deploy-2025'"
}

# Run monitoring
main "$@"