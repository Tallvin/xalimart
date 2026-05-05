// src/components/portfolio/PortfolioCard.tsx
interface ProjectProps {
  title: string;
  specs: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function PortfolioCard({ title, specs, description, image, reverse }: ProjectProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center border-b border-gray-100 pb-12`}>
      
      <div className="w-full md:w-1/2 overflow-hidden bg-gray-100 aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
        />
      </div>
      
      <div className="w-full md:w-1/2 flex items-between py-5">
        <div className="text-gray-600 mb-8 leading-relaxed">
          <h3 className="text-3xl font-termina font-bold mb-2 uppercase">{title}</h3>
          <span className="text-xs font-medium tracking-widest text-gray-400 mb-6 uppercase">
            {specs}
          </span>
        </div>
        <div className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </div>
        <button className="px-8 py-3 border round-lg text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center gap-2">
          Voir le projet <span>↗</span>
        </button>
      </div>
    </div>
  )
}