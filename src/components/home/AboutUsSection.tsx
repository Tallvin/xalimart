// src/components/AboutUsSection.tsx
import CounterNumber from '@/components/CounterNumber'
export default function AboutUsSection() {
  return (
    <section className="aboutus-section home-section bg-white py-30">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- COLONNE GAUCHE : TEXTE --- */}
        <div className="flex flex-col space-y-8">
          {/* Petit label avec ligne */}
          <div className="flex items-center gap-4">
            <span className="w-10 h-[1px] bg-gray-300"></span>
            <span className="text-gray-400 tracking-widest text-sm">About us</span>
          </div>

          {/* Titre principal */}
          <h2 className="text-black text-4xl md:text-[40px] font-extrabold uppercase leading-tight">
            Batir l'afrique de <br /> demain
          </h2>

          {/* Paragraphes */}
          <div className="space-y-6 text-black text-[16px] leading-relaxed max-w-lg">
            <p>
              Xalimart Group est un groupe pluridisciplinaire basé à Dakar, spécialisé dans la transformation des environnements urbains africains. Notre approche fusionne l'héritage architectural local avec les standards internationaux contemporains.
            </p>
            <p>
              De la conception à la livraison, nous accompagnons particuliers, entreprises et institutions dans la réalisation de leurs projets les plus ambitieux — résidentiels, commerciaux ou institutionnels.
            </p>
          </div>

          {/* Bouton Noir Arrondi */}
          <div>
            <button className="bg-black text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors cursor-pointer">
              En savoir plus
            </button>
          </div>
        </div>

        {/* --- COLONNE DROITE : COMPOSITION D'IMAGES --- */}
        <div className="relative flex justify-end">
          {/* Image Principale (Immeuble) */}
          <div className="relative z-10 overflow-hidden w-[562px] h-[469px] mb-[100px]">
            <img 
              src="/media/about-building.jpg" 
              alt="Architecture Xalimart" 
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Image Secondaire (Chantier) - Chevauchement en bas à gauche */}
          <div className="absolute bottom-0 left-0 z-20 w-2/3 hidden md:block overflow-hidden border-4 border-white w-[347px] h-[316px]">
            <img 
              src="/media/about-construction.jpg" 
              alt="Chantier en cours" 
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Badge Expérience - Noir en bas à droite */}
          <div className="absolute bottom-0 right-0 z-30 bg-black text-white py-3 px-6 flex items-center gap-5 min-w-[200px]">
            <span className="text-[40px] font-normal countnumber"><CounterNumber value={10}/>+</span>
            <div className="text-[18px] uppercase tracking-tighter leading-[28px] font-light">
              Années <br /> d'expériences
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}