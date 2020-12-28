---
title: Markdown examples
description: Headings, links, lists, images and code blocks examples
image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png
publishedAt: 2020-12-18
authors:
  - name: José Silva
    avatarUrl: https://pbs.twimg.com/profile_images/1120591657152536578/qsf_Hlyn_400x400.png
    link: https://twitter.com/jmanuelsilvapt
tags:
  - Headings
  - Links
  - Lists
  - Images
  - CodeBlocks
---

## Headings 

## h2
### h3
#### h4

## Links

### Internal

<nuxt-link to="/">Nuxt Link to Homepage</nuxt-link>

<a href="/">Html Link to Homepage</a>

[Markdown Link to Homepage](/)

### External 

<a href="https://nuxtjs.blog">External link html</a>

[External Link markdown](https://nuxtjs.blog)

## Lists

### Ordered List

1. First item
2. Second item
3. Third item
4. Fourth item

### Unordered List

- First item
- Second item
- Third item
- Fourth item

## Images

### Markdown

![logo](/icon.png)

### HTML

Here we have visible at the same time the light and dark logo

<img src="/logo-light.svg" width="400" alt="logo">
<img src="/logo-dark.svg" width="400" alt="logo">

Here we only have visible the logo for the current mode.  
Change the color mode to see it in action.

<img src="/logo-light.svg" width="400"  alt="logo" class="light-img">
<img src="/logo-dark.svg" width="400"  alt="logo" class="dark-img">

## Code Blocks

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```