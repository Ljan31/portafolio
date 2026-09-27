<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import ProjectCard from '@/components/ProjectCard.vue'
import { featuredProjects } from '@/data/projects'
</script>

<template>
  <section class="container-page section-y border-t" style="border-color: var(--color-border)">
    <div class="flex items-end justify-between gap-4">
      <h2 class="text-2xl font-semibold tracking-tight">Proyectos destacados</h2>
      <RouterLink
        to="/projects"
        class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-(--color-text-muted) hover:text-(--color-text)"
      >
        Ver todos
        <ArrowRight :size="14" />
      </RouterLink>
    </div>
    <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
