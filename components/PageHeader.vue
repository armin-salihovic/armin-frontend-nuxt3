<template>
  <div class="flex py-16 sm:justify-center sm:py-36 sm:grid sm:grid-cols-6">
    <NuxtLink v-if="isPanelOpen" to="/" class="hidden sm:block sm:col-span-2 mt-2.5"><img class="page-header-logo" src="/img/logo_4.3.1_light.svg" alt="logo"></NuxtLink>
    <NuxtLink v-else to="/" class="hidden sm:block sm:col-span-2 mt-2.5"><img class="page-header-logo" src="/img/logo_4.3.1.svg" alt="logo"></NuxtLink>
    <h1 class="text-7xl md:text-7xl lg:text-8xl flex flex-col whitespace-pre fw-600 sm:col-span-4 leading-none"><span>{{ title }}</span></h1>
  </div>
</template>

<script setup>

defineProps({
  title: {
    required: true,
  },
  isPanelOpen: {
    default: false
  }
})

</script>

<style scoped>

.page-header-logo {
  height: 4.75rem;
}

@media (max-width: 1023px) {
  .page-header-logo {
    height: 3.75rem;
  }
}

</style>
