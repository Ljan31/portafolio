<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'

useSeo({
  title: `Sobre mí | ${profile.name}`,
  description: 'Formación, experiencia y habilidades técnicas de Limberg Mamani.',
})
</script>

<template>
  <div>
    <div class="container-page pt-12 pb-4">
      <h1 class="text-3xl font-bold tracking-tight">Sobre mí</h1>
    </div>
    <AboutSection :show-heading="false" />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
  </div>
</template>
