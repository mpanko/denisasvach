import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './data/projects'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <div className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden border-2 border-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold uppercase text-center px-4">{project.title}</h2>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold uppercase mt-1">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}