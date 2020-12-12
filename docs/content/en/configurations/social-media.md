---
title: Social Media
description: ''
position: 34
category: 'Configurations'
---

## Blog social media links

If you want to display your social media links in the header of your blog, you can set the property `publicRuntimeConfig.showSocialIconsOnHeader` to `true` as well as the usernames you have on them. Only Linkedin, Twitter and Github and available for now.

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    showSocialIconsOnHeader: true,
    linkedinUsername: 'jsilva-pt',
    githubOwner: 'jsilva-pt',
    twitterUsername: 'jmanuelsilvapt',
    ...
  },
  ...
}
```


## Blog post sharing

To enable the blog post sharing widget, you need to go to the `nuxt.config.js` and set the property `publicRuntimeConfig.sharingBlogPostEnabled` to `true`.

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    sharingBlogPostEnabled: true,
    ...
  },
  ...
}
```

## Blog post default hashtags

If you have hashtags that you want to be used in all the blog posts when sharing them using the sharing widget, you can set them in the property `publicRuntimeConfig` in the `nuxt.config.js` file.

```js
export default theme({
  ...
  publicRuntimeConfig: {
    ...
    sharingDefaultHashtags: ['MyTechBlog'],
    ...
  },
  ...
}
```
