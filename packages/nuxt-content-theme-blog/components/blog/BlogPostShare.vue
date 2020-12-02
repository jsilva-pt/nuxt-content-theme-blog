<template>
  <div
    class="flex items-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
  >
    <div>Share on</div>
    <ShareNetwork
      v-for="network in networks"
      :key="network.id"
      :network="network.id"
      :url="currentUrl"
      :title="title"
      :description="description"
      :hashtags="['MyTechBlog'].concat(hashtags).join(',')"
      class="cursor-pointer inline-block p-3"
      :twitter-user="$store.state.settings.social.twitter"
    >
      <component :is="network.icon" width="24" height="24" :alt="network" />
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hashtags: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      networks: [
        { id: 'facebook', icon: 'IconFacebook' },
        { id: 'twitter', icon: 'IconTwitter' },
        { id: 'linkedin', icon: 'IconLinkedin' },
      ],
      currentUrl:
        this.$store.state.settings.productionDomain + this.$route.path,
    }
  },
}
</script>
