import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project, Bio, Contact } from '../types'

export async function getMarkdownContent(filename: string): Promise<{ frontMatter: Omit<Project, 'id'> | Bio | Contact, content: string }> {
  const fullPath = path.join(process.cwd(), 'content', filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    frontMatter: data as Omit<Project, 'id'> | Bio | Contact,
    content
  }
}

export async function getAllProjectIds() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects')
  const filenames = fs.readdirSync(projectsDirectory)
  return filenames.map(filename => ({
    params: {
      id: filename.replace(/\.md$/, '')
    }
  }))
}