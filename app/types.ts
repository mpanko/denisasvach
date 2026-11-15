// Shapes of the Markdown front matter, mirroring public/admin/config.yml.

export interface ProjectContent {
  type: 'text' | 'image' | 'youtube' | 'vimeo' | 'soundcloud'
  content?: string
  src?: string
  alt?: string
  span?: boolean
  vertical?: boolean
  youtubeId?: string
  vimeoId?: string
  soundcloudUrl?: string
}

export interface Project {
  id: string
  title: string
  image: string
  description: string
  order: number
  content: ProjectContent[]
}

export interface BioItem {
  year: string | number
  title: string
  institution?: string
  type?: string
  description?: string
  location?: string
}

export interface BioSection {
  title: string
  items: BioItem[]
}

export interface Bio {
  sections: BioSection[]
  body: string
}

export interface Contact {
  image: string
  body: string
}
