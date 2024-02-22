import { NextRequest, NextResponse } from 'next/server'


// run only on homepage
export const config = {
  matcher: '/',
}

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req
  const country = geo?.country || 'US'
  const city = geo?.city || 'San Francisco'
  const region = geo?.region || 'CA'

if(country==="IN"){
    return NextResponse.redirect(new URL('https://ijmindia.org', req.url))

}

return NextResponse.next()

}