// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fr', 'en', 'ar']
const defaultLocale = 'fr'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vérifie si le chemin contient déjà une langue
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirection automatique vers la langue par défaut
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // On ignore les fichiers statiques, images et dossiers de l'admin (Payload)
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|admin|media).*)'],
}