// src/app/(frontend)/[lang]/layout.tsx
import React from 'react'
import localFont from 'next/font/local'
import '../main.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/media/favicon.png',
  },
}

const centuryGothic = localFont({
  src: [
    {
      path: '../../../../public/fonts/CenturyGothic.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/CenturyGothicBold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-century-gothic',
})

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html lang={lang} className={`${centuryGothic.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}