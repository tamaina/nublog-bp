import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file
export default defineNuxtConfig({
  ssr: true,
  dir: {
    public: 'docs',
  },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
  ],
  router: {
  },
  content: {
    // content config https://content.nuxtjs.org/api/configuration/
    documentDriven: true,
  },
  nitro: {
    // nitro config

  },
  image: {
    // image config https://v1.image.nuxtjs.org/configuration

  },
});
