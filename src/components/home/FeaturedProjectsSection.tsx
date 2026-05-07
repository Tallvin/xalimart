// src/components/FeaturedProjectsSection.tsx
import Link from 'next/link'

const recentsProjects = [
  {
    image: "/media/projet6.jpg",
    tagsdate: "Résidentiel • 2024",
    title: "Virtuose",
    link: "/fr/portfolio/villa-suisse/"
  },
  {
    image: "/media/projet7.jpg",
    tagsdate: "Résidentiel • 2023",
    title: "VILLA I.CHRISS",
    link: "/fr/portfolio/villa-suisse/"
  },
  {
    image: "/media/projet8.jpg",
    tagsdate: "Institutionnel • 2023",
    title: "Musée des Forces Armées",
    link: "/fr/portfolio/villa-suisse/"
  },
  {
    image: "/media/projet9.jpg",
    tagsdate: "Bureau • 2023",
    title: "Bureaux CDC",
    link: "/fr/portfolio/villa-suisse/"
  },
  {
    image: "/media/projet10.jpg",
    tagsdate: "Hotel • 2023",
    title: "Siège Lonase",
    link: "/fr/portfolio/villa-suisse/"
  }
] 

export default function FeaturedProjectsSection() {
  return (
    <section className="featured-projects-section home-section bg-black py-24 text-white">
      <div className="container mx-auto">
        
        {/* --- EN-TÊTE : TITRE ET DESCRIPTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-[32px] md:text-[35px] lg:text-[40px] font-bold uppercase leading-tight">
            Nos projets <br /> récents
          </h2>
          <p className="max-w-xl text-white text-[16px] md:text-base leading-relaxed font-light">
            De la résidence privée au grand projet mixte, chaque réalisation Xalimart Group porte la même signature : une exigence absolue du détail, une maîtrise totale de l'espace et une vision architecturale qui transcende les tendances.
          </p>
        </div>

        {/* --- GRILLE DE PROJETS --- */}
        {/* Utilisation d'une grille à 6 colonnes pour permettre les variations 3/6 et 2/6 */}
        <div className="grid grid-cols-6 gap-6"> 
          {recentsProjects.map((project, index) => (
            <div 
              key={index} 
              className={`
                project-item group h-[360px] lg:h-[418px]
                ${index < 2 ? 'col-span-6 md:col-span-3' : 'col-span-6 md:col-span-2'}
              `}
            >
              <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
                <a className="absolute inset-0 z-2" href={project.link} title={project.title}></a>
                
                <div className="project-image h-full w-full">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Overlay sombre pour la lisibilité du texte */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                <div className="project-infos absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white z-1">
                  <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">{project.tagsdate}</span>
                  <h3 className="text-[20px] font-bold mb-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
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
