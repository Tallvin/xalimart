// src/components/FeaturedProjectsSection.tsx
export default function FeaturedProjectsSection() {
  return (
    <section className="featured-projects-section home-section bg-black py-24 px-6 md:px-12 lg:px-24 text-white">
      <div className="container mx-auto">
        
        {/* --- EN-TÊTE : TITRE ET DESCRIPTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-4xl md:text-[40px] font-extrabold uppercase leading-tight">
            Nos projets <br /> récents
          </h2>
          <p className="max-w-xl text-white text-[16px] md:text-base leading-relaxed font-light">
            De la résidence privée au grand projet mixte, chaque réalisation Xalimart Group porte la même signature : une exigence absolue du détail, une maîtrise totale de l'espace et une vision architecturale qui transcende les tendances.
          </p>
        </div>

        {/* --- GRILLE DE PROJETS --- */}
        {/* Utilisation d'une grille à 6 colonnes pour permettre les variations 3/6 et 2/6 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* PROJET 1 : VIRTUOSE (Largeur 3/6) */}
          <div className="md:col-span-3 group relative overflow-hidden aspect-[4/3] cursor-pointer">
            <img src="/media/projet1.jpg" alt="Virtuose" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Résidentiel • 2024</span>
              <h3 className="text-[20px] font-bold mb-1">Virtuose</h3>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-white"></span>
                <span className="text-[12px] uppercase tracking-wider">Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          {/* PROJET 2 : VILLA I.CHRISS (Largeur 3/6) */}
          <div className="md:col-span-3 group relative overflow-hidden aspect-[4/3] cursor-pointer">
            <img src="/media/projet2.jpg" alt="Villa I.Chriss" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Résidentiel • 2023</span>
              <h3 className="text-[20px] font-bold mb-1">Villa I.Chriss</h3>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-white"></span>
                <span className="text-[12px] uppercase tracking-wider">Yaoundé, Cameroun</span>
              </div>
            </div>
          </div>

          {/* PROJET 3 : MUSÉE DES FORCES ARMÉES (Largeur 2/6) */}
          <div className="md:col-span-2 group relative overflow-hidden aspect-[4/5] cursor-pointer">
            <img src="/media/projet3.jpg" alt="Musée" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Institutionnel • 2023</span>
              <h3 className="text-[20px] font-bold mb-1">Musée des Forces Armées</h3>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-white"></span>
                <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
              </div>
            </div>
          </div>

          {/* PROJET 4 : BUREAUX CDC (Largeur 2/6) */}
          <div className="md:col-span-2 group relative overflow-hidden aspect-[4/5] cursor-pointer">
            <img src="/media/projet4.jpg" alt="Bureaux CDC" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Bureau • 2023</span>
              <h3 className="text-[20px] font-bold mb-1">Bureaux CDC</h3>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-white"></span>
                <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
              </div>
            </div>
          </div>

          {/* PROJET 5 : SIÈGE LONASE (Largeur 2/6) */}
          <div className="md:col-span-2 group relative overflow-hidden aspect-[4/5] cursor-pointer">
            <img src="/media/projet5.jpg" alt="Siège Lonase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Hôtel • 2023</span>
              <h3 className="text-[20px] font-bold mb-1">Siège Lonase</h3>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-white"></span>
                <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOUTON FINAL --- */}
        <div className="mt-16 flex justify-center">
          <button className="bg-white text-black text-[14px] font-light px-8 py-3 rounded-full flex items-center gap-3 font-medium transition-transform hover:scale-105 cursor-pointer">
            Découvrez nos projets
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="black"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}