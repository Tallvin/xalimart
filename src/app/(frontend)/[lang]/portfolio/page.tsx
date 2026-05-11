export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }]
}

import PortfolioClient from '@/components/portfolio/PortfolioClient'

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return <PortfolioClient lang={lang} />
}
