// src/components/FeaturedProjectsSection.tsx
import Link from 'next/link'
export default function FeaturedProjectsSection() {
  return (
    <section className="featured-projects-section home-section bg-black py-24 text-white">
      <div className="container mx-auto">
        
        {/* --- EN-TÊTE : TITRE ET DESCRIPTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-[32px] md:text-[35px] lg:text-[40px] font-extrabold uppercase leading-tight">
            Nos projets <br /> récents
          </h2>
          <p className="max-w-xl text-white text-[16px] md:text-base leading-relaxed font-light">
            De la résidence privée au grand projet mixte, chaque réalisation Xalimart Group porte la même signature : une exigence absolue du détail, une maîtrise totale de l'espace et une vision architecturale qui transcende les tendances.
          </p>
        </div>

        {/* --- GRILLE DE PROJETS --- */}
        {/* Utilisation d'une grille à 6 colonnes pour permettre les variations 3/6 et 2/6 */}
        <div className="flex flex-wrap justify-between -mx-3">   
          <div className="project-item w-1/1 md:w-1/2 px-3 py-3 group h-[360px] lg:h-[418px]">
            <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
              <a className="absolute inset-0 z-1" href="/fr/portfolio/detail-projet/" title=""></a>
              <div className="project-image h-full w-full">
                <img src="/media/projet1.jpg" alt="Virtuose" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="project-infos absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Résidentiel • 2026</span>
                <h3 className="text-[20px] font-bold mb-1">Virtuose</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Dakar, Sénégal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item w-1/1 md:w-1/2 px-3 py-3 group h-[360px] lg:h-[418px]">
            <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
              <a className="absolute inset-0 z-1" href="/fr/portfolio/detail-projet/" title=""></a>
              <div className="project-image h-full w-full">
                <img src="/media/projet2.jpg" alt="Bureaux CDC" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Résidentiel • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Villa I.Chriss</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Yaoundé, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item w-1/1 md:w-1/3 px-3 py-3 group overflow-hidden cursor-pointer h-[360px] lg:h-[418px]">
            <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
              <a className="absolute inset-0 z-1" href="/fr/portfolio/detail-projet/" title=""></a>
              <div className="project-image h-full w-full">
                <img src="/media/projet3.jpg" alt="Musée des Forces Armées" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase mb-2 opacity-80">Institutionnel • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Musée des Forces Armées</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item w-1/1 md:w-1/3 px-3 py-3 group h-[360px] lg:h-[418px]">
            <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
              <a className="absolute inset-0 z-1" href="/fr/portfolio/detail-projet/" title=""></a>
              <div className="project-image h-full w-full">
                <img src="/media/projet4.jpg" alt="Bureaux CDC" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Bureaux • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Bureaux CDC</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item w-1/1 md:w-1/3 px-3 py-3 group h-[360px] lg:h-[418px]">
            <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
              <a className="absolute inset-0 z-1" href="/fr/portfolio/detail-projet/" title=""></a>
              <div className="project-image h-full w-full">
                <img src="/media/projet5.jpg" alt="Siège Lonase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Bureaux • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Siège Lonase</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOUTON FINAL --- */}
        <div className="projects-button mt-16 flex justify-center">
          <Link 
            href="/fr/portfolio" 
            className="bg-white text-black text-[14px] font-light px-8 py-3 rounded-full flex items-center gap-3 font-medium transition-transform hover:scale-105 cursor-pointer"
          >
            Découvrez nos projets
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="black"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
