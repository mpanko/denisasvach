'use client'

import { useState } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import type { Project } from '../types'
import Embed from './Embed'
import ImageModal from './ImageModal'

export default function ProjectDetail({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.content.map((item, index) => (
          <div key={index} className={item.span ? 'col-span-full' : ''}>
            {index === 0 && <h1 className="text-5xl font-bold mb-6 uppercase">{project.title}</h1>}
            {item.type === 'text' && item.content && (
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>{item.content}</ReactMarkdown>
              </div>
            )}
            {item.type === 'image' && item.src && (
              <div
                className={`relative ${item.vertical ? 'aspect-[3/4]' : 'aspect-[4/3]'} cursor-pointer`}
                onClick={() => setSelectedImage(item.src ?? null)}
              >
                <Image
                  src={item.src}
                  alt={item.alt || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
            <Embed item={item} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal src={selectedImage} alt="Full size image" onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}
