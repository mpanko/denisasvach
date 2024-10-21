export interface ProjectContent {
  type: 'text' | 'image' | 'youtube' | 'soundcloud'
  content?: string
  src?: string
  alt?: string
  span?: boolean
  youtubeId?: string
  soundcloudUrl?: string
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