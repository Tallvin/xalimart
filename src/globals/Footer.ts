import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Pied de page',
  fields: [
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Réseaux Sociaux',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Facebook', value: 'facebook' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Informations de contact',
      fields: [
        { name: 'email', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea', localized: true },
      ],
    },
  ],
}