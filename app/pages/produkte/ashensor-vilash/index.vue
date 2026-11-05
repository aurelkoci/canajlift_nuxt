<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <!-- Seksioni 1: Prezantimi dhe dizajni i homelift-it -->
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
                <!-- Dizajn i personalizuar -->
                <div class="relative rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <section>
                            <div class="max-w-2xl">
                                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                                    {{ $t(content.dizajn.titull) }}
                                </h2>
                                <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                                    {{ $t(content.dizajn.pershkrim) }}
                                </p>
                                <ul role="list" class="mt-6 max-w-xl space-y-5">
                                    <li v-for="(item, index) in content.dizajn.elemente" :key="index" class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull">
                                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        <span>
                                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                            {{ $t(item.tekst) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLink :to="content.dizajn.linkProjekte" class="group mt-8 block">
                                <figure>
                                    <img
                                        class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                                        :src="content.dizajn.imazh"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                                        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {{ $t(content.dizajn.tekstImazhi) }}
                                    </figcaption>
                                </figure>
                            </NuxtLink>
                        </section>
                    </div>
                </div>

                <!-- Siguria dhe besueshmëria -->
                <div class="relative mt-8 rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg sm:mt-0 sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <section>
                            <div class="max-w-2xl">
                                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                                    {{ $t(content.siguria.titull) }}
                                </h2>
                                <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                                    {{ $t(content.siguria.pershkrim) }}
                                </p>
                                <ul role="list" class="mt-6 max-w-xl space-y-5">
                                    <li v-for="(item, index) in content.siguria.elemente" :key="index" class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull">
                                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        <span>
                                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                            {{ $t(item.tekst) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLink :to="content.siguria.linkProjekte" class="group mt-8 block">
                                <figure>
                                    <img
                                        class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                                        :src="content.siguria.imazh"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                                        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {{ $t(content.siguria.tekstImazhi) }}
                                    </figcaption>
                                </figure>
                            </NuxtLink>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <section class="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div class="rounded-2xl border border-mjegull bg-baze p-6 shadow-sm sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                    {{ $t(content.efikasitet.titull) }}
                </h2>
                <p class="mt-3 max-w-3xl leading-7 text-celiku dark:text-mjegull">
                    {{ $t(content.efikasitet.pershkrim) }}
                </p>
                <ul role="list" class="mt-6 grid gap-5 md:grid-cols-2">
                    <li
                        v-for="(item, index) in content.efikasitet.elemente"
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
                <NuxtLink :to="content.efikasitet.linkProjekte" class="group mt-8 block">
                    <figure>
                        <img
                            class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                            :src="content.efikasitet.imazh"
                            alt=""
                            loading="lazy"
                        />
                        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                            <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                            {{ $t(content.efikasitet.tekstImazhi) }}
                        </figcaption>
                    </figure>
                </NuxtLink>
            </div>
        </section>

        <!-- Zgjidhje të personalizuara dhe avantazhet -->
        <div class="border-t border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
          <div class="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <section class="rounded-2xl border border-mjegull bg-baze p-6 sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                <div class="max-w-2xl">
                    <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                        {{ $t(content.pershtatje.titull) }}
                    </h2>
                    <p class="mt-4 leading-7 text-celiku dark:text-mjegull">
                        {{ $t(content.pershtatje.pershkrim) }}
                    </p>
                    <ul role="list" class="mt-6 space-y-5">
                        <li
                            v-for="(item, index) in content.pershtatje.elemente"
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
                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-baze">
                        {{ $t(content.avantazhe.titull) }}
                    </h2>
                    <ul role="list" class="mt-6 space-y-5">
                        <li
                            v-for="(item, index) in content.avantazhe.elemente"
                            :key="index"
                            class="flex gap-x-3 text-sm/6 text-mjegull"
                        >
                            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                            <span>
                                <strong class="font-semibold text-baze">{{ $t(item.titull) }}</strong>
                                {{ $t(item.tekst) }}
                            </span>
                        </li>
                    </ul>
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
    title: () => t('seo.villaLift.title'),
    description: () => t('seo.villaLift.description'),
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
    dizajn: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    siguria: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    efikasitet: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    avantazhe: {
        titull: string;
        elemente: AdvantageItem[];
    };
    pershtatje: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
    };
}

withDefaults(
    defineProps<{
        content?: PageContent;
    }>(),
    {
        content: () => ({
            prezantim: {
                kategori: 'villaLift.intro.category',
                titull: 'villaLift.intro.title',
                pershkrim: 'villaLift.intro.description',
            },
            dizajn: {
                titull: 'villaLift.design.title',
                pershkrim: 'villaLift.design.description',
                elemente: [
                    {
                        titull: 'villaLift.design.items.0.title',
                        tekst: 'villaLift.design.items.0.text',
                    },
                    {
                        titull: 'villaLift.design.items.1.title',
                        tekst: 'villaLift.design.items.1.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1592256410394-51c948ec13d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'villaLift.projectsCaption',
                linkProjekte: '/projekte',
            },
            siguria: {
                titull: 'villaLift.safety.title',
                pershkrim: 'villaLift.safety.description',
                elemente: [
                    {
                        titull: 'villaLift.safety.items.0.title',
                        tekst: 'villaLift.safety.items.0.text',
                    },
                    {
                        titull: 'villaLift.safety.items.1.title',
                        tekst: 'villaLift.safety.items.1.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'villaLift.projectsCaption',
                linkProjekte: '/projekte',
            },
            efikasitet: {
                titull: 'villaLift.efficiency.title',
                pershkrim: 'villaLift.efficiency.description',
                elemente: [
                    {
                        titull: 'villaLift.efficiency.items.0.title',
                        tekst: 'villaLift.efficiency.items.0.text',
                    },
                    {
                        titull: 'villaLift.efficiency.items.1.title',
                        tekst: 'villaLift.efficiency.items.1.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'villaLift.projectsCaption',
                linkProjekte: '/projekte',
            },
            avantazhe: {
                titull: 'villaLift.benefits.title',
                elemente: [
                    {
                        titull: 'villaLift.benefits.items.0.title',
                        tekst: 'villaLift.benefits.items.0.text',
                    },
                    {
                        titull: 'villaLift.benefits.items.1.title',
                        tekst: 'villaLift.benefits.items.1.text',
                    },
                    {
                        titull: 'villaLift.benefits.items.2.title',
                        tekst: 'villaLift.benefits.items.2.text',
                    },
                ],
            },
            pershtatje: {
                titull: 'villaLift.tailored.title',
                pershkrim: 'villaLift.tailored.description',
                elemente: [
                    {
                        titull: 'villaLift.tailored.items.0.title',
                        tekst: 'villaLift.tailored.items.0.text',
                    },
                    {
                        titull: 'villaLift.tailored.items.1.title',
                        tekst: 'villaLift.tailored.items.1.text',
                    },
                ],
            },
        }),
    }
);
</script>