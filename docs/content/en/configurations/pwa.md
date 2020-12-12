---
title: PWA
description: ''
position: 32
category: 'Configurations'
---

The [PWA module](https://pwa.nuxtjs.org/) powers the PWA functionalities.

When initializing the blog through the [create-nuxt-blog]() package, all the necessary configurations will be filled already.
However, you can modify any configuration by following the PWA module documentation. 

In the following example, I'm overriding the blog's name displayed on the mobile device screen when the blog is installed as an application.

```js
export default theme({
  ...
  pwa: {
    manifest: {
      short_name: 'MyTechBlog',
    },
  },
  ...
}
```
