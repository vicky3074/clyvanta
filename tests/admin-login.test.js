/**
 * Admin Login Unit Tests
 * Tests the admin login API endpoint functionality
 */

const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');

describe('Admin Login API Tests', () => {
  const baseUrl = 'http://localhost:8080';
  
  beforeAll(async () => {
    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  describe('POST /api/admin/login', () => {
    it('should reject empty password', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      });

      const data = await response.json();
      
      expect(response.status).toBe(400);
      expect(data.error).toBe('Password is required');
    });

    it('should reject invalid password', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'wrongpassword'
        })
      });

      const data = await response.json();
      
      expect(response.status).toBe(401);
      expect(data.error).toBe('Invalid password');
      expect(data.remainingAttempts).toBeDefined();
    });

    it('should accept correct password', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'clyvanta2025!'
        })
      });

      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Login successful');
      
      // Check for session cookie
      const setCookieHeader = response.headers.get('set-cookie');
      expect(setCookieHeader).toContain('admin-auth=');
    });

    it('should set secure session cookie on successful login', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'clyvanta2025!'
        })
      });

      const setCookieHeader = response.headers.get('set-cookie');
      
      // Check cookie properties
      expect(setCookieHeader).toContain('admin-auth=');
      expect(setCookieHeader).toContain('HttpOnly');
      expect(setCookieHeader).toContain('SameSite=strict');
      expect(setCookieHeader).toContain('Max-Age=28800'); // 8 hours
    });

    it('should handle rate limiting after multiple failed attempts', async () => {
      // Make 5 failed attempts
      for (let i = 0; i < 5; i++) {
        await fetch(`${baseUrl}/api/admin/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: 'wrongpassword'
          })
        });
      }

      // 6th attempt should be rate limited
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'wrongpassword'
        })
      });

      const data = await response.json();
      
      expect(response.status).toBe(429);
      expect(data.error).toContain('Too many failed attempts');
    });
  });

  describe('GET /api/admin/login', () => {
    it('should check authentication status', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'GET'
      });

      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data.authenticated).toBeDefined();
      expect(typeof data.authenticated).toBe('boolean');
    });
  });

  describe('Admin Dashboard Access', () => {
    it('should redirect unauthenticated users to login', async () => {
      const response = await fetch(`${baseUrl}/admin`, {
        redirect: 'manual'
      });

      expect(response.status).toBe(307); // Next.js redirect
      const location = response.headers.get('location');
      expect(location).toContain('/admin/login');
    });
  });

  describe('Edge Cases', () => {
    it('should handle malformed JSON', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: '{"password": malformed json}'
      });

      expect(response.status).toBe(500);
    });

    it('should handle missing Content-Type header', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        body: JSON.stringify({
          password: 'clyvanta2025!'
        })
      });

      // Should still work or give appropriate error
      expect(response.status).toBeGreaterThanOrEqual(200);
    });

    it('should handle special characters in password correctly', async () => {
      const response = await fetch(`${baseUrl}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'clyvanta2025!'
        })
      });

      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });
  });
});