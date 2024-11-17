import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { getImagePath } from '../utils/imagePath'
import { Project } from '../types'
import YouTubeEmbed from './YouTubeEmbed'
import SoundCloudEmbed from './SoundCloudEmbed'

type ProjectDetailProps = {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-12 uppercase text-center text-white">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.content.map((item, index) => (
          <div key={index} className={item.span ? "col-span-full" : ""}>
            {item.type === 'text' && item.content && (
              <div className="prose max-w-none">
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </div>
            )}
            {item.type === 'image' && item.src && (
              <div className={`relative ${item.vertical ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
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
              <YouTubeEmbed videoId={item.youtubeId} />
            )}
            {item.type === 'soundcloud' && item.soundcloudUrl && (
              <SoundCloudEmbed url={item.soundcloudUrl} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}