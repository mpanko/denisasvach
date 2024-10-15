import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <Link key={project.id} href={`/project/${project.id}`}>
          <div className="group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h2 className="text-white text-2xl font-light tracking-wider">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}