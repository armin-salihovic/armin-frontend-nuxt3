<script setup>
const route = useRoute();

const projects = useState('projects', () => []);

const { data, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/projects/${route.params.slug}`, {
  key: route.params.slug,
})

</script>

<template>
  <article v-if="data">
    <div class="article-content" v-html="data.data.content"></div>
<!--    <div class="text-lg md:text-5xl text-3xl md:text-5xl text-2xl md:text-4xl text-gray-500"></div>-->
  </article>
  <Error404 v-else-if="error" />
</template>