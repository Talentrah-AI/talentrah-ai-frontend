import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  const publicRoutes = ['/', '/waitlist', '/admin/overview', '/admin/login', '/admin/sign-up', '/admin/forgot-password', '/admin/email-sent', '/admin/reset-password', '/admin/confirm-email', '/admin/register', '/admin/register/step2'];
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Allow static assets in public folder (e.g., /Rectangle.png, /Logo.png)
  if (pathname.startsWith('/assets') || /\.(png|jpg|jpeg|svg|gif|ico|webp)$/.test(pathname)) {
    return NextResponse.next();
  }

  // Mock auth check for admin routes
  const isAdmin = request.cookies.get('mockAdmin')?.value === 'true';
  if (pathname.startsWith('/admin')) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
  }

  // Redirect other routes to /waitlist
  return NextResponse.redirect(new URL('/waitlist', request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|sitemap.xml|robots.txt).*)',
  ],
};