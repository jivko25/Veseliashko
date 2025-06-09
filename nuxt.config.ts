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
        { name: 'description', content: 'Това е описанието на моя Nuxt сайт.' },
        { charset: 'utf-8' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2&display=swap' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com', defer: true }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  image: {
    dir: 'public',
  },

  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/scripts']
})