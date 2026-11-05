<script setup lang="ts">
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/vue/20/solid';

const { t } = useI18n();

useSeoMeta({
    title: () => t('seo.about.title'),
    description: () => t('seo.about.description'),
});

const stats = [
    { value: '20+', label: 'aboutPage.stats.experience' },
    { value: '40+', label: 'aboutPage.stats.team' },
    { value: '400+', label: 'aboutPage.stats.maintenance' },
];

const services = [
    { title: 'aboutPage.services.installation.title', description: 'aboutPage.services.installation.description', href: '/sherbime/instalim' },
    { title: 'aboutPage.services.maintenance.title', description: 'aboutPage.services.maintenance.description', href: '/sherbime/mirembajtje' },
    { title: 'aboutPage.services.modernization.title', description: 'aboutPage.services.modernization.description', href: '/sherbime/modernizim' },
];

const values = [
    { title: 'aboutPage.values.quality.title', description: 'aboutPage.values.quality.description' },
    { title: 'aboutPage.values.client.title', description: 'aboutPage.values.client.description' },
    { title: 'aboutPage.values.professionalism.title', description: 'aboutPage.values.professionalism.description' },
];

const partners = [
    { name: 'Kleemann', image: '/images/partner/logo-Kleemann.svg' },
    { name: 'Doppler', image: '/images/partner/logo-doppler.png' },
    { name: 'Mitsubishi Electric', image: '/images/partner/mitsubishi-elevators-logo.png' },
    { name: 'Delfar', image: '/images/partner/logo-delfar.webp' },
];
</script>

