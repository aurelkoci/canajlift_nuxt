<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid';

const { t } = useI18n();

useSeoMeta({
    title: () => t('seo.spareParts.title'),
    description: () => t('seo.spareParts.description'),
});

const benefits = [
    { title: 'sparePartsPage.benefits.original.title', description: 'sparePartsPage.benefits.original.description', highlight: 'sparePartsPage.benefits.original.highlight' },
    { title: 'sparePartsPage.benefits.stock.title', description: 'sparePartsPage.benefits.stock.description', highlight: 'sparePartsPage.benefits.stock.highlight' },
    { title: 'sparePartsPage.benefits.quality.title', description: 'sparePartsPage.benefits.quality.description', highlight: 'sparePartsPage.benefits.quality.highlight' },
];
</script>

<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <section class="relative isolate">
            <div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
                <div class="border-l-4 border-primary pl-6 lg:pl-8">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('sparePartsPage.eyebrow') }}
                    </p>
                    <h1 class="mt-4 text-4xl font-bold tracking-tight text-grafit sm:text-5xl dark:text-baze">
                        {{ $t('sparePartsPage.title') }}
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-celiku dark:text-mjegull">
                        {{ $t('sparePartsPage.intro') }}
                    </p>
                    <NuxtLink
                        to="/kontakt"
                        class="mt-8 inline-flex items-center justify-center rounded-lg border-l-4 border-primary bg-grafit px-6 py-3 text-sm font-bold text-baze transition hover:bg-celiku focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-baze dark:text-grafit dark:hover:bg-mjegull"
                    >
                        {{ $t('sparePartsPage.requestCta') }}
                    </NuxtLink>
                </div>

                <div class="relative flex min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-mjegull bg-mjegull/30 p-10 dark:border-celiku/30 dark:bg-celiku/10">
                    <div class="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-primary/20" aria-hidden="true"></div>
                    <div class="absolute -bottom-16 -left-12 h-56 w-56 rounded-full border border-primary/20" aria-hidden="true"></div>
                    <div class="relative flex max-w-sm flex-col items-center text-center">
                        <div class="flex h-24 w-24 items-center justify-center rounded-2xl border border-mjegull bg-grafit shadow-lg dark:border-celiku/30 dark:bg-baze">
                            <img src="/icon/pjesekembimi.svg" :alt="$t('sparePartsPage.iconAlt')" class="h-14 w-14" />
                        </div>
                        <p class="mt-6 text-sm font-bold tracking-widest text-primary uppercase">
                            {{ $t('sparePartsPage.visualEyebrow') }}
                        </p>
                        <p class="mt-2 text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                            {{ $t('sparePartsPage.visualTitle') }}
                        </p>
                        <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                            {{ $t('sparePartsPage.visualText') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="border-y border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div class="max-w-3xl">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('sparePartsPage.benefitsEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
                        {{ $t('sparePartsPage.benefitsTitle') }}
                    </h2>
                </div>

                <div class="mt-10 grid gap-5 lg:grid-cols-3">
                    <article
                        v-for="(benefit, index) in benefits"
                        :key="benefit.title"
                        class="rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-celiku/30 dark:bg-grafit sm:p-8"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <span class="text-sm font-bold tracking-widest text-primary">0{{ index + 1 }}</span>
                            <CheckCircleIcon class="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                        </div>
                        <h3 class="mt-5 text-xl font-bold tracking-tight text-grafit dark:text-baze">
                            {{ $t(benefit.title) }}
                        </h3>
                        <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                            {{ $t(benefit.description) }}
                        </p>
                        <p class="mt-6 border-t border-mjegull pt-4 text-sm font-semibold leading-6 text-grafit dark:border-celiku/30 dark:text-baze">
                            {{ $t(benefit.highlight) }}
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div class="rounded-2xl border border-grafit bg-grafit px-6 py-10 text-baze sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
                <div class="max-w-3xl">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('sparePartsPage.closingEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                        {{ $t('sparePartsPage.closingTitle') }}
                    </h2>
                    <p class="mt-4 leading-7 text-mjegull">
                        {{ $t('sparePartsPage.closingText') }}
                    </p>
                </div>
                <NuxtLink
                    to="/kontakt"
                    class="mt-8 inline-flex flex-none items-center justify-center rounded-lg border-l-4 border-primary bg-baze px-6 py-3 text-sm font-bold text-grafit transition hover:bg-mjegull focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:mt-0"
                >
                    {{ $t('sparePartsPage.contactCta') }}
                </NuxtLink>
            </div>
        </section>
    </main>
</template>
