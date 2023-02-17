import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file
export default defineNuxtConfig({
  dir: {
    public: 'docs',
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxt/content',
  ],
  router: {
    // router config https://nuxtjs.org/docs/configuration-glossary/configuration-router/
    trailingSlash: false,
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
