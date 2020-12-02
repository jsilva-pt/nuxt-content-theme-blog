<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-8">
      <AppWelcome v-if="$options.components['AppWelcome']" />

      <template v-if="posts.length > 0">
        <section>
          <BlogpostPreviewItem
            v-for="(post, index) in posts"
            :key="index"
            :post="post"
          />
        </section>
      </template>

      <AppStatus v-else code="noResults" />
    </div>
  </div>
</template>

<script>
import { metaGeneric } from '~/utils/metaTags'
export default {
  async asyncData({ $content, app }) {
    const posts = await $content(app.i18n.defaultLocale)
      .sortBy('date', 'desc')
      .fetch()

    return {
      posts,
    }
  },
  head() {
    const title = this.$i18n.t('meta.title')
    const description = this.$i18n.t('meta.description')
    return {
      title,
      meta: [
        ...metaGeneric(
          title,
          description,
          this.$store.state.settings.socialImage
        ),
      ],
    }
  },
}
</script>
