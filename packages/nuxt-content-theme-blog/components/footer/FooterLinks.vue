<template>
  <div
    class="flex flex-col sm:flex-row text-center sm:text-left items-start content-center justify-between pt-10 sm:py-10"
  >
    <nav
      v-for="(l, title, index) in $config.footerLinks"
      :key="title"
      class="flex-1 w-full sm:w-auto mb-8 sm:mb-0"
      :class="{
        'sm:text-center':
          index === 1 || Object.keys($config.footerLinks).length < 3,
        'sm:text-right': index === 2,
      }"
    >
      <h3
        class="font-bold uppercase text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-lg pb-4 transition-colors duration-300 ease-linear"
      >
        {{ $t(`footer.links.${title}.title`) }}
      </h3>
      <ul
        class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
      >
        <li v-for="(link, i) in l" :key="i" class="py-2">
          <a
            v-if="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-nuxt-lightgreen"
          >
            {{ link.text ? link.text : $t(link.key) }}
          </a>
          <NuxtLink
            v-else-if="link.to"
            :to="localePath(link.to)"
            class="hover:text-nuxt-lightgreen"
          >
            {{ $t(link.key) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
