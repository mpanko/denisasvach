import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getImagePath } from './utils/imagePath'
import { Project } from './types'

export default async function Home() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects')
  const filenames = fs.readdirSync(projectsDirectory)
  const projects: Project[] = filenames
    .map(filename => {
      const fullPath = path.join(projectsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        id: filename.replace(/\.md$/, ''),
        title: data.title,
        image: data.image,
        description: data.description,
        content: data.content,
        order: data.order || 0
      }
    })
    .sort((a, b) => b.order - a.order)

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link 
            key={project.id}
            href={`/project/${project.id}`} 
            className="block no-underline hover:no-underline group relative"
          >
            <div className="bg-white group-hover:bg-black">
              <div className="relative aspect-square w-full">
                <Image
                  src={getImagePath(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-4 group-hover:bg-black"
                />
              </div>
              <div className="pb-4 pl-4 pr-4 ">
                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-sm group-hover:text-white">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border-8 border-black opacity-0 group-hover:opacity-100"></div>
          </Link>
        ))}
      </div>
    </div>
  )
}