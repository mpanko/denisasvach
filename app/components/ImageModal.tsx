'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  const [iconColor, setIconColor] = useState<'white' | 'black'>('white')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = src
    img.onload = () => {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)
          const imageData = ctx.getImageData(0, 0, 50, 50)
          const data = imageData.data
          let sum = 0
          for (let i = 0; i < data.length; i += 4) {
            sum += data[i] + data[i + 1] + data[i + 2]
          }
          const average = sum / (data.length / 4) / 3
          setIconColor(average > 128 ? 'black' : 'white')
        }
      }
    }
  }, [src])

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 focus:outline-none"
          aria-label="Close fullscreen image"
        >
          <X size={24} className={`text-${iconColor}`} />
        </button>
        <Image
          src={src}
          alt={alt}
          className="max-h-[90vh] w-auto object-contain"
          width={1200}
          height={800}
        />
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  )
}

export default ImageModal