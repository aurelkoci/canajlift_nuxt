<template>
    <main class="overflow-hidden bg-baze text-grafit dark:bg-grafit dark:text-baze">
        <!-- Prezantimi i ashensoreve industriale -->
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
                <!-- Ashensore per perdorim industrial -->
                <div class="relative rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <section>
                            <div class="max-w-2xl">
                                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                                    {{ $t(content.ashensoret.titull) }}
                                </h2>
                                <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                                    {{ $t(content.ashensoret.pershkrim) }}
                                </p>
                                <ul role="list" class="mt-6 max-w-xl space-y-5">
                                    <li v-for="(item, index) in content.ashensoret.elemente" :key="index" class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull">
                                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        <span>
                                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                            {{ $t(item.tekst) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLink :to="content.ashensoret.linkProjekte" class="group mt-8 block">
                                <figure>
                                    <img
                                        class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                                        :src="content.ashensoret.imazh"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                                        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {{ $t(content.ashensoret.tekstImazhi) }}
                                    </figcaption>
                                </figure>
                            </NuxtLink>
                        </section>
                    </div>
                </div>

                <!-- Transporti i ngarkesave -->
                <div class="relative mt-8 rounded-2xl border border-mjegull bg-baze p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg sm:mt-0 sm:p-8 dark:border-celiku/30 dark:bg-grafit">
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <section>
                            <div class="max-w-2xl">
                                <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
                                    {{ $t(content.ngarkesat.titull) }}
                                </h2>
                                <p class="mt-3 leading-7 text-celiku dark:text-mjegull">
                                    {{ $t(content.ngarkesat.pershkrim) }}
                                </p>
                                <ul role="list" class="mt-6 max-w-xl space-y-5">
                                    <li v-for="(item, index) in content.ngarkesat.elemente" :key="index" class="flex gap-x-3 text-sm/6 text-celiku dark:text-mjegull">
                                        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        <span>
                                            <strong class="font-semibold text-grafit dark:text-baze">{{ $t(item.titull) }}</strong>
                                            {{ $t(item.tekst) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <NuxtLink :to="content.ngarkesat.linkProjekte" class="group mt-8 block">
                                <figure>
                                    <img
                                        class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                                        :src="content.ngarkesat.imazh"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                                        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {{ $t(content.ngarkesat.tekstImazhi) }}
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
                    {{ $t(content.instalimi.titull) }}
                </h2>
                <p class="mt-3 max-w-3xl leading-7 text-celiku dark:text-mjegull">
                    {{ $t(content.instalimi.pershkrim) }}
                </p>
                <ul role="list" class="mt-6 grid gap-5 md:grid-cols-2">
                    <li
                        v-for="(item, index) in content.instalimi.elemente"
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
                <NuxtLink :to="content.instalimi.linkProjekte" class="group mt-8 block">
                    <figure>
                        <img
                            class="aspect-video w-full rounded-xl border border-mjegull bg-mjegull object-cover transition group-hover:brightness-95 dark:border-celiku/30 dark:bg-celiku/20"
                            :src="content.instalimi.imazh"
                            alt=""
                            loading="lazy"
                        />
                        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-celiku group-hover:text-primary dark:text-mjegull">
                            <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                            {{ $t(content.instalimi.tekstImazhi) }}
                        </figcaption>
                    </figure>
                </NuxtLink>
            </div>
        </section>

        <!-- Pershtatja e zgjidhjes dhe perfitimet -->
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
                        {{ $t(content.perfitime.titull) }}
                    </h2>
                    <ul role="list" class="mt-6 space-y-5">
                        <li
                            v-for="(item, index) in content.perfitime.elemente"
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
    title: () => t('seo.industrial.title'),
    description: () => t('seo.industrial.description'),
})

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
    ashensoret: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    ngarkesat: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    instalimi: {
        titull: string;
        pershkrim: string;
        elemente: AdvantageItem[];
        imazh: string;
        tekstImazhi: string;
        linkProjekte: string;
    };
    perfitime: {
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
                kategori: 'industrial.intro.category',
                titull: 'industrial.intro.title',
                pershkrim: 'industrial.intro.description',
            },
            ashensoret: {
                titull: 'industrial.elevators.title',
                pershkrim: 'industrial.elevators.description',
                elemente: [
                    {
                        titull: 'industrial.elevators.items.0.title',
                        tekst: 'industrial.elevators.items.0.text',
                    },
                    {
                        titull: 'industrial.elevators.items.1.title',
                        tekst: 'industrial.elevators.items.1.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'industrial.imageCaption',
                linkProjekte: '/projekte',
            },
            ngarkesat: {
                titull: 'industrial.freight.title',
                pershkrim: 'industrial.freight.description',
                elemente: [
                    {
                        titull: 'industrial.freight.items.0.title',
                        tekst: 'industrial.freight.items.0.text',
                    },
                    {
                        titull: 'industrial.freight.items.1.title',
                        tekst: 'industrial.freight.items.1.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'industrial.imageCaption',
                linkProjekte: '/projekte',
            },
            instalimi: {
                titull: 'industrial.installation.title',
                pershkrim: 'industrial.installation.description',
                elemente: [
                    {
                        titull: 'industrial.installation.items.0.title',
                        tekst: 'industrial.installation.items.0.text',
                    },
                    {
                        titull: 'industrial.installation.items.1.title',
                        tekst: 'industrial.installation.items.1.text',
                    },
                ],
                imazh: 'https://images.unsplash.com/photo-1652119133139-8c6da80c998d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
                tekstImazhi: 'industrial.imageCaption',
                linkProjekte: '/projekte',
            },
            perfitime: {
                titull: 'industrial.benefits.title',
                elemente: [
                    {
                        titull: 'industrial.benefits.items.0.title',
                        tekst: 'industrial.benefits.items.0.text',
                    },
                    {
                        titull: 'industrial.benefits.items.1.title',
                        tekst: 'industrial.benefits.items.1.text',
                    },
                    {
                        titull: 'industrial.benefits.items.2.title',
                        tekst: 'industrial.benefits.items.2.text',
                    },
                ],
            },
            pershtatje: {
                titull: 'industrial.tailored.title',
                pershkrim: 'industrial.tailored.description',
                elemente: [
                    {
                        titull: 'industrial.tailored.items.0.title',
                        tekst: 'industrial.tailored.items.0.text',
                    },
                    {
                        titull: 'industrial.tailored.items.1.title',
                        tekst: 'industrial.tailored.items.1.text',
                    },
                ],
            },
        }),
    }
);
</script>