import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.pathname === '/' || url.pathname === '/login') {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/waitlist', request.url));
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|waitlist/opengraph-image|opengraph-image).*)',
  ],
};
