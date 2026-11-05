<template>
    <header
        class="sticky top-0 z-50 border-b border-mjegull bg-baze transition-transform duration-300 motion-reduce:transition-none dark:border-celiku/30 dark:bg-grafit"
        :class="isVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'"
    >
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" :aria-label="t('nav.mainMenu')">
            <div class="flex lg:flex-1">
                <NuxtLinkLocale to="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">{{ t('nav.brand') }}</span>
                    <img class="h-12 w-auto dark:hidden" src="/logo-canaj-lift.svg" alt="" />
                    <img class="h-12 w-auto not-dark:hidden" src="/logo-canaj-lift-dark.svg" alt="" />
                                </NuxtLinkLocale>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-grafit dark:text-baze"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">{{ t('nav.openMenu') }}</span>
                    <Bars3Icon class="size-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-8">
                <Popover
                    v-slot="{ open, close }"
                >
                    <div class="relative" @mouseenter="openPopover($event, open)" @mouseleave="close()">
                      <PopoverButton
                        class="flex items-center gap-x-1 text-sm/6 font-semibold text-grafit hover:text-primary dark:text-baze">
                        {{ t('nav.products') }}
                        <ChevronDownIcon class="size-5 flex-none text-celiku dark:text-mjegull" aria-hidden="true" />
                    </PopoverButton>
                    <div aria-hidden="true" class="absolute left-0 top-full z-10 h-3 w-full"></div>

                    <transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1" enter-to-class="translate-y-0"
                        leave-active-class="transition ease-in duration-150" leave-from-class="translate-y-0"
                        leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel
                            class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-baze shadow-lg shadow-grafit/10 outline-1 outline-grafit/10 dark:bg-grafit dark:shadow-none dark:-outline-offset-1 dark:outline-celiku/30">
                            <div class="p-4">
                                <NuxtLinkLocale v-for="item in products" :key="item.href" :to="item.href"
                                    @click="close()"
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-mjegull dark:hover:bg-celiku/20">
                                    <div
                                        class="flex size-11 flex-none items-center justify-center rounded-lg bg-mjegull group-hover:bg-baze dark:bg-celiku/20 dark:group-hover:bg-celiku/40">
                                        <img :src="item.icon" alt="" aria-hidden="true" class="size-9 object-contain" />
                                    </div>
                                    <div class="flex-auto">
                                        <span class="block font-semibold text-grafit group-hover:text-primary dark:text-baze">
                                            {{ item.name }}
                                        </span>
                                        <p class="mt-1 text-celiku dark:text-mjegull">{{ item.description }}</p>
                                    </div>
                                </NuxtLinkLocale>
                            </div>
                            <div
                                class="grid grid-cols-2 divide-x divide-celiku/20 bg-mjegull dark:divide-celiku/20 dark:bg-grafit">
                                <NuxtLinkLocale v-for="item in callsToAction" :key="item.name" :to="item.href"
                                    @click="close()"
                                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-grafit hover:bg-baze hover:text-primary dark:text-baze dark:hover:bg-celiku/20">
                                    <component :is="item.icon" class="size-5 flex-none text-celiku"
                                        aria-hidden="true" />
                                    {{ item.name }}
                                </NuxtLinkLocale>
                            </div>
                        </PopoverPanel>
                    </transition>
                    </div>
                </Popover>



                <Popover
                    v-slot="{ open, close }"
                >
                    <div class="relative" @mouseenter="openPopover($event, open)" @mouseleave="close()">
                    <PopoverButton
                        class="flex items-center gap-x-1 text-sm/6 font-semibold text-grafit hover:text-primary dark:text-baze">
                        {{ t('nav.services') }}
                        <ChevronDownIcon class="size-5 flex-none text-celiku dark:text-mjegull" aria-hidden="true" />
                    </PopoverButton>
                    <div aria-hidden="true" class="absolute left-0 top-full z-10 h-3 w-full"></div>

                    <transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1" enter-to-class="translate-y-0"
                        leave-active-class="transition ease-in duration-150" leave-from-class="translate-y-0"
                        leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel
                            class="absolute left-1/2 z-10 mt-3 w-96 -translate-x-1/2 rounded-3xl bg-baze p-4 shadow-lg shadow-grafit/10 outline-1 outline-grafit/10 dark:bg-grafit dark:-outline-offset-1 dark:outline-celiku/30">
                            <NuxtLinkLocale v-for="item in sherbime" :key="item.href" :to="item.href"
                                @click="close()"
                                class="group flex items-center gap-4 rounded-lg p-4 hover:bg-mjegull dark:hover:bg-celiku/20">
                                <img :src="item.icon" alt="" aria-hidden="true" class="size-10 shrink-0 object-contain" />
                                <span class="block text-sm/6 font-semibold text-grafit group-hover:text-primary dark:text-baze">
                                    <span>{{ item.name }}</span>
                                    <span class="mt-1 block font-normal text-celiku dark:text-mjegull">{{ item.description }}</span>
                                </span>
                            </NuxtLinkLocale>
                        </PopoverPanel>
                    </transition>
                    </div>
                </Popover>
                <NuxtLinkLocale to="/rreth-nesh" class="text-sm/6 font-semibold text-grafit hover:text-primary dark:text-baze">{{ t('nav.about') }}
                </NuxtLinkLocale>
                <NuxtLinkLocale to="/projekte" class="text-sm/6 font-semibold text-grafit hover:text-primary dark:text-baze">{{ t('nav.projects') }}
                </NuxtLinkLocale>
                <NuxtLinkLocale to="/kontakt" class="text-sm/6 font-semibold text-grafit hover:text-primary dark:text-baze">{{ t('nav.contact') }}
                </NuxtLinkLocale>
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <div class="flex items-center gap-4">
                    <ThemeToggle />
                    <Locale />
                                    <NuxtLinkLocale to="/login" class="text-sm/6 font-semibold text-grafit hover:text-primary dark:text-baze">{{ t('nav.login') }} <span
                        aria-hidden="true">&rarr;</span></NuxtLinkLocale>
                </div>
                

            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10 bg-grafit/40"></div>
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-baze sm:max-w-sm sm:ring-1 sm:ring-grafit/10 dark:bg-grafit dark:sm:ring-celiku/20">
                <div class="p-6">
                    <div class="flex items-center justify-between">
                        <NuxtLinkLocale to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                            <span class="sr-only">{{ t('nav.brand') }}</span>
                            <img class="h-8 w-auto dark:hidden"
                                src="/logo-canaj-lift.svg"
                                alt="" />
                            <img class="h-8 w-auto not-dark:hidden"
                                src="/logo-canaj-lift.svg"
                                alt="" />
                        </NuxtLinkLocale>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-grafit hover:text-primary dark:text-mjegull"
                            @click="mobileMenuOpen = false">
                            <span class="sr-only">{{ t('nav.closeMenu') }}</span>
                            <XMarkIcon class="size-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-celiku/20 dark:divide-celiku/20">
                            <div class="space-y-2 py-6">
                                <NuxtLinkLocale v-for="item in products" :key="item.href" :to="item.href"
                                    @click="mobileMenuOpen = false"
                                    class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-grafit hover:bg-mjegull hover:text-primary dark:text-baze dark:hover:bg-celiku/20">
                                    <img :src="item.icon" alt="" aria-hidden="true" class="size-11 shrink-0 object-contain" />
                                    {{ item.name }}
                                </NuxtLinkLocale>
                            </div>
                            <div class="space-y-2 py-6">
                                <NuxtLinkLocale to="/rreth-nesh" @click="mobileMenuOpen = false"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-grafit hover:bg-mjegull hover:text-primary dark:text-baze dark:hover:bg-celiku/20">{{ t('nav.about') }}</NuxtLinkLocale>
                                <NuxtLinkLocale to="/projekte" @click="mobileMenuOpen = false"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-grafit hover:bg-mjegull hover:text-primary dark:text-baze dark:hover:bg-celiku/20">{{ t('nav.projects') }}</NuxtLinkLocale>

                                <NuxtLinkLocale v-for="item in sherbime" :key="item.href" :to="item.href"
                                    @click="mobileMenuOpen = false"
                                    class="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-2 text-base/7 font-semibold text-grafit hover:bg-mjegull hover:text-primary dark:text-baze dark:hover:bg-celiku/20">
                                    <img :src="item.icon" alt="" aria-hidden="true" class="size-9 shrink-0 object-contain" />
                                    {{ item.name }}
                                </NuxtLinkLocale>
                                <NuxtLinkLocale to="/kontakt" @click="mobileMenuOpen = false"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-grafit hover:bg-mjegull hover:text-primary dark:text-baze dark:hover:bg-celiku/20">{{ t('nav.contact') }}</NuxtLinkLocale>
                            </div>
                            <div class="py-6">
                                <ThemeToggle />
                                <Locale />
                                <NuxtLinkLocale to="/login" @click="mobileMenuOpen = false"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-grafit hover:bg-mjegull hover:text-primary dark:text-baze dark:hover:bg-celiku/20">{{ t('nav.login') }}</NuxtLinkLocale>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="sticky bottom-0 grid grid-cols-2 divide-x divide-celiku/20 bg-mjegull text-center dark:divide-celiku/20 dark:bg-grafit">
                    <NuxtLinkLocale v-for="item in callsToAction" :key="item.name" :to="item.href"
                        @click="mobileMenuOpen = false"
                        class="p-3 text-base/7 font-semibold text-grafit hover:bg-baze hover:text-primary dark:text-baze dark:hover:bg-celiku/20">{{
                        item.name }}</NuxtLinkLocale>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>
