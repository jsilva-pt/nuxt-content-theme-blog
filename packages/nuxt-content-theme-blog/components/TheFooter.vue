<template>
  <footer class="z-10 relative lg:pb-0 lg:block">
    <div
      class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear"
    >
      <div v-if="$config.footerLinks" class="container mx-auto px-4">
        <FooterLinks />
      </div>
      <div
        class="lg:border-t border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
      >
        <div
          class="container mx-auto px-4 flex flex-row items-center content-center justify-between py-4"
        >
          <div class="flex-1 flex">
            <DarkModeToggle />
          </div>

          <div v-if="$i18n.locales.length > 1" class="flex-1 text-right">
            <AppLangSelect :value="$i18n.locale" :options="$i18n.locales" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
