import { notFound } from 'next/navigation'
import { projects } from '../../data/projects'
import ProjectDetail from '../../components/ProjectDetail'
import BackButton from '../../components/BackButton'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton />
      <ProjectDetail projectId={params.id} />
    </div>
  )
}