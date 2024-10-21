export interface ProjectContent {
  type: 'text' | 'image' | 'video'
  content?: string
  src?: string
  alt?: string
  span?: boolean
  videoId?: string
}

export interface Project {
  id: string
  title: string
  image: string
  description: string
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
  content: string
  sections: BioSection[]
}

export interface Contact {
  image: string
  content: string
}