<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <section class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('aboutPage.eyebrow') }}
                    </p>
                    <h1 class="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-grafit sm:text-5xl lg:text-6xl dark:text-baze">
                        {{ $t('aboutPage.title') }}
                    </h1>
                    <p class="mt-6 max-w-2xl text-lg leading-8 text-celiku dark:text-mjegull">
                        {{ $t('aboutPage.intro') }}
                    </p>
                    <NuxtLinkLocale
                        to="/sherbime/instalim"
                        class="mt-8 inline-flex items-center gap-2 rounded-lg border-l-4 border-primary bg-grafit px-5 py-3 text-sm font-bold text-baze transition hover:bg-celiku focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-baze dark:text-grafit dark:hover:bg-mjegull"
                    >
                        {{ $t('aboutPage.cta') }}
                        <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
                    </NuxtLinkLocale>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <img
                        src="/images/hero-elevator-shaft.jpg"
                        :alt="$t('aboutPage.images.elevator')"
                        class="aspect-[4/5] w-full rounded-2xl border border-mjegull object-cover shadow-md dark:border-celiku/30"
                        fetchpriority="high"
                    />
                    <div class="grid gap-4 pt-10">
                        <img
                            src="/images/service-fleet.jpg"
                            :alt="$t('aboutPage.images.team')"
                            class="aspect-[4/3] w-full rounded-2xl border border-mjegull object-cover shadow-md dark:border-celiku/30"
                            fetchpriority="high"
                        />
                        <img
                            src="/images/architectural-signage.jpg"
                            :alt="$t('aboutPage.images.details')"
                            class="aspect-[4/3] w-full rounded-2xl border border-mjegull object-cover shadow-md dark:border-celiku/30"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section class="border-y border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                    <div>
                        <p class="text-sm font-bold tracking-widest text-primary uppercase">
                            {{ $t('aboutPage.whoEyebrow') }}
                        </p>
                        <h2 class="mt-3 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
                            {{ $t('aboutPage.whoTitle') }}
                        </h2>
                        <p class="mt-6 text-lg leading-8 text-celiku dark:text-mjegull">
                            {{ $t('aboutPage.whoText') }}
                        </p>

                        <h3 class="mt-10 text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                            {{ $t('aboutPage.whatTitle') }}
                        </h3>
                        <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                            {{ $t('aboutPage.whatIntro') }}
                        </p>
                        <ul class="mt-6 space-y-4">
                            <li v-for="service in services" :key="service.title">
                                <NuxtLinkLocale
                                    :to="service.href"
                                    class="group flex gap-3 rounded-xl border border-mjegull bg-baze p-4 transition hover:border-primary/50 dark:border-celiku/30 dark:bg-grafit"
                                >
                                    <CheckCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    <span>
                                        <strong class="font-semibold text-grafit group-hover:text-primary dark:text-baze">{{ $t(service.title) }}</strong>
                                        <span class="mt-1 block leading-6 text-celiku dark:text-mjegull">{{ $t(service.description) }}</span>
                                    </span>
                                    <ArrowRightIcon class="ml-auto mt-1 h-4 w-4 flex-none text-celiku transition group-hover:translate-x-1 group-hover:text-primary dark:text-mjegull" aria-hidden="true" />
                                </NuxtLinkLocale>
                            </li>
                        </ul>
                    </div>

                    <dl class="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        <div
                            v-for="stat in stats"
                            :key="stat.value"
                            class="rounded-2xl border border-mjegull bg-baze p-6 dark:border-celiku/30 dark:bg-grafit"
                        >
                            <dd class="text-4xl font-extrabold tracking-tight text-primary">{{ stat.value }}</dd>
                            <dt class="mt-2 leading-6 text-celiku dark:text-mjegull">{{ $t(stat.label) }}</dt>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div class="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <img
                    src="/images/project-commercial.jpg"
                    :alt="$t('aboutPage.images.project')"
                    class="aspect-[4/3] w-full rounded-2xl border border-mjegull object-cover shadow-md dark:border-celiku/30"
                    loading="lazy"
                />
                <div>
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('aboutPage.valuesEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
                        {{ $t('aboutPage.valuesTitle') }}
                    </h2>
                    <p class="mt-4 leading-7 text-celiku dark:text-mjegull">
                        {{ $t('aboutPage.valuesIntro') }}
                    </p>
                    <dl class="mt-8 grid gap-6 sm:grid-cols-2">
                        <div v-for="value in values" :key="value.title" class="border-l-2 border-primary pl-4">
                            <dt class="font-bold text-grafit dark:text-baze">{{ $t(value.title) }}</dt>
                            <dd class="mt-2 leading-6 text-celiku dark:text-mjegull">{{ $t(value.description) }}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

        <section class="border-t border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
            <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                <h2 class="text-center text-sm font-bold tracking-widest text-grafit uppercase dark:text-baze">
                    {{ $t('aboutPage.partnersTitle') }}
                </h2>
                <ul class="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-4">
                    <li v-for="partner in partners" :key="partner.name" class="flex h-16 items-center justify-center">
                        <img
                            :src="partner.image"
                            :alt="partner.name"
                            class="max-h-12 max-w-40 object-contain"
                            loading="lazy"
                        />
                    </li>
                </ul>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div class="rounded-2xl border border-grafit bg-grafit px-6 py-10 text-baze sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
                <div class="max-w-3xl">
                    <p class="text-sm font-bold tracking-widest text-primary uppercase">
                        {{ $t('aboutPage.closingEyebrow') }}
                    </p>
                    <h2 class="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                        {{ $t('aboutPage.closingTitle') }}
                    </h2>
                    <p class="mt-4 leading-7 text-mjegull">
                        {{ $t('aboutPage.closingText') }}
                    </p>
                </div>
                <NuxtLinkLocale
                    to="/kontakt"
                    class="mt-8 inline-flex flex-none items-center justify-center rounded-lg border-l-4 border-primary bg-baze px-6 py-3 text-sm font-bold text-grafit transition hover:bg-mjegull focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:mt-0"
                >
                    {{ $t('aboutPage.contactCta') }}
                </NuxtLinkLocale>
            </div>
        </section>
    </main>
</template>
