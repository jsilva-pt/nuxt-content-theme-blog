<template>
  <div
    class="flex items-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
  >
    <div>{{ $t('share.title') }}</div>
    <ShareNetwork
      v-for="network in networks"
      :key="network.id"
      :network="network.id"
      :url="currentUrl"
      :title="title"
      :description="description"
      :hashtags="shareHashtags"
      class="cursor-pointer inline-block p-3"
      :twitter-user="$config.twitterUsername"
      :aria-label="network.id"
    >
      <component :is="network.icon" width="24" height="24" />
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
      currentUrl: this.$config.baseUrl + this.$route.fullPath,
    }
  },
  computed: {
    shareHashtags() {
      if (this.$config.sharingDefaultHashtags) {
        return this.$config.sharingDefaultHashtags
          .concat(this.hashtags)
          .join(',')
      }
      return this.hashtags.join(',')
    },
  },
}
</script>
