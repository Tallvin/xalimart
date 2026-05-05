export function generateStaticParams() {
  const langs = ['fr', 'en', 'ar']
  const slugs = ['virtuose', 'villa-i-chriss']
  return langs.flatMap(lang => slugs.map(slug => ({ lang, slug })))
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

// Cette fonction simulée récupère les données via Payload CMS plus tard
async function getProjectData(slug: string, lang: string) {
  // Simuler une récupération de données
  return {
    title: "VILLA I.CHRISS",
    location: "Dakar, Sénégal",
    year: "2023",
    surface: "1 500 m²",
    client: "Privé",
    mainImage: "/media/portfolio1.jpg",
    gallery: ["/media/portfolio1.jpg", "/media/portfolio2.jpg", "/media/portfolio3.jpg"],
    description: "UNE RÉSIDENCE PENSÉE POUR L'EXCELLENCE.",
    prevSlug: "projet-precedent",
    nextSlug: "projet-suivant"
  }
}

export default async function ProjectDetails({ params }: { params: { slug: string, lang: string } }) {
  const { slug, lang } = await params
  const project = await getProjectData(slug, lang)

  return (
    <main className="bg-white">
        
        <Breadcrumbs />

      {/* 1. HEADER DÉTAILS & NAVIGATION PREV/NEXT */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <Link href={`/${lang}/${project.prevSlug}`} className="text-[16px] uppercase text-black/50 hover:text-black flex items-center gap-2">
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.11706 2.66274C-0.0391501 2.81895 -0.0391501 3.07222 0.11706 3.22843L2.66264 5.77401C2.81885 5.93022 3.07212 5.93022 3.22833 5.77401C3.38454 5.6178 3.38454 5.36454 3.22833 5.20833L0.965588 2.94559L3.22833 0.682845C3.38454 0.526636 3.38454 0.27337 3.22833 0.11716C3.07212 -0.0390496 2.81885 -0.0390496 2.66264 0.11716L0.11706 2.66274ZM0.399902 2.94559V3.34559H30.6654V2.94559V2.54559H0.399902V2.94559Z" fill="#7C7C7C"/>
                </svg>
                Précédent
            </Link>
            <div className="text-center">
              <span className="text-[12px] uppercase tracking-[0.3em] text-gray-400 block mb-2">Projet Immobilier</span>
              <h1 className="text-[32px] md:text-[45px] font-bold uppercase tracking-tight">{project.title}</h1>
              <p className="text-gray-500 font-light italic mt-2">{project.location}</p>
            </div>
            <Link href={`/${lang}/${project.nextSlug}`} className="text-[16px] uppercase text-black/50 hover:text-black flex items-center gap-2">
                Suivant
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5483 3.22843C30.7045 3.07222 30.7045 2.81895 30.5483 2.66274L28.0028 0.11716C27.8465 -0.0390496 27.5933 -0.0390496 27.4371 0.11716C27.2809 0.27337 27.2809 0.526636 27.4371 0.682845L29.6998 2.94559L27.4371 5.20833C27.2809 5.36454 27.2809 5.6178 27.4371 5.77401C27.5933 5.93022 27.8465 5.93022 28.0028 5.77401L30.5483 3.22843ZM0 2.94559V3.34559H30.2655V2.94559V2.54559H0V2.94559Z" fill="#7C7C7C"/>
                </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. IMAGE PRINCIPALE (FULL WIDTH) */}
      <section className="w-full h-[70vh] relative overflow-hidden">
        <Image 
          src={project.mainImage} 
          alt={project.title} 
          fill 
          className="object-cover"
          priority 
        />
      </section>

      {/* 3. INFOS TECHNIQUES & DESCRIPTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="text-[28px] font-bold uppercase mb-6 leading-tight">
              Une résidence<br />pensée pour l'excellence.
            </h2>
            <div className="text-gray-500 font-light leading-relaxed space-y-4">
              <p>Au-delà de l'esthétique, la villa I.CHRISS incarne une vision moderne de l'habitat...</p>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="border-t border-gray-200">
              {[
                { label: "Client", value: project.client },
                { label: "Année", value: project.year },
                { label: "Superficie", value: project.surface },
                { label: "Localisation", value: project.location }
              ].map((info, idx) => (
                <div key={idx} className="flex justify-between py-4 border-b border-gray-100 uppercase tracking-widest text-[11px]">
                  <span className="text-gray-400 font-medium">{info.label}</span>
                  <span className="text-black font-bold">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRILLE DE GALERIE ASYMÉTRIQUE */}
      <section className="pb-20">
        <div className="container mx-auto px-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] bg-gray-100"><Image src="/media/portfolio1.jpg" fill alt="img" className="object-cover"/></div>
            <div className="relative aspect-[16/10] bg-gray-100"><Image src="/media/portfolio2.jpg" fill alt="img" className="object-cover"/></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="relative aspect-square bg-gray-100"><Image src="/media/portfolio3.jpg" fill alt="img" className="object-cover"/></div>
             <div className="relative aspect-square bg-gray-100"><Image src="/media/portfolio2.jpg" fill alt="img" className="object-cover"/></div>
          </div>
        </div>
      </section>

      {/* 5. SECTION VIDÉO / LARGE VIEW */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image src="/media/portfolio1.jpg" fill alt="video" className="object-cover brightness-75"/>
        <button className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
        </button>
      </section>

      {/* 6. D'AUTRES RÉALISATIONS (RECOMMANDATIONS) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-[14px] uppercase tracking-[0.4em] text-center mb-16 font-bold">D'autres réalisations.</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
            <div className="md:col-span-2 group relative overflow-hidden aspect-[4/5] cursor-pointer">
              <img src="/media/projet3.jpg" alt="Musée" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Institutionnel • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Musée des Forces Armées</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden aspect-[4/5] cursor-pointer">
              <img src="/media/projet4.jpg" alt="Bureaux CDC" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Bureau • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Bureaux CDC</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden aspect-[4/5] cursor-pointer">
              <img src="/media/projet5.jpg" alt="Siège Lonase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Hôtel • 2023</span>
                <h3 className="text-[20px] font-bold mb-1">Siège Lonase</h3>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-white"></span>
                  <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}