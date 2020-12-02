<template>
  <NuxtLink
    :to="localePath({ name: 'index' })"
    class="inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary"
  >
    <ArrowLeftIcon class="h-5 mr-2" />back to blog list
  </NuxtLink>
</template>

<script>
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'
export default {
  components: {
    ArrowLeftIcon,
  },
}
</script>
