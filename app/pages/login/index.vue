<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/20/solid';
import { WrenchScrewdriverIcon } from '@heroicons/vue/24/outline';

const { t } = useI18n();

useSeoMeta({
    title: () => t('seo.login.title'),
    description: () => t('seo.login.description'),
});
</script>

<template>
    <main class="flex min-h-[70vh] items-center justify-center bg-baze px-6 py-20 text-grafit dark:bg-grafit dark:text-baze">
        <section class="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-mjegull bg-baze px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16 dark:border-celiku/30 dark:bg-grafit">
            <div class="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-primary/10" aria-hidden="true"></div>
            <div class="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-primary/10" aria-hidden="true"></div>

            <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-mjegull bg-mjegull/40 text-primary dark:border-celiku/30 dark:bg-celiku/10">
                <WrenchScrewdriverIcon class="h-10 w-10" aria-hidden="true" />
            </div>

            <p class="relative mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold tracking-widest text-primary uppercase">
                <span class="h-2 w-2 animate-pulse rounded-full bg-primary" aria-hidden="true"></span>
                {{ $t('loginPage.status') }}
            </p>

            <h1 class="relative mt-5 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
                {{ $t('loginPage.title') }}
            </h1>
            <p class="relative mx-auto mt-4 max-w-xl text-lg leading-8 text-celiku dark:text-mjegull">
                {{ $t('loginPage.description') }}
            </p>

            <NuxtLink
                to="/"
                class="relative mt-9 inline-flex items-center justify-center gap-2 rounded-lg border-l-4 border-primary bg-grafit px-5 py-3 text-sm font-bold text-baze transition hover:bg-celiku focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-baze dark:text-grafit dark:hover:bg-mjegull"
            >
                <ArrowLeftIcon class="h-4 w-4" aria-hidden="true" />
                {{ $t('loginPage.homeCta') }}
            </NuxtLink>
        </section>
    </main>
</template>
