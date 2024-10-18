import React from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background image"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            filter: 'opacity(50%) saturate(100%) brightness(100%) contrast(100%)'
          }}
          quality={100}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}