// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from 'next-auth/middleware'

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    // FOR NOW ONLY WHILE DEV
    '/blog',
    '/contact',
    '/customers',
    '/merchants/:paths*',
    '/transactions',
    // '/merchants/dashboard',
    // '/merchants/profile',
    // '/merchants/customers/:paths*',
    // '/merchants/transactions/:paths*',
    // '/merchants/products/:paths*',
    // '/merchants/products/:paths*',
    // '/merchants/rewards/:paths*',
    // '/merchants/reports/:paths*',
    // '/merchants/users/:paths*',
  ],
}
