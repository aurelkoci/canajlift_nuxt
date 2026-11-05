<template>
  <footer
    class="border-t border-mjegull bg-baze text-grafit dark:border-celiku/30 dark:bg-grafit dark:text-baze"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <div class="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-20">
      <!-- Pjesa Kryesore e Footer-it (Grid) -->
      <div class="xl:grid xl:grid-cols-3 xl:gap-12">
        <!-- Kolona e Brandit, Kontaktit & Rrjeteve Sociale -->
        <div class="space-y-6">
          <NuxtLinkLocale to="/" class="inline-block">
            <span class="sr-only">{{ tr('nav.brand', 'Canaj Lift') }}</span>
            <img class="h-20 w-auto dark:hidden" src="/logo-canaj-lift-text.svg" alt="Canaj Lift" />
            <img class="h-20 w-auto not-dark:hidden" src="/logo-canaj-lift-text-dark.svg" alt="Canaj Lift" />
          </NuxtLinkLocale>

          <p class="max-w-sm text-sm/6 text-celiku dark:text-mjegull">
            {{
              tr(
                'footer.description',
                'Lëvizje me precizion. Lëvizja juaj vertikale, siguria jonë absolute — mbi 20 vjet përvojë në projektim, instalim dhe mirëmbajtje ashensorësh.'
              )
            }}
          </p>

          <!-- Të dhënat e kontaktit -->
          <ul role="list" class="space-y-3 text-sm text-grafit dark:text-baze">
            <li class="flex items-start gap-x-3">
              <MapPinIcon class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>Fresku, Rruga "Muhamet Deliu" Dajt Tiranë</span>
            </li>
            <li class="flex items-center gap-x-3">
              <PhoneIcon class="size-5 shrink-0 text-primary" aria-hidden="true" />
              <div class="flex flex-wrap gap-x-3">
                <a href="tel:+355696042852" class="transition hover:text-primary">+355 69 604 2852</a>
              </div>
            </li>
            <li class="flex items-center gap-x-3">
              <EnvelopeIcon class="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:info@canajlift.al" class="transition hover:text-primary">
                info@canajlift.al
              </a>
            </li>
          </ul>

          <!-- Rrjetet Sociale -->
          <div class="flex items-center gap-x-3 pt-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex size-10 items-center justify-center rounded-xl border border-mjegull bg-mjegull/40 text-grafit transition hover:border-primary hover:bg-primary hover:text-baze dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze dark:hover:border-primary dark:hover:bg-primary"
            >
              <span class="sr-only">{{ social.name }}</span>
              <svg class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path :d="social.iconPath" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Kolonat e Navigimit -->
        <div class="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
          <!-- Kolona 1: Produktet -->
          <div>
            <h3 class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr('nav.products', 'Produkte') }}
            </h3>
            <ul role="list" class="mt-5 space-y-3">
              <li v-for="item in products" :key="item.href">
                <NuxtLink
                  :to="item.href"
                  class="text-sm/6 text-celiku transition hover:text-primary dark:text-mjegull dark:hover:text-primary"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Kolona 2: Shërbimet -->
          <div>
            <h3 class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr('nav.services', 'Shërbime') }}
            </h3>
            <ul role="list" class="mt-5 space-y-3">
              <li v-for="item in sherbime" :key="item.href">
                <NuxtLink
                  :to="item.href"
                  class="text-sm/6 text-celiku transition hover:text-primary dark:text-mjegull dark:hover:text-primary"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Kolona 3: Kompania & Ligjore -->
          <div class="flex flex-col justify-between space-y-8">
            <div>
              <h3 class="text-xs font-semibold tracking-widest uppercase text-primary">
                {{ tr('footer.company', 'Kompania') }}
              </h3>
              <ul role="list" class="mt-5 space-y-3">
                <li v-for="item in companyLinks" :key="item.href">
                  <NuxtLink
                    :to="item.href"
                    class="text-sm/6 text-celiku transition hover:text-primary dark:text-mjegull dark:hover:text-primary"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xs font-semibold tracking-widest uppercase text-primary">
                {{ tr('footer.legal', 'Ligjore') }}
              </h3>
              <ul role="list" class="mt-4 space-y-2.5">
                <li v-for="item in legalLinks" :key="item.href">
                  <NuxtLink
                    :to="item.href"
                    class="text-sm/6 text-celiku transition hover:text-primary dark:text-mjegull dark:hover:text-primary"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Shiriti i të Drejtave të Autorit & Kushteve Ligjore -->
      <div
        class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-mjegull pt-8 sm:flex-row dark:border-celiku/30"
      >
        <p class="text-xs text-celiku dark:text-mjegull">
          &copy; {{ currentYear }} Canaj Lift, Inc. {{ tr('footer.rights', 'Të gjitha të drejtat e rezervuara.') }}
        </p>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-celiku dark:text-mjegull">
          <NuxtLinkLocale to="/kushtet-e-sherbimit" class="transition hover:text-primary">
            {{ tr('footer.termsOfService', 'Kushtet e Shërbimit') }}
          </NuxtLinkLocale>
          <span aria-hidden="true" class="text-mjegull dark:text-celiku/40">•</span>
          <NuxtLinkLocale to="/politikat-e-privatesis" class="transition hover:text-primary">
            {{ tr('footer.servicePolicy', 'Politikat e Privatësisë') }}
          </NuxtLinkLocale>

          <button
            type="button"
            @click="scrollToTop"
            class="ml-2 inline-flex size-8 items-center justify-center rounded-lg border border-mjegull text-primary transition hover:border-primary hover:bg-primary hover:text-baze dark:border-celiku/30"
            :aria-label="tr('footer.backToTop', 'Kthehu në fillim')"
          >
            <ArrowUpIcon class="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Pozicioni i fundit: avia.al -->
      <div
        v-if="$route.path == '/'"
        class="relative flex items-center justify-center py-8"
      >
        <a
          href="https://avia.al"
          class="group flex text-slate-300 dark:text-white"
          @mouseover="show = !show"
        >
          <div>
            <p class="block text-center mt-2 text-xs group-hover:text-sda-accent">
              Designed & Developed with
            </p>
          </div>
          <div class="relative">
            <span class="text-xs">❤️</span>
            <Transition>
              <span
                v-if="show"
                class="absolute text-xs inset-0 blur-sm animate-ping overflow-hidden"
                >❤️</span
              >
            </Transition>
          </div>
          <div>
            <p class="block text-center mt-2 text-xs group-hover:text-sda-accent">
              by avia.al
            </p>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowUpIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const { t, te } = useI18n()
