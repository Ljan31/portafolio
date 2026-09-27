<script setup lang="ts">
import { education, complementaryCourses } from '@/data/education'
</script>

<template>
  <section class="container-page section-y border-t" style="border-color: var(--color-border)">
    <h2 class="text-2xl font-semibold tracking-tight">Formación</h2>

    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <div v-for="item in education" :key="item.id" class="card p-5">
        <h3 class="font-semibold">{{ item.title }}</h3>
        <p class="mt-1 text-sm" style="color: var(--color-accent)">{{ item.institution }}</p>
        <p class="mt-1 text-sm text-(--color-text-muted)">{{ item.period }}</p>
      </div>
    </div>

    <h3 class="mt-8 text-sm font-semibold text-(--color-text-muted) uppercase tracking-wide">
      Formación complementaria
    </h3>
    <div class="mt-3 flex flex-wrap gap-2">
      <span v-for="course in complementaryCourses" :key="course.id" class="badge">{{
        course.title
      }}</span>
    </div>
  </section>
</template>
