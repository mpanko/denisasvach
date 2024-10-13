import { notFound } from 'next/navigation'
import { projects } from '../../data/projects'
import Image from 'next/image'
import BackButton from '../../components/BackButton'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton />
      <h1 className="text-4xl font-light my-8 tracking-wide">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.content.map((item, index) => (
          <div key={index} className={item.span ? "col-span-full" : ""}>
            {item.type === 'text' && (
              <p className="text-lg leading-relaxed text-gray-700">{item.content}</p>
            )}
            {item.type === 'image' && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt || 'Project image'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-sm"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}