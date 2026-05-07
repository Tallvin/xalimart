export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }]
}

import Breadcrumbs from '@/components/Breadcrumbs'

export default async function ServicesPage() {
  return (
    <div className="services">
      
      <Breadcrumbs />

      <section className="bg-while text-black pt-5 pb-20">
        <div className="container mx-auto text-center">
            Page en construction
        </div>
      </section>

    </div>
  )
}
