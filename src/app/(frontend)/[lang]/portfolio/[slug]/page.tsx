import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import VideoSection from '@/components/home/VideoSection'
import Fancybox from '@/components/Fancybox'

async function getProjectData(slug: string, lang: string) {
  return {
    title: "VILLA SUISSE",
    location: "R+8 Statut",
    year: "2023",
    surface: "4 200 m²",
    client: "Groupe Immobilier Privé",
    mainImage: "/media/projet/villa-suisse-large.jpg",
    gallery: [
      "/media/projet/2.jpeg",
      "/media/projet/3.jpeg"
    ],
    description: "UNE RÉSIDENCE PENSÉE POUR L'EXCELLENCE.",
    prevSlug: "projet-precedent",
    nextSlug: "projet-suivant"
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'fr', slug: 'villa-suisse' }
  ];
}
export const dynamicParams = false;

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string, lang: string }> }) {
  const resolvedParams = await params;
  const { slug, lang } = resolvedParams;
  const project = await getProjectData(slug, lang);

  return (
    <main className="bg-white">
        
      <Breadcrumbs />

      {/* Single-top */}
      <section className="single-top pb-12 pt-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href={`/${lang}/${project.prevSlug}`} className="font-light text-[16px] uppercase text-black/50 hover:text-black flex items-center gap-2 hidden">
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.11706 2.66274C-0.0391501 2.81895 -0.0391501 3.07222 0.11706 3.22843L2.66264 5.77401C2.81885 5.93022 3.07212 5.93022 3.22833 5.77401C3.38454 5.6178 3.38454 5.36454 3.22833 5.20833L0.965588 2.94559L3.22833 0.682845C3.38454 0.526636 3.38454 0.27337 3.22833 0.11716C3.07212 -0.0390496 2.81885 -0.0390496 2.66264 0.11716L0.11706 2.66274ZM0.399902 2.94559V3.34559H30.6654V2.94559V2.54559H0.399902V2.94559Z" fill="#7C7C7C"/>
                </svg>
                Précédent
            </Link>
            <div className="text-center text-[16px] font-light text-black w-full">
              <span className="uppercase block mb-2">PROJETS · BUREAUX</span>
              <h1 className="text-[32px] md:text-[45px] font-extrabold uppercase">{project.title}</h1>
              <div className="mt-2">2025</div>
            </div>
            <Link href={`/${lang}/${project.nextSlug}`} className="font-light text-[16px] uppercase text-black/50 hover:text-black flex items-center gap-2 hidden">
                Suivant
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5483 3.22843C30.7045 3.07222 30.7045 2.81895 30.5483 2.66274L28.0028 0.11716C27.8465 -0.0390496 27.5933 -0.0390496 27.4371 0.11716C27.2809 0.27337 27.2809 0.526636 27.4371 0.682845L29.6998 2.94559L27.4371 5.20833C27.2809 5.36454 27.2809 5.6178 27.4371 5.77401C27.5933 5.93022 27.8465 5.93022 28.0028 5.77401L30.5483 3.22843ZM0 2.94559V3.34559H30.2655V2.94559V2.54559H0V2.94559Z" fill="#7C7C7C"/>
                </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Single bannière */}
      <section className="single-banner w-full overflow-hidden img-relative">
        <Image 
          src="/media/projet/villa-suisse-large.jpg" 
          alt=""
          fill
          className="object-cover relative"
          priority 
        />
      </section>

      {/* Single description */}
      <section className="single-description py-20 md:py-30">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="text-[40px] font-extrabold uppercase mb-6">
              Une résidence<br />pensée pour l'excellence.
            </h2>
            <div className="text-[16px] font-light space-y-4">
              <p>La Résidence Teranga est un ensemble résidentiel haut de gamme conçu pour offrir une expérience de vie sans compromis. </p>
              <p>Implantée dans le quartier prisé des Almadies à Dakar, cette réalisation incarne la vision de Xalim’Art Group : créer des espaces qui élèvent le quotidien et s'inscrivent durablement dans leur environnement.</p>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="">
              {[
                { label: "Client", value: project.client },
                { label: "Année", value: project.year },
                { label: "Superficie", value: project.surface },
                { label: "Programme", value: project.location }
              ].map((info, idx) => (
                <div key={idx} className="flex justify-between py-4 border-b border-gray-100 last:border-none text-[16px]">
                  <span className="text-black font-semibold">{info.label}</span>
                  <span className="text-black/50 font-light">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* single Galerie */}
      <section className="single-gallery pb-25">
        <div className="container mx-auto">
          <Fancybox options={{ Carousel: { infinite: false } }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {project.gallery.map((imagePath, index) => {
                const total = project.gallery.length;
                const isOdd = total % 2 !== 0;
                const isLastThree = isOdd && total > 3 && index >= total - 3;

                let columnSpan = isLastThree 
                  ? "md:col-span-4" 
                  : (Math.floor(index / 2) % 2 === 0 
                      ? (index % 2 === 0 ? "md:col-span-7" : "md:col-span-5")
                      : (index % 2 === 0 ? "md:col-span-5" : "md:col-span-7"));

                return (
                  <a
                    key={index}
                    href={imagePath} // L'image en grand pour Fancybox
                    data-fancybox="gallery" // Groupe les images pour la navigation
                    className={`block overflow-hidden cursor-zoom-in col-span-6 img-relative`}
                  >
                    <Image
                      src={imagePath}
                      alt={`Galerie ${project.title} - ${index + 1}`}
                      fill
                      className="relative object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </a>
                );
              })}
            </div>
          </Fancybox>
        </div>
      </section>
      
      {/* Section mission */}
      <section className="single-mission py-20 md:py-30 bg-white hidden">
        <div className="container mx-auto">
          <div className="flex items-center">
            
            <div className="left-mission w-1/1 md:w-1/2 md:pr-10 lg:pr-20">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image 
                  src={"/media/singleproject/single6.jpg"} 
                  alt="Conception architecturale et plans"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="right-mission w-1/1 md:w-1/2 md:pl-10 lg:pl-20">
              <h2 className="text-[40px] font-extrabold uppercase mb-8 text-black">
                Ce que nous<br />avons conçu.
              </h2>
              
              <p className="text-black font-light mb-8 text-[16px]">
                Xalimart Group est intervenu sur l'ensemble du cycle du projet — de la 
                conception architecturale à la supervision des travaux. Notre approche 
                pluridisciplinaire a permis d'intégrer architecture, design d'intérieur et 
                ingénierie dans une vision cohérente et unifiée.
              </p>

              <div className="space-y-4 text-[16px]">
                <h3 className="font-semibold text-black text-[16px]">Missions réalisées</h3>
                
                <ul className="space-y-3">
                  {[
                    "Conception architecturale",
                    "Design d'intérieur",
                    "Études techniques",
                    "Supervision des travaux",
                    "Gestion de projet"
                  ].map((mission, index) => (
                    <li key={index} className="flex items-start gap-3 font-light">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {mission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
      

      {/* Single others projects */}
      <section className="single-others-projects py-20 md:py-30 bg-black">
        <div className="container mx-auto">
          <h2 className="text-[36px] uppercase text-center mb-16 font-extrabold text-white">D'autres réalisations.</h2>
          <div className="flex flex-wrap justify-between -mx-3">
          
            <div className="project-item w-1/1 md:w-1/3 px-3 group h-[380px] lg:h-[418px]">
              <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
                <a className="absolute inset-0 z-1" href="/fr/portfolio/villa-suisse/" title=""></a>
                <div className="project-image">
                  <img src="/media/singleproject/single8.jpg" alt="Musée" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">RESIDENTIEL • 2025</span>
                  <h3 className="text-[20px] font-bold mb-1">SCI DIOMBADIO</h3>
                  <div className="flex items-center gap-2 hidden">
                    <span className="w-5 h-[1px] bg-white"></span>
                    <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item w-1/1 md:w-1/3 px-3 group h-[380px] lg:h-[418px]">
              <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
                <a className="absolute inset-0 z-1" href="/fr/portfolio/villa-suisse/" title=""></a>
                <div className="project-image">
                  <img src="/media/singleproject/single9.jpg" alt="Bureaux CDC" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Bureau • 2023</span>
                  <h3 className="text-[20px] font-bold mb-1">The edition</h3>
                  <div className="flex items-center gap-2 hidden">
                    <span className="w-5 h-[1px] bg-white"></span>
                    <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item w-1/1 md:w-1/3 px-3 group h-[380px] lg:h-[418px]">
              <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
                <a className="absolute inset-0 z-1" href="/fr/portfolio/villa-suisse/" title=""></a>
                <div className="project-image">
                  <img src="/media/singleproject/single10.jpg" alt="Siège Lonase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">Batiments • 2025</span>
                  <h3 className="text-[20px] font-bold mb-1">Sadiya Tower</h3>
                  <div className="flex items-center gap-2 hidden">
                    <span className="w-5 h-[1px] bg-white"></span>
                    <span className="text-[12px] uppercase tracking-wider">Almadies, Dakar</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}