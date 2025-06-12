// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    build: {
      sourcemap: true,  // Включва source maps в продукция
    }
  },

  app: {
    head: {
      title: "Веселяшко",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Веселяшко носи празника при вас – вкъщи, в двора или избрана локация. Игри, балони, музика и усмивки за един незабравим детски рожден ден!' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'canonical', href: 'https://veseliashko.com/' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com', defer: true }
      ],
      htmlAttrs: {
        lang: 'bg'
      }
    }
  },
  image: {
    dir: 'public',
  },

  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxtjs/robots', '@nuxtjs/sitemap']
})