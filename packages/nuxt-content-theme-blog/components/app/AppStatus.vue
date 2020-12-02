<template v-else>
  <div class="text-center">
    <img :src="$store.state.settings[code].img" class="w-1/4 mx-auto" />
    <h1 class="text-4xl">
      {{ $t(`${code}.title`) }}
    </h1>
    <p v-for="(item, index) in $t(`${code}.description`)" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
}
</script>
