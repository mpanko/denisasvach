import React from 'react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src="/contact.jpg"
            alt="Denisa Svach"
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>      
        <div className="md:w-1/2 text-white">
          <p className="text-lg mb-6">
            For inquiries about exhibitions, collaborations, or artwork purchases, please don't hesitate to get in touch.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@denisasvach.com" className="text-blue-300 hover:underline">
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
              <a href="https://www.instagram.com/denisasvach" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                @denisasvach
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}