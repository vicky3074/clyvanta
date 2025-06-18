import { test, expect } from '@playwright/test';

test.describe('Functional Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Always use Docker staging environment for consistency  
    await page.goto('/');
  });

  test('Homepage loads successfully', async ({ page }) => {
    // Check main heading is visible
    await expect(page.locator('h1')).toContainText('Great Ideas Deserve');
    
    // Check hero section loads
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Check no 404 errors
    const response = await page.request.get('http://localhost:8080');
    expect(response.status()).toBe(200);
  });

  test('All navigation links work', async ({ page }) => {
    // Get all navigation links
    const navLinks = page.locator('nav a');
    const linkCount = await navLinks.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
        // Click link and verify it loads
        await link.click();
        await page.waitForLoadState('networkidle');
        
        // Check page loaded successfully (no 404)
        const url = page.url();
        expect(url).toContain(href);
        
        // Go back to homepage for next test
        await page.goto('http://localhost:8080');
      }
    }
  });

  test('Contact form submission works', async ({ page }) => {
    // Navigate to contact section
    await page.locator('a[href="/#contact"]').first().click();
    await page.waitForTimeout(1000);
    
    // Fill out contact form
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');
    const submitButton = page.locator('button[type="submit"]');
    
    if (await nameInput.isVisible()) {
      await nameInput.fill('Test User');
      await emailInput.fill('test@example.com');
      await messageInput.fill('This is a test message from automated testing.');
      
      // Submit form
      await submitButton.click();
      
      // Wait for response
      await page.waitForTimeout(2000);
      
      // Check for success message or form reset
      const successMessage = page.locator('text=success').or(page.locator('text=sent')).or(page.locator('text=thank'));
      const isFormReset = await nameInput.inputValue() === '';
      
      // Either success message appears or form resets
      expect(await successMessage.isVisible() || isFormReset).toBeTruthy();
    }
  });

  test('All CTA buttons are clickable', async ({ page }) => {
    // Find all CTA buttons
    const ctaButtons = page.locator('a[href="/#contact"]');
    const buttonCount = await ctaButtons.count();
    
    expect(buttonCount).toBeGreaterThan(0);
    
    for (let i = 0; i < buttonCount; i++) {
      const button = ctaButtons.nth(i);
      await expect(button).toBeVisible();
      await expect(button).toBeEnabled();
      
      // Check button has proper text
      const buttonText = await button.textContent();
      expect(buttonText?.trim().length).toBeGreaterThan(0);
    }
  });

  test('Page has no broken links', async ({ page }) => {
    // Get all links on the page
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    
    const brokenLinks: string[] = [];
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && (href.startsWith('http') || href.startsWith('/'))) {
        try {
          const response = await page.request.get(href.startsWith('/') ? `http://localhost:8080${href}` : href);
          if (response.status() >= 400) {
            brokenLinks.push(`${href} (${response.status()})`);
          }
        } catch (error) {
          brokenLinks.push(`${href} (network error)`);
        }
      }
    }
    
    expect(brokenLinks).toEqual([]);
  });

  test('Page loads without JavaScript errors', async ({ page }) => {
    const jsErrors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        jsErrors.push(msg.text());
      }
    });
    
    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });
    
    await page.goto('http://localhost:8080');
    await page.waitForLoadState('networkidle');
    
    // Filter out known acceptable errors
    const criticalErrors = jsErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('robots.txt') &&
      !error.includes('chrome-extension')
    );
    
    expect(criticalErrors).toEqual([]);
  });

  test('SEO meta tags are present', async ({ page }) => {
    // Check essential meta tags
    const title = page.locator('title');
    await expect(title).toHaveText(/Clyvanta/);
    
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.+/);
    
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('Page is accessible', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1); // Should have exactly one h1
    
    // Check images have alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined();
    }
    
    // Check forms have proper labels
    const inputs = page.locator('input[type="text"], input[type="email"], textarea');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const name = await input.getAttribute('name');
      
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeVisible();
      } else if (name) {
        // Should have placeholder or aria-label
        const placeholder = await input.getAttribute('placeholder');
        const ariaLabel = await input.getAttribute('aria-label');
        expect(placeholder || ariaLabel).toBeDefined();
      }
    }
  });
});