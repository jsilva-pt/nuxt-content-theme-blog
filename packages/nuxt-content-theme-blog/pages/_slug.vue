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
    const lang = app.i18n.defaultLocale
    let post

    try {
      post = await $content(lang, slug).fetch()
    } catch {
      return error({ statusCode: 404 })
    }

    const [prev, next] = await $content(lang)
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(slug, { before: 1, after: 1 })
      .fetch()

    return {
      post,
      slug,
      prev,
      next,
    }
  },
  computed: {
    docLink() {
      return `${this.$store.state.settings.repository.url}blob/${this.$store.state.settings.repository.defaultBranch}/content${this.post.path}${this.post.extension}`
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
  head() {
    return {
      title: this.post.title,
      titleTemplate: `%s - ${this.$store.state.settings.name}`,
      meta: [
        ...metaGeneric(
          this.post.title,
          this.post.description,
          this.socialImage,
          this.$t('blogPost.imgAlt')
        ),
        ...metaArticle(
          this.post.author,
          this.post.publishedTime,
          this.post.modifiedTime
        ),
      ],
    }
  },
}
</script>
