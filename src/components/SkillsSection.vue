<script setup lang="ts">
import { skillCategories } from '@/data/skills'
</script>

<template>
  <section class="container-page section-y border-t" style="border-color: var(--color-border)">
    <h2 class="text-2xl font-semibold tracking-tight">Habilidades técnicas</h2>
    <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="cat in skillCategories" :key="cat.id" class="card p-5">
        <h3 class="text-sm font-semibold text-(--color-text-muted) uppercase tracking-wide">
          {{ cat.label }}
        </h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="skill in cat.skills" :key="skill" class="badge">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
