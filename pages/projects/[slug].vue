<script setup>
const route = useRoute();

const projects = useState('projects', () => []);

const { data, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/projects/${route.params.slug}`, {
  key: route.params.slug,
})

</script>

<template>
  <article v-if="data">
    <HeroImage :data="data" />
    <div class="p-6 md:p-10 p-6 sm:px-12" v-html="data.data.content"></div>
  </article>
  <Error404 v-else-if="error" />
</template>

<style scoped>
</style>