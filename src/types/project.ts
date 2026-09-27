export type ProjectStatus =
  | 'active'
  | 'inactive'
  | 'local'
  | 'development'
  | 'institutional'

export type ProjectCategory =
  | 'personal'
  | 'institutional'
  | 'academic'
  | 'collaborative'

export interface ProjectChallenge {
  problem: string
  approach: string
}

export interface ProjectRepository {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  myRole: string
  technologies: string[]
  category: ProjectCategory
  image: string
  screenshots?: string[]
  /** Single-repository projects. For multi-repo projects (e.g. separate front/back), use `repositories` instead. */
  github?: string
  /** Use when a project has more than one repository (e.g. frontend + backend). Takes precedence over `github` in the UI. */
  repositories?: ProjectRepository[]
  demo?: string
  video?: string
  features: string[]
  challenges?: ProjectChallenge[]
  architectureNote?: string
  featured: boolean
  status: ProjectStatus
  statusLabel: string
}