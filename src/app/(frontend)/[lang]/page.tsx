export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }]
}

import React from 'react'
import '../styles.css'

import HeroSection from '@/components/home/HeroSection'
import AboutUsSection from '@/components/home/AboutUsSection'
import QuoteStatsSection from '@/components/home/QuoteStatsSection'
import VideoSection from '@/components/home/VideoSection'
import ServicesSection from '@/components/home/ServicesSection'
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection'
import ProcessSection from '@/components/home/ProcessSection'
import QuoteSection from '@/components/home/QuoteSection'

export default async function HomePage() {
  return (
    <div className="home">
      {/* 1. Home Hero Section */}
      <HeroSection />

      {/* 2. Home AboutUs Section */}
      <AboutUsSection />

      {/* 3. Home Stats Section */}
      <QuoteStatsSection />

      {/* 4. Home Stats Section */}
      <VideoSection />

      {/* 5. Home Stats Section */}
      <ServicesSection />

      {/* 6. Home Stats Section */}
      <FeaturedProjectsSection />

      {/* 7. Home Stats Section */}
      <ProcessSection />

      {/* 8. Home Stats Section */}
      <QuoteSection /> 

    </div>
  )
}
