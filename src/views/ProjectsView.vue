<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { featuredProjects, otherProjects } from '@/data/projects'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'

useSeo({
  title: `Proyectos | ${profile.name}`,
  description: 'Proyectos de desarrollo web y software realizados por Limberg Mamani.',
})
</script>

<template>
  <div class="container-page section-y">
    <h1 class="text-3xl font-bold tracking-tight">Proyectos</h1>
    <p class="mt-2 max-w-2xl text-(--color-text-muted)">
      Una selección de proyectos personales, institucionales y colaborativos que muestran mi
      forma de trabajar y las tecnologías con las que desarrollo.
    </p>

    <h2 class="mt-10 text-xl font-semibold">Destacados</h2>
    <div class="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>

    <h2 class="mt-12 text-xl font-semibold">Otros proyectos</h2>
    <div class="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in otherProjects" :key="project.id" :project="project" />
    </div>
  </div>
</template>
