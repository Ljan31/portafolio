<script setup lang="ts">
import ContactSection from '@/components/ContactSection.vue'
import { useSeo } from '@/composables/useSeo'
import { profile } from '@/data/profile'

useSeo({
  title: `Contacto | ${profile.name}`,
  description: 'Contacta a Limberg Mamani por correo, LinkedIn o el formulario de contacto.',
})
</script>

<template>
  <ContactSection />
</template>
