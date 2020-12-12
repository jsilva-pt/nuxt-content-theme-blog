<template>
  <div class="text-center">
    <img :src="$config.pageNotFoundImg" class="w-1/4 mx-auto" />
    <h1 class="text-4xl">
      {{ $t('pageNotFound.title') }}
    </h1>
    <p v-for="(item, index) in $t('pageNotFound.description')" :key="index">
      {{ item }}
    </p>
  </div>
</template>
