export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: 'institutional' | 'internship' | 'teaching'
  responsibilities: string[]
}

export interface EducationItem {
  id: string
  title: string
  institution: string
  period: string
}

export interface CourseItem {
  id: string
  title: string
}

export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}
