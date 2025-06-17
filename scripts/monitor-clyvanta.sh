#!/bin/bash
# Clyvanta Health Monitor Script
# Deploy this to: /home/ubuntu/monitor-clyvanta.sh
# Run with cron: */5 * * * * /home/ubuntu/monitor-clyvanta.sh

LOG_FILE="/home/ubuntu/clyvanta-monitor.log"
CD_PATH="/home/ubuntu/clyvanta-new"
WEBSITE_URL="http://localhost:8080"

# Ensure log file exists
touch $LOG_FILE

# Function to log with timestamp
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S'): $1" >> $LOG_FILE
}

# Function to check container health
check_containers() {
    cd $CD_PATH
    
    # Count running clyvanta containers
    RUNNING=$(docker ps --format "table {{.Names}}" | grep -E "clyvanta-" | wc -l)
    EXPECTED=3
    
    if [ $RUNNING -lt $EXPECTED ]; then
        log_message "WARNING: Only $RUNNING/$EXPECTED containers running"
        
        # List what's actually running
        docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "clyvanta-" >> $LOG_FILE
        
        log_message "Attempting to restart containers..."
        docker compose up -d
        
        # Wait for containers to start
        sleep 30
        
        # Check again
        NEW_RUNNING=$(docker ps --format "table {{.Names}}" | grep -E "clyvanta-" | wc -l)
        if [ $NEW_RUNNING -eq $EXPECTED ]; then
            log_message "SUCCESS: All $NEW_RUNNING/$EXPECTED containers now running"
        else
            log_message "ERROR: Still only $NEW_RUNNING/$EXPECTED containers running after restart"
        fi
    fi
}

# Function to check website response
check_website() {
    if curl -f -s --max-time 10 $WEBSITE_URL > /dev/null; then
        # Website is responding - log success every hour only
        CURRENT_MINUTE=$(date +%M)
        if [ $CURRENT_MINUTE -eq 0 ]; then
            log_message "INFO: Website health check passed"
        fi
    else
        log_message "ERROR: Website not responding at $WEBSITE_URL"
        log_message "Attempting container restart..."
        
        cd $CD_PATH
        docker compose restart
        
        # Wait and test again
        sleep 45
        
        if curl -f -s --max-time 10 $WEBSITE_URL > /dev/null; then
            log_message "SUCCESS: Website restored after container restart"
        else
            log_message "CRITICAL: Website still not responding after restart - manual intervention required"
        fi
    fi
}

# Function to check disk space
check_disk_space() {
    DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    
    if [ $DISK_USAGE -gt 85 ]; then
        log_message "WARNING: Disk usage at ${DISK_USAGE}% - consider cleanup"
        
        # Clean up Docker if space is critical
        if [ $DISK_USAGE -gt 90 ]; then
            log_message "CRITICAL: Disk at ${DISK_USAGE}% - cleaning Docker resources"
            docker system prune -f
            docker image prune -f
        fi
    fi
}

# Main execution
main() {
    check_containers
    check_website
    
    # Only check disk space once per hour
    CURRENT_MINUTE=$(date +%M)
    if [ $CURRENT_MINUTE -eq 0 ]; then
        check_disk_space
    fi
}

# Run main function
main

# Keep only last 1000 lines of log file
tail -1000 $LOG_FILE > $LOG_FILE.tmp && mv $LOG_FILE.tmp $LOG_FILE