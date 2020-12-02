<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <Nuxt
      class="flex-grow pb-16 bg-light-elevatedSurface dark:bg-dark-elevatedSurface"
    />
    <TheFooter />
  </div>
</template>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      ...i18nSeo,
    }
  },
}
</script>
