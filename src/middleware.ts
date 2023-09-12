// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request: NextRequestWithAuth) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const role = request.nextauth.token?.role
        if (role){
            if (role !== 'Admin' && role !== "Mod") {
                return NextResponse.rewrite(
                    new URL("/misc/denied", request.url)
                )
            }
            return NextResponse.next()
        }
        return NextResponse.redirect(
            new URL("/api/auth/login", request.url)
        )
    }}

    ,
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/dashboard"] }