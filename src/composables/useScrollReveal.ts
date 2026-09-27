import { onMounted, onBeforeUnmount, type Ref } from 'vue'

export function useScrollReveal(target: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())
}
