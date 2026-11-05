<script setup lang="ts">
import type { NuxtError } from '#app'
const { t } = useI18n()

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div>
    <h1>{{ error.status }}</h1>
    <NuxtLink to="/">{{ t('error.backHome') }}</NuxtLink>
  </div>
</template>