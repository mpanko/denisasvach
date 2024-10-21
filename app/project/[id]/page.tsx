import React from 'react'
import { notFound } from 'next/navigation'
import { getMarkdownContent, getAllProjectIds } from '../../utils/markdown'
import ProjectDetail from '../../components/ProjectDetail'
import { Project } from '../../types'

export async function generateStaticParams() {
  const projectIds = await getAllProjectIds()
  return projectIds.map(({ params }) => params)
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  try {
    const { frontMatter } = await getMarkdownContent(`projects/${params.id}.md`)
    const projectData: Project = {
      id: params.id,
      ...frontMatter as Omit<Project, 'id'>
    }
    return (
      <div className="container mx-auto px-4 pt-8 pb-16">
        <ProjectDetail project={projectData} />
      </div>
    )
  } catch {
    notFound()
  }
}