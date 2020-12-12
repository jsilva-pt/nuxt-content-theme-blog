---
title: Sitemap
description: ''
position: 33
category: 'Configurations'
---

The [Sitemap module](https://github.com/nuxt-community/sitemap-module) powers the sitemap.

The sitemap is already configured to generate a valid sitemap.xml based on the existent blog posts and languages configured.

Anyway, if you want to rewrite its configuration, you can do it like you would do if you were installing the sitemap module yourself.

```js
export default theme({
  ...
  sitemap: {
    // @nuxtjs/sitemap configurations
  },
  ...
}
```
