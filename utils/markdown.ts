import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(process.cwd(), 'content', filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    frontMatter: data,
    content: contentHtml
  }
}

export function getAllProjectIds() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects')
  const filenames = fs.readdirSync(projectsDirectory)
  return filenames.map(filename => ({
    params: {
      id: filename.replace(/\.md$/, '')
    }
  }))
}