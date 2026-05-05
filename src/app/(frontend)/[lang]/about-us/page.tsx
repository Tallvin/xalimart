export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }]
}

import HeroSection from '@/components/aboutus/HeroSection'
import ScrollTexte from '@/components/aboutus/ScrollTexte'
import AboutUs from '@/components/aboutus/AboutUs'
import AboutVision from '@/components/aboutus/AboutVision'
import AboutValeurs from '@/components/aboutus/AboutValeurs'
import AboutTeam from '@/components/aboutus/AboutTeam'

export default function AboutusPage() {
  return (
    <main className="aboutus-main min-h-screen bg-white">
      
      <HeroSection />
      <ScrollTexte />
      <AboutUs />
      <AboutVision />
      <AboutValeurs />
      <AboutTeam />

    </main>
  )
}