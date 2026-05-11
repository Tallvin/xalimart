export interface Project {
  id: number
  slug: string
  title: string
  category: string
  year: string
  specs: string[]
  description: string
  thumbnail: string
  client: string
  surface: string
  programme: string
  descriptionLong: string[]
  missions: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'virtuose',
    title: 'VIRTUOSE',
    category: 'Bureaux',
    year: '2025',
    specs: ['520 m² · Bureaux · R+1 · Saly'],
    description: 'Immeuble de grande hauteur alliant espaces de bureaux premium et surfaces commerciales.',
    thumbnail: '/media/projet/virtuose.jpg',
    client: 'Groupe Privé',
    surface: '520 m²',
    programme: 'Bureaux R+1',
    descriptionLong: [
      'Une architecture contemporaine pensée pour optimiser la productivité et le confort des occupants.',
      'Situé à Saly, ce bâtiment mixte intègre des espaces de bureaux premium avec des finitions haut de gamme.',
    ],
    missions: [
      'Conception architecturale',
      "Design d'intérieur",
      'Études techniques',
      'Supervision des travaux',
    ],
  },
  {
    id: 2,
    slug: 'villa-ichriss',
    title: 'VILLA I.CHRISS',
    category: 'Hôtellerie',
    year: '2026',
    specs: ['305 m² · RDC + Mez + 8 étages · 2026'],
    description: 'Une villa hôtelière conjuguant luxe et fonctionnalité sur plusieurs niveaux.',
    thumbnail: '/media/projet/villa-chriss.jpg',
    client: 'Propriétaire Privé',
    surface: '305 m²',
    programme: 'RDC + Mezzanine + 8 étages',
    descriptionLong: [
      "Une villa hôtelière d'exception conjuguant luxe et fonctionnalité sur plusieurs niveaux.",
      "Chaque étage a été conçu pour maximiser la luminosité et les vues sur l'environnement.",
    ],
    missions: [
      'Conception architecturale',
      "Design d'intérieur",
      'Études techniques',
      'Supervision des travaux',
      'Gestion de projet',
    ],
  },
  {
    id: 3,
    slug: 'musee-forces-armees',
    title: 'Musée des Forces Armées',
    category: 'Édifices publics',
    year: '2023',
    specs: ['623 m² · Édifice Public · 2023'],
    description: "Conception d'un édifice public emblématique alliant patrimoine et modernité.",
    thumbnail: '/media/projet/musee-armees.jpg',
    client: 'État du Sénégal',
    surface: '623 m²',
    programme: 'Édifice public',
    descriptionLong: [
      "Un musée conçu pour honorer l'histoire des forces armées tout en offrant une expérience muséographique moderne.",
      "L'architecture s'inscrit dans une démarche de valorisation du patrimoine national.",
    ],
    missions: [
      'Conception architecturale',
      'Études techniques',
      'Supervision des travaux',
    ],
  },
  {
    id: 4,
    slug: 'sadiya-tower',
    title: 'SADIYA TOWER',
    category: 'Bureaux',
    year: '2025',
    specs: ['1 742 m² · Mixte : Résidences, Bureaux, Hôtellerie'],
    description: 'Tour mixte alliant résidences, bureaux et espaces hôteliers dans un ensemble cohérent.',
    thumbnail: '/media/projet/sadiya-tower.jpg',
    client: 'Groupe Immobilier Privé',
    surface: '1 742 m²',
    programme: 'Bâtiment mixte',
    descriptionLong: [
      'Sadiya Tower est une tour mixte qui réunit résidences haut de gamme, bureaux et espaces hôteliers.',
      'Sa silhouette distinctive marque le paysage urbain de Dakar et illustre la vision de Xalimart Group.',
    ],
    missions: [
      'Conception architecturale',
      "Design d'intérieur",
      'Études techniques',
      'Supervision des travaux',
      'Gestion de projet',
    ],
  },
  {
    id: 5,
    slug: 'sci-diombadio',
    title: 'SCI DIOMBADIO',
    category: 'Résidentiel',
    year: '2024',
    specs: ['512 m² · Résidentiel · 2024'],
    description: "Ensemble résidentiel haut de gamme conçu autour d'un concept de vie communautaire.",
    thumbnail: '/media/projet/sci-diombadio.jpg',
    client: 'SCI Diombadio',
    surface: '512 m²',
    programme: 'Résidentiel',
    descriptionLong: [
      "Ensemble résidentiel haut de gamme conçu autour d'un concept de vie communautaire et d'espaces verts généreux.",
      "Implanté dans un quartier prisé de Dakar, ce projet incarne la vision de Xalimart Group.",
    ],
    missions: [
      'Conception architecturale',
      "Design d'intérieur",
      'Études techniques',
      'Supervision des travaux',
    ],
  },
  {
    id: 6,
    slug: 'villa-suisse',
    title: 'VILLA SUISSE',
    category: 'Résidentiel',
    year: '2022',
    specs: ['447 m² · SS+RDC+MEZZ+10 étages'],
    description: "Une résidence pensée pour l'excellence.",
    thumbnail: '/media/projet/villa-suisse.jpg',
    client: 'Groupe Immobilier Privé',
    surface: '447 m²',
    programme: 'SS + RDC + Mezzanine + 10 étages',
    descriptionLong: [
      'La Résidence Villa Suisse est un ensemble résidentiel haut de gamme conçu pour offrir une expérience de vie sans compromis.',
      'Implantée dans le quartier prisé des Almadies à Dakar, cette réalisation incarne la vision de Xalimart Group.',
    ],
    missions: [
      'Conception architecturale',
      "Design d'intérieur",
      'Études techniques',
      'Supervision des travaux',
      'Gestion de projet',
    ],
  },
  {
    id: 7,
    slug: 'the-edition',
    title: 'THE EDITION',
    category: 'Édifices publics',
    year: '2023',
    specs: ['550 m² · Résidentiel · 2023'],
    description: "Un projet résidentiel premium alliant esthétique contemporaine et fonctionnalité.",
    thumbnail: '/media/projet/the-edition.jpg',
    client: 'Investisseur Privé',
    surface: '550 m²',
    programme: 'Résidentiel',
    descriptionLong: [
      'The Edition est un projet résidentiel premium qui allie esthétique contemporaine et fonctionnalité.',
      'Chaque espace a été pensé pour offrir confort et élégance à ses occupants.',
    ],
    missions: [
      'Conception architecturale',
      "Design d'intérieur",
      'Études techniques',
      'Supervision des travaux',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}
