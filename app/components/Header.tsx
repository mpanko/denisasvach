'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <header className="sticky top-0 z-20 bg-white bg-opacity-80 border-b-2 border-black">
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