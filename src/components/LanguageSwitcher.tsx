'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

const locales = ['fr', 'en', 'ar']

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLangCode = pathname.split('/')[1] || 'fr'
  const currentLabel = languages.find(l => l.code === currentLangCode)?.label || 'FR'

  const handleLanguageChange = (newLangCode: string) => {
    // On nettoie le pathname pour éviter les tableaux vides au début
    const segments = pathname.split('/').filter(Boolean)
    
    // Vérifie si le premier segment actuel est une langue
    const isPresent = locales.includes(segments[0])
    
    if (isPresent) {
      segments[0] = newLangCode
    } else {
      // Si aucune langue n'est présente dans l'URL, on l'ajoute au début
      segments.unshift(newLangCode)
    }
    
    // On reconstruit l'URL proprement
    router.push(`/${segments.join('/')}`)
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-[16px] font-light tracking-widest uppercase hover:opacity-50 transition-opacity">
        {currentLabel}
        <span className="text-[16px] transition-transform group-hover:rotate-180">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.32257 6.384L9.00007 11.25L14.6161 6.384" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div className="absolute px-5 py-2 right-0 mt-2 w-16 bg-white text-black border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer w-full text-left px-0 py-1 text-[16px] transition-colors ${
              currentLangCode === lang.code ? 'font-bold' : 'font-light hover:font-bold'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  )
}