import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

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
      <body className={`${inter.className} ${robotoMono.variable} font-mono`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}