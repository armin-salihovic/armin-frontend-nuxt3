<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const settings = useState('settings', () => []);

const config = useRuntimeConfig();

const { data , pending, error, refresh } = await useFetch(`${config.public.apiBase}/settings`);

settings.value = data;

useHead({
  meta: [
    { name: 'author', content: 'Armin Salihović' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.armin.ba' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: settings.value['favicon'] }
  ]
})
</script>

<style>
.noscroll {
  overflow: hidden;
  max-height: 100%;
}
</style>
