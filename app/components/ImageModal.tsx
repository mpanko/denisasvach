'use client'

import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 focus:outline-none"
          aria-label="Close fullscreen image"
        >
          <X size={24} className="text-white" />
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