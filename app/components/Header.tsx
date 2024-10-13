import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="sticky top-0 z-10 bg-white">
    <div className="container mx-auto px-4 pt-10 pb-2 flex justify-between items-center">
      <Link href="/" className="text-2xl font-light tracking-wider">
        Denisa Svach
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-m tracking-widest transition-all duration-300 hover:text-black">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/bio" className="text-m tracking-widest transition-all duration-300 hover:text-black">
              Bio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-m tracking-widest transition-all duration-300 hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;