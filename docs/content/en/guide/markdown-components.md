---
title: Markdown components
description: ''
position: 12
category: Guide
---

The default theme comes with some Vue.js components you can use directly in your markdown content.

### `<alert>`

**Props**

- `type`
  - Type: `String`
  - Default: `'info'`
  - Values: `['info', 'success', 'warning', 'danger']`

**Example**

```md
<alert>Info alert!</alert>
```

**Result**

<alert>Info alert!</alert>

### `<code-block>`

**Props**

- `label`
  - Type: `String`
  - `required`
- `active`
  - Type: `Boolean`
  - Default: `false`

**Example**

```html
# Backslashes are for demonstration

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @jsilva-pt/nuxt-content-theme-blog
  \```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @jsilva-pt/nuxt-content-theme-blog
  \```

  </code-block>
</code-group>
```

**Result**

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

### `<code-sandbox>`

**Props**

- `src`
  - Type: `String`
  - `required`

**Example**

```md
---
link: https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark
---

<code-sandbox :src="link"></code-sandbox>
```

**Result**

<code-sandbox src="https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark"></code-sandbox>
