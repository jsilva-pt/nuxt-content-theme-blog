<template>
  <header
    class="sticky top-0 left-0 right-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface h-16 lg:h-24 transition-colors duration-300 ease-linear"
    :class="{ shadow: !onTop, 'shadow-reverse': onTop }"
  >
    <div
      class="container relative mx-auto px-4 flex items-center justify-between lg:py-6 h-full"
    >
      <NuxtLink to="/">
        <Logo
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        />
      </NuxtLink>

      <div
        v-if="$store.state.settings.social.showOnHeader"
        class="dark:text-white flex"
      >
        <a
          v-if="$store.state.settings.social.linkedin"
          :href="$store.state.settings.social.linkedin"
          target="_blank"
          class="hidden sm:block ml-3"
          rel="noopener"
          aria-label="linkedin"
        >
          <IconLinkedin class="w-6 h-6" />
        </a>

        <a
          v-if="$store.state.settings.social.twitter"
          :href="$store.state.settings.social.twitter"
          target="_blank"
          class="hidden sm:block ml-3"
          rel="noopener"
          aria-label="twitter"
        >
          <IconTwitter class="w-6 h-6" />
        </a>

        <a
          v-if="$store.state.settings.social.github"
          :href="$store.state.settings.social.github"
          target="_blank"
          class="hidden sm:block ml-3"
          rel="noopener"
          aria-label="github"
        >
          <IconGithub class="w-6 h-6" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      onTop: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.onTop = window.pageYOffset < 60
    },
  },
}
</script>
