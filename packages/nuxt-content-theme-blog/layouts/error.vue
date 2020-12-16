<template>
  <div class="w-full dark:border-gray-800">
    <PageNotFound v-if="error.statusCode === 404" />
    <h1 v-else class="text-4xl font-black mb-4 leading-none">
      {{ error.message }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
