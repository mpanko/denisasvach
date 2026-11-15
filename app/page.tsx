import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from './lib/content'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getProjects().map((project) => (
          // Like every link, the card inverts to black on hover (see globals.css).
          <Link key={project.id} href={`/project/${project.id}`} className="group relative block">
            <div className="relative aspect-square w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover p-4"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-2xl font-bold uppercase mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="absolute inset-0 border-8 border-black opacity-0 group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  )
}
