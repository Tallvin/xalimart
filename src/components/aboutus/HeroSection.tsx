// src/components/aboutus/HeroSection.tsx

import Link from 'next/link'
import CounterNumber from '@/components/CounterNumber'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* --- IMAGE DE FOND AVEC OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/media/aboutus/hero-about.jpg" 
          alt="Architecture" 
          className="h-full w-full object-cover" 
        />
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="relative z-10 flex h-full flex-col justify-center py-24 min-h-[775px]">
        
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-[35px] md:text-[40px] lg:text-[50px] font-[800] uppercase text-white leading-[1.1] tracking-tighter">
              Une vision. <br />
              Une équipe. <br />
              Une signature.
            </h1>
            <div className="mt-10">
              <Link href={`/fr/portfolio/`} className="cursor-pointer inline-flex bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase transition-transform hover:scale-105">
                Voir nos projets
              </Link>
            </div>
          </div>

          {/* --- STATISTIQUES (BAS DE PAGE) --- */}
          <div className="mt-[60px] flex flex-wrap items-end justify-between gap-10">
            
            <div className="flex gap-12 md:gap-24">
              {/* Projets */}
              <div className="flex flex-col">
                <span className="countnumber text-4xl md:text-[60px] font-[400] text-white">
                  +<CounterNumber value={15} />
                </span>
                <span className="text-[14px] tracking-widest text-white font-light mt-2">
                  projets livrés
                </span>
              </div>

              {/* Expérience */}
              <div className="flex flex-col">
                <span className="countnumber text-4xl md:text-[60px] font-[400] text-white">
                  +<CounterNumber value={10} />
                </span>
                <span className="text-[14px] tracking-widest text-white font-light mt-2">
                  années d'expérience
                </span>
              </div>

              {/* Pays */}
              <div className="flex flex-col">
                <span className="countnumber text-4xl md:text-[60px] font-[400] text-white">
                  <CounterNumber value={8} />
                </span>
                <span className="text-[14px] tracking-widest text-white font-light mt-2">
                  pays couverts
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto absolute aboutus-scroll flex justify-end">
          {/* Indicateur Scroll (Droite) */}
            <div className="hidden md:flex flex-col items-center gap-3">
              <Link href="#scrolltext" className="cursor-pointer">
                <span className="text-[12px] uppercase text-white font-light">Scroll</span>
                <svg className="mx-auto mt-3" width="4" height="63" viewBox="0 0 4 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.66404 62.1768C1.76167 62.2744 1.91997 62.2744 2.0176 62.1768L3.60859 60.5858C3.70622 60.4882 3.70622 60.3299 3.60859 60.2322C3.51096 60.1346 3.35266 60.1346 3.25503 60.2322L1.84082 61.6464L0.426607 60.2322C0.328976 60.1346 0.170684 60.1346 0.0730534 60.2322C-0.0245777 60.3299 -0.0245777 60.4882 0.0730534 60.5858L1.66404 62.1768ZM1.84082 0L1.59082 0L1.59082 62H1.84082H2.09082L2.09082 0L1.84082 0Z" fill="white"/>
                </svg>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
