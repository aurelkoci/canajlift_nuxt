<template>
  <main class="bg-baze text-grafit selection:bg-primary selection:text-baze dark:bg-grafit dark:text-baze">
    <!-- ==========================================
         SEKSIONI 1: HERO & SHËNIMI PËR INSTALIMET
         ========================================== -->
    <section class="relative overflow-hidden border-b border-mjegull py-16 sm:py-24 dark:border-celiku/30">
      <!-- Vijat gjeometrike të brandit në sfond -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-15 lg:block dark:opacity-20"
      >
        <svg class="h-full w-full text-primary" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 40L370 200V500H30V200L200 40Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M200 95L330 215V500H70V215L200 95Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M200 150L290 230V500H110V230L200 150Z" stroke="currentColor" stroke-width="1.5" />
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
          <p class="mt-5 text-lg/8 text-celiku dark:text-mjegull">
            {{ tr(content.hero.pershkrim) }}
          </p>

          <!-- Blloku që specifikon se këto janë vetëm disa nga instalimet e realizuara -->
          <div class="mt-8 flex items-start gap-x-4 rounded-2xl border border-primary/30 bg-primary/5 p-5 dark:border-primary/40 dark:bg-primary/10">
            <InformationCircleIcon class="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
            <div class="text-sm/6">
              <p class="font-bold text-grafit dark:text-baze">
                {{ tr(content.hero.shenimTitull) }}
              </p>
              <p class="mt-1 text-celiku dark:text-mjegull">
                {{ tr(content.hero.shenimTekst) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Shiriti i Kapacitetit të Instalimeve -->
        <dl class="mt-12 grid grid-cols-2 gap-4 border-t border-mjegull pt-10 sm:grid-cols-4 dark:border-celiku/30">
          <div
            v-for="(stat, index) in content.statistika"
            :key="index"
            class="rounded-xl border border-mjegull bg-mjegull/25 p-5 dark:border-celiku/30 dark:bg-celiku/5"
          >
            <dt class="text-xs font-semibold tracking-wider uppercase text-primary">
              {{ tr(stat.etiketa) }}
            </dt>
            <dd class="mt-2 text-2xl font-bold tracking-tight text-grafit sm:text-3xl dark:text-baze">
              {{ stat.vlera }}
            </dd>
            <p class="mt-1 text-xs text-celiku dark:text-mjegull">
              {{ tr(stat.pershkrim) }}
            </p>
          </div>
        </dl>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 2: FILTRAT & GALERIA E PROJEKTEVE
         ========================================== -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Filtrat e Kategorive -->
        <div class="flex flex-col justify-between gap-6 border-b border-mjegull pb-8 lg:flex-row lg:items-center dark:border-celiku/30">
          <div>
            <h2 class="text-2xl font-bold text-grafit dark:text-baze">
              {{ tr(content.galeria.titull) }}
            </h2>
            <p class="mt-1 text-sm text-celiku dark:text-mjegull">
              {{ tr(content.galeria.nentitull) }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filtro projektet sipas kategorisë">
            <button
              v-for="kat in content.kategorite"
              :key="kat.id"
              type="button"
              role="tab"
              :aria-selected="kategoriaAktive === kat.id"
              @click="kategoriaAktive = kat.id"
              :class="[
                kategoriaAktive === kat.id
                  ? 'bg-primary text-baze shadow-sm'
                  : 'border border-mjegull bg-mjegull/30 text-grafit hover:border-primary hover:text-primary dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze',
                'rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide transition'
              ]"
            >
              {{ tr(kat.emri) }}
            </button>
          </div>
        </div>

        <!-- Rrjeta e Projekteve (Çdo kartë ka 3 foto, datën, logon e subjektit dhe llojin e ashensorit) -->
        <div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <article
            v-for="(projekt, pIndex) in projektetEFiltruara"
            :key="projekt.id"
            class="flex flex-col justify-between overflow-hidden rounded-2xl border border-mjegull bg-baze shadow-sm transition hover:border-primary/60 dark:border-celiku/30 dark:bg-grafit"
          >
            <div>
              <!-- Galeria me 3 Foto e Projektit -->
              <div class="p-4 pb-0">
                <!-- Fotoja Kryesore Aktive -->
                <div class="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-mjegull dark:bg-celiku/20">
                  <img
                    :src="projekt.imazhe[indeksiFotosAktive[projekt.id] || 0]"
                    :alt="`${tr(projekt.titull)} - Foto ${(indeksiFotosAktive[projekt.id] || 0) + 1}`"
                    class="h-full w-full object-cover transition duration-500"
                    loading="lazy"
                  />

                  <!-- Data e realizimit -->
                  <div class="absolute top-3 left-3 inline-flex items-center gap-x-1.5 rounded-lg bg-grafit/90 px-3 py-1.5 text-xs font-semibold text-baze backdrop-blur-md">
                    <CalendarIcon class="size-4 text-primary" aria-hidden="true" />
                    <span>{{ projekt.data }}</span>
                  </div>

                  <!-- Treguesi 1/3 Foto -->
                  <div class="absolute right-3 bottom-3 rounded-md bg-grafit/80 px-2.5 py-1 text-xs font-medium text-baze backdrop-blur-sm">
                    {{ (indeksiFotosAktive[projekt.id] || 0) + 1 }} / {{ projekt.imazhe.length }}
                  </div>
                </div>

                <!-- 3 Miniaturat (Thumbnails) për ndërrimin e 3 fotove të projektit -->
                <div class="mt-3 grid grid-cols-3 gap-3">
                  <button
                    v-for="(imgUrl, imgIdx) in projekt.imazhe"
                    :key="imgIdx"
                    type="button"
                    @click="vendosFotonAktive(projekt.id, imgIdx)"
                    :class="[
                      (indeksiFotosAktive[projekt.id] || 0) === imgIdx
                        ? 'ring-2 ring-primary'
                        : 'opacity-70 hover:opacity-100',
                      'relative aspect-16/9 overflow-hidden rounded-lg bg-mjegull transition dark:bg-celiku/20'
                    ]"
                    :aria-label="`Shiko foton ${imgIdx + 1}`"
                  >
                    <img :src="imgUrl" alt="" class="h-full w-full object-cover" loading="lazy" />
                  </button>
                </div>
              </div>

              <!-- Të dhënat e Projektit -->
              <div class="p-6">
                <!-- Rreshti i Llojit të Ashensorit & Logos së Subjektit (Nëse ka) -->
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-mjegull pb-4 dark:border-celiku/20">
                  <div>
                    <span class="text-xs font-semibold tracking-wider uppercase text-primary">
                      {{ tr(projekt.llojiAshensorit) }}
                    </span>
                    <h3 class="mt-1 text-xl font-bold text-grafit dark:text-baze">
                      {{ tr(projekt.titull) }}
                    </h3>
                  </div>

                  <!-- Logo e Subjektit (shfaqet nëse ekziston logoja ose emri i subjektit) -->
                  <div
                    v-if="projekt.logoSubjekti || projekt.emerSubjekti"
                    class="flex items-center gap-x-2 rounded-xl border border-mjegull bg-mjegull/30 px-3.5 py-2 dark:border-celiku/30 dark:bg-celiku/10"
                  >
                    <img
                      v-if="projekt.logoSubjekti"
                      :src="projekt.logoSubjekti"
                      :alt="projekt.emerSubjekti || 'Logo Subjekti'"
                      class="h-6 w-auto object-contain"
                    />
                    <BuildingOffice2Icon v-else class="size-4 text-celiku dark:text-mjegull" aria-hidden="true" />
                    <span v-if="projekt.emerSubjekti" class="text-xs font-semibold text-grafit dark:text-baze">
                      {{ projekt.emerSubjekti }}
                    </span>
                  </div>
                </div>

                <!-- Përshkrimi i Projektit dhe Llojit të Ashensorit -->
                <p class="mt-4 text-sm/6 text-celiku dark:text-mjegull">
                  {{ tr(projekt.pershkrim) }}
                </p>

                <!-- Specifikimet Teknike -->
                <ul role="list" class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <li
                    v-for="(spec, sIdx) in projekt.specifikime"
                    :key="sIdx"
                    class="flex items-center gap-x-2 rounded-lg bg-mjegull/40 px-3 py-2 text-xs font-medium text-grafit dark:bg-celiku/10 dark:text-baze"
                  >
                    <CheckCircleIcon class="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{{ tr(spec) }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Fundi i Kartës: Vendndodhja & Linku për Ofertë të Ngjashme -->
            <div class="flex items-center justify-between border-t border-mjegull bg-mjegull/20 px-6 py-4 text-xs dark:border-celiku/20 dark:bg-celiku/5">
              <span class="inline-flex items-center gap-x-1.5 font-medium text-celiku dark:text-mjegull">
                <MapPinIcon class="size-4 text-primary" aria-hidden="true" />
                {{ tr(projekt.vendndodhja) }}
              </span>

              <NuxtLink
                to="/kontakt"
                class="inline-flex items-center gap-x-1 font-semibold text-grafit transition hover:text-primary dark:text-baze dark:hover:text-primary"
              >
                <span>{{ tr(content.galeria.kerkoOferteNgjashme) }}</span>
                <ArrowUpRightIcon class="size-4 text-primary" aria-hidden="true" />
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- Shënim Përmbyllës mbi Portofolin e Plotë -->
        <div class="mt-14 rounded-2xl border border-mjegull bg-mjegull/30 p-6 text-center sm:p-8 dark:border-celiku/30 dark:bg-celiku/5">
          <p class="mx-auto max-w-3xl text-sm/6 text-celiku dark:text-mjegull">
            {{ tr(content.galeria.tekstPortofoliPlote) }}
          </p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 3: B2B & KONTAKT BANNER
         ========================================== -->
    <section class="border-t-4 border-primary bg-grafit py-16 text-baze sm:py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div class="max-w-2xl">
            <p class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr(content.cta.etiketa) }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-baze sm:text-4xl">
              {{ tr(content.cta.titull) }}
            </h2>
            <p class="mt-3 text-base text-mjegull">
              {{ tr(content.cta.pershkrim) }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink
              to="/kontakt"
              class="inline-flex items-center gap-x-2.5 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-baze shadow-sm transition hover:opacity-95"
            >
              <span>{{ tr(content.cta.butonKryesor) }}</span>
              <ArrowUpRightIcon class="size-5" aria-hidden="true" />
            </NuxtLink>

            <a
              :href="`tel:${content.cta.telefonHref}`"
              class="inline-flex items-center gap-x-2.5 rounded-xl border border-celiku/40 bg-baze/5 px-6 py-4 text-sm font-semibold text-baze transition hover:border-primary hover:text-primary"
            >
              <PhoneIcon class="size-5 text-primary" aria-hidden="true" />
              <span>{{ content.cta.telefonTekst }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/vue/20/solid'

interface StatItem {
  etiketa: string
  vlera: string
  pershkrim: string
}

interface CategoryItem {
  id: string
  emri: string
}

interface ProjectItem {
  id: string
  kategoriaId: string
  titull: string
  data: string
  vendndodhja: string
  emerSubjekti?: string
  logoSubjekti?: string
  llojiAshensorit: string
  pershkrim: string
  specifikime: string[]
  imazhe: [string, string, string] // 3 foto për çdo projekt
}

interface ProjectsPageContent {
  hero: {
    kategori: string
    titull: string
    pershkrim: string
    shenimTitull: string
    shenimTekst: string
  }
  statistika: StatItem[]
  kategorite: CategoryItem[]
  galeria: {
    titull: string
    nentitull: string
    kerkoOferteNgjashme: string
    tekstPortofoliPlote: string
  }
  projekte: ProjectItem[]
  cta: {
    etiketa: string
    titull: string
    pershkrim: string
    butonKryesor: string
    telefonTekst: string
    telefonHref: string
  }
}

const props = withDefaults(
  defineProps<{
    content?: ProjectsPageContent
  }>(),
  {
    content: () => ({
      hero: {
        kategori: 'Portofoli Inxhinierik',
        titull: 'Projektet e realizuara.',
        pershkrim:
          'Me mbi 20 vjet përvojë dhe 12 grupe instalimi të certifikuara, Canaj Lift ka realizuar qindra projekte të suksesshme për ndërtesa rezidenciale, qendra tregtare, ambiente komerciale, vila dhe objekte industriale në të gjithë Shqipërinë.',
        shenimTitull: 'Shënim mbi portofolin e publikuar:',
        shenimTekst:
          'Projektet e paraqitura në këtë faqe janë vetëm disa nga instalimet e realizuara prej nesh. Me një kapacitet prej rreth 20 ashensorësh të instaluar çdo muaj dhe mbi 400 ashensorë në mirëmbajtje — përfshirë instalimet që kryejmë si partner i preferuar edhe për firmat e tjera të ashensorëve në treg — portofoli ynë shtrihet në mijëra njësi funksionale.',
      },
      statistika: [
        {
          etiketa: 'Kapacitet Mujor',
          vlera: '~20 / muaj',
          pershkrim: 'Ashensorë të instaluar çdo muaj me standarde të larta sigurie.',
        },
        {
          etiketa: 'Ekipe në Terren',
          vlera: '12 Grupe',
          pershkrim: 'Grupe instalimi të specializuara për projekte bazike dhe komplekse.',
        },
        {
          etiketa: 'Mirëmbajtje Aktive',
          vlera: '400+',
          pershkrim: 'Ashensorë nën monitorim periodik dhe servisim 24/7.',
        },
        {
          etiketa: 'Eksperiencë',
          vlera: '20+ Vjet',
          pershkrim: 'Lider në tregun shqiptar dhe partner për kompanitë e tjera.',
        },
      ],
      kategorite: [
        { id: 'te-gjitha', emri: 'Të gjitha' },
        { id: 'pasagjeresh', emri: 'Ashensorë Pasagjerësh' },
        { id: 'mallrash', emri: 'Ashensorë Mallrash' },
        { id: 'makinash', emri: 'Ashensorë Makinash' },
        { id: 'vilash', emri: 'Ashensorë Vilash (Homelift)' },
        { id: 'shkalle-stairlift', emri: 'Shkallë Lëvizëse & Stairlift' },
      ],
      galeria: {
        titull: 'Përzgjedhje nga instalimet tona',
        nentitull: 'Klikoni mbi 3 fotot e çdo projekti për të parë detajet e kabinës, dyerve dhe instalimit.',
        kerkoOferteNgjashme: 'Kërko ofertë për projekt të ngjashëm',
        tekstPortofoliPlote:
          'Këto janë vetëm disa nga instalimet tona përfaqësuese. Për referenca specifike teknike sipas llojit të objektit tuaj (ndërtesë shumëkatëshe, qendër tregtare, spital, fabrikë apo vilë), ekipi ynë inxhinierik është i gatshëm t’ju prezantojë dosjen e plotë të punimeve.',
      },
      projekte: [
        {
          id: 'proj-1',
          kategoriaId: 'pasagjeresh',
          titull: 'Kompleks Rezidencial & Biznesi',
          data: '2026',
          vendndodhja: 'Tiranë',
          emerSubjekti: 'Kompleks Rezidencial',
          logoSubjekti: '/images/logosubjekt/user.svg',
          llojiAshensorit: 'Ashensorë Pasagjerësh Elektrikë',
          pershkrim:
            'Projektim dhe instalim i ashensorëve elektrikë me shpejtësi të lartë dhe efikasitet energjetik për ndërtesë me shumë kate, pajisur me motorë dhe inverterë të avancuar për udhëtim të qetë dhe pa dridhje.',
          specifikime: ['Kapaciteti: 8 Persona / 630 kg', 'Teknologji: Elektrik VVVF', 'Standardi: Direktivat e BE (CE)'],
          imazhe: [
            '/images/projects/01/1.png',
            '/images/projects/01/2.png',
            '/images/projects/01/3.png',
          ],
        },
        {
          id: 'proj-2',
          kategoriaId: 'makinash',
          titull: 'Parkim Nëntokësor & Godinë Komerciale',
          data: '2026',
          vendndodhja: 'Tiranë',
          emerSubjekti: 'Qendër Biznesi',
          logoSubjekti: '',
          llojiAshensorit: 'Ashensor Hidraulik për Makina',
          pershkrim:
            'Zgjidhje e avancuar për transportin vertikal të automjeteve që maksimizon hapësirën e parkimit nëntokësor. Sistemi hidraulik dhe kontrolli elektronik sigurojnë stabilitet maksimal dhe operim të saktë.',
          specifikime: ['Kapaciteti: 3500 kg', 'Teknologji: Hidraulik', 'Dyer: Automatike Teleskopike'],
          imazhe: [
            '/images/projects/02/1.png',
            '/images/projects/02/2.png',
            '/images/projects/02/3.png',
          ],
        },
        {
          id: 'proj-3',
          kategoriaId: 'vilash',
          titull: 'Vilë Private 3-Katëshe',
          data: '2025',
          vendndodhja: 'Tiranë',
          emerSubjekti: 'Rezidencë Private',
          logoSubjekti: '',
          llojiAshensorit: 'Ashensor Vile (Homelift)',
          pershkrim:
            'Instalim i një ashensori homelift me kabinë dhe panel kontrolli të personalizuar sipas interierit të vilës. Konsum minimal energjie, zhurmë zero dhe sisteme sigurie të integruara.',
          specifikime: ['Kapaciteti: 4 Persona / 320 kg', 'Dizajn: Kabinë Panoramike/Inoks', 'Konsum: Efikasitet i Lartë'],
          imazhe: [
            '/images/projects/03/1.png',
            '/images/projects/03/2.png',
            '/images/projects/03/3.png',
          ],
        },
        {
          id: 'proj-4',
          kategoriaId: 'mallrash',
          titull: 'Magazinë Logjistike & Industriale',
          data: '2025',
          vendndodhja: 'Durrës',
          emerSubjekti: 'Depo Industriale',
          logoSubjekti: '',
          llojiAshensorit: 'Ashensor & Platformë Mallrash',
          pershkrim:
            'Ashensor mallrash i ndërtuar për ngarkesa të rënda dhe përdorim intensiv industrial. Kabinë e përforcuar prej çeliku rezistent ndaj goditjeve dhe dysheme kundër rrëshqitjes.',
          specifikime: ['Kapaciteti: 2500 kg', 'Regjim: Industrial i Rëndë', 'Siguri: Frena & Sensorë Mbingarkese'],
          imazhe: [
            '/images/projects/04/1.png',
            '/images/projects/04/2.png',
            '/images/projects/04/3.png',
          ],
        },
        {
          id: 'proj-5',
          kategoriaId: 'shkalle-stairlift',
          titull: 'Qendër Tregtare & Akses Publik',
          data: '2025',
          vendndodhja: 'Tiranë',
          emerSubjekti: 'Qendër Komerciale',
          logoSubjekti: '',
          llojiAshensorit: 'Shkallë Lëvizëse & Platformë Stairlift',
          pershkrim:
            'Instalim i shkallëve lëvizëse për qarkullim të lartë vizitorësh dhe i platformave të shkallëve (stairlift) me sensorë sigurie dhe rripa mbrojtës për akses të plotë të personave me aftësi të kufizuara.',
          specifikime: ['Qarkullim: Fluks i Lartë', 'Aksesueshmëri: Stairlift Ergonomik', 'Operim: I Qetë & Efikas'],
          imazhe: [
            '/images/projects/05/1.png',
            '/images/projects/05/2.png',
            '/images/projects/05/3.png',
          ],
        },
        {
          id: 'proj-6',
          kategoriaId: 'pasagjeresh',
          titull: 'Modernizim i Plotë në Godinë Ekzistuese',
          data: '2025',
          vendndodhja: 'Vlorë',
          emerSubjekti: 'Godinë Banimi & Zyra',
          logoSubjekti: '',
          llojiAshensorit: 'Modernizim Ashensori Pasagjerësh',
          pershkrim:
            'Përditësim i kompjuterizuar, automatizim i sistemit të komandimit dhe rinovim i plotë estetik i kabinës për rritjen e shpejtësisë, uljen e konsumit të energjisë dhe përputhjen me standardet europiane.',
          specifikime: ['Shërbimi: Modernizim Kompleks', 'Kontrolli: Sistem i Kompjuterizuar', 'Garanci: Servis 24/7'],
          imazhe: [
            '/images/projects/06/1.png',
            '/images/projects/06/2.png',
            '/images/projects/06/3.png',
          ],
        },
      ],
      cta: {
        etiketa: 'Bashkëpunim për Ndërtues, Arkitektë & Biznese',
        titull: 'Planifikoni instalimin ose modernizimin e radhës me Canaj Lift.',
        pershkrim:
          'Na kontaktoni për një vlerësim teknik të objektit tuaj. Stafi ynë prej 40 profesionistësh ju mbështet nga projektimi deri te mirëmbajtja 24/7.',
        butonKryesor: 'Kërko një ofertë',
        telefonTekst: '+355 69 604 2852',
        telefonHref: '+355696042852',
      },
    }),
  }
)

const { t, te } = useI18n()
const tr = (textOrKey: string) => (te(textOrKey) ? t(textOrKey) : textOrKey)

// Kategoria e zgjedhur për filtrim
const kategoriaAktive = ref('te-gjitha')

// Ruajtja e indeksit të fotos aktive (0, 1 ose 2) për secilin projekt
const indeksiFotosAktive = reactive<Record<string, number>>({})

function vendosFotonAktive(projektId: string, idx: number) {
  indeksiFotosAktive[projektId] = idx
}

const projektetEFiltruara = computed(() => {
  if (kategoriaAktive.value === 'te-gjitha') {
    return props.content.projekte
  }
  return props.content.projekte.filter((p) => p.kategoriaId === kategoriaAktive.value)
})
</script>