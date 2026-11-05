<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid';

const { t } = useI18n();

useSeoMeta({
    title: () => t('seo.installation.title'),
    description: () => t('seo.installation.description'),
});

const services = [
    { title: 'installationPage.services.teams.title', description: 'installationPage.services.teams.description', highlight: 'installationPage.services.teams.highlight' },
    { title: 'installationPage.services.expertise.title', description: 'installationPage.services.expertise.description', highlight: 'installationPage.services.expertise.highlight' },
    { title: 'installationPage.services.capacity.title', description: 'installationPage.services.capacity.description', highlight: 'installationPage.services.capacity.highlight' },
    { title: 'installationPage.services.custom.title', description: 'installationPage.services.custom.description', highlight: 'installationPage.services.custom.highlight' },
    { title: 'installationPage.services.support.title', description: 'installationPage.services.support.description', highlight: 'installationPage.services.support.highlight' },
    { title: 'installationPage.services.standards.title', description: 'installationPage.services.standards.description', highlight: 'installationPage.services.standards.highlight' },
];

const installationImage = 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <section class="relative isolate">
            <div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
                <div class="border-l-4 border-primary pl-6 lg:pl-8">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('installationPage.eyebrow') }}
                    </p>
                    <h1 class="mt-4 text-4xl font-bold tracking-tight text-grafit sm:text-5xl dark:text-baze">
                        {{ $t('installationPage.title') }}
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-celiku dark:text-mjegull">
                        {{ $t('installationPage.intro') }}
                    </p>
                    <div class="mt-8 inline-flex items-center gap-3 rounded-xl border border-mjegull bg-mjegull/40 px-5 py-4 dark:border-celiku/30 dark:bg-celiku/10">
                        <span class="text-3xl font-extrabold tracking-tight text-primary">12</span>
                        <span class="max-w-40 text-sm font-semibold leading-5 text-grafit dark:text-baze">
                            {{ $t('installationPage.teamStat') }}
                        </span>
                    </div>
                </div>

                <a
                    href="https://canajlift.al/projektet"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group block"
                    :aria-label="$t('installationPage.imageLinkLabel')"
                >
                    <img
                        :src="installationImage"
                        :alt="$t('installationPage.imageAlt')"
                        class="aspect-[4/3] w-full rounded-2xl border border-mjegull object-cover shadow-lg transition duration-300 group-hover:brightness-95 dark:border-celiku/30"
                        fetchpriority="high"
                    />
                    <span class="mt-3 block text-sm text-celiku transition group-hover:text-primary dark:text-mjegull">
                        {{ $t('installationPage.imageCaption') }}
                    </span>
                </a>
            </div>
        </section>

        <section class="border-y border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div class="max-w-3xl">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('installationPage.servicesEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
                        {{ $t('installationPage.servicesTitle') }}
                    </h2>
                </div>

                <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <article
                        v-for="(service, index) in services"
                        :key="service.title"
                        class="rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-celiku/30 dark:bg-grafit"
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
                        {{ $t('installationPage.closingEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                        {{ $t('installationPage.closingTitle') }}
                    </h2>
                    <p class="mt-4 leading-7 text-mjegull">
                        {{ $t('installationPage.closingText') }}
                    </p>
                </div>
                <NuxtLink
                    to="/kontakt"
                    class="mt-8 inline-flex flex-none items-center justify-center rounded-lg border-l-4 border-primary bg-baze px-6 py-3 text-sm font-bold text-grafit transition hover:bg-mjegull focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:mt-0"
                >
                    {{ $t('installationPage.contactCta') }}
                </NuxtLink>
            </div>
        </section>
    </main>
</template>
