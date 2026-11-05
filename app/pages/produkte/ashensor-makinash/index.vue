<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <!-- Seksioni 1: Prezantimi dhe llojet e ashensorëve për makina -->
        <div class="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div class="mx-auto max-w-3xl border-l-4 border-primary pl-6 lg:pl-8">
                <p class="text-sm font-bold tracking-widest text-primary uppercase">
                    {{ $t(content.prezantim.kategori) }}
                </p>
                <h1 class="mt-3 text-4xl font-bold tracking-tight text-grafit sm:text-5xl dark:text-baze">
                    {{ $t(content.prezantim.titull) }}
                </h1>
                <p class="mt-6 text-lg leading-8 text-celiku dark:text-mjegull">
                    {{ $t(content.prezantim.pershkrim) }}
                </p>
            </div>

            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <!-- Kolona e Parë: Ashensorët Elektrikë -->
                <div class="relative rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <section>
                            <div class="max-w-2xl">
                                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                                    {{ $t(content.elektrik.titull) }}
                                </h2>
                                <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                                    {{ $t(content.elektrik.pershkrim) }}
                                </p>
                                <ul role="list" class="mt-6 max-w-xl space-y-5">
                                    <li v-for="(item, index) in content.elektrik.avantazhe" :key="index" class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull">
                                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        <span>
                                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                            {{ $t(item.tekst) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLinkLocale :to="content.elektrik.linkProjekte" class="group mt-8 block">
                                <figure>
                                    <img
                                        class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                                        :src="content.elektrik.imazh"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                                        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {{ $t(content.elektrik.tekstImazhi) }}
                                    </figcaption>
                                </figure>
                            </NuxtLinkLocale>
                        </section>
                    </div>
                </div>

                <!-- Kolona e Dytë: Ashensorët Hidraulikë -->
                <div class="relative mt-8 rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg sm:mt-0 sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <section>
                            <div class="max-w-2xl">
                                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                                    {{ $t(content.hidraulik.titull) }}
                                </h2>
                                <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                                    {{ $t(content.hidraulik.pershkrim) }}
                                </p>
                                <ul role="list" class="mt-6 max-w-xl space-y-5">
                                    <li v-for="(item, index) in content.hidraulik.avantazhe" :key="index" class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull">
                                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        <span>
                                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                            {{ $t(item.tekst) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLinkLocale :to="content.hidraulik.linkProjekte" class="group mt-8 block">
                                <figure>
                                    <img
                                        class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                                        :src="content.hidraulik.imazh"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                                        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {{ $t(content.hidraulik.tekstImazhi) }}
                                    </figcaption>
                                </figure>
                            </NuxtLinkLocale>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <section class="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div class="rounded-2xl border border-mjegull bg-baze p-6 shadow-sm sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                    {{ $t(content.avantazhe.titull) }}
                </h2>
                <ul role="list" class="mt-6 grid gap-5 md:grid-cols-3">
                    <li
                        v-for="(item, index) in content.avantazhe.elemente"
                        :key="index"
                        class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull"
                    >
                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                        <span>
                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                            {{ $t(item.tekst) }}
                        </span>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Seksioni 2: Zgjidhje të Përshtatura & Siguri/Cilësi -->
        <div class="border-t border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
          <div class="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <section class="rounded-2xl border border-mjegull bg-baze p-6 sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                <div class="max-w-2xl">
                    <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                        {{ $t(content.zgjidhje.titull) }}
                    </h2>
                    <p class="mt-4 leading-7 text-celiku dark:text-mjegull">
                        {{ $t(content.zgjidhje.pershkrim) }}
                    </p>
                    <ul role="list" class="mt-6 space-y-5">
                        <li
                            v-for="(item, index) in content.zgjidhje.elemente"
                            :key="index"
                            class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull"
                        >
                            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                            <span>
                                <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                {{ $t(item.tekst) }}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="rounded-2xl border border-grafit bg-grafit p-6 text-baze sm:p-8 dark:border-celiku/30 dark:bg-celiku/10">
                <div>
                    <p class="text-xs font-bold tracking-widest text-primary uppercase">Canaj Lift</p>
                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-baze">
                        {{ $t(content.siguria.titull) }}
                    </h2>
                    <p class="mt-4 leading-7 text-mjegull">
                        {{ $t(content.siguria.pershkrim) }}
                    </p>
                    <p class="mt-6 border-t border-celiku/30 pt-5 leading-7 text-mjegull">
                        {{ $t(content.siguria.kontakt) }}
                    </p>
                </div>
            </section>
          </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/20/solid';

const { t } = useI18n()

useSeoMeta({
    title: () => t('seo.carLift.title'),
    description: () => t('seo.carLift.description'),
})

// Për ta bërë komponentin plotësisht të riciklueshëm (reusable) dhe të lidhur me variabla,
// mund ta kalosh si prop ose ta përdorësh si një objekt lokal (si më poshtë):
interface AdvantageItem {
    titull: string;
    tekst: string;
}

interface PageContent {
    prezantim: {
        kategori: string;
        titull: string;
        pershkrim: string;
    };
    elektrik: {
        titull: string;
        pershkrim: string;
        avantazhe: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    hidraulik: {
        titull: string;
        pershkrim: string;
        avantazhe: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    avantazhe: {
        titull: string;
        elemente: AdvantageItem[];
    };
    zgjidhje: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
    };
    siguria: {
        titull: string;
        pershkrim: string;
        kontakt: string;
    };
}

withDefaults(
    defineProps<{
        content?: PageContent;
    }>(),
    {
        content: () => ({
            prezantim: {
                kategori: 'carLift.intro.category',
                titull: 'carLift.intro.title',
                pershkrim: 'carLift.intro.description',
            },
            elektrik: {
                titull: 'carLift.electric.title',
                pershkrim: 'carLift.electric.description',
                avantazhe: [
                    {
                        titull: 'carLift.electric.advantages.0.title',
                        tekst: 'carLift.electric.advantages.0.text',
                    },
                    {
                        titull: 'carLift.electric.advantages.1.title',
                        tekst: 'carLift.electric.advantages.1.text',
                    },
                    {
                        titull: 'carLift.electric.advantages.2.title',
                        tekst: 'carLift.electric.advantages.2.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1592256410394-51c948ec13d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'carLift.projectsCaption',
                linkProjekte: '/projekte',
            },
            hidraulik: {
                titull: 'carLift.hydraulic.title',
                pershkrim: 'carLift.hydraulic.description',
                avantazhe: [
                    {
                        titull: 'carLift.hydraulic.advantages.0.title',
                        tekst: 'carLift.hydraulic.advantages.0.text',
                    },
                    {
                        titull: 'carLift.hydraulic.advantages.1.title',
                        tekst: 'carLift.hydraulic.advantages.1.text',
                    },
                    {
                        titull: 'carLift.hydraulic.advantages.2.title',
                        tekst: 'carLift.hydraulic.advantages.2.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'carLift.projectsCaption',
                linkProjekte: '/projekte',
            },
            avantazhe: {
                titull: 'carLift.advantages.title',
                elemente: [
                    {
                        titull: 'carLift.advantages.items.0.title',
                        tekst: 'carLift.advantages.items.0.text',
                    },
                    {
                        titull: 'carLift.advantages.items.1.title',
                        tekst: 'carLift.advantages.items.1.text',
                    },
                    {
                        titull: 'carLift.advantages.items.2.title',
                        tekst: 'carLift.advantages.items.2.text',
                    },
                ],
            },
            zgjidhje: {
                titull: 'carLift.solutions.title',
                pershkrim: 'carLift.solutions.description',
                elemente: [
                    {
                        titull: 'carLift.solutions.items.0.title',
                        tekst: 'carLift.solutions.items.0.text',
                    },
                    {
                        titull: 'carLift.solutions.items.1.title',
                        tekst: 'carLift.solutions.items.1.text',
                    },
                    {
                        titull: 'carLift.solutions.items.2.title',
                        tekst: 'carLift.solutions.items.2.text',
                    },
                ],
            },
            siguria: {
                titull: 'carLift.safety.title',
                pershkrim: 'carLift.safety.description',
                kontakt: 'carLift.safety.contact',
            },
        }),
    }
);
</script>