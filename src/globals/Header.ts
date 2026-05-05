import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'En-tête',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoMain',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'logoBlack',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Liens de navigation',
      maxRows: 6,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true, // Pour traduire "Accueil", "Home", "الرئيسية"
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}