import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const referral = req.nextUrl.searchParams.get('ref')
  if (referral) {
    const url = req.nextUrl.clone()
    url.searchParams.delete('ref')
    const res = NextResponse.redirect(url)
    res.cookies.set('referral', referral, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })
    return res
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
