import path from 'path'
import defu from 'defu'
import tailwindConfig from './tailwind.config'

function themeModule() {
  const { nuxt } = this
  const { options, hook } = nuxt

  options.content.dir = path.resolve(
    options.rootDir,
    options.content.dir || 'content'
  )

  options.dir.static = path.resolve(
    options.rootDir,
    options.dir.static || 'static'
  )

  options.tailwindcss.configPath = path.resolve(
    options.srcDir,
    'tailwind.config.js'
  )
  options.tailwindcss.cssPath = path.resolve(
    options.srcDir,
    options.dir.assets,
    'css',
    'tailwind.css'
  )

  hook('tailwindcss:config', function (defaultTailwindConfig) {
    Object.assign(
      defaultTailwindConfig,
      defu(defaultTailwindConfig, tailwindConfig({ nuxt }))
    )
  })
}

const createFeedArticles = async (
  feed,
  { baseUrl, feedOptions, defaultLocale }
) => {
  feed.options = feedOptions

  const { $content } = require('@nuxt/content')
  const blogPosts = await $content({ deep: true })
    .where({ locale: { $eq: defaultLocale } })
    .sortBy('publishedAt', 'desc')
    .fetch()

  blogPosts.forEach((blogPost) => {
    const url = `${baseUrl}/${blogPost.slug}`
    const author =
      blogPost.author &&
      blogPost.author.map((el) => {
        return {
          name: el.name,
          email: el.email,
          link: el.link,
        }
      })

    feed.addItem({
      title: blogPost.title,
      id: url,
      link: url,
      date: new Date(blogPost.publishedAt),
      description: blogPost.description,
      content: blogPost.description,
      author,
    })
  })
}

const defaultConfig = ({ baseUrl, feedOptions, locales, defaultLocale }) => ({
  target: 'static',
  ssr: true,
  srcDir: __dirname,
  head: {
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear',
      ],
    },
  },

  components: [
    { path: '~~/components', level: 0 },
    { path: '~/components', level: 1 },
    { path: '~/components/blog', level: 1 },
    { path: '~/components/footer', level: 1 },
    { path: '~/components/app', level: 1 },
    { path: '~/components/global', level: 1 },
    { path: '~/components/icons', level: 1 },
  ],

  generate: {
    fallback: '404.html',
    routes: ['/'],
  },

  css: ['~/assets/css/content.scss'],

  plugins: ['~/plugins/vue-observe-visibility.js'],

  buildModules: [
    themeModule,
    '@nuxt/postcss8',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
  ],

  modules: [
    'vue-social-sharing/nuxt',
    'nuxt-i18n',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  googleFonts: {
    families: {
      Quicksand: {
        wght: [400, 500, 600, 700],
      },
    },
    display: 'swap',
  },

  colorMode: {
    preference: 'light',
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  i18n: {
    locales: [],
    defaultLocale,
    parsePages: false,
    lazy: false,
    seo: false,
  },

  feed: [
    {
      path: '/feed.xml',
      create: createFeedArticles,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: { baseUrl, feedOptions, defaultLocale },
    },
  ],

  sitemap: {
    hostname: baseUrl,
    i18n: true,
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const routes = []
      const blogPosts = await $content({ deep: true })
        .where({ locale: { $eq: defaultLocale } })
        .fetch()

      blogPosts.forEach((blogPost) => {
        locales.forEach((locale) => {
          routes.push({
            url:
              locale.code === defaultLocale
                ? `${blogPost.slug}`
                : `${locale.code}/${blogPost.slug}`,
            links: locales.map((alternateLocale) => {
              return {
                lang: alternateLocale.code,
                url:
                  alternateLocale.code === defaultLocale
                    ? `${blogPost.slug}`
                    : `${alternateLocale.code}/${blogPost.slug}`,
              }
            }),
          })
        })
      })

      return routes
    },
  },

  robots: {
    Sitemap: `${baseUrl}/sitemap.xml`,
  },

  tailwindcss: {
    jit: false,
  },

  hooks: {
    'content:file:beforeInsert': (item) => {
      if (item.extension === '.md') {
        const stats = require('reading-time')(item.text)
        item.readingTime = stats
      }

      const localeIndex = item.slug.indexOf('.')
      if (localeIndex > 0) {
        item.locale = item.slug.substring(localeIndex + 1)
        item.slugWithoutLocale = item.slug.substring(0, localeIndex)
      } else {
        item.locale = defaultLocale
        item.slugWithoutLocale = item.slug
      }
    },
  },
})

export default function (appConfigs) {
  const {
    publicRuntimeConfig: { baseUrl },
    feedOptions,
    i18n: { locales, defaultLocale },
  } = appConfigs

  const config = defu.arrayFn(
    appConfigs,
    defaultConfig({ baseUrl, feedOptions, locales, defaultLocale })
  )

  return config
}
