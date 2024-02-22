import { copyFile } from 'fs'
import { NextRequest, NextResponse } from 'next/server'


// run only on homepage
export const config = {
  matcher: '/',
}

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req
  const country =  geo?.country 

if(country==="IN"){
    return NextResponse.redirect(new URL('https://ijmindia.org/', req.url))

}
if (country==="PH"){
  return NextResponse.redirect(new URL("https://ijm.org.ph", req.url))
}

return NextResponse.next()

}