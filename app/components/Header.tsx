import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-light tracking-wider">
        DENISA SVACH
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-sm uppercase tracking-widest transition-all duration-300 hover:text-black">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/bio" className="text-sm uppercase tracking-widest transition-all duration-300 hover:text-black">
              Bio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm uppercase tracking-widest transition-all duration-300 hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;