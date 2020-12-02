<template>
  <div class="flex flex-wrap justify-between mb-8">
    <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
      <i18n
        path="welcome.title"
        tag="h1"
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
      >
        <template v-slot:nuxt>
          <AppTitle />
        </template>
      </i18n>

      <i18n
        path="welcome.description"
        tag="h3"
        class="xl:text-lg light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
      >
        <template v-slot:nuxtTeam>
          <a
            class="text-nuxt-green underline"
            href="https://nuxtjs.org/team#nuxtCompany"
          >
            {{ $t('welcome.nuxt_team') }}
          </a>
        </template>
        <template v-slot:nuxtCommunity>
          <a
            class="text-nuxt-green underline"
            href="https://nuxtjs.org/team#nuxtCommunity"
          >
            {{ $t('welcome.nuxt_community') }}
          </a>
        </template>
      </i18n>
    </div>
    <DesignIllustration
      class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
    />
  </div>
</template>
