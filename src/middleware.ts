// // Without a defined matcher, this one line applies next-auth
// // to the entire project
// export { default } from 'next-auth/middleware'

// // Applies next-auth only to matching routes - can be regex
// // Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = {
//   matcher: [
//     // FOR NOW ONLY WHILE DEV
//     '/blog',
//     '/contact',
//     '/customers',
//     '/merchants/:paths*',
//     '/transactions',
//     // '/merchants/dashboard',
//     // '/merchants/profile',
//     // '/merchants/customers/:paths*',
//     // '/merchants/transactions/:paths*',
//     // '/merchants/products/:paths*',
//     // '/merchants/products/:paths*',
//     // '/merchants/rewards/:paths*',
//     // '/merchants/reports/:paths*',
//     // '/merchants/users/:paths*',
//   ],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protect specific routes using matchers
export const config = {
  matcher: [
    '/blog',
    '/contact',
    '/customers',
    '/merchants/:paths*',
    '/transactions',
  ],
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token =
    req.cookies.get('accessToken')?.value ||
    req.headers.get('Authorization')?.replace('Bearer ', '')

  // If no token and trying to access a protected route
  if (!token) {
    const redirectUrl = new URL('/', req.url)
    // Optionally include a redirect param so user can go back after login
    redirectUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Continue if authenticated
  return NextResponse.next()
}
