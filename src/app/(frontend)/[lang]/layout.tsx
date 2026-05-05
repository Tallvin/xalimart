// src/app/(frontend)/[lang]/layout.tsx
import React from 'react'
import '../main.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}