import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Extend NextRequest to include geo property
interface NextRequestWithGeo extends NextRequest {
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };
}

export function middleware(request: NextRequestWithGeo) {
  const response = NextResponse.next();

  // Geo-targeting: Check if user is in Ontario/Toronto area
  const region = request.geo?.region || '';
  const country = request.geo?.country || '';
  
  // Set geo-targeting cookie for client-side components
  if (country === 'CA' && region === 'ON') {
    response.cookies.set('clyvanta-geo', 'gta', {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
  } else {
    response.cookies.set('clyvanta-geo', 'default', {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
  }

  // Check if trying to access admin pages (except login)
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    const authCookie = request.cookies.get('admin-auth');
    
    // Now we check for any valid session token (not just 'authenticated')
    if (!authCookie || !authCookie.value || authCookie.value.length < 32) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Also protect admin API routes
  if (request.nextUrl.pathname.startsWith('/api/leads') || 
      request.nextUrl.pathname.startsWith('/api/admin')) {
    
    // Skip auth check for login endpoint
    if (request.nextUrl.pathname === '/api/admin/login') {
      return response;
    }
    
    const authCookie = request.cookies.get('admin-auth');
    
    // Check for valid session token
    if (!authCookie || !authCookie.value || authCookie.value.length < 32) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};