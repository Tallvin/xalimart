// src/components/portfolio/PortfolioFilters.tsx
'use client' // Nécessaire car il y aura de l'interaction (clics)

import React from 'react'

const categories = [
  { label: 'Tous', count: 28 },
  { label: 'Résidentiel', count: null },
  { label: 'Commercial', count: null },
  { label: 'Hôtellerie', count: null },
  { label: 'Bureaux', count: null },
  { label: 'Édifices publics', count: null },
  { label: 'Urbanisme', count: null },
]

export default function PortfolioFilters() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-4 mb-12">
      {/* Liste des catégories */}
      <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-6 md:mb-0">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors relative pb-2 ${
              index === 0 ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            {cat.label}
            {cat.count && <sup className="ml-1 text-[8px]">{cat.count}</sup>}
          </button>
        ))}
      </nav>

      {/* Menu déroulant de tri (à droite sur la maquette) */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Par année:</span>
        <select className="text-[10px] uppercase tracking-widest font-bold bg-transparent border-none outline-none cursor-pointer">
          <option>Tous</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
    </div>
  )
}