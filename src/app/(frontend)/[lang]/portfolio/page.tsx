export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }]
}

import PortfolioClient from '@/components/portfolio/PortfolioClient'

export default function ProjectsPage() {
  return <PortfolioClient />
}
