import fs from 'fs'
import path from 'path'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Fancybox from '@/components/Fancybox'
import { PROJECTS, getProjectBySlug } from '@/data/projects'

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

function readProjectImages(slug: string): { mainImage: string | null; gallery: string[]; missionImage: string | null } {
  const dir = path.join(process.cwd(), 'public', 'media', 'projet', slug)

  if (!fs.existsSync(dir)) {
    return { mainImage: null, gallery: [], missionImage: null }
  }

  const files = fs.readdirSync(dir).filter(f => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))

  const mainFile = files.find(f => path.parse(f).name.toLowerCase() === 'main') ?? null
  const missionFile = files.find(f => path.parse(f).name.toLowerCase() === 'mission') ?? null
  const galleryFiles = files.filter(f => {
    const name = path.parse(f).name.toLowerCase()
    return name !== 'main' && name !== 'mission'
  })

  const base = `/media/projet/${slug}`
  return {
    mainImage: mainFile ? `${base}/${mainFile}` : null,
    missionImage: missionFile ? `${base}/${missionFile}` : null,
    gallery: galleryFiles.map(f => `${base}/${f}`),
  }
}

export async function generateStaticParams() {
  const langs = ['fr', 'en', 'ar']
  return PROJECTS.flatMap(p => langs.map(lang => ({ lang, slug: p.slug })))
}

export const dynamicParams = false

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string; lang: string }> }) {
  const { slug, lang } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { mainImage, gallery, missionImage } = readProjectImages(slug)

  const currentIndex = PROJECTS.findIndex(p => p.slug === slug)
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null
  const otherProjects = PROJECTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <main className="bg-white">

      <Breadcrumbs />

      {/* Single-top */}
      <section className="single-top pb-12 pt-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            {prevProject ? (
              <Link href={`/${lang}/portfolio/${prevProject.slug}`} className="font-light text-[16px] uppercase text-black/50 hover:text-black flex items-center gap-2">
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.11706 2.66274C-0.0391501 2.81895 -0.0391501 3.07222 0.11706 3.22843L2.66264 5.77401C2.81885 5.93022 3.07212 5.93022 3.22833 5.77401C3.38454 5.6178 3.38454 5.36454 3.22833 5.20833L0.965588 2.94559L3.22833 0.682845C3.38454 0.526636 3.38454 0.27337 3.22833 0.11716C3.07212 -0.0390496 2.81885 -0.0390496 2.66264 0.11716L0.11706 2.66274ZM0.399902 2.94559V3.34559H30.6654V2.94559V2.54559H0.399902V2.94559Z" fill="#7C7C7C"/>
                </svg>
                Précédent
              </Link>
            ) : <span />}

            <div className="text-center text-[16px] font-light text-black">
              <span className="uppercase block mb-2">PROJETS · {project.category.toUpperCase()}</span>
              <h1 className="text-[32px] md:text-[45px] font-extrabold uppercase">{project.title}</h1>
              <div className="mt-2">{project.year}</div>
            </div>

            {nextProject ? (
              <Link href={`/${lang}/portfolio/${nextProject.slug}`} className="font-light text-[16px] uppercase text-black/50 hover:text-black flex items-center gap-2">
                Suivant
                <svg width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.5483 3.22843C30.7045 3.07222 30.7045 2.81895 30.5483 2.66274L28.0028 0.11716C27.8465 -0.0390496 27.5933 -0.0390496 27.4371 0.11716C27.2809 0.27337 27.2809 0.526636 27.4371 0.682845L29.6998 2.94559L27.4371 5.20833C27.2809 5.36454 27.2809 5.6178 27.4371 5.77401C27.5933 5.93022 27.8465 5.93022 28.0028 5.77401L30.5483 3.22843ZM0 2.94559V3.34559H30.2655V2.94559V2.54559H0V2.94559Z" fill="#7C7C7C"/>
                </svg>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      {/* Bannière principale */}
      {mainImage && (
        <section className="single-banner w-full overflow-hidden img-relative">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            className="object-cover relative"
            priority
          />
        </section>
      )}

      {/* Description */}
      <section className="single-description py-20 md:py-30">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="text-[40px] font-extrabold uppercase mb-6">
              {project.description}
            </h2>
            <div className="text-[16px] font-light space-y-4">
              {project.descriptionLong.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            {[
              { label: 'Client', value: project.client },
              { label: 'Année', value: project.year },
              { label: 'Superficie', value: project.surface },
              { label: 'Programme', value: project.programme },
            ].map((info, idx) => (
              <div key={idx} className="flex justify-between py-4 border-b border-gray-100 last:border-none text-[16px]">
                <span className="text-black font-semibold">{info.label}</span>
                <span className="text-black/50 font-light">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      {gallery.length > 0 && (
        <section className="single-gallery">
          <div className="container mx-auto">
            <Fancybox options={{ Carousel: { infinite: false } }}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {gallery.map((imagePath, index) => {
                  const total = gallery.length
                  const isOdd = total % 2 !== 0
                  const isLastThree = isOdd && total > 3 && index >= total - 3
                  const columnSpan = isLastThree
                    ? 'md:col-span-4'
                    : Math.floor(index / 2) % 2 === 0
                      ? index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5'
                      : index % 2 === 0 ? 'md:col-span-5' : 'md:col-span-7'

                  return (
                    <a
                      key={index}
                      href={imagePath}
                      data-fancybox="gallery"
                      className={`relative block overflow-hidden bg-gray-100 h-[380px] sm:h-[460px] md:h-[516px] cursor-zoom-in img-relative ${columnSpan}`}
                    >
                      <Image
                        src={imagePath}
                        alt={`${project.title} - ${index + 1}`}
                        fill
                        className="relative object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </a>
                  )
                })}
              </div>
            </Fancybox>
          </div>
        </section>
      )}

      {/* Section missions */}
      <section className="single-mission py-20 md:py-30 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center">
            {missionImage && (
              <div className="left-mission w-1/1 md:w-1/2 md:pr-10 lg:pr-20">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={missionImage}
                    alt="Conception architecturale"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}

            <div className={`right-mission w-1/1 ${missionImage ? 'md:w-1/2 md:pl-10 lg:pl-20' : ''}`}>
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
                  {project.missions.map((mission, index) => (
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

      {/* Autres projets */}
      <section className="single-others-projects py-20 md:py-30 bg-black">
        <div className="container mx-auto">
          <h2 className="text-[36px] uppercase text-center mb-16 font-extrabold text-white">D'autres réalisations.</h2>
          <div className="flex flex-wrap justify-between -mx-3">
            {otherProjects.map(other => (
              <div key={other.id} className="project-item w-1/1 md:w-1/3 px-3 group h-[380px] lg:h-[418px]">
                <div className="project-cover relative cursor-pointer overflow-hidden h-full w-full">
                  <Link className="absolute inset-0 z-1" href={`/${lang}/portfolio/${other.slug}`} />
                  <div className="project-image h-full">
                    <img src={other.thumbnail} alt={other.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="project-infos absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <span className="text-[14px] uppercase tracking-widest mb-2 opacity-80">{other.category.toUpperCase()} · {other.year}</span>
                    <h3 className="text-[20px] font-bold mb-1">{other.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
