---
title: Layout components
description: ''
position: 21
category: Customization
---

## Logo
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

## Welcome section

The welcome section is a place where you can have an introduction to the blog. To do it, create a `AppWelcome.vue` component in the `components` folder.

```bash
components/
  AppWelcome.vue
```

## Overriding components

<alert>
You can find a live example <a href="/examples/overriding-components">here</a>.
</alert>

Do you like what the theme offers but want to change a specific part of the blog? It is entirely possible. You can override any component. To do it, you only need to create a component with the same name created in the theme.

```bash
components/
  # the components must be placed here
```
This is only possible thanks to the [Nuxt components module](https://github.com/nuxt/components).

The best way to see the list of components used to create this theme is to access the [source code](https://github.com/jsilva-pt/nuxt-content-theme-blog/tree/main/packages/nuxt-content-theme-blog/components) directly.
