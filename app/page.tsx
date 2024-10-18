import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './data/projects'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <h1 className="text-5xl font-bold mb-12 uppercase text-center">Denisa Svach Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden border-2 border-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold uppercase">{project.title}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}