---
title: Feed
description: ''
position: 30
category: 'Configurations'
---

The [Feed module](https://github.com/nuxt-community/feed-module) powers the feed.

## Title and Description

By default, the feed will be using the title and description entered when you answered the questions when you were initializing the blog. However, you can modify it.
To do so, go to the `nuxt.config.js` file and change its values in the `feedOptions` configuration.

```js
export default theme({
  ...
  feedOptions: {
    title: 'Nuxt Blog Clone',
    description: 'Articles about NuxtJS',
  },
  ...
})
```

## Author(s)

An article can have one or more authors. Check the [front matter authors'](/getting-started/writting#required-fields) documentation to see how to provide the right information to have the list of authors displayed in the feed.

## Full override

For now, the only type of feed generated is the `rss2`. Also, the only content displayed is the description provided in the blog post front matter. If you want to override completely the feed configurations you can do it like you would do when installing the module yourself.

```js
export default theme({
  ...
  feed: {
    // @nuxtjs/feed configurations
  }
  ...
})
```