<script setup>
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const { t } = useI18n()

function openPopover(event, isOpen) {
    if (!isOpen) {
        event.currentTarget.querySelector('button')?.click()
    }
}

const products = computed(() => [
    { name: t('products.passenger'), description: t('products.passengerDescription'), href: '/produkte/ashensor-pasagjeresh', icon: '/icon/Ashensor%20Pasagjeresh.svg' },
    { name: t('products.goods'), description: t('products.goodsDescription'), href: '/produkte/ashensor-mallrash', icon: '/icon/Ashensor%20Mallrash.svg' },
    { name: t('products.car'), description: t('products.carDescription'), href: '/produkte/ashensor-makinash', icon: '/icon/Ashensor%20Makinash.svg' },
    { name: t('products.home'), description: t('products.homeDescription'), href: '/produkte/ashensor-vilash', icon: '/icon/Hidraulik%20Elevator.svg' },
    { name: t('products.stairlift'), description: t('products.stairliftDescription'), href: '/produkte/plateforma-ngritese', icon: '/icon/Plateforma%20Ngritese.svg' },
    { name: t('products.escalators'), description: t('products.escalatorsDescription'), href: '/produkte/shkalle-dhe-tapete-levizes', icon: '/icon/Ashensor%20Shkall%20dhe%20tapete.svg' },
    { name: t('products.industrial'), description: t('products.industrialDescription'), href: '/produkte/ashensor-industrial', icon: '/icon/Hidraulik%20Elevator.svg' },
])
const callsToAction = computed(() => [
    { name: t('actions.demo'), href: 'https://www.youtube.com/@CanajLift', icon: PlayCircleIcon },
    { name: t('actions.contact'), href: '/kontakt', icon: PhoneIcon },
])
const sherbime = computed(() => [
    { name: t('services.installation'), href: '/sherbime/instalim', description: t('services.installationDescription'), icon: '/icon/Instalim.svg' },
    { name: t('services.maintenance'), href: '/sherbime/mirembajtje', description: t('services.maintenanceDescription'), icon: '/icon/Mirembajtje.svg' },
    {
        name: t('services.modernization'),
        href: '/sherbime/modernizim',
        description: t('services.modernizationDescription'),
        icon: '/icon/Modernizim.svg',
    },
    { name: t('services.spareParts'), href: '/sherbime/pjese-kembimi', description: t('services.sparePartsDescription'), icon: '/icon/pjesekembimi.svg' },
])

const mobileMenuOpen = ref(false)
const isVisible = ref(true)

let previousScrollY = 0

function handleScroll() {
    const currentScrollY = window.scrollY
    const scrollDelta = currentScrollY - previousScrollY

    if (mobileMenuOpen.value) {
        isVisible.value = true
        previousScrollY = currentScrollY
        return
    }

    if (Math.abs(scrollDelta) < 8) return

    previousScrollY = currentScrollY

    if (currentScrollY <= 80 || scrollDelta < 0) {
        isVisible.value = true
    } else {
        isVisible.value = false
    }
}

onMounted(() => {
    previousScrollY = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>
