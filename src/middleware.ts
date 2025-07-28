import { NextRequest, NextResponse } from "next/server"

// Global middleware 
export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/dashboard') {
        return NextResponse.rewrite(new URL('/register', request.nextUrl))
    }

    const theme = request.cookies.get('theme')
    if (!theme) {
        NextResponse.next().cookies.set('theme', 'dark')
    };

    NextResponse.next().headers.set('custom-header', "custom-value")
    NextResponse.next().headers.set('name', "anc")



    return NextResponse.next();
    // return NextResponse.json({ name })
};



// export const config = {
//     matcher: '/users'
// }