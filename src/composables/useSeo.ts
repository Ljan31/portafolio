import { onMounted, watch, type Ref } from 'vue'

interface SeoOptions {
  title: string
  description: string
}

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function useSeo(options: SeoOptions | Ref<SeoOptions>) {
  function apply(value: SeoOptions) {
    document.title = value.title
    setMetaTag('description', value.description)
    setMetaTag('og:title', value.title, 'property')
    setMetaTag('og:description', value.description, 'property')
  }

  const isRef = typeof options === 'object' && 'value' in options

  onMounted(() => {
    apply(isRef ? (options as Ref<SeoOptions>).value : (options as SeoOptions))
  })

  if (isRef) {
    watch(options as Ref<SeoOptions>, (value) => apply(value))
  }
}
