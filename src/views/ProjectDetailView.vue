<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Code2, ExternalLink, PlayCircle, ArrowLeft } from 'lucide-vue-next'
import { getProjectById } from '@/data/projects'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'
import ImageLightbox from '@/components/ImageLightbox.vue'

const props = defineProps<{ id: string }>()

const project = computed(() => getProjectById(props.id))

useSeo(
  computed(() => ({
    title: project.value ? `${project.value.title} | ${profile.name}` : `Proyecto | ${profile.name}`,
    description: project.value?.shortDescription ?? 'Detalle de proyecto.',
  })),
)

const lightboxIndex = ref<number | null>(null)
</script>

<template>
  <div v-if="project" class="container-page section-y">
    <RouterLink
      to="/projects"
      class="inline-flex items-center gap-1 text-sm text-(--color-text-muted) hover:text-(--color-text)"
    >
      <ArrowLeft :size="14" />
      Volver a proyectos
    </RouterLink>

    <div class="mt-4 flex flex-wrap items-center gap-3">
      <span class="badge">{{ project.statusLabel }}</span>
    </div>
    <h1 class="mt-3 text-3xl font-bold tracking-tight">{{ project.title }}</h1>
    <p class="mt-3 max-w-3xl text-(--color-text-muted)">{{ project.description }}</p>

    <div class="mt-6 flex flex-wrap gap-3">
      <template v-if="project.repositories && project.repositories.length">
        <a
          v-for="repo in project.repositories"
          :key="repo.url"
          :href="repo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:border-(--color-accent)"
        >
          <Code2 :size="16" />
          Código — {{ repo.label }}
        </a>
      </template>
      <a
        v-else-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:border-(--color-accent)"
      >
        <Code2 :size="16" />
        Código fuente
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium"
        style="background-color: var(--color-accent); color: var(--color-accent-contrast)"
      >
        <ExternalLink :size="16" />
        Ver demo
      </a>
      <a
        v-if="project.video"
        :href="project.video"
        target="_blank"
        rel="noopener noreferrer"
        class="card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:border-(--color-accent)"
      >
        <PlayCircle :size="16" />
        Ver video
      </a>
    </div>

    <section class="mt-10">
      <h2 class="text-lg font-semibold">Mi participación</h2>
      <p class="mt-2 text-(--color-text-muted)">{{ project.myRole }}</p>
    </section>

    <section class="mt-8">
      <h2 class="text-lg font-semibold">Tecnologías</h2>
      <div class="mt-3 flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="badge">{{ tech }}</span>
      </div>
    </section>

    <section v-if="project.features.length" class="mt-8">
      <h2 class="text-lg font-semibold">Funcionalidades</h2>
      <ul class="mt-3 grid gap-2 sm:grid-cols-2">
        <li
          v-for="feature in project.features"
          :key="feature"
          class="text-sm text-(--color-text-muted) before:content-['—_']"
        >
          {{ feature }}
        </li>
      </ul>
    </section>

    <section v-if="project.screenshots && project.screenshots.length" class="mt-8">
      <h2 class="text-lg font-semibold">Galería</h2>
      <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="(shot, i) in project.screenshots"
          :key="shot"
          type="button"
          class="aspect-video overflow-hidden rounded-md border"
          style="border-color: var(--color-border)"
          @click="lightboxIndex = i"
        >
          <img :src="shot" alt="Captura de pantalla del proyecto" class="h-full w-full object-cover" loading="lazy" />
        </button>
      </div>
    </section>

    <section v-if="project.architectureNote" class="mt-8">
      <h2 class="text-lg font-semibold">Arquitectura</h2>
      <p class="mt-2 text-(--color-text-muted)">{{ project.architectureNote }}</p>
    </section>

    <section v-if="project.challenges && project.challenges.length" class="mt-8">
      <h2 class="text-lg font-semibold">Desafíos técnicos</h2>
      <div class="mt-3 space-y-4">
        <div v-for="(c, i) in project.challenges" :key="i" class="card p-4">
          <p class="text-sm font-medium">{{ c.problem }}</p>
          <p class="mt-1 text-sm text-(--color-text-muted)">{{ c.approach }}</p>
        </div>
      </div>
    </section>

    <ImageLightbox
      v-if="lightboxIndex !== null && project.screenshots"
      :images="project.screenshots"
      :index="lightboxIndex"
      @close="lightboxIndex = null"
      @update="(i) => (lightboxIndex = i)"
    />
  </div>

  <div v-else class="container-page section-y">
    <h1 class="text-2xl font-semibold">Proyecto no encontrado</h1>
    <RouterLink to="/projects" class="mt-4 inline-block text-sm" style="color: var(--color-accent)">
      Volver a proyectos
    </RouterLink>
  </div>
</template>