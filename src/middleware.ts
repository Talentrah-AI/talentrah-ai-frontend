import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { mockSubscriptionApi } from "./data/mockSubscriptionData/subscription";

const PROTECTED_ROUTES = ["/jobdashboard", '/job-tracker'];

const PUBLIC_ROUTES = ["/", "/login", "/signup", "/pricing"];

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const pathname = request.nextUrl.pathname;

    //Allow public routes
    if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    //check if it's a protected routes
    if (PROTECTED_ROUTES.some(route => pathname.startsWith(route))) {
        //If no token, redirect to login
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            //Use mock subscription verification
            const { isSubscribed } = await mockSubscriptionApi.verify();
            if (!isSubscribed) {
                //If user is not subscribed, redirect to pricing
                return NextResponse.redirect(new URL('/pricing', request.url));
            }
        } catch (error) {
            //If verification fails, redirect to login
            return NextResponse.redirect(new URL('/login', request.url));
            console.error(error);
            
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|public).*)',
    ],
}