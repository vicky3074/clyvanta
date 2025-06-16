import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { checkRateLimit, recordFailedAttempt, clearFailedAttempts, getClientIP, generateSecureToken } from '@/lib/security';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'clyvanta2025!';

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  
  try {
    // Check rate limiting
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many failed attempts. Please try again in 15 minutes.',
          remainingAttempts: 0
        },
        { status: 429 }
      );
    }

    const { password } = await request.json();

    if (!password) {
      recordFailedAttempt(clientIP);
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Verify password (simplified for now - use bcrypt in production)
    const isValid = password === ADMIN_PASSWORD;

    if (isValid) {
      // Clear failed attempts on successful login
      clearFailedAttempts(clientIP);
      
      // Generate secure session token
      const sessionToken = generateSecureToken();
      
      // Set secure cookie
      const response = NextResponse.json({ 
        success: true,
        message: 'Login successful' 
      });
      
      response.cookies.set('admin-auth', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 8, // 8 hours (shorter for security)
        path: '/',
      });
      
      return response;
    } else {
      // Record failed attempt
      recordFailedAttempt(clientIP);
      const updatedRateLimit = checkRateLimit(clientIP);
      
      return NextResponse.json(
        { 
          error: 'Invalid password',
          remainingAttempts: updatedRateLimit.remainingAttempts
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    recordFailedAttempt(clientIP);
    
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}

// Check authentication status
export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin-auth');
  
  if (authCookie?.value && authCookie.value.length >= 32) {
    return NextResponse.json({ authenticated: true });
  } else {
    return NextResponse.json({ authenticated: false });
  }
}