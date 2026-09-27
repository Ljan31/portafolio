<script setup lang="ts">
import { RouterLink } from 'vue-router'
// import { Github, Linkedin, Download, ArrowRight } from 'lucide-vue-next'
import { Github, Linkedin, ArrowRight } from 'lucide-vue-next'
import { profile } from '@/data/profile'
</script>

<template>
  <section class="container-page pt-14 pb-10 sm:pt-20 sm:pb-14">
    <p class="font-mono text-sm" style="color: var(--color-accent)">Hola, soy</p>
    <h1 class="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
      {{ profile.name }}
    </h1>
    <h2 class="mt-2 text-xl sm:text-2xl font-medium text-(--color-text-muted)">
      {{ profile.title }}
    </h2>
    <p class="mt-5 max-w-2xl text-base sm:text-lg text-(--color-text-muted)">
      {{ profile.shortBio }}
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-3">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        style="background-color: var(--color-accent); color: var(--color-accent-contrast)"
      >
        Ver proyectos
        <ArrowRight :size="16" />
      </RouterLink>
      <!-- <a
        :href="profile.cvUrl"
        download
        class="card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:border-(--color-accent)"
      >
        <Download :size="16" />
        Descargar CV
      </a> -->
      <a
        :href="profile.github"
        target="_blank"
        rel="noopener noreferrer"
        class="card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:border-(--color-accent)"
      >
        <Github :size="16" />
        GitHub
      </a>
      <a
        :href="profile.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:border-(--color-accent)"
      >
        <Linkedin :size="16" />
        LinkedIn
      </a>
    </div>
  </section>
</template>
