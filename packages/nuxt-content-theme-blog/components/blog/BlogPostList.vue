<template>
  <section>
    <BlogpostPreviewItem
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => [],
    }
  }
}
</script>