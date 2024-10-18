import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './data/projects'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <Link href={`/project/${project.id}`} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden border-2 border-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="mt-4">
              <h3 className="text-2xl font-bold uppercase mt-1">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}