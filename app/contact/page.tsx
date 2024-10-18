import React from 'react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 uppercase">Contact</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src="/contact.jpg"
            alt="Denisa Svach"
            width={300}
            height={400}
            className="w-full h-auto object-cover border-2 border-black"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-xl mb-6 leading-relaxed">
            For inquiries about exhibitions, collaborations, or artwork purchases, please don't hesitate to get in touch.
          </p>
          <ul className="text-xl space-y-4">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@denisasvach.com" className="underline hover:bg-black hover:text-white">
                info@denisasvach.com
              </a>
            </li>
            <li>
              <strong>Studio Address:</strong>
              <br />
              123 Art Studio Lane
              <br />
              Prague, 110 00
              <br />
              Czech Republic
            </li>
            <li>
              <strong>Social Media:</strong>
              <br />
              Instagram:{' '}
              <a href="https://www.instagram.com/denisasvach" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white">
                @denisasvach
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}