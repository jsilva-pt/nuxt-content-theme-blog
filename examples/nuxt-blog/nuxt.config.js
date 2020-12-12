import theme from '@jsilva-pt/nuxt-content-theme-blog'

const settings = {
  baseUrl: 'https://nuxt-blog-clone.vercel.app',

  githubOwner: 'jsilva-pt',
  githubRepository: 'nuxt-content-theme-blog',
  githubMainBranch: 'main',

  twitterUsername: 'nuxt_js',
  linkedinUsername: '',

  pageNotFoundImg: '/page-not-found.png',

  footerLinks: {
    discover: [
      {
        key: 'footer.links.discover.ourTeam',
        href: 'https://nuxtjs.org/team',
      },
      {
        key: 'footer.links.discover.designKit',
        href: 'https://nuxtjs.org/design',
      },
      {
        key: 'footer.links.discover.contactUs',
        href: 'https://twitter.com/nuxt_js',
      },
    ],
    help: [
      {
        key: 'footer.links.help.resources',
        href: 'https://nuxtjs.org/faq',
      },
      {
        key: 'footer.links.help.chatWithUs',
        href: 'https://discord.nuxtjs.org',
      },
      {
        key: 'footer.links.help.contributionGuide',
        href:
          'https://github.com/nuxt/nuxtjs.org/blob/master/content/en/_archives/guide/contribution-guide.md',
      },
    ],
    support: [
      {
        key: 'footer.links.support.store',
        href: 'https://nuxtjs.org/shop',
      },
      {
        key: 'footer.links.support.sponsor',
        href: 'https://nuxtjs.org/sponsor-nuxtjs',
      },
      {
        key: 'footer.links.support.training',
        href: 'https://nuxtjs.org/support',
      },
    ],
  },
}

export default theme({
  feedOptions: {
    title: 'Nuxt Blog Clone',
    description: 'Articles about NuxtJS',
    link: settings.baseUrl,
  },
  publicRuntimeConfig: {
    ...settings,
  },
  pwa: {
    manifest: {
      short_name: 'NuxtJS Blog',
    },
    meta: {
      name: 'NuxtJS Blog',
      author: 'José Silva',
      theme_color: '#2C3E50',
      ogHost: settings.baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: settings.twitterUsername,
      twitterCreator: settings.twitterUsername,
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
