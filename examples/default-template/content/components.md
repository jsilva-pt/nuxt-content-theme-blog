---
title: Components
description: Alert, CodeGroup and CodeSandbox examples
image: https://vueschool.io/media/cb103360d9341bd311b96974a83a3a91/vuejs-components-fundamentals.png
publishedAt: 2020-12-17
authors:
  - name: José Silva
    avatarUrl: https://pbs.twimg.com/profile_images/1120591657152536578/qsf_Hlyn_400x400.png
    link: https://twitter.com/jmanuelsilvapt
tags:
  - Alert
  - CodeGroup
  - CodeSandbox
link: https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark
---

## Alert

<alert>
Informative
</alert>

<alert type="success">
Success alert
</alert>

<alert type="warning">
Warning alert
</alert>

<alert type="danger">
Danger alert
</alert>

## CodeGroup

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @jsilva-pt/nuxt-content-theme-blog
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @jsilva-pt/nuxt-content-theme-blog
  ```

  </code-block>
</code-group>

## CodeSandbox

<code-sandbox :src="link"></code-sandbox>
