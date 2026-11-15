import React from 'react'
import { notFound } from 'next/navigation'
import { getMarkdownContent, getAllProjectIds } from '../../utils/markdown'
import ProjectDetail from '../../components/ProjectDetail'
import { Project } from '../../types'

// Only the projects that exist in content/projects are generated.
export const dynamicParams = false

export async function generateStaticParams() {
  const projectIds = await getAllProjectIds()
  return projectIds.map(({ params }) => params)
}

export default async function ProjectPage({ params }: PageProps<'/project/[id]'>) {
  const { id } = await params
  const frontMatter = await getMarkdownContent(`projects/${id}.md`)
    .then(({ frontMatter }) => frontMatter as Omit<Project, 'id'>)
    .catch(() => notFound())

  const projectData: Project = { id, ...frontMatter }

  return (
    <div className="bg-black text-white">
      <ProjectDetail project={projectData} />
    </div>
  )
}
