<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid';

const { t } = useI18n();

useSeoMeta({
    title: () => t('seo.modernization.title'),
    description: () => t('seo.modernization.description'),
});

const services = [
    { title: 'modernizationPage.services.technology.title', description: 'modernizationPage.services.technology.description', highlight: 'modernizationPage.services.technology.highlight' },
    { title: 'modernizationPage.services.automation.title', description: 'modernizationPage.services.automation.description', highlight: 'modernizationPage.services.automation.highlight' },
    { title: 'modernizationPage.services.support.title', description: 'modernizationPage.services.support.description', highlight: 'modernizationPage.services.support.highlight' },
];

const modernizationImage = 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <section class="relative isolate">
            <div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
                <div class="border-l-4 border-primary pl-6 lg:pl-8">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('modernizationPage.eyebrow') }}
                    </p>
                    <h1 class="mt-4 text-4xl font-bold tracking-tight text-grafit sm:text-5xl dark:text-baze">
                        {{ $t('modernizationPage.title') }}
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-celiku dark:text-mjegull">
                        {{ $t('modernizationPage.intro') }}
                    </p>
                    <div class="mt-8 inline-flex items-center gap-3 rounded-xl border border-mjegull bg-mjegull/40 px-5 py-4 dark:border-celiku/30 dark:bg-celiku/10">
                        <CheckCircleIcon class="h-7 w-7 flex-none text-primary" aria-hidden="true" />
                        <span class="max-w-64 text-sm font-semibold leading-5 text-grafit dark:text-baze">
                            {{ $t('modernizationPage.stat') }}
                        </span>
                    </div>
                </div>

                <a
                    href="https://canajlift.al/projektet"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group block"
                    :aria-label="$t('modernizationPage.imageLinkLabel')"
                >
                    <img
                        :src="modernizationImage"
                        :alt="$t('modernizationPage.imageAlt')"
                        class="aspect-[4/3] w-full rounded-2xl border border-mjegull object-cover shadow-lg transition duration-300 group-hover:brightness-95 dark:border-celiku/30"
                        fetchpriority="high"
                    />
                    <span class="mt-3 block text-sm text-celiku transition group-hover:text-primary dark:text-mjegull">
                        {{ $t('modernizationPage.imageCaption') }}
                    </span>
                </a>
            </div>
        </section>

        <section class="border-y border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div class="max-w-3xl">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('modernizationPage.servicesEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
                        {{ $t('modernizationPage.servicesTitle') }}
                    </h2>
                </div>

                <div class="mt-10 grid gap-5 lg:grid-cols-3">
                    <article
                        v-for="(service, index) in services"
                        :key="service.title"
                        class="rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-celiku/30 dark:bg-grafit sm:p-8"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <span class="text-sm font-bold tracking-widest text-primary">0{{ index + 1 }}</span>
                            <CheckCircleIcon class="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                        </div>
                        <h3 class="mt-5 text-xl font-bold tracking-tight text-grafit dark:text-baze">
                            {{ $t(service.title) }}
                        </h3>
                        <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                            {{ $t(service.description) }}
                        </p>
                        <p class="mt-6 border-t border-mjegull pt-4 text-sm font-semibold leading-6 text-grafit dark:border-celiku/30 dark:text-baze">
                            {{ $t(service.highlight) }}
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div class="rounded-2xl border border-grafit bg-grafit px-6 py-10 text-baze sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
                <div class="max-w-3xl">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('modernizationPage.closingEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                        {{ $t('modernizationPage.closingTitle') }}
                    </h2>
                    <p class="mt-4 leading-7 text-mjegull">
                        {{ $t('modernizationPage.closingText') }}
                    </p>
                </div>
                <NuxtLink
                    to="/kontakt"
                    class="mt-8 inline-flex flex-none items-center justify-center rounded-lg border-l-4 border-primary bg-baze px-6 py-3 text-sm font-bold text-grafit transition hover:bg-mjegull focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:mt-0"
                >
                    {{ $t('modernizationPage.contactCta') }}
                </NuxtLink>
            </div>
        </section>
    </main>
</template>
