// Google Analytics Testing Script
// Run this in your browser console on https://clyvanta.com

console.log("🔍 Testing Google Analytics Setup");
console.log("================================");

// Check if gtag function exists
if (typeof gtag !== 'undefined') {
    console.log("✅ gtag function is loaded");
    
    // Check dataLayer
    if (window.dataLayer && window.dataLayer.length > 0) {
        console.log("✅ dataLayer exists with", window.dataLayer.length, "items");
        console.log("📋 DataLayer contents:", window.dataLayer);
    } else {
        console.log("❌ dataLayer is empty or missing");
    }
    
    // Send a test event
    console.log("🧪 Sending test event...");
    gtag('event', 'test_event', {
        event_category: 'testing',
        event_label: 'manual_test',
        value: 1
    });
    console.log("✅ Test event sent!");
    
} else {
    console.log("❌ gtag function not found - GA may not be loaded");
}

// Check for GA script tags
const gaScripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
if (gaScripts.length > 0) {
    console.log("✅ GA script tag found:", gaScripts[0].src);
} else {
    console.log("❌ GA script tag not found");
}

// Check for tracking ID in page source
const pageSource = document.documentElement.outerHTML;
if (pageSource.includes('G-T03CYJQ4DE')) {
    console.log("✅ Tracking ID (G-T03CYJQ4DE) found in page");
} else {
    console.log("❌ Tracking ID not found in page source");
}

console.log("\n🔍 Next Steps:");
console.log("1. Check Real-time reports in GA dashboard");
console.log("2. Visit different pages to generate events");
console.log("3. Wait 24-48 hours for full reporting data");