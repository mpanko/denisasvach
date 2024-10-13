import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col font-akkurat bg-white">
    <Header />
    <main className="flex-grow container mx-auto px-0 py-0">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;