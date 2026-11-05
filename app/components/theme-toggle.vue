<template>
  <div class="inline-flex items-center gap-1 rounded-lg bg-mjegull p-1 dark:bg-celiku/20" role="group" :aria-label="t('common.theme')">
    <button
      v-for="option in themeOptions"
      :key="option.value"
      type="button"
      :aria-label="option.label"
      :aria-pressed="selectedTheme === option.value"
      :title="option.label"
      class="inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="selectedTheme === option.value
        ? 'bg-baze text-primary shadow-sm dark:bg-grafit'
        : 'text-celiku hover:bg-baze/70 hover:text-grafit dark:text-mjegull dark:hover:bg-grafit/70 dark:hover:text-baze'"
      @click="setTheme(option.value)"
    >
      <component :is="option.icon" class="size-4" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup>
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n()
const selectedTheme = useState('theme-preference', () => 'device')
const themeStorageKey = 'canaj-theme'
let systemTheme

const themeOptions = computed(() => [
  { value: 'light', label: t('common.light'), icon: SunIcon },
  { value: 'dark', label: t('common.dark'), icon: MoonIcon },
  { value: 'device', label: t('common.device'), icon: ComputerDesktopIcon },
])

function applyTheme() {
  const isDark = selectedTheme.value === 'dark'
    || (selectedTheme.value === 'device' && systemTheme?.matches)

  document.documentElement.classList.toggle('dark', Boolean(isDark))
}

function setTheme(theme) {
  selectedTheme.value = theme
  localStorage.setItem(themeStorageKey, selectedTheme.value)
  applyTheme()
}

onMounted(() => {
  systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
  const savedTheme = localStorage.getItem(themeStorageKey)

  if (['light', 'dark', 'device'].includes(savedTheme)) {
    selectedTheme.value = savedTheme
  }

  applyTheme()
  systemTheme.addEventListener('change', applyTheme)
})

onBeforeUnmount(() => {
  systemTheme?.removeEventListener('change', applyTheme)
})
</script>
