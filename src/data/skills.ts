import type { SkillCategory } from '@/types/profile'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['Vue 3', 'TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'ASP.NET Core', 'PHP', 'Laravel'],
  },
  {
    id: 'databases',
    label: 'Bases de datos',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    skills: ['Flutter', 'React Native'],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: ['Git', 'Docker', 'Postman'],
  },
]
