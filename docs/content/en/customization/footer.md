---
title: Footer links
description: ''
position: 22
category: Customization
---

<alert>
If you want you can override completely the <b>FooterLinks.vue</b> component check the <a href="/customization/components#layout-components">Layout components</a> section in the components page.
</alert>

By default, it is possible to configure lists of external links to display in the footer of the blog on every page.

This configuration is done in the `publicRuntimeConfig.footerLinks` property in the `nuxt.config.js` file.

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    footerLinks: {
      
    },
    ...
  },
  ...
}
```

The `footerLinks` configuration is an object of keys/values where each key represents a column and its value (an array) the links display under it.

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    footerLinks: {
      social: [],
      build: []
    },
    ...
  },
  ...
}
```

At this point, you must define in your translations files the values for the titles of each column:
- `footer.links.social.title`
- `footer.links.support.title`

Each column is then an array of objects that can have the keys `text` or `key`, depending on if you want to use translations or not, and `href`.


```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    footerLinks: {
      social: [{
        text: 'Github',
        href: 'https://github.com/jsilva-pt/'
      },
      {
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/jsilva-pt/'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/jmanuelsilvapt'
      }],
      support: [{
        key: 'footer.links.support.sponsor',
        href: 'https://github.com/sponsors/jsilva-pt'
      }]
    },
    ...
  },
  ...
}
```

The previous configurations generate a footer with two columns. The first column has a title and three links, while the second one, a title and one link where the text displayed for this link comes from the locales.
