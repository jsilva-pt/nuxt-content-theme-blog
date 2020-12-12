---
title: Layout components
description: ''
position: 21
category: Customization
---

## Logo
There are two ways to provide the logo to your blog:

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

- Creating a Logo component (`Logo.vue`).

```bash
components/
  Logo.vue
```

## Welcome section

The welcome section is a place where you can have an introduction to the blog. To do it, create a `AppWelcome.vue` component in the `components` folder.

```bash
components/
  AppWelcome.vue
```

## Overriding components

Do you like what the theme offers but want to change a specific part of the blog? It is entirely possible. You can override any component. To do it, you only need to create a component with the same name created in the theme.

```bash
components/
  # the components must be placed here
```
This is only possible thanks to the [Nuxt components module](https://github.com/nuxt/components).

The best way to see the list of components used to create this theme is to access the [source code](https://github.com/jsilva-pt/nuxt-content-theme-blog/tree/main/packages/nuxt-content-theme-blog/components) directly.

Anyway, the components I think you may want to override more often are:
- BlogpostPreviewItem.vue
- TheHeader.vue
- TheFooter.vue
- FooterLinks.vue
