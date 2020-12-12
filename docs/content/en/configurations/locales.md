---
title: Locales
description: ''
position: 31
category: 'Configurations'
---

The [I18n module](https://i18n.nuxtjs.org/) powers the localization.

By default, it is predefined with English, but you can change the available languages by updating its configuration in the `nuxt.config.js` file.

When adding a new language, if you want to maintain the English locale, you need to include it in the `i18n.locales` array and set the path to the files in the `i18n.vueI18n.messages` property.

```js
export default theme({
  ...
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
  ...
})
```

When more than one locale is defined, a language switcher appears in the footer of the blog.