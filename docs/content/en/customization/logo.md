---
title: Logo
description: ''
position: 20
category: Customization
---

There are three ways to provide the logo to your blog:

- Specifying the logo configuration. The logo must be in the `static` folder;

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    logo: 'logo.png'
    ...
  },
  ...
}
```

- Specifying the logo light and dark configurations. The logos must be in the `static` folder;

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    logoLight: 'logo-light.png',
    logoDark: 'logo-dark.png'
    ...
  },
  ...
}
```

- Creating a Logo component (`AppLogo.vue`).

```bash
components/
  AppLogo.vue
```
