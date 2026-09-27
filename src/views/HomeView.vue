<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'

useSeo({
  title: `${profile.name} | Software Engineer & Web Developer`,
  description:
    'Portafolio profesional de Limberg Mamani, desarrollador de software especializado en desarrollo web, frontend, backend, APIs y bases de datos.',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <FeaturedProjects />
  </div>
</template>
