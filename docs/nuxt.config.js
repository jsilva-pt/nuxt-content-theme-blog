import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#41B883',
  },

  modules: ['@nuxtjs/google-gtag'],

  'google-gtag': {
    id: process.env.NUXT_ENV_GA_ID,
  },
})
