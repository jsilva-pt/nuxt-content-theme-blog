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

  options.tailwindcss.configPath =
    options.tailwindcss.configPath ||
    path.resolve(options.rootDir, 'tailwind.config.js')
  options.tailwindcss.cssPath =
    options.tailwindcss.cssPath ||
    path.resolve(options.rootDir, options.dir.assets, 'css', 'tailwind.css')

  hook('tailwindcss:config', function (defaultTailwindConfig) {
    Object.assign(
      defaultTailwindConfig,
      defu(defaultTailwindConfig, tailwindConfig({ nuxt }))
    )
  })
}

const defaultConfig = () => ({
  target: 'static',
  ssr: true,
  srcDir: __dirname,

  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
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

  css: ['~/assets/css/main.scss'],

  plugins: ['~/plugins/init.js', '~/plugins/vue-observe-visibility.js'],

  buildModules: [
    themeModule,
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
  ],

  modules: ['vue-social-sharing/nuxt', 'nuxt-i18n', '@nuxt/content'],

  pwa: {
    manifest: {
      name: 'MyTechBlog',
    },
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
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    parsePages: false,
    lazy: false,
    seo: false,
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
  const config = defu.arrayFn(appConfigs, defaultConfig())
  return config
}
