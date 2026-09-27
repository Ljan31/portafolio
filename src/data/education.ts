import type { EducationItem, CourseItem } from '@/types/profile'

export const education: EducationItem[] = [
  {
    id: 'licenciatura-informatica',
    title: 'Licenciatura en Informática',
    institution: 'Universidad Mayor de San Andrés',
    period: '2021–2026',
  },
  {
    id: 'tecnico-sistemas',
    title: 'Técnico Superior en Sistemas Informáticos',
    institution: 'Instituto Técnico Comercial La Paz',
    period: '2016–2019',
  },
]

export const complementaryCourses: CourseItem[] = [
  {
    id: 'dotnet-backend',
    title: '.NET Backend: .NET Core, SQL Server y seguridad JWT',
  },
  {
    id: 'microservicios-spring',
    title: 'Microservicios con Spring Boot y Spring Cloud Netflix Eureka',
  },
  {
    id: 'vuejs',
    title: 'Vue.js: De Cero a Experto (Composition API)',
  },
  {
    id: 'react',
    title: 'React: De Cero a Experto (Hooks y MERN)',
  },
  {
    id: 'nestjs',
    title: 'NestJS: Desarrollo Backend Escalable con Node.js',
  },
]
