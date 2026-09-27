import type { ExperienceItem } from '@/types/profile'

export const experience: ExperienceItem[] = [
  {
    id: 'umsa-humanidades',
    role: 'Desarrollador Front-End y Colaborador Back-End',
    organization: 'Facultad de Humanidades y Ciencias de la Educación — UMSA',
    period: '2025',
    type: 'institutional',
    responsibilities: [
      'Desarrollo del Front-End del Módulo de Seguimiento Bibliográfico Facultativo (SBF), contribuyendo a la modernización de la gestión bibliográfica de la facultad',
      'Participación en la migración del proyecto de Vue.js con JavaScript a Vue 3 con TypeScript',
    ],
  },
  {
    id: 'promocion-economica',
    role: 'Pasante en Informática / Apoyo Técnico y Administrativo',
    organization: 'Dirección de Promoción Económica y Transformación Industrial',
    period: '2025',
    type: 'internship',
    responsibilities: [
      'Apoyo en la organización, clasificación y digitalización de documentación institucional, contribuyendo a una gestión documental más eficiente',
      'Actualización de bases de datos, elaboración de índices documentales y soporte técnico a equipos informáticos y tareas administrativas',
    ],
  },
  {
    id: 'umsa-telematica',
    role: 'Auxiliar de Telemática',
    organization: 'UMSA — Carrera de Informática',
    period: '2024',
    type: 'teaching',
    responsibilities: [
      'Impartición de clases a estudiantes en el área de telemática, cubriendo conceptos teóricos y prácticos',
      'Evaluaciones y retroalimentación para mejorar el rendimiento académico de los alumnos',
    ],
  },
]
