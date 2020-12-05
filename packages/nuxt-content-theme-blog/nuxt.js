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

  hook('components:dirs', (dirs) => {
    const componentsDirPath = path.resolve(options.rootDir, 'components')
    dirs.unshift({
      path: componentsDirPath,
    })

    const globalComponentsDirPath = path.resolve(
      options.rootDir,
      'components/global'
    )
    dirs.unshift({
      path: globalComponentsDirPath,
      global: true,
    })
  })

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

const createFeedArticles = async (feed, { baseUrl, feedOptions }) => {
  feed.options = feedOptions

  const { $content } = require('@nuxt/content')
  const blogPosts = await $content('en').sortBy('date', 'desc').fetch()

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
      date: new Date(blogPost.publishedTime),
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

  components: true,

  generate: {
    fallback: '404.html',
    routes: ['/'],
  },

  css: ['~/assets/css/content.scss'],

  plugins: ['~/plugins/init.js', '~/plugins/vue-observe-visibility.js'],

  buildModules: [
    themeModule,
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/stylelint-module',
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
    locales,
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
      data: { baseUrl, feedOptions },
    },
  ],

  sitemap: {
    hostname: baseUrl,
    i18n: true,
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const routes = []
      const blogPosts = await $content('en').fetch()

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

  tailwindcss: {},

  hooks: {
    'content:file:beforeInsert': (item) => {
      if (item.extension === '.md') {
        const stats = require('reading-time')(item.text)
        item.readingTime = stats
      }
    },
  },
})

export default function (appConfigs) {
  const {
    publicRuntimeConfig: { baseUrl },
    feedOptions,
    i18n: {
      locales = [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js',
          name: 'English',
        },
      ],
      defaultLocale = 'en',
    },
  } = appConfigs

  const config = defu.arrayFn(
    appConfigs,
    defaultConfig({ baseUrl, feedOptions, locales, defaultLocale })
  )

  return config
}
