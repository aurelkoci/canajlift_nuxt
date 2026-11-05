<template>
  <label for="locale" class="sr-only block text-sm/6 font-medium text-grafit dark:text-baze">{{ t('common.language') }}</label>
  <div class="grid grid-cols-1">
    <select
      id="locale"
      :value="locale"
      name="locale"
      class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-baze py-1.5 pr-8 pl-3 text-base text-grafit outline-1 -outline-offset-1 outline-celiku/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary sm:text-sm/6 dark:bg-celiku/10 dark:text-baze dark:outline-celiku/30 dark:*:bg-grafit"
      @change="changeLocale"
    >
      <option value="sq">Shqip</option>
      <option value="en">English</option>
    </select>
    <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-celiku sm:size-4 dark:text-mjegull" aria-hidden="true" />
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

async function changeLocale(event) {
  const path = switchLocalePath(event.target.value)

  if (path) {
    await navigateTo(path)
  }
}
</script>