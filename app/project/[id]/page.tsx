import React from 'react'
import { notFound } from 'next/navigation'
import { getMarkdownContent, getAllProjectIds } from '../../../utils/markdown'
import ProjectDetail from '../../components/ProjectDetail'

export async function generateStaticParams() {
  return getAllProjectIds()
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  try {
    const { frontMatter } = await getMarkdownContent(`projects/${params.id}.md`)
    return (
      <div className="container mx-auto px-4 pt-8 pb-16">
        <ProjectDetail projectId={params.id} project={frontMatter} />
      </div>
    )
  } catch (error) {
    notFound()
  }
}