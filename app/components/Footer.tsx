import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-transparent py-6">
      <div className="container mx-auto px-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Denisa Svach. All rights reserved.
      </div>
    </footer>
  )
}