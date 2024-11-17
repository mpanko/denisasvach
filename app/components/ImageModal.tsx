'use client'

import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close fullscreen image"
        >
          <X size={24} />
        </button>
        <Image
          src={src}
          alt={alt}
          className="max-h-[90vh] w-auto object-contain"
          width={1200}
          height={800}
        />
      </div>
    </div>
  )
}

export default ImageModal