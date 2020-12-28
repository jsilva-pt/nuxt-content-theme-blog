<template>
  <div class>
    <div class="container lg:max-w-4xl mx-auto p-4 pb-8">
      <BackToList />
      <BlogpostItem :post="post" />
      <BlogpostNavigationLinks :prev="prev" :next="next" />
      <AppContribute :doc-link="docLink" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { metaGeneric, metaArticle } from '~/utils/metaTags'
import AppCopyButton from '~/components/app/AppCopyButton'
export default {
  name: 'PageSlug',
  scrollToTop: true,
  async asyncData({ $content, app, params, error }) {
    const { slug } = params
    let post
    let posts

    let slugWithLocale = slug
    if (app.i18n.locale !== app.i18n.defaultLocale) {
      slugWithLocale += `.${app.i18n.locale}`
    }

    try {
      posts = await $content(slug, { deep: true })
        .where({ locale: { $eq: app.i18n.locale } })
        .fetch()
    } catch {
      try {
        posts = await $content(slug, { deep: true })
          .where({ locale: { $eq: app.i18n.defaultLocale } })
          .fetch()
      } catch {
        return error({ statusCode: 404 })
      }
    }

    if (Array.isArray(posts)) {
      post = posts[0]
    } else {
      post = posts
    }

    const [prev, next] = await $content({ deep: true })
      .where({ locale: { $eq: app.i18n.defaultLocale } })
      .only(['title', 'slug'])
      .sortBy('publishedAt', 'desc')
      .surround(slugWithLocale, { before: 1, after: 1 })
      .fetch()

    return {
      post,
      slug,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        ...metaGeneric(
          this.post.title,
          this.post.description,
          this.$config.baseUrl + this.$route.fullPath
        ),
        ...metaArticle(
          this.post.author,
          this.post.publishedAt,
          this.post.modifiedTime
        ),
      ],
    }
  },
  computed: {
    docLink() {
      return `https://github.com/${this.$config.githubOwner}/${this.$config.githubRepository}/blob/${this.$config.githubMainBranch}/content${this.post.path}${this.post.extension}`
    },
  },
  mounted() {
    const blocks = document.getElementsByClassName('nuxt-content-highlight')

    for (const block of blocks) {
      const CopyButton = Vue.extend(AppCopyButton)
      const component = new CopyButton().$mount()
      block.appendChild(component.$el)
    }
  },
}
</script>
