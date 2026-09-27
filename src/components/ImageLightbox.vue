<script setup lang="ts">
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  images: string[]
  index: number
}>()

const emit = defineEmits<{
  close: []
  update: [index: number]
}>()

function next() {
  emit('update', (props.index + 1) % props.images.length)
}

function prev() {
  emit('update', (props.index - 1 + props.images.length) % props.images.length)
}
</script>

<template>
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
    role="dialog"
    aria-modal="true"
    aria-label="Vista ampliada de imagen"
    @click.self="emit('close')"
    @keydown.esc="emit('close')"
  >
    <button
      type="button"
      class="absolute right-4 top-4 rounded-md bg-black/40 p-2 text-white hover:bg-black/60"
      aria-label="Cerrar"
      @click="emit('close')"
    >
      <X :size="22" />
    </button>

    <button
      v-if="images.length > 1"
      type="button"
      class="absolute left-4 rounded-md bg-black/40 p-2 text-white hover:bg-black/60"
      aria-label="Imagen anterior"
      @click="prev"
    >
      <ChevronLeft :size="24" />
    </button>

    <img
      :src="images[index]"
      alt="Captura de pantalla ampliada"
      class="max-h-[85vh] max-w-full rounded-md object-contain"
    />

    <button
      v-if="images.length > 1"
      type="button"
      class="absolute right-4 rounded-md bg-black/40 p-2 text-white hover:bg-black/60"
      aria-label="Imagen siguiente"
      @click="next"
    >
      <ChevronRight :size="24" />
    </button>
  </div>
</template>
