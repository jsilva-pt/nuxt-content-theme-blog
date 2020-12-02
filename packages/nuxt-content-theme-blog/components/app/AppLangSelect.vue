<template>
  <div
    class="nui-select text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary inline-block rounded-full transition-colors duration-300 ease-linear"
  >
    <div class="flex items-center content-center px-4">
      <div class="-mr-4">
        <GlobeIcon />
      </div>
      <select
        :value="$i18n.locale"
        class="bg-transparent cursor-pointer font-medium h-10 appearance-none focus:outline-none pl-6 pr-8 z-10"
        @change="onChange"
      >
        <option
          v-for="(locale, i) in $i18n.locales"
          :key="i"
          :value="locale.code"
          class="dark:text-dark-surface"
        >
          {{ locale.name }}
        </option>
      </select>
      <CaretDownIcon class="-ml-4" />
    </div>
  </div>
</template>

<script>
import CaretDownIcon from '~/assets/icons/caret-down.svg?inline'
import GlobeIcon from '~/assets/icons/globe.svg?inline'
export default {
  components: {
    CaretDownIcon,
    GlobeIcon,
  },
  methods: {
    onChange(event) {
      this.$router.push(this.switchLocalePath(event.target.value))
    },
  },
}
</script>
