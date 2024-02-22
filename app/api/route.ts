import { geolocation } from '@vercel/edge';
 
export const runtime = 'edge';
 
export function GET(request: Request) {
    const sourcecountry = request.headers.get('cf-ipcountry');
  const { country } = geolocation(request);
  return new Response(`<h1>Your location is ${country}</h1> but source country is ${sourcecountry}`, {
    headers: { 'content-type': 'text/html' },
  });
}


