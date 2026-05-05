// src/components/QuoteStatsSection.tsx

import CounterNumber from '@/components/CounterNumber'
export default function QuoteStatsSection() {
  return (
    <section className="quote-stats-section home-section bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* --- PARTIE GAUCHE (Inchangée) --- */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          <h2 className="text-[30px] md:text-[32px] lg:text-[36px] font-bold leading-tight max-w-[720px]">
            “ Nous ne construisons pas des bâtiments. Nous façonnons des expériences, des héritages. ”
          </h2>

          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-white text-[9px] uppercase tracking-[0.2em] font-light">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  Design . Excellence . Architecture .
                </textPath>
              </text>
            </svg>
            <div className="z-10 w-12">
              <svg width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4073 3.56104L0 28.6659H11.5732L25.639 10.683L46.6488 36.5001L30.9805 3.56104H19.4073Z" fill="white"/>
                <path d="M11.9292 0H0.177979L10.8609 13.3537L16.5585 6.05366L11.9292 0Z" fill="white"/>
                <path d="M23.1463 14.9561L17.8048 22.2561L23.1463 28.8439H34.3633L23.1463 14.9561Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* --- PARTIE DROITE : STATISTIQUES AVEC ANIMATION --- */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Stat 1 */}
          <div className="flex flex-col gap-2">
            <div className="countnumber text-5xl md:text-[65px] font-serif">
              +<CounterNumber value={15} />
            </div>
            <span className="text-white font-light text-[16px]">
              ans d'expertise
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-2">
            <div className="countnumber text-5xl md:text-[65px] font-serif">
              +<CounterNumber value={100} />
            </div>
            <span className="text-white font-light text-[16px]">
              projets réalisés
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-2">
            <div className="countnumber text-5xl md:text-[65px] font-serif">
              +<CounterNumber value={10} />
            </div>
            <span className="text-white font-light text-[16px]">
              pays d'intervention
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-2">
            <div className="countnumber text-5xl md:text-[65px] font-serif">
              <CounterNumber value={3} />
            </div>
            <span className="text-white font-light text-[16px] leading-snug">
              pôles d'excellence
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}