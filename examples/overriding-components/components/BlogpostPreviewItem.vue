<template>
  <NuxtLink
    :to="localePath({ name: 'slug', params: { slug: post.slug } })"
    class="light:bg-light-surface dark:bg-dark-surface flex flex-col mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear"
  >
    <p><b>component:</b> BlogpostPreviewItem.vue</p>
    <p><b>Title:</b> {{ post.title }}</p>
    <p><b>Description:</b> {{ post.description }}</p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
