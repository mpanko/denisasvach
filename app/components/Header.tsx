'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return `text-sm uppercase tracking-widest transition-all duration-300 hover:text-black hover:font-bold ${
      isActive ? 'text-black font-bold' : ''
    }`;
  };

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light tracking-wider">
          Denisa Svach
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className={getLinkClassName('/')}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/bio" className={getLinkClassName('/bio')}>
                Bio
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClassName('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;