import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col font-akkurat bg-gray-50">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-12">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;