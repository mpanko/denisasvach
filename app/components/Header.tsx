'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
    return `block text-xl uppercase font-bold transition-all duration-300 ${
      isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
    } p-2`
  }

  const navItems = [
    { name: 'Portfolio', href: '/' },
    { name: 'Bio', href: '/bio' },
    { name: 'Contact', href: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`sticky top-0 z-20 bg-white border-b-2 border-black transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold no-underline hover:no-underline hover:text-black hover:bg-transparent">
            DENISA SVACH
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-10 h-10" />
          </button>
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={getLinkClassName(item.href)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={getLinkClassName(item.href)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}