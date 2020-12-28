---
title: Components
description: ''
position: 23
category: Customization
---

The components used to create the blog theme can be divided into two groups:
- Components that can help us to improve the blog posts: [Markdown components](#markdown-components);
- Components used to layout the blog: [Layout components](#layout-components)

## Markdown components

When writing a blog post, you have a few [components available](/guide/markdown-components) to improve your article. But you can always add more or override the ones provided.

### Add new components

New components must be placed in the `components/global` folder, making them automatically available in the markdown files.

```bash
components/
  global/
    MarkdownComponent1.vue
    MarkdownComponent2.vue
```

### Override components

To override components provided by the theme you only need to create a component with the same name in the `components/global` folder. Your component will be used instead of the component provided by the theme.

```bash
components/
  global/
    Alert.vue
```
This is only possible thanks to the [Nuxt components module](https://github.com/nuxt/components).

#### Check the existent markdown components on GitHub:
- [Alert.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/global/Alert.vue)
- [CodeBlock.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/global/CodeBlock.vue)
- [CodeGroup.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/global/CodeGroup.vue)
- [CodeSandbox.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/global/CodeSandbox.vue)

## Layout components

Do you like what the theme offers but want to change a specific part of the blog? It is entirely possible. You can add as many components as you want to improve the layout of your blog as well as override any component.

### Add new components

New components must be placed in the `components` folder, making them automatically available to be used by your other layout components.

```bash
components/
  LayoutComponent1.vue
  LayoutComponent2.vue
```

### Overriding components

To do it, you only need to create a component with the same name created in the theme.

```bash
components/
  TheHeader.vue
```
This is only possible thanks to the [Nuxt components module](https://github.com/nuxt/components).

The best way to see the list of components used to create this theme is to directly access the [source code](https://github.com/jsilva-pt/nuxt-content-theme-blog/tree/main/packages/nuxt-content-theme-blog/components). Some of those components are:
- [TheHeader.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/TheHeader.vue)
- [TheFooter.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/TheFooter.vue)
- [FooterLinks.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/footer/FooterLinks.vue)
- [PageNotFound.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/app/PageNotFound.vue)
- [BlogpostPreviewItem.vue](https://github.com/jsilva-pt/nuxt-content-theme-blog/blob/main/packages/nuxt-content-theme-blog/components/blog/BlogpostPreviewItem.vue)
