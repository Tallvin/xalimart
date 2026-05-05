
export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }]
}

import Breadcrumbs from '@/components/Breadcrumbs'
export default function ContactPage() {
  return (
    
    <Breadcrumbs /> 
    
  )
}