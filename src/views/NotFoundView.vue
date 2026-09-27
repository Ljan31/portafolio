<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Página no encontrada',
  description: 'La página que buscas no existe.',
})
</script>

<template>
  <div class="container-page section-y text-center">
    <p class="font-mono text-sm" style="color: var(--color-accent)">404</p>
    <h1 class="mt-2 text-2xl font-semibold">Página no encontrada</h1>
    <RouterLink to="/" class="mt-6 inline-block text-sm" style="color: var(--color-accent)">
      Volver al inicio
    </RouterLink>
  </div>
</template>
