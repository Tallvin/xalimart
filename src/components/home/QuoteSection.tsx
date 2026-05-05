// src/components/QuoteSection.tsx
export default function QuoteSection() {
  return (
    <section className="quote-section home-section bg-[#C0C0C0] py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-[760px] mx-auto text-center">
        
        <blockquote className="relative">
          {/* Texte de la citation */}
          <h2 className="text-black text-[32px] md:text-[35px] lg:text-[40px] font-extrabold leading-tight md:leading-snug tracking-tight">
            "Nous ne construisons pas simplement des bâtiments. 
            Nous créons des lieux de vie qui transcendent 
            le temps et façonnent l'identité urbaine africaine."
          </h2>
        </blockquote>

      </div>
    </section>
  )
}