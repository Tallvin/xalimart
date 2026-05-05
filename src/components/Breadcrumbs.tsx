'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const locales = ['fr', 'en', 'ar'] // Liste des langues à ignorer

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // 1. On sépare le chemin
  const allSegments = pathname.split('/').filter((element) => element !== '')

  // 2. On retire le premier segment s'il s'agit de la langue
  const isFirstSegmentLocale = locales.includes(allSegments[0])
  const currentLang = isFirstSegmentLocale ? allSegments[0] : 'fr'
  const pathElements = isFirstSegmentLocale ? allSegments.slice(1) : allSegments

  // Ne pas afficher sur la page d'accueil (soit "/" soit "/fr", "/en", etc.)
  const isHome = pathElements.length === 0
  if (isHome) return null

  return (
    <section className="breadcrumbs-section pt-35 pb-8">
      <div className="container mx-auto">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center uppercase tracking-widest text-[13px] font-light text-gray-500">
            <li className="flex items-center">
              {/* Le lien Home doit pointer vers la racine de la langue actuelle */}
              <Link href={`/${currentLang}`} className="hover:text-black transition-colors">
                Home
              </Link>
            </li>

            {pathElements.map((segment, index) => {
              // On reconstruit l'URL en incluant la langue au début
              const href = `/${currentLang}/${pathElements.slice(0, index + 1).join('/')}`
              const isLast = index === pathElements.length - 1
              
              const label = segment.replace(/-/g, ' ')

              return (
                <li key={href} className="flex items-center">
                  <span className="mx-3 text-gray-300">|</span>
                  
                  {isLast ? (
                    <span className="text-black font-normal">{label}</span>
                  ) : (
                    <Link href={href} className="hover:text-black transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </section>
  )
}