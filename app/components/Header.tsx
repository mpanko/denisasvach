'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

const navItems = [
  { name: 'Portfolio', href: '/' },
  { name: 'Bio', href: '/bio' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Hide the header while scrolling down, show it again when scrolling up.
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y < lastY || y < 50) setIsVisible(true)
      else if (y > 100 && y > lastY) setIsVisible(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Inactive links get the global hover inversion; the active one inverts the other way.
  const links = navItems.map(({ name, href }) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
    return (
      <li key={name}>
        <Link
          href={href}
          onClick={() => setIsMenuOpen(false)}
          className={`block p-2 text-xl uppercase font-bold transition-all duration-300 ${
            isActive ? 'bg-black text-white hover:bg-white hover:text-black' : ''
          }`}
        >
          {name}
        </Link>
      </li>
    )
  })

  return (
    <header
      className={`sticky top-0 z-20 bg-white border-b-2 border-black transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold hover:bg-transparent hover:text-black">
            DENISA SVACH
          </Link>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="w-10 h-10" />
          </button>
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">{links}</ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 absolute left-0 right-0 bg-white border-b-2 border-black">
            <ul className="space-y-2 px-4 py-4">{links}</ul>
          </nav>
        )}
      </div>
    </header>
  )
}
