import ProjectDetail from '../../components/ProjectDetail'
import { getProject, getProjectIds } from '../../lib/content'

// Only projects that exist in content/projects are built; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return getProjectIds().map((id) => ({ id }))
}

export default async function ProjectPage({ params }: PageProps<'/project/[id]'>) {
  const { id } = await params

  return (
    <div className="inverted">
      <ProjectDetail project={getProject(id)} />
    </div>
  )
}