const tr = (key, fallback) => (te(key) ? t(key) : fallback)

const show = ref(false)
const currentYear = new Date().getFullYear()

function scrollToTop() {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const products = computed(() => [
  { name: tr('products.passenger', 'Ashensor Pasagjerësh'), href: '/produkte/ashensor-pasagjeresh' },
  { name: tr('products.goods', 'Ashensor Mallrash'), href: '/produkte/ashensor-mallrash' },
  { name: tr('products.car', 'Ashensor Makinash'), href: '/produkte/ashensor-makinash' },
  { name: tr('products.home', 'Ashensor Vilash (Homelift)'), href: '/produkte/ashensor-vilash' },
  { name: tr('products.stairlift', 'Platforma Ngjitëse (Stairlift)'), href: '/produkte/plateforma-ngritese' },
  { name: tr('products.escalators', 'Shkallë dhe Tapete Lëvizëse'), href: '/produkte/shkalle-dhe-tapete-levizes' },
  { name: tr('products.industrial', 'Ashensor Industrial'), href: '/produkte/ashensor-industrial' },
])

const sherbime = computed(() => [
  { name: tr('services.installation', 'Instalim'), href: '/sherbime/instalim' },
  { name: tr('services.maintenance', 'Mirëmbajtje'), href: '/sherbime/mirembajtje' },
  { name: tr('services.modernization', 'Modernizim'), href: '/sherbime/modernizim' },
  { name: tr('services.spareParts', 'Pjesë Këmbimi'), href: '/sherbime/pjese-kembimi' },
])

const companyLinks = computed(() => [
  { name: tr('nav.about', 'Rreth Nesh'), href: '/rreth-nesh' },
  { name: tr('nav.projects', 'Projektet'), href: '/projekte' },
  { name: tr('nav.contact', 'Kontakt'), href: '/kontakt' },
  { name: tr('nav.login', 'Hyrje (Login)'), href: '/login' },
])

const legalLinks = computed(() => [
  { name: tr('footer.termsOfService', 'Kushtet e Shërbimit'), href: '/kushtet-e-sherbimit' },
  { name: tr('footer.servicePolicy', 'Politikat e privatësisë'), href: '/politikat-e-privatesis' },
])

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/355696042852',
    iconPath:
      'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.122 1.528 5.854l-1.528 5.582 5.716-1.499c1.693.922 3.631 1.449 5.694 1.449 6.627 0 12-5.373 12-12s-5.373-12-12-12z',
  },
  {
    name: 'LinkedIn',
    href: '#',
    iconPath:
      'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
  },
  {
    name: 'Facebook',
    href: '#',
    iconPath:
      'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/canajlift_shpk/',
    iconPath:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@CanajLift',
    iconPath:
      'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]
</script>