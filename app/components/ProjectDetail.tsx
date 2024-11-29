'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { getImagePath } from '../utils/imagePath'
import { Project } from '../types'
import YouTubeEmbed from './YouTubeEmbed'
import VimeoEmbed from './VimeoEmbed'
import SoundCloudEmbed from './SoundCloudEmbed'
import ImageModal from './ImageModal'

type ProjectDetailProps = {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.content.map((item, index) => (
          <div key={index} className={item.span ? "col-span-full" : ""}>
            {index === 0 && (
              <h1 className="text-5xl font-bold mb-6 uppercase text-white">{project.title}</h1>
            )}
            {item.type === 'text' && item.content && (
              <div className="prose max-w-none">
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </div>
            )}
            {item.type === 'image' && item.src && (
              <div 
                className={`relative ${item.vertical ? 'aspect-[3/4]' : 'aspect-[4/3]'} cursor-pointer`}
                onClick={() => setSelectedImage(getImagePath(item.src!))}
              >
                <Image
                  src={getImagePath(item.src)}
                  alt={item.alt || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
            {item.type === 'youtube' && item.youtubeId && (
              <YouTubeEmbed videoId={item.youtubeId} vertical={item.vertical} />
            )}
            {item.type === 'vimeo' && item.vimeoId && (
              <VimeoEmbed videoId={item.vimeoId} vertical={item.vertical} />
            )}
            {item.type === 'soundcloud' && item.soundcloudUrl && (
              <SoundCloudEmbed url={item.soundcloudUrl} />
            )}
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Full size image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

