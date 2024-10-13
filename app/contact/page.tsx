import React from 'react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-light mb-8 tracking-wide">Contact</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-6">
          For inquiries about exhibitions, collaborations, or artwork purchases, please don't hesitate to get in touch.
        </p>
        <div className="space-y-4">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@denisasvach.com" className="text-blue-600 hover:underline">
              info@denisasvach.com
            </a>
          </p>
          <p>
            <strong>Studio Address:</strong>
            <br />
            123 Art Studio Lane
            <br />
            Prague, 110 00
            <br />
            Czech Republic
          </p>
          <p>
            <strong>Social Media:</strong>
            <br />
            Instagram:{' '}
            <a href="https://www.instagram.com/denisasvach" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              @denisasvach
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}