import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Police Alexandria
        alexandria: ['Alexandria', 'sans-serif'],
        // 'gothic' devient votre nouvelle classe : font-gothic
        gothic: ['var(--font-century-gothic)', 'sans-serif'],
        // Si vous voulez qu'elle soit la police sans-serif par défaut :
        sans: ['var(--font-century-gothic)', 'ui-sans-serif', 'system-ui'],

      },
    },
  },
  plugins: [],
}
export default config

