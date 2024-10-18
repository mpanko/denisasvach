'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
    return `block text-xl uppercase font-bold transition-all duration-300 ${
      isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
    } p-2`
  }

  return (
    <header className="sticky top-0 z-10 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <Link href="/" className="text-4xl font-bold mb-4 md:mb-0">
          DENISA SVACH
        </Link>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            {[
              { name: 'Portfolio', href: '/' },
              { name: 'Bio', href: '/bio' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <li key={item.name} className="w-full md:w-auto">
                <Link 
                  href={item.href}
                  className={getLinkClassName(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}