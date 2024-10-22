import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

async function renameFiles() {
  const contentDir = path.join(process.cwd(), 'content/projects')
  const files = await fs.readdir(contentDir)
  let renamedFiles = []

  for (const file of files) {
    if (path.extname(file) === '.md') {
      const filePath = path.join(contentDir, file)
      const content = await fs.readFile(filePath, 'utf8')
      const { data } = matter(content)

      if (data.id && data.id !== path.parse(file).name) {
        const newPath = path.join(contentDir, `${data.id}.md`)
        await fs.rename(filePath, newPath)
        renamedFiles.push(`Renamed ${file} to ${data.id}.md`)
      }
    }
  }

  return renamedFiles
}

export async function GET() {
  try {
    const renamedFiles = await renameFiles()
    return NextResponse.json({ message: 'Files renamed successfully', renamedFiles }, { status: 200 })
  } catch (error) {
    console.error('Error renaming files:', error)
    return NextResponse.json({ error: 'Error renaming files' }, { status: 500 })
  }
}

export async function POST() {
  return GET()
}