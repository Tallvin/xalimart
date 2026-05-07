// src/components/aboutus/AboutVision.tsx

export default function AboutVision() {
    return (
        <section className="vision-section bg-black text-white py-24">
            <div className="container mx-auto">
                
                {/* --- EN-TÊTE : TITRE ET DESCRIPTION --- */}
                <div className="flex justify-between gap-10 items-center mb-16">
                
                    {/* Gauche : Label et Titre */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/50"></span>
                        <span className="text-white/50 uppercase tracking-widest text-xs font-medium">Notre vision</span>
                        </div>
                        
                        <h2 className="text-[30px] md:text-[32px] lg:text-[36px] font-bold uppercase max-w-md">
                            Transformer <br /> les territoires.
                        </h2>
                    </div>

                    {/* Droite : Texte de description */}
                    <div className="max-w-[630px] text-white text-[16px] font-light leading-relaxed">
                        Xalimart Group s'est donné pour mission de s'imposer comme un cabinet de référence à l'échelle mondiale. Nous concevons des espaces qui répondent aux standards les plus exigeants de l'architecture et du développement immobilier contemporain, quel que soit le territoire, quelle que soit l'envergure du projet.
                    </div>

                </div>

                {/* --- IMAGE LARGE --- */}
                <div className="w-full overflow-hidden shadow-2xl">
                    <img 
                        src="/media/aboutus/vision.jpg" 
                        alt="Équipe de travail sur plan" 
                        className="mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 cursor-pointer w-full h-auto object-cover duration-700 ease-in-out"
                    />
                </div>

            </div>
        </section>
    )
}
