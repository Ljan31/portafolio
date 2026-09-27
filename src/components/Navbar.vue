<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Moon, Sun, Menu, X, Github, Linkedin } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
import { profile } from '@/data/profile'

const { theme, toggleTheme } = useTheme()
const route = useRoute()
const isMenuOpen = ref(false)

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/about', label: 'Sobre mí' },
  { to: '/contact', label: 'Contacto' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-(--color-bg)/80"
    style="border-color: var(--color-border); background-color: var(--color-bg)"
  >
    <div class="container-page flex h-16 items-center justify-between">
      <RouterLink to="/" class="font-mono text-sm font-semibold tracking-tight" @click="closeMenu">
        limberg<span style="color: var(--color-accent)">.dev</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-1" aria-label="Navegación principal">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            route.path === link.to
              ? 'text-(--color-text)'
              : 'text-(--color-text-muted) hover:text-(--color-text)'
          "
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex rounded-md p-2 text-(--color-text-muted) hover:text-(--color-text)"
          aria-label="GitHub de Limberg Mamani"
        >
          <Github :size="18" />
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex rounded-md p-2 text-(--color-text-muted) hover:text-(--color-text)"
          aria-label="LinkedIn de Limberg Mamani"
        >
          <Linkedin :size="18" />
        </a>
        <button
          type="button"
          class="rounded-md p-2 text-(--color-text-muted) hover:text-(--color-text)"
          :aria-label="theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" :size="18" />
          <Moon v-else :size="18" />
        </button>
        <button
          type="button"
          class="md:hidden rounded-md p-2 text-(--color-text-muted) hover:text-(--color-text)"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menú de navegación"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <nav
      v-if="isMenuOpen"
      class="md:hidden border-t px-4 py-3 flex flex-col gap-1"
      style="border-color: var(--color-border)"
      aria-label="Navegación móvil"
    >
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="rounded-md px-3 py-2 text-sm font-medium text-(--color-text-muted) hover:text-(--color-text)"
        @click="closeMenu"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>
