<template>
  <main class="bg-baze text-grafit selection:bg-primary selection:text-baze dark:bg-grafit dark:text-baze">
    <!-- ==========================================
         SEKSIONI 1: KOKA E FAQES SË KONTAKTIT
         ========================================== -->
    <section class="relative overflow-hidden border-b border-mjegull py-16 sm:py-20 dark:border-celiku/30">
      <!-- Vijat gjeometrike të brandit në sfond -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-15 lg:block dark:opacity-20"
      >
        <svg class="h-full w-full text-primary" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 40L360 190V400H40V190L200 40Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M200 90L320 205V400H80V205L200 90Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M200 140L280 220V400H120V220L200 140Z" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-x-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <span class="size-2 rounded-full bg-primary"></span>
            {{ tr(content.hero.kategori) }}
          </p>
          <h1 class="mt-3 text-4xl font-bold tracking-tight text-grafit sm:text-5xl dark:text-baze">
            {{ tr(content.hero.titull) }}
          </h1>
          <p class="mt-4 text-lg/8 text-celiku dark:text-mjegull">
            {{ tr(content.hero.pershkrim) }}
          </p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 2: TË DHËNAT, HARTA & FORMULARI
         ========================================== -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          <!-- KOLONA E MAJTË (5 kolona): Të dhënat e kontaktit & Foto e Hartës -->
          <div class="space-y-8 lg:col-span-5">
            <!-- Kartat e Kontaktit -->
            <div class="rounded-2xl border border-mjegull bg-mjegull/25 p-6 sm:p-8 dark:border-celiku/30 dark:bg-celiku/5">
              <h2 class="text-xl font-bold text-grafit dark:text-baze">
                {{ tr(content.info.titull) }}
              </h2>
              <p class="mt-2 text-sm/6 text-celiku dark:text-mjegull">
                {{ tr(content.info.nentitull) }}
              </p>

              <dl class="mt-8 space-y-6">
                <div
                  v-for="(item, index) in content.info.detaje"
                  :key="index"
                  class="flex items-start gap-x-4"
                >
                  <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <component :is="item.icon" class="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt class="text-xs font-semibold tracking-wider uppercase text-celiku dark:text-mjegull">
                      {{ tr(item.etiketa) }}
                    </dt>
                    <dd class="mt-1 text-base font-semibold text-grafit dark:text-baze">
                      <a
                        v-if="item.href"
                        :href="item.href"
                        :target="item.external ? '_blank' : undefined"
                        :rel="item.external ? 'noopener noreferrer' : undefined"
                        class="transition hover:text-primary"
                      >
                        {{ item.vlera }}
                      </a>
                      <span v-else>{{ tr(item.vlera) }}</span>
                    </dd>
                    <p v-if="item.shenim" class="mt-0.5 text-xs text-celiku dark:text-mjegull">
                      {{ tr(item.shenim) }}
                    </p>
                  </div>
                </div>
              </dl>
            </div>

            <!-- Karta me Foton e Hartës (E klikueshme për të hapur Google Maps) -->
            <div class="overflow-hidden rounded-2xl border border-mjegull bg-baze dark:border-celiku/30 dark:bg-grafit">
              <div class="flex items-center justify-between border-b border-mjegull px-6 py-4 dark:border-celiku/30">
                <div>
                  <h3 class="text-sm font-bold text-grafit dark:text-baze">
                    {{ tr(content.harta.titull) }}
                  </h3>
                  <p class="text-xs text-celiku dark:text-mjegull">
                    {{ tr(content.harta.adresa) }}
                  </p>
                </div>
                <span class="inline-flex items-center gap-x-1 text-xs font-semibold text-primary">
                  <MapPinIcon class="size-4" aria-hidden="true" />
                  GPS
                </span>
              </div>

              <!-- Linku që hap hartën kur klikohet fotoja -->
              <a
                :href="content.harta.linkuHarte"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="tr(content.harta.butonTekst)"
                class="group relative block aspect-16/10 w-full overflow-hidden bg-mjegull dark:bg-celiku/20"
              >
                <img
                  :src="content.harta.imazh"
                  :alt="tr(content.harta.alt)"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <!-- Shtresa e errët e lehtë për kontrast -->
                <div class="absolute inset-0 bg-grafit/20 transition group-hover:bg-grafit/40"></div>

                <!-- Shënjuesi (Pin) në qendër të fotos së hartës -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span class="relative flex size-12 items-center justify-center">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span class="relative flex size-10 items-center justify-center rounded-full bg-primary text-baze shadow-lg">
                      <MapPinIcon class="size-6" aria-hidden="true" />
                    </span>
                  </span>
                </div>

                <!-- Butoni që shfaqet poshtë mbi foto -->
                <div class="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-baze/20 bg-grafit/90 px-4 py-3 text-xs font-semibold text-baze backdrop-blur-md transition group-hover:border-primary group-hover:bg-primary">
                  <span>{{ tr(content.harta.butonTekst) }}</span>
                  <ArrowTopRightOnSquareIcon class="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>

          <!-- KOLONA E DJATHTË (7 kolona): Formulari i Kontaktit me Cloudflare Turnstile -->
          <div class="rounded-2xl border border-mjegull bg-baze p-6 shadow-sm sm:p-10 lg:col-span-7 dark:border-celiku/30 dark:bg-grafit">
            <h2 class="text-2xl font-bold tracking-tight text-grafit dark:text-baze">
              {{ tr(content.forma.titull) }}
            </h2>
            <p class="mt-2 text-sm/6 text-celiku dark:text-mjegull">
              {{ tr(content.forma.pershkrim) }}
            </p>

            <form @submit.prevent="submitForm" class="mt-8 space-y-6" novalidate>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <!-- Emri i Plotë / Kompania -->
                <div>
                  <label for="name" class="block text-xs font-semibold tracking-wider uppercase text-grafit dark:text-baze">
                    {{ tr(content.forma.fusha.emri.etiketa) }} <span class="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    v-model.trim="form.name"
                    type="text"
                    required
                    autocomplete="name"
                    :placeholder="tr(content.forma.fusha.emri.placeholder)"
                    class="mt-2 block w-full rounded-xl border border-mjegull bg-mjegull/20 px-4 py-3 text-sm text-grafit placeholder:text-celiku/70 focus:border-primary focus:bg-baze focus:outline-none dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze dark:placeholder:text-mjegull/50 dark:focus:border-primary dark:focus:bg-grafit"
                  />
                </div>

                <!-- Numri i Telefonit -->
                <div>
                  <label for="phone" class="block text-xs font-semibold tracking-wider uppercase text-grafit dark:text-baze">
                    {{ tr(content.forma.fusha.telefoni.etiketa) }} <span class="text-primary">*</span>
                  </label>
                  <input
                    id="phone"
                    v-model.trim="form.phone"
                    type="tel"
                    required
                    autocomplete="tel"
                    :placeholder="tr(content.forma.fusha.telefoni.placeholder)"
                    class="mt-2 block w-full rounded-xl border border-mjegull bg-mjegull/20 px-4 py-3 text-sm text-grafit placeholder:text-celiku/70 focus:border-primary focus:bg-baze focus:outline-none dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze dark:placeholder:text-mjegull/50 dark:focus:border-primary dark:focus:bg-grafit"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <!-- Adresa e Email-it -->
                <div>
                  <label for="email" class="block text-xs font-semibold tracking-wider uppercase text-grafit dark:text-baze">
                    {{ tr(content.forma.fusha.email.etiketa) }} <span class="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    :placeholder="tr(content.forma.fusha.email.placeholder)"
                    class="mt-2 block w-full rounded-xl border border-mjegull bg-mjegull/20 px-4 py-3 text-sm text-grafit placeholder:text-celiku/70 focus:border-primary focus:bg-baze focus:outline-none dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze dark:placeholder:text-mjegull/50 dark:focus:border-primary dark:focus:bg-grafit"
                  />
                </div>

                <!-- Përzgjedhja e Shërbimit ose Produktit -->
                <div>
                  <label for="subject" class="block text-xs font-semibold tracking-wider uppercase text-grafit dark:text-baze">
                    {{ tr(content.forma.fusha.sherbimi.etiketa) }} <span class="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="mt-2 block w-full rounded-xl border border-mjegull bg-mjegull/20 px-4 py-3 text-sm text-grafit focus:border-primary focus:bg-baze focus:outline-none dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze dark:focus:border-primary dark:focus:bg-grafit"
                  >
                    <option value="" disabled>
                      {{ tr(content.forma.fusha.sherbimi.placeholder) }}
                    </option>
                    <option
                      v-for="opt in content.forma.fusha.sherbimi.opsione"
                      :key="opt"
                      :value="opt"
                    >
                      {{ tr(opt) }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Mesazhi ose Specifikat e Projektit -->
              <div>
                <label for="message" class="block text-xs font-semibold tracking-wider uppercase text-grafit dark:text-baze">
                  {{ tr(content.forma.fusha.mesazhi.etiketa) }} <span class="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  v-model.trim="form.message"
                  rows="5"
                  required
                  :placeholder="tr(content.forma.fusha.mesazhi.placeholder)"
                  class="mt-2 block w-full rounded-xl border border-mjegull bg-mjegull/20 px-4 py-3 text-sm text-grafit placeholder:text-celiku/70 focus:border-primary focus:bg-baze focus:outline-none dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze dark:placeholder:text-mjegull/50 dark:focus:border-primary dark:focus:bg-grafit"
                ></textarea>
              </div>

              <!-- Cloudflare Turnstile CAPTCHA -->
              <div class="pt-2">
                <div ref="turnstileContainer" class="min-h-[65px]"></div>
                <p v-if="captchaError" class="mt-2 text-xs font-medium text-primary">
                  {{ tr(content.forma.mesazhe.gabimCaptcha) }}
                </p>
              </div>

              <!-- Mesazhet e Suksesit ose Gabimit -->
              <div
                v-if="submitStatus === 'success'"
                class="flex items-center gap-x-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300"
              >
                <CheckCircleIcon class="size-5 shrink-0 text-emerald-500" aria-hidden="true" />
                <span>{{ tr(content.forma.mesazhe.sukses) }}</span>
              </div>

              <div
                v-if="submitStatus === 'error'"
                class="flex items-center gap-x-3 rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm text-primary"
              >
                <ExclamationCircleIcon class="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{{ errorMessage || tr(content.forma.mesazhe.gabimServeri) }}</span>
              </div>

              <!-- Butoni i Dërgimit -->
              <div class="flex flex-col items-start justify-between gap-4 border-t border-mjegull pt-6 sm:flex-row sm:items-center dark:border-celiku/30">
                <p class="text-xs text-celiku dark:text-mjegull">
                  {{ tr(content.forma.shenimPrivatesie) }}
                </p>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-flex w-full items-center justify-center gap-x-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-baze shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  <span>
                    {{ isSubmitting ? tr(content.forma.butonDukeDerguar) : tr(content.forma.butonDergo) }}
                  </span>
                  <PaperAirplaneIcon class="size-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from '@heroicons/vue/20/solid'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

interface ContactDetailItem {
  etiketa: string
  vlera: string
  shenim?: string
  href?: string
  external?: boolean
  icon: Component
}

interface ContactPageContent {
  hero: {
    kategori: string
    titull: string
    pershkrim: string
  }
  info: {
    titull: string
    nentitull: string
    detaje: ContactDetailItem[]
  }
  harta: {
    titull: string
    adresa: string
    imazh: string
    alt: string
    linkuHarte: string
    butonTekst: string
  }
  forma: {
    titull: string
    pershkrim: string
    fusha: {
      emri: { etiketa: string; placeholder: string }
      telefoni: { etiketa: string; placeholder: string }
      email: { etiketa: string; placeholder: string }
      sherbimi: { etiketa: string; placeholder: string; opsione: string[] }
      mesazhi: { etiketa: string; placeholder: string }
    }
    shenimPrivatesie: string
    butonDergo: string
    butonDukeDerguar: string
    mesazhe: {
      sukses: string
      gabimServeri: string
      gabimCaptcha: string
    }
  }
}

// Çdo element i faqes është i lidhur me objektin `content`
const props = withDefaults(
  defineProps<{
    content?: ContactPageContent
    turnstileSiteKey?: string
    apiEndpoint?: string
  }>(),
  {
    // Vendos çelësin tënd real nga Cloudflare Turnstile ose në .env (NUXT_PUBLIC_TURNSTILE_SITE_KEY)
    // Çelësi më poshtë ('1x00000000000000000000AA') është çelësi zyrtar i testimit i Cloudflare
    turnstileSiteKey: '1x00000000000000000000AA',
    apiEndpoint: '/api/contact',
    content: () => ({
      hero: {
        kategori: 'Kontakt & Konsultim Teknik',
        titull: 'Lëvizje me precizion. Na kontaktoni.',
        pershkrim:
          'Në Canaj Lift, jemi të përkushtuar për të bërë çdo lëvizje të sigurt dhe të lehtë për ju. Na kontaktoni sot për një ofertë të personalizuar instalimi, mirëmbajtjeje ose modernizimi.',
      },
      info: {
        titull: 'Informacione Kontakti',
        nentitull: 'Stafi ynë prej 40 profesionistësh dhe 12 grupeve të instalimit është në dispozicionin tuaj.',
        detaje: [
          {
            etiketa: 'Adresa e Zyrave',
            vlera: 'Fresku, Rruga "Muhamet Deliu" Dajt Tiranë',
            shenim: 'Tiranë, Shqipëri',
            href: 'https://www.google.com/maps/search/?api=1&query=Fresku+Rruga+Muhamet+Deliu+Dajt+Tirane',
            external: true,
            icon: MapPinIcon,
          },
          {
            etiketa: 'Telefon & Emergjenca 24/7',
            vlera: '+355 69 604 2852',
            shenim: 'Asistencë teknike dhe oferta komerciale',
            href: 'tel:+355696042852',
            icon: PhoneIcon,
          },
          {
            etiketa: 'Adresa e Email-it',
            vlera: 'canajlift@gmail.com',
            shenim: 'Dërgoni projektet ose specifikimet tuaja teknike',
            href: 'mailto:canajlift@gmail.com',
            icon: EnvelopeIcon,
          },
          {
            etiketa: 'Orari i Shërbimit',
            vlera: 'E Hënë - E Shtunë: 08:00 - 17:00',
            shenim: 'Servisim dhe riparim emergjence i gatshëm 24/7',
            icon: ClockIcon,
          },
        ],
      },
      harta: {
        titull: 'Vendndodhja jonë në Harte',
        adresa: 'Fresku, Rruga "Muhamet Deliu" Dajt Tiranë',
        // Zëvendësoje me foton statike të hartës në projektin tënd (p.sh. /images/harta-canaj-lift.webp)
        imazh: '/images/harta-canaj-lift.png',
        alt: 'Harta e vendndodhjes së zyrave Canaj Lift në Fresk, Rruga Muhamet Deliu, Tiranë',
        linkuHarte: 'https://maps.app.goo.gl/s6hAnoGXNPaSCWqL6',
        butonTekst: 'Kliko për të hapur vendndodhjen në Google Maps',
      },
      forma: {
        titull: 'Dërgoni një Mesazh ose Kërkesë për Ofertë',
        pershkrim: 'Plotësoni të dhënat e mëposhtme dhe inxhinierët tanë do t’ju kontaktojnë në kohë rekord.',
        fusha: {
          emri: {
            etiketa: 'Emri i Plotë / Subjekti',
            placeholder: 'p.sh. Artan Hoxha / Kulla Rezidenciale',
          },
          telefoni: {
            etiketa: 'Numri i Telefonit',
            placeholder: '+355 69 XX XX XXX',
          },
          email: {
            etiketa: 'Adresa Email',
            placeholder: 'emri@kompania.al',
          },
          sherbimi: {
            etiketa: 'Produkti ose Shërbimi i Kërkuar',
            placeholder: 'Zgjidhni një kategori...',
            opsione: [
              'Ashensor Pasagjerësh (Elektrik / Hidraulik)',
              'Ashensor Mallrash / Platformë',
              'Ashensor Makinash',
              'Ashensor Vilash (Homelift)',
              'Platformë Ngjitëse (Stairlift)',
              'Shkallë dhe Tapete Lëvizëse',
              'Ashensor Industrial',
              'Shërbim Instalimi',
              'Kontratë Mirëmbajtjeje 24/7',
              'Modernizim Ashensori Ekzistues',
              'Pjesë Këmbimi Origjinale',
            ],
          },
          mesazhi: {
            etiketa: 'Detajet e Projektit / Mesazhi',
            placeholder: 'Përshkruani numrin e kateve, kapacitetin e kërkuar ose pyetjen tuaj teknike...',
          },
        },
        shenimPrivatesie: 'Të dhënat tuaja trajtohen me konfidencialitet të plotë.',
        butonDergo: 'Dërgo Mesazhin',
        butonDukeDerguar: 'Duke u dërguar...',
        mesazhe: {
          sukses: 'Mesazhi juaj u dërgua me sukses! Ekipi i Canaj Lift do t’ju kontaktojë së shpejti.',
          gabimServeri: 'Ndodhi një gabim gjatë dërgimit. Ju lutemi provoni përsëri ose na telefononi në +355 69 604 2852.',
          gabimCaptcha: 'Ju lutemi plotësoni verifikimin e sigurisë (Cloudflare Captcha) përpara dërgimit.',
        },
      },
    }),
  }
)

const { t, te } = useI18n()
const tr = (textOrKey: string) => (te(textOrKey) ? t(textOrKey) : textOrKey)

// Gjendja reaktive e formularit
const form = reactive({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  cf_turnstile_response: '',
})

const isSubmitting = ref(false)
const captchaError = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

// Referencat për Cloudflare Turnstile
const turnstileContainer = ref<HTMLElement | null>(null)
let turnstileWidgetId: string | null = null

function renderTurnstileWidget() {
  if (!import.meta.client || !window.turnstile || !turnstileContainer.value) return

  if (turnstileWidgetId) {
    window.turnstile.remove(turnstileWidgetId)
  }

  turnstileWidgetId = window.turnstile.render(turnstileContainer.value, {
    sitekey: props.turnstileSiteKey,
    theme: 'auto',
    callback: (token: string) => {
      form.cf_turnstile_response = token
      captchaError.value = false
    },
    'expired-callback': () => {
      form.cf_turnstile_response = ''
    },
    'error-callback': () => {
      form.cf_turnstile_response = ''
    },
  })
}

onMounted(() => {
  if (!import.meta.client) return

  if (window.turnstile) {
    renderTurnstileWidget()
    return
  }

  const existingScript = document.getElementById('cf-turnstile-script')
  if (!existingScript) {
    const script = document.createElement('script')
    script.id = 'cf-turnstile-script'
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => renderTurnstileWidget()
    document.head.appendChild(script)
  } else {
    existingScript.addEventListener('load', renderTurnstileWidget)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client && window.turnstile && turnstileWidgetId) {
    window.turnstile.remove(turnstileWidgetId)
  }
})

async function submitForm() {
  submitStatus.value = 'idle'
  errorMessage.value = ''

  if (!form.cf_turnstile_response) {
    captchaError.value = true
    return
  }

  isSubmitting.value = true

  try {
    await $fetch(props.apiEndpoint, {
      method: 'POST',
      body: { ...form },
    })

    submitStatus.value = 'success'
    form.name = ''
    form.phone = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    form.cf_turnstile_response = ''

    if (import.meta.client && window.turnstile && turnstileWidgetId) {
      window.turnstile.reset(turnstileWidgetId)
    }
  } catch (err: any) {
    submitStatus.value = 'error'
    errorMessage.value = err?.data?.message || ''
    if (import.meta.client && window.turnstile && turnstileWidgetId) {
      window.turnstile.reset(turnstileWidgetId)
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>