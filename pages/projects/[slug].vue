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
  </article>
  <Error404 v-else-if="error" />
</template>