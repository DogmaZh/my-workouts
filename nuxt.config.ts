import { LOCALE_MESSAGES } from "./locales";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  css: ["@/assets/styles/global.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "nuxt-icon",
    "nuxt-typed-router",
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
  ],
  i18n: {
    vueI18n: {
      locale: "en",
      messages: LOCALE_MESSAGES,
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "My workouts",
      short_name: "MyWorkouts",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    client: {
      installPrompt: true,
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
      title: "My Workouts",
      bodyAttrs: {
        class: "overflow-x-hidden",
      },
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { property: "og:title", content: "My Workouts" },
        { property: "og:description", content: "Workouts app for homies" },
        { property: "og:type", content: "website" },
      ],
    },
  },
});
