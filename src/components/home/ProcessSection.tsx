// src/components/ProcessSection.tsx
export default function ProcessSection() {
  return (
    <section className="process-section home-section bg-black text-white py-24">
      <div className="container mx-auto">
        
        {/* --- TITRE DE LA SECTION --- */}
        <div className="text-center mb-24">
          <h2 className="text-[32px] md:text-[35px] lg:text-[40px] font-bold uppercase tracking-tight leading-tight">
            De la vision à <br /> la réalité .
          </h2>
        </div>

        {/* --- STEPPER (CONTENEUR DES ÉTAPES) --- */}
        <div className="relative">
          
          {/* Ligne horizontale de fond (cachée sur mobile si vous préférez une liste verticale) */}
          <div className="absolute top-6 left-0 w-full h-[1px] bg-white/30 hidden md:block" />

          {/* Grille des étapes */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
            
            {/* Étape 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[20px] w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold mb-8 transition-transform duration-300 group-hover:scale-110">
                1
              </div>
              <h3 className="text-[18px] font-bold mb-4">Découverte</h3>
              <p className="text-white font-light text-[14px] leading-relaxed max-w-[200px]">
                Analyse approfondie de vos besoins, du contexte et des contraintes du projet.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[20px] w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold mb-8 transition-transform duration-300 group-hover:scale-110">
                2
              </div>
              <h3 className="text-[18px] font-bold mb-4">Conception</h3>
              <p className="text-white font-light text-[14px] leading-relaxed max-w-[200px]">
                Élaboration des esquisses, plans et maquettes en accord avec votre vision.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[20px] w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold mb-8 transition-transform duration-300 group-hover:scale-110">
                3
              </div>
              <h3 className="text-[18px] font-bold mb-4">Validation</h3>
              <p className="text-white font-light text-[14px] leading-relaxed max-w-[200px]">
                Présentations interactives et ajustements jusqu'à l'approbation finale.
              </p>
            </div>

            {/* Étape 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[20px] w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold mb-8 transition-transform duration-300 group-hover:scale-110">
                4
              </div>
              <h3 className="text-[18px] font-bold mb-4">Exécution</h3>
              <p className="text-white font-light text-[14px] leading-relaxed max-w-[200px]">
                Suivi rigoureux du chantier avec équipes certifiées et reporting régulier.
              </p>
            </div>

            {/* Étape 5 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold mb-8 transition-transform duration-300 group-hover:scale-110">
                5
              </div>
              <h3 className="text-[18px] font-bold mb-4">Livraison</h3>
              <p className="text-white font-light text-[14px] leading-relaxed max-w-[200px]">
                Remise des clés et accompagnement post-livraison pour votre satisfaction totale.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
