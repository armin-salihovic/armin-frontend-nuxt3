<script setup>
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const route = useRoute();

const projects = useState('projects', () => []);

const { data, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/projects/${route.params.slug}`, {
  key: route.params.slug,
})
</script>

<template>
  <article v-if="data">
    <div class="pb-10">
      <img class="w-full bg-center" :src="data.data.image" alt="">
      <img class="lazyload w-full w-full bg-center" :src="data.data.image_lqpi" :data-src="data.data.image" alt="">
    </div>
    <div class="p-6 md:p-10 p-6 sm:px-12" v-html="data.data.content">
    </div>
  </article>
  <Error404 v-else-if="error" />
</template>
