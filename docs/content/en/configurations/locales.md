---
title: Locales
description: ''
position: 31
category: 'Configurations'
---

The [I18n module](https://i18n.nuxtjs.org/) powers the localization.

<alert>
If you want to see how to organize translated blog posts check the <a href="/guide/writing">Writing blog posts</a> guide.
</alert>

You can update your blog's languages by accessing the `nuxt.config.js` file and updating the values of the `i18n.locales` and `i18n.vueI18n.messages` properties.

Each language must have a file in the `18n` directory and a folder named with its code in the `content` directory.

```js
export default theme({
  ...
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
  ...
})
```

When more than one locale is defined, a language switcher appears in the footer of the blog.