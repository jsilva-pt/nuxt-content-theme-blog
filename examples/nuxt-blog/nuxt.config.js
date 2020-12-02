import theme from '@jsilva-pt/nuxt-content-theme-blog'

export default theme({
  i18n: {
    locales: () => [
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
