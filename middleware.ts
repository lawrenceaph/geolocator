import { NextResponse, NextRequest } from 'next/server';
import { geolocation } from '@vercel/edge';
 
export const runtime = 'experimental-edge';
// This function can be async if you need to perform asynchronous tasks
export default function middleware(request: NextRequest) {
  const { nextUrl: url, geo } = request
  const country =  request.headers.get('cf-ipcountry'); 
  
  console.log("visitor from ", country)
  if (country === 'IN') {

    return NextResponse.redirect(new URL('https://ijmindia.org', request.url));
  }  


  // For any other country, or if the country code isn't available, continue with the request
  return NextResponse.next();
}