import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Denisa Svach Portfolio',
  description: 'Portfolio of visual artist Denisa Svach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}