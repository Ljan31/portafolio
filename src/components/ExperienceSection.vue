<script setup lang="ts">
import { experience } from '@/data/experience'
</script>

<template>
  <section class="container-page section-y border-t" style="border-color: var(--color-border)">
    <h2 class="text-2xl font-semibold tracking-tight">Experiencia</h2>
    <ol class="mt-6 space-y-6">
      <li v-for="item in experience" :key="item.id" class="card p-5">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="font-semibold">{{ item.role }}</h3>
          <span class="text-sm text-(--color-text-muted)">{{ item.period }}</span>
        </div>
        <p class="mt-1 text-sm" style="color: var(--color-accent)">{{ item.organization }}</p>
        <ul class="mt-3 space-y-1.5">
          <li
            v-for="resp in item.responsibilities"
            :key="resp"
            class="text-sm text-(--color-text-muted) before:content-['—_'] before:text-(--color-text-muted)"
          >
            {{ resp }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
