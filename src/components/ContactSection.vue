<script setup lang="ts">
// import { ref } from 'vue'
import { Mail, Linkedin, Github } from 'lucide-vue-next'
import { profile } from '@/data/profile'

// type SubmitState = 'idle' | 'sending' | 'success' | 'error'

// const name = ref('')
// const email = ref('')
// const message = ref('')
// const state = ref<SubmitState>('idle')

// function encodeForm(data: Record<string, string>) {
//   return Object.keys(data)
//     .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//     .join('&')
// }

// async function handleSubmit() {
//   state.value = 'sending'
//   try {
//     await fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encodeForm({
//         'form-name': 'contact',
//         name: name.value,
//         email: email.value,
//         message: message.value,
//       }),
//     })
//     state.value = 'success'
//     name.value = ''
//     email.value = ''
//     message.value = ''
//   } catch {
//     state.value = 'error'
//   }
// }
</script>

<template>
  <section class="container-page section-y">
    <h2 class="text-2xl font-semibold tracking-tight">Contacto</h2>
    <p class="mt-2 text-(--color-text-muted) max-w-xl">
      ¿Buscas incorporar un desarrollador a tu equipo o tienes alguna consulta? Puedes escribirme
      directamente o usar el formulario.
    </p>

    <div class="mt-6 grid gap-8 md:grid-cols-2">
      <div class="flex flex-col gap-3">
        <a
          :href="`mailto:${profile.email}`"
          class="card flex items-center gap-3 p-4 hover:border-(--color-accent)"
        >
          <Mail :size="18" style="color: var(--color-accent)" />
          <span class="text-sm font-medium">{{ profile.email }}</span>
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="card flex items-center gap-3 p-4 hover:border-(--color-accent)"
        >
          <Linkedin :size="18" style="color: var(--color-accent)" />
          <span class="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="card flex items-center gap-3 p-4 hover:border-(--color-accent)"
        >
          <Github :size="18" style="color: var(--color-accent)" />
          <span class="text-sm font-medium">GitHub</span>
        </a>
      </div>

      <!-- <form
        name="contact"
        method="POST"
        data-netlify="true"
        class="card flex flex-col gap-4 p-5"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label for="name" class="text-sm font-medium">Nombre</label>
          <input
            id="name"
            v-model="name"
            name="name"
            type="text"
            required
            class="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            style="border-color: var(--color-border); background-color: var(--color-bg-subtle)"
          />
        </div>
        <div>
          <label for="email" class="text-sm font-medium">Correo electrónico</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            required
            class="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            style="border-color: var(--color-border); background-color: var(--color-bg-subtle)"
          />
        </div>
        <div>
          <label for="message" class="text-sm font-medium">Mensaje</label>
          <textarea
            id="message"
            v-model="message"
            name="message"
            rows="4"
            required
            class="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            style="border-color: var(--color-border); background-color: var(--color-bg-subtle)"
          />
        </div>
        <button
          type="submit"
          :disabled="state === 'sending'"
          class="rounded-md px-4 py-2.5 text-sm font-medium disabled:opacity-60"
          style="background-color: var(--color-accent); color: var(--color-accent-contrast)"
        >
          {{ state === 'sending' ? 'Enviando…' : 'Enviar mensaje' }}
        </button>
        <p v-if="state === 'success'" class="text-sm text-emerald-500" role="status">
          Mensaje enviado correctamente. ¡Gracias por contactarme!
        </p>
        <p v-if="state === 'error'" class="text-sm text-red-500" role="alert">
          Ocurrió un error al enviar el mensaje. Intenta nuevamente o escríbeme por correo.
        </p>
      </form> -->
    </div>
  </section>
</template>
