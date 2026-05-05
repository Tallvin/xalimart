import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

// Mes ajouts imports
import { CollectionConfig } from 'payload'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Config langues :
  localization: {
    locales: [
      {
        label: 'Français',
        code: 'fr',
      },
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'العربية (Arabic)',
        code: 'ar',
        rtl: true,
      },
    ],
    defaultLocale: 'fr',
    fallback: true,
  },

  // Header
  globals: [
    Header,
    Footer,
  ],

  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: 'file:./payload-dev.db',
    },
  }),
  sharp,
  plugins: [],
})

