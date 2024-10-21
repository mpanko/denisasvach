import React from 'react'
import Image from 'next/image'
import { getImagePath } from '../utils/imagePath'

type ProjectContent = {
  type: 'text' | 'image'
  content?: string
  src?: string
  alt?: string
  span?: boolean
}

type ProjectDetailProps = {
  project: {
    title: string
    content: ProjectContent[]
    [key: string]: unknown
  }
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="container mx-auto px-0">
      <h1 className="text-5xl font-bold mb-12 uppercase text-center">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.content.map((item, index) => (
          <div key={index} className={item.span ? "col-span-full" : ""}>
            {item.type === 'text' && (
              <p className="text-lg leading-relaxed bg-white bg-opacity-80 p-4">{item.content}</p>
            )}
            {item.type === 'image' && item.src && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={getImagePath(item.src)}
                  alt={item.alt || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}