export interface ProjectContent {
  type: 'text' | 'image' | 'youtube' | 'vimeo' | 'soundcloud'
  content?: string
  src?: string
  alt?: string
  span?: boolean
  youtubeId?: string
  vimeoId?: string
  soundcloudUrl?: string
  vertical?: boolean
}

export interface Project {
  id: string
  title: string
  image: string
  description: string
  content: ProjectContent[]
  order: number
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