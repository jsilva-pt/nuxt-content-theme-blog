import theme from '@jsilva-pt/nuxt-content-theme-blog'

const baseUrl = '<%= url %>'

const publicRuntimeConfig = {
  baseUrl: '<%= url %>',

  logoLight: '/logo-light.svg',
  logoDark: '/logo-dark.svg',

  githubOwner: '<%= githubOwner %>',
  githubRepository: '<%= githubRepository %>',
  githubMainBranch: '<%= githubMainBranch %>',

  twitterUsername: '<%= twitterUsername %>',
}

export default theme({
  feedOptions: {
    title: '<%= title %>',
    description: '',
    link: baseUrl,
  },
  publicRuntimeConfig,
  pwa: {
    manifest: {
      short_name: '<%= appShortName %>',
    },
    meta: {
      author: '<%= author %>',
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: publicRuntimeConfig.twitterUsername,
      twitterCreator: publicRuntimeConfig.twitterUsername,
    },
  },
  i18n: {
    locales: [
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
      },
    },
  },
})
