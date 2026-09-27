<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t" style="border-color: var(--color-border)">
    <div class="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-(--color-text-muted)">
        © {{ year }} {{ profile.name }}. Todos los derechos reservados.
      </p>
      <div class="flex items-center gap-3">
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-(--color-text-muted) hover:text-(--color-text)"
          aria-label="GitHub"
        >
          <Github :size="18" />
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-(--color-text-muted) hover:text-(--color-text)"
          aria-label="LinkedIn"
        >
          <Linkedin :size="18" />
        </a>
        <a
          :href="`mailto:${profile.email}`"
          class="text-(--color-text-muted) hover:text-(--color-text)"
          aria-label="Correo electrónico"
        >
          <Mail :size="18" />
        </a>
      </div>
    </div>
  </footer>
</template>
