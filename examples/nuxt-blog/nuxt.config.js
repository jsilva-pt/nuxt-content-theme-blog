import theme from '@jsilva-pt/nuxt-content-theme-blog'

const baseUrl = 'https://nuxt-blog-clone.vercel.app'
const blogAuthor = 'José Silva'
const name = 'NuxtJS Blog'

export default theme({
  feedOptions: {
    title: 'Nuxt Blog Clone',
    description: 'Articles about NuxtJS',
    link: baseUrl,
  },
  publicRuntimeConfig: {
    baseUrl,
  },
  pwa: {
    manifest: {
      short_name: name,
    },
    meta: {
      name,
      author: blogAuthor,
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: 'jmanuelsilvapt',
      twitterCreator: 'jmanuelsilvapt',
    },
  },
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en-US'),
        fr: require('./i18n/fr-FR'),
      },
    },
  },
})
