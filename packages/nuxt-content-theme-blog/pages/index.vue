<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-8">
      <AppWelcome v-if="$options.components['AppWelcome']" />

      <section>
        <BlogpostPreviewItem
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { metaGeneric } from '~/utils/metaTags'
export default {
  async asyncData({ $content, app }) {
    let posts = []

    try {
      posts = await $content(app.i18n.defaultLocale)
        .sortBy('publishedTime', 'desc')
        .fetch()
    } catch {}

    return {
      posts,
    }
  },
  head() {
    const title = this.$i18n.t('meta.title')
    const description = this.$i18n.t('meta.description')
    return {
      title,
      titleTemplate: '%s',
      meta: [...metaGeneric(title, description)],
    }
  },
}
</script>
