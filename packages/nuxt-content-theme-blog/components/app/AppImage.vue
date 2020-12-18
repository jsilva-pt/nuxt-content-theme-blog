<template>
  <div
    v-observe-visibility="{
      callback: lazyLoadImage,
      throttle: 250,
      once: true,
    }"
    :style="[intristicRatioStyle]"
    class="overflow-hidden relative"
    :class="{ 'light:bg-light-surface dark:bg-dark-surface': !loaded }"
  >
    <div :class="[ratio && 'absolute top-0 right-0 bottom-0 left-0']">
      <img
        v-if="show"
        ref="img"
        :src="src"
        :alt="alt"
        class="max-h-full opacity-0 transition-opacity duration-500 m-auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    ratio: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      show: false,
      loaded: false,
    }
  },
  computed: {
    intristicRatio() {
      if (!this.ratio) {
        return 0
      } else {
        const sizes = this.ratio.split(':')
        const ratio = sizes[1] / sizes[0]
        return ratio
      }
    },
    intristicRatioStyle() {
      return {
        'padding-bottom': `${this.intristicRatio * 100}%`,
      }
    },
  },
  methods: {
    lazyLoadImage(isVisible, entry) {
      if (isVisible) {
        this.show = true
        this.$nextTick(() => {
          const lazyImage = this.$refs.img
          lazyImage.addEventListener('load', () => {
            lazyImage.classList.add('lazy-loaded')
            this.loaded = true
          })
          lazyImage.addEventListener('error', () => {
            lazyImage.classList.add('lazy-load-error')
          })
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.lazy-loaded {
  opacity: 1;
}
</style>
