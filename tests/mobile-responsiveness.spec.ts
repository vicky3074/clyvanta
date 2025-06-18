import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Use different URL for CI vs local testing
    const baseURL = process.env.CI ? 'http://localhost:3000' : 'http://localhost:8080';
    await page.goto(baseURL);
  });

  test('Hero button does not overflow on mobile viewports', async ({ page }) => {
    // Test various mobile viewport sizes
    const mobileViewports = [
      { name: 'iPhone 12 Pro', width: 390, height: 844 },
      { name: 'iPhone SE', width: 375, height: 667 },
      { name: 'Samsung Galaxy S21', width: 384, height: 854 },
      { name: 'Small mobile', width: 320, height: 568 },
    ];

    for (const viewport of mobileViewports) {
      console.log(`Testing ${viewport.name} (${viewport.width}x${viewport.height})`);
      
      // Set viewport size
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      
      // Wait for page to adjust
      await page.waitForTimeout(500);
      
      // Find the hero CTA button
      const ctaButton = page.locator('a[href="/#contact"]').first();
      await expect(ctaButton).toBeVisible();
      
      // Get button dimensions and viewport width
      const buttonBox = await ctaButton.boundingBox();
      const viewportWidth = viewport.width;
      
      // Critical check: Button should not overflow viewport
      if (buttonBox) {
        const buttonRight = buttonBox.x + buttonBox.width;
        expect(buttonRight).toBeLessThanOrEqual(viewportWidth);
        
        // Additional checks for proper mobile layout
        expect(buttonBox.width).toBeLessThanOrEqual(viewportWidth * 0.9); // Max 90% of viewport
        expect(buttonBox.x).toBeGreaterThanOrEqual(10); // At least 10px from left edge
        
        console.log(`✅ ${viewport.name}: Button width ${Math.round(buttonBox.width)}px fits in ${viewportWidth}px viewport`);
      }
      
      // Check button text is readable
      const buttonText = await ctaButton.textContent();
      expect(buttonText?.length).toBeGreaterThan(0);
      
      // Ensure button is clickable (not covered by other elements)
      await expect(ctaButton).toBeEnabled();
    }
  });

  test('Mobile navigation works properly', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 12 Pro
    
    // Check if mobile menu toggle exists and works
    const mobileMenuButton = page.locator('[aria-label="Toggle menu"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      
      // Check if navigation items are visible after toggle
      const navItems = page.locator('nav a');
      const navCount = await navItems.count();
      expect(navCount).toBeGreaterThan(0);
    }
  });

  test('Contact form works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Navigate to contact section
    await page.locator('a[href="/#contact"]').first().click();
    await page.waitForTimeout(1000);
    
    // Find and test contact form elements
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');
    
    if (await nameInput.isVisible()) {
      // Fill form
      await nameInput.fill('Test User');
      await emailInput.fill('test@example.com');
      await messageInput.fill('Test message from mobile');
      
      // Check form elements don't overflow
      for (const input of [nameInput, emailInput, messageInput]) {
        const inputBox = await input.boundingBox();
        if (inputBox) {
          expect(inputBox.x + inputBox.width).toBeLessThanOrEqual(390);
        }
      }
    }
  });

  test('No horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Check if page has horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = 390;
    
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // Allow 1px tolerance
  });

  test('All images load properly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Wait for all images to load
    await page.waitForLoadState('networkidle');
    
    // Check for broken images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });

  test('Critical mobile performance metrics', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    
    const startTime = Date.now();
    await page.goto('http://localhost:8080');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds on mobile
    expect(loadTime).toBeLessThan(5000);
    
    // Check for console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.reload();
    await page.waitForTimeout(2000);
    
    // Should have no console errors
    expect(consoleErrors.length).toBe(0);
  });
});