// src/components/aboutus/ScrollTexte.tsx

export default function ScrollTexte() {
  const items = [
    "Immobilier", "Design intérieur", "Architecture", 
    "Construction", "Transformation Urbaine", "Planification", "Innovation"
  ];

  // Correction : On utilise un fragment <> pour envelopper les deux spans
  const ListContent = () => (
    <>
      {items.map((item, index) => (
        <div key={index} className="inline-flex items-center">
          <span className="">•</span>
          <span className="">
            {item}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <section className="scroll-container">
      {/* Conteneur pour l'animation marquee */}
        <div className="scroll-content">
          <ListContent />
          <ListContent />
        </div>
    </section>
  );
}