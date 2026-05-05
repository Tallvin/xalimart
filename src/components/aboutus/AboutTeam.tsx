// src/components/aboutus/AboutTeam.tsx
const teamMembers = [
  {
    name: "Sidiki Camara",
    role: "CEO & Architecte",
    image: "/media/aboutus/sidiki.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    name: "Naba Soumah Cissé",
    role: "Directrice Adjointe",
    image: "/media/aboutus/naba.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    name: "El Hadji Malick Diakhate",
    role: "Directeur technique",
    image: "/media/aboutus/malick.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    name: "Seydou Ndiaye",
    role: "Chef de projet - Responsable pôle conception & Design",
    image: "/media/aboutus/seydou.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    name: "Ousseynou Mbaye",
    role: "Chef de pôle Dessinateur",
    image: "/media/aboutus/mbaye.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    name: "Sette Segnane",
    role: "Responsable des travaux",
    image: "/media/aboutus/sette.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    name: "Mariame Barry",
    role: "Directrice Commerciale",
    image: "/media/aboutus/mariame.jpg",
    links: { linkedin: "#", instagram: "#", twitter: "#" }
  }
]

export default function AboutTeam() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        
        {/* --- EN-TÊTE --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/50"></span>
              <span className="text-white/50 tracking-widest text-[16px] font-normal ">L'équipe</span>
            </div>
            <h2 className="text-white text-[30px] md:text-[32px] lg:text-[36px] font-[700] uppercase leading-[1.1] tracking-tighter">
              Des experts. <br />
              Une même exigence.
            </h2>
          </div>
          <div className="max-w-[570px] text-white text-[16px] font-light leading-relaxed">
            Xalim’Art Group réunit sous un même toit des profils complémentaires animés par une seule ambition — livrer l'exceptionnel.
          </div>
        </div>

        {/* --- GRILLE DES MEMBRES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col gap-6 group">
              {/* Conteneur Image avec Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:grayscale group-hover:scale-105 transition-all duration-500"
                />
                
                {/* OVERLAY RS - Apparaît au survol */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-5">
  
                  {/* LinkedIn */}
                  <a href={member.links.linkedin} className="text-white hover:text-gray-400 transition-colors" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>

                  {/* Instagram */}
                  <a href={member.links.instagram} className="text-white hover:text-gray-400 transition-colors" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>

                  {/* Twitter / X */}
                  <a href={member.links.twitter} className="text-white hover:text-gray-400 transition-colors" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>

                </div>
              </div>

              {/* Infos */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-[500] uppercase tracking-tight text-while">{member.name}</h3>
                <p className="text-[14px] text-[200] text-while">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
