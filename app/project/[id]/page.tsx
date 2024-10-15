import React from 'react'
import { notFound } from 'next/navigation'
import { projects } from '../../data/projects'
import ProjectDetail from '../../components/ProjectDetail'

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
    <div className="container mx-auto px-4 pt-8 pb-16">
      <ProjectDetail projectId={params.id} />
    </div>
  )
}