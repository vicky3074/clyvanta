import bcrypt from 'bcryptjs';

// Rate limiting storage (in production, use Redis or database)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

// Clean up old attempts every hour
setInterval(() => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  for (const [ip, data] of loginAttempts.entries()) {
    if (data.lastAttempt < oneHourAgo) {
      loginAttempts.delete(ip);
    }
  }
}, 60 * 60 * 1000);

export function checkRateLimit(ip: string): { allowed: boolean; remainingAttempts: number } {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);
  
  // Reset attempts after 15 minutes
  if (attempts && now - attempts.lastAttempt > 15 * 60 * 1000) {
    loginAttempts.delete(ip);
  }
  
  const currentAttempts = loginAttempts.get(ip);
  const count = currentAttempts?.count || 0;
  
  // Allow 5 attempts per 15 minutes
  if (count >= 5) {
    return { allowed: false, remainingAttempts: 0 };
  }
  
  return { allowed: true, remainingAttempts: 5 - count };
}

export function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);
  
  if (attempts) {
    attempts.count++;
    attempts.lastAttempt = now;
  } else {
    loginAttempts.set(ip, { count: 1, lastAttempt: now });
  }
}

export function clearFailedAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

// Hash password (run this once to generate hash)
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Generate secure session token
export function generateSecureToken(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Get client IP
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return '127.0.0.1';
}