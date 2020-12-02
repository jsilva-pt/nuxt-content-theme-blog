<template>
  <div class="pt-4">
    <div class="pt-3 mt-6 border-t border-light-border dark:border-dark-border">
      <p
        class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-1 mb-8 transition-colors duration-300 ease-linear"
      >
        {{ $t('contribute.blog') }}
        <a
          :href="docLink"
          target="_blank"
          rel="noopener"
          class="text-primary-base hover:underline"
        >
          {{ $t('contribute.edit_on_github') }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    docLink: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
