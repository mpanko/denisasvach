import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Denisa Svach',
  description: 'Portfolio of Denisa Svach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}