import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 py-6">
    <div className="container mx-auto px-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Denisa Svach. All rights reserved.
    </div>
  </footer>
);

export default Footer;