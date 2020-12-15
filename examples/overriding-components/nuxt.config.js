import theme from '@jsilva-pt/nuxt-content-theme-blog'

const baseUrl = ''

const publicRuntimeConfig = {
  baseUrl: 'https://overriding-components.vercel.app',

  githubOwner: 'jsilva-pt',
  githubRepository: 'overriding-components',
  githubMainBranch: 'main',

  twitterUsername: 'jmanuelsilvapt',
}

export default theme({
  feedOptions: {
    title: 'Blog with sections overrided',
    description: '',
    link: baseUrl,
  },
  publicRuntimeConfig,
  pwa: {
    manifest: {
      short_name: 'MyBlog',
    },
    meta: {
      name: 'Blog with sections overrided',
      author: 'José Silva',
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
