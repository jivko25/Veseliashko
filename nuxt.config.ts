// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: "Children's Party Agency",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2&display=swap' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com', defer: true }
      ]
    }
  },

  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/scripts']
})