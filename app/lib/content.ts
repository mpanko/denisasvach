import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Bio, Contact, Project } from '../types'

// All site content is Markdown with front matter in /content, edited through the CMS (/admin).
const contentDir = path.join(process.cwd(), 'content')

function readMarkdown(file: string) {
  return matter(fs.readFileSync(path.join(contentDir, file), 'utf8'))
}

export function getProjectIds(): string[] {
  return fs
    .readdirSync(path.join(contentDir, 'projects'))
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length))
}

export function getProject(id: string): Project {
  const { data } = readMarkdown(`projects/${id}.md`)
  return { ...data, id, order: data.order || 0 } as Project
}

/** All projects, highest `order` first (as shown on the portfolio page). */
export function getProjects(): Project[] {
  return getProjectIds()
    .map(getProject)
    .sort((a, b) => b.order - a.order)
}

export function getBio(): Bio {
  const { data, content } = readMarkdown('bio.md')
  return { sections: data.sections, body: content }
}

export function getContact(): Contact {
  const { data, content } = readMarkdown('contact.md')
  return { image: data.image, body: content }
}
