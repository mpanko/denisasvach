import React from 'react'
import { notFound } from 'next/navigation'
import { getMarkdownContent, getAllProjectIds } from '../../utils/markdown'
import ProjectDetail from '../../components/ProjectDetail'

interface ProjectContent {
  type: 'text' | 'image'
  content?: string
  src?: string
  alt?: string
  span?: boolean
}

interface ProjectFrontMatter {
  title: string
  content: ProjectContent[]
  [key: string]: unknown
}

export async function generateStaticParams() {
  const projectIds = await getAllProjectIds()
  return projectIds.map(({ params }) => params)
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  try {
    const { frontMatter } = await getMarkdownContent(`projects/${params.id}.md`)
    const projectData = frontMatter as ProjectFrontMatter
    return (
      <div className="container mx-auto px-4 pt-8 pb-16">
        <ProjectDetail project={projectData} />
      </div>
    )
  } catch {
    notFound()
  }
}