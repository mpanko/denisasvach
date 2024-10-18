import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm uppercase font-bold">
          © {new Date().getFullYear()} Denisa Svach. All rights reserved.
        </p>
      </div>
    </footer>
  )
}