<template>
  <main class="bg-baze text-grafit selection:bg-primary selection:text-baze dark:bg-grafit dark:text-baze">
    <!-- ==========================================
         SEKSIONI 1: HERO ARKITEKTONIK
         ========================================== -->
    <section class="relative overflow-hidden border-b border-mjegull dark:border-celiku/30">
      <!-- Vijat gjeometrike të sistemit në sfond (Nga simboli te sistemi) -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-15 lg:block dark:opacity-20"
      >
        <svg class="h-full w-full text-primary" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300 80L560 320V800H40V320L300 80Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M300 140L510 335V800H90V335L300 140Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M300 200L460 350V800H140V350L300 200Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M300 260L410 365V800H190V365L300 260Z" stroke="currentColor" stroke-width="1.5" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="currentColor" stroke-width="1" stroke-dasharray="6 6" />
        </svg>
      </div>

      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:px-8 lg:py-28">
        <!-- Kolona e Majtë: Tipografia & CTA -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-x-2.5 rounded-full border border-mjegull bg-mjegull/50 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-grafit dark:border-celiku/30 dark:bg-celiku/10 dark:text-baze">
            <span class="size-2 rounded-full bg-primary"></span>
            {{ tr('home.hero.badge', '20+ Vjet Përvojë • Direktivat e BE-së') }}
          </div>

          <h1 class="mt-6 text-4xl font-bold tracking-tight text-grafit sm:text-6xl lg:leading-[1.1] dark:text-baze">
            {{ tr('home.hero.title', 'Lëvizje me precizion.') }}
            <span class="mt-2 block text-primary">
              {{ tr('home.hero.subtitleAccent', 'Çdo nivel, më lart.') }}
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg/8 text-celiku dark:text-mjegull">
            {{
              tr(
                'home.hero.description',
                'Lëvizja juaj vertikale, siguria jonë absolute. Ofrojmë zgjidhje të plota për projektim, furnizim, instalim dhe mirëmbajtje ashensorësh me teknologjinë më të avancuar në Shqipëri.'
              )
            }}
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <NuxtLink
              to="/kontakt"
              class="group inline-flex items-center gap-x-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-baze shadow-sm transition hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ tr('home.hero.ctaPrimary', 'Kërko një ofertë') }}
              <ArrowUpRightIcon class="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </NuxtLink>

            <NuxtLink
              to="/projekte"
              class="inline-flex items-center gap-x-2.5 rounded-xl border border-mjegull bg-baze px-6 py-3.5 text-sm font-semibold text-grafit transition hover:border-primary hover:text-primary dark:border-celiku/40 dark:bg-grafit dark:text-baze dark:hover:border-primary"
            >
              {{ tr('home.hero.ctaSecondary', 'Shiko projektet') }}
            </NuxtLink>

            <a
              href="https://www.youtube.com/@CanajLift"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-x-2 px-3 py-2 text-sm font-semibold text-celiku transition hover:text-primary dark:text-mjegull"
            >
              <PlayCircleIcon class="size-5 text-primary" aria-hidden="true" />
              <span>{{ tr('actions.demo', 'Video prezantuese') }}</span>
            </a>
          </div>
        </div>

        <!-- Kolona e Djathtë: Imazhi Arkitektonik -->
        <div class="mt-12 lg:col-span-5 lg:mt-0">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <div class="relative aspect-4/5 overflow-hidden rounded-2xl border border-mjegull bg-mjegull shadow-xl dark:border-celiku/30 dark:bg-celiku/10">
              <img
                src="/images/hero-elevator-shaft.jpg"
                :alt="tr('home.hero.imageAlt', 'Atrium modern me ashensorë Canaj Lift')"
                class="h-full w-full object-cover"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-grafit/80 via-grafit/10 to-transparent"></div>

              <!-- Karta informuese brenda imazhit -->
              <div class="absolute right-4 bottom-4 left-4 rounded-xl border border-baze/15 bg-grafit/90 p-4 text-baze backdrop-blur-md">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs font-medium tracking-wider uppercase text-mjegull">
                      {{ tr('home.hero.cardLabel', 'Siguri & Standarde Europiane') }}
                    </p>
                    <p class="mt-1 text-sm font-semibold">
                      {{ tr('home.hero.cardTitle', 'Ngjituni lart me besim, Canaj Lift ju ngre.') }}
                    </p>
                  </div>
                  <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-baze">
                    <ArrowUpIcon class="size-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 2: SHIRITI I KAPACITETIT INXHINIERIK
         ========================================== -->
    <section :aria-label="tr('home.stats.ariaLabel', 'Treguesit e kapacitetit')" class="border-b border-mjegull bg-mjegull/30 dark:border-celiku/30 dark:bg-celiku/5">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 divide-y divide-mjegull sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-celiku/30">
          <div
            v-for="stat in stats"
            :key="stat.value"
            class="px-6 py-8 first:pl-0 lg:px-8"
          >
            <dt class="flex items-center gap-x-2 text-xs font-semibold tracking-wider uppercase text-primary">
              <span class="size-1.5 rounded-full bg-primary"></span>
              {{ stat.label }}
            </dt>
            <dd class="mt-2 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
              {{ stat.value }}
            </dd>
            <p class="mt-2 text-sm text-celiku dark:text-mjegull">
              {{ stat.description }}
            </p>
          </div>
        </dl>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 3: PORTOFOLI I PRODUKTEVE (7 KATEGORI)
         ========================================== -->
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Koka e Seksionit -->
        <div class="flex flex-col justify-between gap-6 border-b border-mjegull pb-10 lg:flex-row lg:items-end dark:border-celiku/30">
          <div>
            <p class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr('home.products.eyebrow', '01 / Portofoli i Produkteve') }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
              {{ tr('home.products.title', 'Hapësirë për lëvizje.') }}
            </h2>
          </div>
          <p class="max-w-xl text-base text-celiku dark:text-mjegull">
            {{
              tr(
                'home.products.subtitle',
                'Zgjidhje të përshtatura për ndërtesa rezidenciale, qendra tregtare, vila dhe ambiente industriale me sisteme elektrike dhe hidraulike.'
              )
            }}
          </p>
        </div>

        <!-- Bento Grid i 7 Produkteve -->
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="(product, index) in productCards"
            :key="product.href"
            :to="product.href"
            :class="[
              index === 0 ? 'md:col-span-2 lg:col-span-2' : 'col-span-1',
              'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-mjegull bg-baze p-6 transition duration-200 hover:border-primary hover:shadow-lg dark:border-celiku/30 dark:bg-grafit dark:hover:border-primary'
            ]"
          >
            <div>
              <!-- Rreshti i sipërm: Ikona, Etiketat (Tags) dhe Shigjeta -->
              <div class="flex items-start justify-between gap-4">
                <div class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-mjegull group-hover:bg-primary/10 dark:bg-celiku/20">
                  <img :src="product.icon" alt="" aria-hidden="true" class="size-8 object-contain" />
                </div>

                <div class="flex flex-wrap items-center justify-end gap-1.5">
                  <span
                    v-for="tag in product.tags"
                    :key="tag"
                    class="rounded-md border border-mjegull bg-mjegull/60 px-2.5 py-1 text-xs font-medium text-grafit dark:border-celiku/30 dark:bg-celiku/20 dark:text-baze"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Titulli & Përshkrimi -->
              <h3 class="mt-6 text-xl font-bold text-grafit transition group-hover:text-primary dark:text-baze">
                {{ product.name }}
              </h3>
              <p class="mt-2 text-sm/6 text-celiku dark:text-mjegull">
                {{ product.description }}
              </p>

              <!-- Pikat teknike kryesore -->
              <ul class="mt-4 space-y-1.5 border-t border-mjegull/80 pt-4 text-xs text-celiku dark:border-celiku/20 dark:text-mjegull">
                <li v-for="feature in product.features" :key="feature" class="flex items-center gap-x-2">
                  <span class="size-1.5 rounded-full bg-primary"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 flex items-center justify-between pt-2 text-sm font-semibold text-grafit group-hover:text-primary dark:text-baze">
              <span>{{ tr('common.seeMore', 'Shiko detajet teknike') }}</span>
              <ArrowUpRightIcon
                class="size-5 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 4: KATËR SHTYLLAT E SHËRBIMIT (DARK BLOCK)
         ========================================== -->
    <section class="relative overflow-hidden bg-grafit py-20 text-baze sm:py-28 dark:border-y dark:border-celiku/30">
      <!-- Vijat gjeometrike në cepin e poshtëm -->
      <div aria-hidden="true" class="pointer-events-none absolute right-0 bottom-0 w-96 opacity-15">
        <svg viewBox="0 0 400 300" fill="none" class="w-full text-primary">
          <path d="M200 20L380 180V300H20V180L200 20Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M200 70L340 195V300H60V195L200 70Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M200 120L300 210V300H100V210L200 120Z" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </div>

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold tracking-widest uppercase text-primary">
            {{ tr('home.services.eyebrow', '02 / Zgjidhje End-to-End') }}
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-baze sm:text-4xl">
            {{ tr('home.services.title', 'Nga simboli te sistemi. Mbështetje e pandërprerë.') }}
          </h2>
          <p class="mt-4 text-base/7 text-mjegull">
            {{
              tr(
                'home.services.subtitle',
                'Gjithçka e nevojshme për funksionimin pa ndërprerje dhe në përputhje të plotë me direktivat e Bashkimit Europian.'
              )
            }}
          </p>
        </div>

        <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            v-for="(service, idx) in servicePillars"
            :key="service.href"
            :to="service.href"
            class="group flex flex-col justify-between rounded-2xl border border-celiku/30 bg-baze/5 p-6 transition hover:border-primary hover:bg-baze/10"
          >
            <div>
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-semibold text-primary">0{{ idx + 1 }}</span>
                <img :src="service.icon" alt="" aria-hidden="true" class="size-10 object-contain" />
              </div>

              <h3 class="mt-6 text-lg font-bold text-baze group-hover:text-primary">
                {{ service.name }}
              </h3>

              <p class="mt-2 text-sm/6 text-mjegull">
                {{ service.description }}
              </p>

              <p class="mt-4 border-t border-celiku/30 pt-4 text-xs font-medium text-baze/90">
                {{ service.highlight }}
              </p>
            </div>

            <div class="mt-6 flex items-center gap-x-2 text-xs font-semibold tracking-wider uppercase text-primary">
              <span>{{ tr('common.exploreService', 'Mëso më shumë') }}</span>
              <ArrowRightIcon class="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 5: PREZENCA NË TERREN & RRETH NESH
         ========================================== -->
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <!-- Përmbajtja dhe Vlerat -->
          <div class="lg:col-span-6">
            <p class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr('home.about.eyebrow', '03 / Rreth Canaj Lift') }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
              {{ tr('home.about.title', 'E dallueshme, në çdo nivel.') }}
            </h2>
            <p class="mt-4 text-base/7 text-celiku dark:text-mjegull">
              {{
                tr(
                  'home.about.lead',
                  'Prej më shumë se 20 vitesh, Canaj Lift ka ndërtuar një reputacion të fortë për cilësi dhe shërbim të shkëlqyer. Përveç projekteve tona, ne kryejmë instalime edhe për firmat e tjera të ashensorëve në treg, duke u bërë partneri i preferuar inxhinierik në Shqipëri.'
                )
              }}
            </p>

            <dl class="mt-8 space-y-6">
              <div v-for="val in coreValues" :key="val.title" class="flex gap-x-4">
                <div class="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckIcon class="size-4" aria-hidden="true" />
                </div>
                <div>
                  <dt class="font-semibold text-grafit dark:text-baze">{{ val.title }}</dt>
                  <dd class="mt-1 text-sm text-celiku dark:text-mjegull">{{ val.text }}</dd>
                </div>
              </div>
            </dl>

            <div class="mt-10 flex items-center gap-x-6">
              <NuxtLink
                to="/rreth-nesh"
                class="inline-flex items-center gap-x-2 rounded-xl bg-grafit px-5 py-3 text-sm font-semibold text-baze transition hover:bg-primary dark:bg-baze dark:text-grafit dark:hover:bg-primary dark:hover:text-baze"
              >
                {{ tr('home.about.cta', 'Historia dhe Certifikimet') }}
                <ArrowUpRightIcon class="size-4" aria-hidden="true" />
              </NuxtLink>
              <span class="text-sm font-medium italic text-celiku dark:text-mjegull">
                "{{ tr('home.about.slogan', 'Cilësia që ju ngre lart, shërbimi që ju mban atje.') }}"
              </span>
            </div>
          </div>

          <!-- Dy kartat vizuale nga Brand Book (Automjet shërbimi & Sinjalistikë) -->
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
            <div class="overflow-hidden rounded-2xl border border-mjegull bg-mjegull/30 p-5 dark:border-celiku/30 dark:bg-celiku/10">
              <div class="aspect-4/3 overflow-hidden rounded-xl bg-mjegull dark:bg-grafit">
                <img
                  src="/images/service-fleet.jpg"
                  :alt="tr('home.about.card1ImageAlt', 'Flota e automjeteve të shërbimit Canaj Lift')"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p class="mt-4 text-xs font-semibold tracking-wider uppercase text-primary">{{ tr('home.about.card1Eyebrow', '01 / Terren 24/7') }}</p>
              <h3 class="mt-1 text-base font-bold text-grafit dark:text-baze">
                {{ tr('home.about.card1Title', 'Automjet shërbimi & 12 Grupe') }}
              </h3>
              <p class="mt-1 text-xs/5 text-celiku dark:text-mjegull">
                {{ tr('home.about.card1Text', 'Flotë e dedikuar teknike për instalime në kantiere dhe ndërhyrje të menjëhershme emergjence.') }}
              </p>
            </div>

            <div class="overflow-hidden rounded-2xl border border-mjegull bg-mjegull/30 p-5 dark:border-celiku/30 dark:bg-celiku/10">
              <div class="aspect-4/3 overflow-hidden rounded-xl bg-mjegull dark:bg-grafit">
                <img
                  src="/images/architectural-signage2.jpg"
                  :alt="tr('home.about.card2ImageAlt', 'Kabina dhe sinjalistika arkitektonike Canaj Lift')"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p class="mt-4 text-xs font-semibold tracking-wider uppercase text-primary">{{ tr('home.about.card2Eyebrow', '02 / Certifikim CE') }}</p>
              <h3 class="mt-1 text-base font-bold text-grafit dark:text-baze">
                {{ tr('home.about.card2Title', 'Sinjalistikë & Precizion') }}
              </h3>
              <p class="mt-1 text-xs/5 text-celiku dark:text-mjegull">
                {{ tr('home.about.card2Text', 'Kabina moderne inoksi, sisteme kontrolli inteligjente dhe komponentë të testuar sigurie.') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 6: PROJEKTET E REALIZUARA & PARTNERËT
         ========================================== -->
    <section class="border-t border-mjegull bg-mjegull/25 py-20 sm:py-28 dark:border-celiku/30 dark:bg-celiku/5">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr('home.projects.eyebrow', '04 / Portofoli në Terren') }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
              {{ tr('home.projects.title', 'Projektet e realizuara.') }}
            </h2>
          </div>
          <NuxtLink
            to="/projekte"
            class="inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:opacity-80"
          >
            <span>{{ tr('home.projects.viewAll', 'Shiko të gjitha projektet') }}</span>
            <ArrowUpRightIcon class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <!-- 3 Kartat e Projekteve -->
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <article
            v-for="project in featuredProjects"
            :key="project.title"
            class="group flex flex-col overflow-hidden rounded-2xl border border-mjegull bg-baze dark:border-celiku/30 dark:bg-grafit"
          >
            <div class="relative aspect-16/10 overflow-hidden bg-mjegull dark:bg-celiku/20">
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span class="absolute top-3 left-3 rounded-md bg-grafit/85 px-2.5 py-1 text-xs font-semibold text-baze backdrop-blur-sm">
                {{ project.date }}
              </span>
            </div>
            <div class="flex flex-1 flex-col justify-between p-6">
              <div>
                <p class="text-xs font-semibold uppercase text-primary">{{ project.elevatorType }}</p>
                <h3 class="mt-2 text-lg font-bold text-grafit dark:text-baze">{{ project.title }}</h3>
                <p class="mt-2 text-sm text-celiku dark:text-mjegull">{{ project.description }}</p>
              </div>
              <div class="mt-6 flex items-center justify-between border-t border-mjegull pt-4 text-xs text-celiku dark:border-celiku/20 dark:text-mjegull">
                <span>{{ project.location }}</span>
                <span class="font-semibold text-grafit dark:text-baze">{{ project.capacity }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Bashkëpunëtorët / Partnerët tanë -->
        <div class="mt-20 border-t border-mjegull pt-12 dark:border-celiku/30">
          <p class="text-center text-xs font-semibold tracking-widest uppercase text-celiku dark:text-mjegull">
            {{ tr('home.partners.title', 'Bashkëpunëtorët dhe Partnerët Tanë') }}
          </p>
          <div class="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="flex h-14 w-full items-center justify-center rounded-xl border border-mjegull bg-baze px-4 transition hover:border-primary dark:border-celiku/20 dark:bg-grafit"
            >
              <img
                :src="partner.image"
                :alt="partner.name"
                class="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 7: DËSHMITË E KLIENTËVE & FAQ
         ========================================== -->
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Dëshmitë (Testimonials) -->
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase text-primary">
            {{ tr('home.testimonials.eyebrow', '05 / Dëshmitë e Klientëve') }}
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-grafit sm:text-4xl dark:text-baze">
            {{ tr('home.testimonials.title', 'Zëri i klientëve tanë flet më shumë se ne.') }}
          </h2>

          <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <figure
              v-for="item in testimonials"
              :key="item.author"
              class="flex flex-col justify-between rounded-2xl border border-mjegull bg-baze p-6 dark:border-celiku/30 dark:bg-grafit"
            >
              <blockquote class="text-sm/6 text-grafit dark:text-baze">
                “{{ item.quote }}”
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-3 border-t border-mjegull pt-4 dark:border-celiku/20">
                <div class="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {{ item.author.charAt(0) }}
                </div>
                <div>
                  <div class="text-sm font-semibold text-grafit dark:text-baze">{{ item.author }}</div>
                  <div class="text-xs text-celiku dark:text-mjegull">{{ item.role }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Pyetjet më të Shpeshta (FAQ me Headless UI Disclosure) -->
        <div class="mt-24 border-t border-mjegull pt-16 dark:border-celiku/30">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <p class="text-xs font-semibold tracking-widest uppercase text-primary">
                {{ tr('home.faq.eyebrow', '06 / Pyetje Teknike & Ligjore') }}
              </p>
              <h2 class="mt-2 text-3xl font-bold tracking-tight text-grafit dark:text-baze">
                {{ tr('home.faq.title', 'Pyetjet më të shpeshta (FAQ)') }}
              </h2>
              <p class="mt-4 text-sm/6 text-celiku dark:text-mjegull">
                {{
                  tr(
                    'home.faq.subtitle',
                    'Keni pyetje mbi dokumentacionin e nevojshëm, kohëzgjatjen e instalimit apo kontratat e mirëmbajtjes? Kontaktoni ekipin tonë inxhinierik.'
                  )
                }}
              </p>
            </div>

            <div class="lg:col-span-7">
              <dl class="divide-y divide-mjegull border-y border-mjegull dark:divide-celiku/30 dark:border-celiku/30">
                <Disclosure
                  v-for="(faq, idx) in faqs"
                  :key="faq.question"
                  v-slot="{ open }"
                  as="div"
                  :default-open="idx === 0"
                  class="py-5"
                >
                  <dt>
                    <DisclosureButton class="flex w-full items-start justify-between text-left text-grafit hover:text-primary dark:text-baze">
                      <span class="text-base font-semibold">{{ faq.question }}</span>
                      <span class="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          :class="[open ? 'rotate-180 text-primary' : 'text-celiku', 'size-5 transition-transform duration-200']"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" class="mt-3 pr-12">
                    <p class="text-sm/6 text-celiku dark:text-mjegull">{{ faq.answer }}</p>
                  </DisclosurePanel>
                </Disclosure>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SEKSIONI 8: BANNER PËRMBYLLËS (CTA & KONTAKT)
         ========================================== -->
    <section class="border-t-4 border-primary bg-grafit py-16 text-baze sm:py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div class="max-w-2xl">
            <p class="text-xs font-semibold tracking-widest uppercase text-primary">
              {{ tr('home.cta.eyebrow', 'Gati për projektin tuaj') }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-baze sm:text-4xl">
              {{ tr('home.cta.title', 'Një identitet që ngrihet mbi qartësinë.') }}
            </h2>
            <p class="mt-3 text-base text-mjegull">
              {{
                tr(
                  'home.cta.description',
                  'Na kontaktoni sot për një konsultë teknike dhe ofertë të personalizuar për instalim, modernizim ose mirëmbajtje ashensori.'
                )
              }}
            </p>
            <p class="mt-4 text-xs text-mjegull/80">
              📍 Fresku, Rruga "Muhamet Deliu" Dajt Tiranë &nbsp;|&nbsp; ✉️ info@canajlift.al
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink
              to="/kontakt"
              class="inline-flex items-center gap-x-2.5 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-baze shadow-sm transition hover:opacity-95"
            >
              <span>{{ tr('home.cta.primaryButton', 'Kërko një ofertë') }}</span>
              <ArrowUpIcon class="size-5" aria-hidden="true" />
            </NuxtLink>

            <a
              href="tel:+355696042852"
              class="inline-flex items-center gap-x-2.5 rounded-xl border border-celiku/40 bg-baze/5 px-6 py-4 text-sm font-semibold text-baze transition hover:border-primary hover:text-primary"
            >
              <PhoneIcon class="size-5 text-primary" aria-hidden="true" />
              <span>+355 69 604 2852</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/vue/20/solid'

const { t, te } = useI18n()

// Funksion ndihmës që përdor përkthimin i18n nëse ekziston, ose tekstin fallback në shqip
const tr = (key, fallback) => (te(key) ? t(key) : fallback)

useSeoMeta({
  title: () => tr('seo.home.title', 'Canaj Lift | Ashensorë, Instalim, Mirëmbajtje 24/7 & Modernizim'),
  description: () =>
    tr(
      'seo.home.description',
      'Canaj Lift ofron mbi 20 vjet përvojë në instalimin, mirëmbajtjen dhe modernizimin e ashensorëve pasagjerësh, mallrash, makinash dhe homelift në Shqipëri.'
    ),
})

// Seksioni 2: Shifrat Kyçe
const stats = computed(() => [
  {
    value: '20+',
    label: tr('home.stats.yearsLabel', 'Vjet Përvojë'),
    description: tr('home.stats.yearsDescription', 'Eksperiencë e gjatë dhe lider në industrinë e ashensorëve në Shqipëri.'),
  },
  {
    value: '40',
    label: tr('home.stats.staffLabel', 'Profesionistë & 12 Grupe'),
    description: tr('home.stats.staffDescription', 'Ekip i madh dhe i kualifikuar me 12 grupe instalimi për çdo projekt.'),
  },
  {
    value: tr('home.stats.capacityValue', '20 / muaj'),
    label: tr('home.stats.capacityLabel', 'Kapacitet Instalimi'),
    description: tr('home.stats.capacityDescription', 'Kapacitet i lartë mujor për të përballuar projekte të mëdha në afat.'),
  },
  {
    value: '400+',
    label: tr('home.stats.maintenanceLabel', 'Ashensorë në Mirëmbajtje'),
    description: tr('home.stats.maintenanceDescription', 'Besueshmëri e provuar me asistencë teknike dhe servis emergjence 24/7.'),
  },
])

// Seksioni 3: Të 7 Produktet (përputhen me rrugëzimet e navbar.vue)
const productCards = computed(() => [
  {
    name: tr('home.productCards.passenger.name', 'Ashensorë Pasagjerësh'),
    description: tr(
      'home.productCards.passenger.description',
      'Udhëtim i qetë, i sigurt dhe komod për ndërtesa rezidenciale dhe komerciale me fluks të lartë.'
    ),
    href: '/produkte/ashensor-pasagjeresh',
    icon: '/icon/Ashensor%20Pasagjeresh.svg',
    tags: [tr('home.productCards.tags.electric', 'Elektrik'), tr('home.productCards.tags.hydraulic', 'Hidraulik')],
    features: [
      tr('home.productCards.passenger.features.0', 'Shpejtësi e lartë dhe efikasitet energjetik me motorë e inverterë të avancuar'),
      tr('home.productCards.passenger.features.1', 'Zgjidhje të përshtatura për ndërtesa të larta dhe të ulëta'),
    ],
  },
  {
    name: tr('home.productCards.goods.name', 'Ashensorë Mallrash'),
    description: tr(
      'home.productCards.goods.description',
      'Zgjidhje të forta dhe të qëndrueshme për transportin e ngarkesave të rënda në depo dhe fabrika.'
    ),
    href: '/produkte/ashensor-mallrash',
    icon: '/icon/Ashensor%20Mallrash.svg',
    tags: [tr('home.productCards.tags.electric', 'Elektrik'), tr('home.productCards.tags.hydraulic', 'Hidraulik'), tr('home.productCards.tags.platform', 'Platforma')],
    features: [tr('home.productCards.goods.features.0', 'Kapacitet i lartë ngarkese'), tr('home.productCards.goods.features.1', 'Strukturë e përforcuar rezistente')],
  },
  {
    name: tr('home.productCards.car.name', 'Ashensorë Makinash'),
    description: tr(
      'home.productCards.car.description',
      'Sisteme të avancuara për parkimin dhe transportin vertikal të automjeteve në hapësira të kufizuara.'
    ),
    href: '/produkte/ashensor-makinash',
    icon: '/icon/Ashensor%20Makinash.svg',
    tags: [tr('home.productCards.tags.electric', 'Elektrik'), tr('home.productCards.tags.hydraulic', 'Hidraulik')],
    features: [tr('home.productCards.car.features.0', 'Maksimizim i hapësirës së parkimit'), tr('home.productCards.car.features.1', 'Kontroll elektronik pa dridhje')],
  },
  {
    name: tr('home.productCards.home.name', 'Ashensorë Vilash (Homelift)'),
    description: tr(
      'home.productCards.home.description',
      'Komoditet, luks dhe dizajn estetik i personalizuar për shtëpi dhe vila të reja ose ekzistuese.'
    ),
    href: '/produkte/ashensor-vilash',
    icon: '/icon/Hidraulik%20Elevator.svg',
    tags: [tr('home.productCards.tags.customDesign', 'Dizajn Custom'), tr('home.productCards.tags.lowConsumption', 'Konsum i Ulët')],
    features: [tr('home.productCards.home.features.0', 'Instalim pa ndryshime të mëdha strukturore'), tr('home.productCards.home.features.1', 'Kabina dhe dyer të personalizuara')],
  },
  {
    name: tr('home.productCards.stairlift.name', 'Platforma Ngjitëse (Stairlift)'),
    description: tr(
      'home.productCards.stairlift.description',
      'Pavarësi dhe akses i sigurt ndërmjet kateve për personat me aftësi të kufizuara.'
    ),
    href: '/produkte/plateforma-ngritese',
    icon: '/icon/Plateforma%20Ngritese.svg',
    tags: [tr('home.productCards.tags.ergonomic', 'Ergonomik'), tr('home.productCards.tags.maximumSafety', 'Siguri Maksimale')],
    features: [tr('home.productCards.stairlift.features.0', 'Rripa sigurie, sensorë pengese dhe frena emergjente'), tr('home.productCards.stairlift.features.1', 'Kontroll i thjeshtë me telekomandë')],
  },
  {
    name: tr('home.productCards.escalators.name', 'Shkallë dhe Tapete Lëvizëse'),
    description: tr(
      'home.productCards.escalators.description',
      'Qarkullim i pandërprerë dhe kapacitet i lartë për qendra tregtare, aeroporte dhe hapësira publike.'
    ),
    href: '/produkte/shkalle-dhe-tapete-levizes',
    icon: '/icon/Ashensor%20Shkall%20dhe%20tapete.svg',
    tags: [tr('home.productCards.tags.shoppingCentres', 'Qendra Tregtare'), tr('home.productCards.tags.publicSpaces', 'Publike')],
    features: [tr('home.productCards.escalators.features.0', 'Reduktim i kohës së pritjes dhe trafikut'), tr('home.productCards.escalators.features.1', 'Dizajn modern estetik dhe jetëgjatë')],
  },
  {
    name: tr('home.productCards.industrial.name', 'Ashensorë Industrialë'),
    description: tr(
      'home.productCards.industrial.description',
      'Sisteme të dedikuara me qëndrueshmëri ekstreme për linja prodhimi, magazina dhe objekte industriale.'
    ),
    href: '/produkte/ashensor-industrial',
    icon: '/icon/Hidraulik%20Elevator.svg',
    tags: [tr('home.productCards.tags.heavyDuty', 'Regjim i Rëndë'), tr('home.productCards.tags.industrial', 'Industrial')],
    features: [tr('home.productCards.industrial.features.0', 'Operim intensiv i vazhdueshëm'), tr('home.productCards.industrial.features.1', 'Përputhshmëri me standardet e sigurisë teknike')],
  },
])

// Seksioni 4: Të 4 Shtyllat e Shërbimit
const servicePillars = computed(() => [
  {
    name: tr('home.serviceCards.installation.name', 'Instalim Profesional'),
    href: '/sherbime/instalim',
    icon: '/icon/Instalim.svg',
    description: tr(
      'home.serviceCards.installation.description',
      '12 grupe instalimi të certifikuara për projekte bazike deri te ato më komplekse.'
    ),
    highlight: tr('home.serviceCards.installation.highlight', 'Rreth 20 ashensorë të instaluar çdo muaj në afat dhe siguri të plotë.'),
  },
  {
    name: tr('home.serviceCards.maintenance.name', 'Mirëmbajtje & Servis 24/7'),
    href: '/sherbime/mirembajtje',
    icon: '/icon/Mirembajtje.svg',
    description: tr(
      'home.serviceCards.maintenance.description',
      'Plane të personalizuara periodike dhe gatishmëri 24/7 për çdo emergjencë.'
    ),
    highlight: tr('home.serviceCards.maintenance.highlight', 'Mbi 400 ashensorë aktivë nën mirëmbajtjen tonë të vazhdueshme.'),
  },
  {
    name: tr('home.serviceCards.modernization.name', 'Modernizim Sistemesh'),
    href: '/sherbime/modernizim',
    icon: '/icon/Modernizim.svg',
    description: tr(
      'home.serviceCards.modernization.description',
      'Përditësim i kompjuterizuar, automatizim dhe rritje e efikasitetit për ashensorët ekzistues.'
    ),
    highlight: tr('home.serviceCards.modernization.highlight', 'Përshtatje e plotë me standardet e fundit industriale europiane.'),
  },
  {
    name: tr('home.serviceCards.spareParts.name', 'Pjesë Këmbimi Origjinale'),
    href: '/sherbime/pjese-kembimi',
    icon: '/icon/pjesekembimi.svg',
    description: tr(
      'home.serviceCards.spareParts.description',
      'Furnizim i shpejtë nga stoku ynë i përhershëm me komponentë origjinalë.'
    ),
    highlight: tr('home.serviceCards.spareParts.highlight', 'Çdo pjesë kontrollohet dhe testohet për siguri maksimale para instalimit.'),
  },
])

// Seksioni 5: Vlerat e Kompanisë
const coreValues = computed(() => [
  {
    title: tr('home.values.qualityTitle', 'Cilësi dhe Inovacion'),
    text: tr('home.values.qualityText', 'Përdorim teknologjinë më të avancuar për të garantuar ashensorë efikasë, të qetë dhe të sigurt.'),
  },
  {
    title: tr('home.values.clientTitle', 'Shërbim i Personalizuar ndaj Klientit'),
    text: tr('home.values.clientText', 'Analizojmë specifikat arkitektonike të çdo ndërtese për të ofruar zgjidhjen optimale.'),
  },
  {
    title: tr('home.values.proTitle', 'Përkushtim dhe Profesionalizëm'),
    text: tr('home.values.proText', 'Staf prej 40 profesionistësh të trajnuar dhe të certifikuar për çdo fazë të projektit.'),
  },
])

// Seksioni 6: Projektet e Realizuara & Partnerët
const featuredProjects = computed(() => [
  {
    title: tr('home.projects.items.residential.title', 'Kompleks Rezidencial & Komercial'),
    elevatorType: tr('home.projects.items.residential.type', 'Ashensorë Pasagjerësh Elektrikë'),
    description: tr('home.projects.items.residential.description', 'Instalim i ashensorëve me shpejtësi të lartë dhe kabina inoksi me efikasitet të lartë energjetik.'),
    date: '2026',
    location: tr('home.projects.locations.tirana', 'Tiranë'),
    capacity: tr('home.projects.capacities.residential', '8 Persona / 630 kg'),
    image: '/images/project-residential.jpg',
  },
  {
    title: tr('home.projects.items.business.title', 'Qendër Biznesi & Parkim Nëntokësor'),
    elevatorType: tr('home.projects.items.business.type', 'Ashensor Makinash & Pasagjerësh'),
    description: tr('home.projects.items.business.description', 'Zgjidhje e integruar për transportin vertikal të automjeteve dhe qarkullimin e vizitorëve.'),
    date: '2026',
    location: tr('home.projects.locations.durres', 'Durrës'),
    capacity: tr('home.projects.capacities.business', '3500 kg (Auto)'),
    image: '/images/project-commercial.jpg',
  },
  {
    title: tr('home.projects.items.private.title', 'Rezidencë Private Luksoze'),
    elevatorType: tr('home.projects.items.private.type', 'Ashensor Vile (Homelift)'),
    description: tr('home.projects.items.private.description', 'Homelift me dizajn të personalizuar, operim ultra të qetë dhe konsum minimal energjie.'),
    date: '2025',
    location: tr('home.projects.locations.tirana', 'Tiranë'),
    capacity: tr('home.projects.capacities.private', '4 Persona / 320 kg'),
    image: '/images/project-homelift.jpg',
  },
])

const partners = [
  { name: 'Ahmet', image: '/images/partner/logo-ahmet.png' },
  { name: 'Delfar', image: '/images/partner/logo-Delfar.png' },
  { name: 'Sanjin', image: '/images/partner/logo-delfar.webp' },
  { name: 'Doppler', image: '/images/partner/logo-doppler.png' },
  { name: 'Kleemann', image: '/images/partner/logo-Kleemann.svg' },
  { name: 'Mitsubishi', image: '/images/partner/mitsubishi-elevators-logo.png' },
]

// Seksioni 7: Dëshmitë e Klientëve & FAQ
const testimonials = computed(() => [
  {
    quote: tr('home.testimonials.items.artan.quote', 'Canaj Lift na ofroi një shërbim të shkëlqyer, duke instaluar ashensorin tonë të ri brenda afatit dhe buxhetit. Jemi shumë të kënaqur me cilësinë dhe profesionalizmin e tyre.'),
    author: 'Artan Hoxha',
    role: tr('home.testimonials.items.artan.role', 'Menaxher Ndërtimi'),
  },
  {
    quote: tr('home.testimonials.items.agron.quote', 'Ne kemi bashkëpunuar me Canaj Lift për disa projekte dhe gjithmonë kemi qenë të kënaqur me shërbimin e tyre të shkëlqyer dhe cilësinë e lartë të punës së tyre.'),
    author: 'Agron Tola',
    role: tr('home.testimonials.items.agron.role', 'Arkitekt'),
  },
  {
    quote: tr('home.testimonials.items.ermira.quote', 'Falë Canaj Lift, ashensori ynë i vjetër funksionon si i ri! Shërbimi i tyre i mirëmbajtjes është i shkëlqyer dhe çmimet janë shumë të arsyeshme.'),
    author: 'Ermira Muça',
    role: tr('home.testimonials.items.ermira.role', 'Administratore Ndërtese'),
  },
  {
    quote: tr('home.testimonials.items.klement.quote', 'Si pronar i një vile, isha në kërkim të një ashensori elegant dhe të besueshëm. Canaj Lift më ofroi zgjidhjen perfekte me homelift-in e tyre.'),
    author: 'Klement Zela',
    role: tr('home.testimonials.items.klement.role', 'Pronar Vile'),
  },
  {
    quote: tr('home.testimonials.items.aurel.quote', 'Jam shumë i kënaqur me shërbimin e Canaj Lift. Ashensorët e tyre janë të qetë dhe të besueshëm. Shërbimi ndaj klientit është gjithmonë i gatshëm për të ndihmuar.'),
    author: 'Aurel Koçi',
    role: tr('home.testimonials.items.aurel.role', 'Inxhinier Mekanik'),
  },
  {
    quote: tr('home.testimonials.items.blerina.quote', 'Zgjodhëm Canaj Lift për modernizimin e ashensorit tonë dhe jemi shumë të kënaqur me rezultatin. Ashensori ynë tani është më i shpejtë, më i qetë dhe më efikas.'),
    author: 'Blerina Kola',
    role: tr('home.testimonials.items.blerina.role', 'Pronare Biznesi'),
  },
])

const faqs = computed(() => [
  {
    question: tr('home.faq.items.documents.question', 'Çfarë dokumentesh duhen që të instaloj një ashensor?'),
    answer: tr('home.faq.items.documents.answer', 'Për instalimin e një ashensori duhet të keni një leje ndërtimi për objektin përkatës, ku është i përshkruar dhe i parashikuar ashensori.'),
  },
  {
    question: tr('home.faq.items.products.question', 'Çfarë llojesh ashensorësh ofroni?'),
    answer: tr('home.faq.items.products.answer', 'Ne ofrojmë ashensorë pasagjerësh (elektrikë dhe hidraulikë), ashensorë dhe platforma mallrash, ashensorë makinash, ashensorë vilash (homelift), shkallë dhe tapete lëvizëse, platforma për persona me aftësi të kufizuara (stairlift) dhe ashensorë industrialë.'),
  },
  {
    question: tr('home.faq.items.maintenance.question', 'Çfarë përfshihet në shërbimin tuaj të mirëmbajtjes?'),
    answer: tr('home.faq.items.maintenance.answer', 'Zhvillojmë plane të personalizuara të mirëmbajtjes periodike për mbi 400 ashensorë, inspektim të rregullt të komponentëve të sigurisë dhe ofrojmë servis emergjence 24/7 me stok të përhershëm pjesësh origjinale.'),
  },
  {
    question: tr('home.faq.items.modernization.question', 'A ofroni shërbime modernizimi për ashensorët ekzistues?'),
    answer: tr('home.faq.items.modernization.answer', 'Po, ofrojmë modernizim të plotë përmes përditësimit të kompjuterizuar, automatizimit të proceseve dhe zëvendësimit të komponentëve të amortizuar në përputhje me standardet e reja europiane.'),
  },
  {
    question: tr('home.faq.items.quote.question', 'Si mund të marr një ofertë për një ashensor?'),
    answer: tr('home.faq.items.quote.answer', 'Mund të na kontaktoni drejtpërdrejt përmes faqes së kontaktit, në numrin e telefonit +355 69 604 2852 ose në email-in info@canajlift.al për një vlerësim teknik të projektit tuaj.'),
  },
])
</script>