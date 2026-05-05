// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="main-Footer">
      <section className="footer-contact footer-section py-24">
        <div className="container mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* --- PARTIE GAUCHE : INFOS DE CONTACT --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div className="sup-title flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/50"></span>
              <span className="text-white/50 tracking-widest text-[16px]">Contact</span>
            </div>
            
            <h2 className="footer-contact-title text-4xl md:text-[40px] font-extrabold uppercase leading-tight">
              Parlons de <br /> votre projet.
            </h2>

            <h2 className="footer-contact-title contact-title text-black text-4xl md:text-[40px] font-extrabold uppercase leading-tight hidden">
              Votre vision mérite <br /> d'être entendue.
            </h2>

            <div className="flex flex-col gap-8 mt-4">
              {/* Item: Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="black"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold  text-[16px]">Email</h4>
                  <p className="text-white font-light text-[16px]">contact@xalimartgroup.sn</p>
                </div>
              </div>

              {/* Item: Téléphone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.556 12.906L16.101 13.359C16.101 13.359 15.018 14.435 12.063 11.497C9.108 8.55898 10.191 7.48298 10.191 7.48298L10.477 7.19698C11.184 6.49498 11.251 5.36698 10.634 4.54298L9.374 2.85998C8.61 1.83998 7.135 1.70498 6.26 2.57498L4.69 4.13498C4.257 4.56698 3.967 5.12498 4.002 5.74498C4.092 7.33198 4.81 10.745 8.814 14.727C13.061 18.949 17.046 19.117 18.675 18.965C19.191 18.917 19.639 18.655 20 18.295L21.42 16.883C22.38 15.93 22.11 14.295 20.882 13.628L18.972 12.589C18.166 12.152 17.186 12.28 16.556 12.906Z" fill="black"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold  text-[16px]">Téléphone</h4>
                  <p className="text-white font-light text-[16px]">+221 77 624 07 07</p>
                </div>
              </div>

              {/* Item: Adresse */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 5.30377C14.533 2.23077 9.46802 2.23077 6.34402 5.30377C5.6023 6.02841 5.01293 6.894 4.61053 7.84968C4.20814 8.80536 4.00085 9.83184 4.00085 10.8688C4.00085 11.9057 4.20814 12.9322 4.61053 13.8879C5.01293 14.8435 5.6023 15.7091 6.34402 16.4338L12 21.9988L17.657 16.4338C18.3987 15.7091 18.9881 14.8435 19.3905 13.8879C19.7929 12.9322 20.0002 11.9057 20.0002 10.8688C20.0002 9.83184 19.7929 8.80536 19.3905 7.84968C18.9881 6.894 18.3987 6.02841 17.657 5.30377ZM12 13.4988C11.332 13.4988 10.705 13.2388 10.232 12.7668C9.76377 12.2975 9.50079 11.6617 9.50079 10.9988C9.50079 10.3359 9.76377 9.70002 10.232 9.23077C10.704 8.75877 11.332 8.49877 12 8.49877C12.668 8.49877 13.296 8.75877 13.768 9.23077C14.2363 9.70002 14.4992 10.3359 14.4992 10.9988C14.4992 11.6617 14.2363 12.2975 13.768 12.7668C13.296 13.2388 12.668 13.4988 12 13.4988Z" fill="black"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold  text-[16px]">Adresse</h4>
                  <p className="text-white font-light text-[16px] max-w-[250px]">Flanc des Mamelles, Residence Sadiya Tower, Dakar-Senegal</p>
                </div>
              </div>

              {/* Item: Horaires */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6V11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H11.8C12.1183 13 12.4235 12.8736 12.6485 12.6485C12.8736 12.4235 13 12.1183 13 11.8V6Z" fill="black"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold  text-[16px]">Horaires</h4>
                  <p className="text-white font-light text-[16px]">lun- Sam : 09h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- PARTIE DROITE : FORMULAIRE --- */}
          <div className="w-full lg:w-1/2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white font-light text-[14px]">Nom Prénom</label>
                <input type="text" className="bg-transparent border-b border-white py-0 outline-none focus:border-white transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white font-light text-[14px]">Company</label>
                <input type="text" className="bg-transparent border-b border-white py-0 outline-none focus:border-white transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white font-light text-[14px]">Email</label>
                <input type="email" className="bg-transparent border-b border-white py-0 outline-none focus:border-white transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white font-light text-[14px]">Téléphone</label>
                <input type="tel" className="bg-transparent border-b border-white py-0 outline-none focus:border-white transition-colors" />
              </div>

              {/* Type de projet (Checkboxes) */}
              <div className="md:col-span-2 flex flex-col gap-6">
                <label className="text-xs text-white font-light text-[14px]">Type de projet</label>
                <div className="flex flex-wrap gap-6">
                  {['RESIDENTIEL', 'COMMERCIAL', 'INSTITUTIONNEL', 'INTÉRIEUR'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-white bg-transparent rounded-none checked:bg-white" />
                      <span className="text-[10px] md:text-xs tracking-widest group-hover:text-white transition-colors text-white font-light text-[12px]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs text-white font-light text-[14px]">Partagez les détails de votre vision</label>
                <textarea rows={1} className="bg-transparent border-b border-white py-2 outline-none focus:border-white transition-colors resize-none"></textarea>
              </div>

              <div className="md:col-span-2 mt-8">
                <button type="submit" className="bg-white text-black px-10 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
                  Envoyer un message
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>
      
      <section className="contact-maps pb-24 hidden">
        <div className="container mx-auto">
          <img src="/media/map.jpg" alt="Xalimart Group" className="w-full object-contain" />
        </div>
      </section>

      <section className="footer-bottom footer-section bg-black text-white pt-20 pb-10 border-t border-white-400">
        <div className="container mx-auto">
          
          {/* --- PARTIE SUPÉRIEURE : LOGO ET NAVIGATION --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Colonne 1 : Logo et Réseaux Sociaux */}
            <div className="flex flex-col gap-10">
              <div className="w-48">
                <img src="/media/logo-footer.png" alt="Xalimart Group" className="w-full object-contain" />
              </div>
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Colonne 2 : Espace vide (Optionnel pour l'équilibre visuel) */}
            <div className="hidden lg:block"></div>

            {/* Colonne 3 : Navigation */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-extrabold uppercase leading-tight">Navigation</h4>
              <ul className="flex flex-col gap-4 text-white-300 text-[12px] font-light">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Colonne 4 : Services */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-extrabold uppercase leading-tight">Services</h4>
              <ul className="flex flex-col gap-4 text-white font-light text-[12px] font-light">
                <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design d'intérieur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Immobilier</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Urbanisme</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
              </ul>
            </div>
          </div>

          {/* --- PARTIE INFÉRIEURE : COPYRIGHT ET LÉGAL --- */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white font-extralight text-[12px] tracking-wide">
              Xalimart Group © 2026. All Rights Reserved.
            </p>
            
            <div className="flex gap-8 text-white font-extralight text-[12px] tracking-wide">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>

        </div>
      </section>
    </footer>
  )
}