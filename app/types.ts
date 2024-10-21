export interface ProjectContent {
  type: 'text' | 'image'
  content?: string
  src?: string
  alt?: string
  span?: boolean
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

export interface Bio {
  education: BioItem[]
  residencies: BioItem[]
  scenography: BioItem[]
  soloAndDuoShows: BioItem[]
  groupExhibitions: BioItem[]
  performances: BioItem[]
  content: string
}

export interface Contact {
  image: string
  content: string
}