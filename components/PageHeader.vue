<template>
  <div class="flex py-16 sm:justify-center sm:py-36 sm:grid sm:grid-cols-6">
    <NuxtLink v-if="isPanelOpen" to="/" class="hidden sm:block sm:col-span-2 mt-2.5"><img style="height: 3.75rem" src="/img/logo_4.2_light.svg" alt="logo"></NuxtLink>
    <NuxtLink v-else to="/" class="hidden sm:block sm:col-span-2 mt-2.5"><img style="height: 3.75rem" src="/img/logo_4.2.svg" alt="logo"></NuxtLink>
    <h1 class="text-5xl sm:text-7xl flex flex-col whitespace-pre fw-500 sm:col-span-4 leading-none"><span>{{ title }}</span></h1>
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
