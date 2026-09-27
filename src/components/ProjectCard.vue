<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Code2, ExternalLink, ArrowRight } from 'lucide-vue-next'
import type { Project } from '@/types/project'

const props = defineProps<{ project: Project }>()

const primaryRepoUrl = computed(
  () => props.project.repositories?.[0]?.url ?? props.project.github,
)
</script>

<template>
  <article class="card flex flex-col overflow-hidden transition-colors hover:border-(--color-accent)">
    <RouterLink :to="`/projects/${project.id}`" class="block aspect-video bg-(--color-bg-subtle)">
      <img
        :src="project.image"
        :alt="`Captura del proyecto ${project.title}`"
        class="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onerror="this.style.display='none'"
      />
    </RouterLink>

    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-center justify-between gap-2">
        <span class="badge">{{ project.statusLabel }}</span>
      </div>

      <h3 class="mt-3 text-lg font-semibold leading-snug">
        <RouterLink :to="`/projects/${project.id}`" class="hover:text-(--color-accent)">
          {{ project.title }}
        </RouterLink>
      </h3>
      <p class="mt-2 text-sm text-(--color-text-muted) flex-1">{{ project.shortDescription }}</p>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="tech in project.technologies.slice(0, 5)" :key="tech" class="badge">{{
          tech
        }}</span>
      </div>

      <div class="mt-5 flex items-center gap-3 text-sm font-medium">
        <RouterLink
          :to="`/projects/${project.id}`"
          class="inline-flex items-center gap-1 hover:text-(--color-accent)"
        >
          Ver proyecto
          <ArrowRight :size="14" />
        </RouterLink>
        <a
          v-if="primaryRepoUrl"
          :href="primaryRepoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-(--color-text-muted) hover:text-(--color-text)"
        >
          <Code2 :size="14" />
          Código
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-(--color-text-muted) hover:text-(--color-text)"
        >
          <ExternalLink :size="14" />
          Demo
        </a>
      </div>
    </div>
  </article>
</template>