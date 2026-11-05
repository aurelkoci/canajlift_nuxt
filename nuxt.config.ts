// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/a11y",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@nuxtjs/mcp-toolkit",
  ],
  css: ["~/assets/css/main.css"],
  ssr: true,
  app: {
    baseURL: '/',
  },
  nitro: {
    preset: 'static'
  },
  spaLoadingTemplate: "loading.html",
  site: {
    url: "https://canajlift.al",
    name: "Canaj Lift",
  },
  robots: {
    robotsTxt: true, 
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "sq",
    langDir: "locales",
    locales: [
      { code: "sq", name: "Shqip", language: "sq-AL", file: "sq.json" },
      { code: "en", name: "English", language: "en-US", file: "en.json" },
    ],
    lazy: true,
    detectBrowserLanguage: false,
  },
  vite: {
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@heroicons/vue/16/solid',
        '@heroicons/vue/20/solid',
        '@heroicons/vue/24/outline',
        '@vue/devtools-core',
      ]
    }
  }
});
