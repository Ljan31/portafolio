<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { profile } from '@/data/profile'

withDefaults(defineProps<{ showHeading?: boolean }>(), { showHeading: true })
</script>

<template>
  <section class="container-page section-y border-t" style="border-color: var(--color-border)">
    <h2 v-if="showHeading" class="text-2xl font-semibold tracking-tight">Sobre mí</h2>
    <div class="mt-6 grid gap-10 md:grid-cols-2">
      <p class="text-(--color-text-muted) leading-relaxed">
        {{ profile.longBio }}
      </p>
      <ul class="space-y-3">
        <li
          v-for="point in profile.aboutPoints"
          :key="point"
          class="flex items-start gap-2.5 text-sm"
        >
          <Check :size="16" class="mt-0.5 shrink-0" style="color: var(--color-accent)" />
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
