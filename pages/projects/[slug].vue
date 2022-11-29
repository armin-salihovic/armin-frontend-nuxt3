<script setup>
const route = useRoute();

const projects = useState('projects', () => []);

const config = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch(`${config.public.apiBase}/projects/${route.params.slug}`, {
  key: route.params.slug,
})
</script>

<template>
  <article v-if="data">
    <Head>
      <Title>{{ data.data.title }} | Armin Salihović</Title>
      <Meta name="description" :content="data.data.description" />
      <Meta property="og:title" :content="`${data.data.title} | Armin Salihović`" />
      <Meta property="og:image" :content="data.data.image" />
      <Meta property="og:description" :content="data.data.description" />
    </Head>
    <div class="article-content" v-html="data.data.content"></div>
<!--    <div class="text-lg md:text-5xl text-3xl md:text-5xl text-2xl md:text-4xl text-gray-500"></div>-->
  </article>
  <Error404 v-else-if="error" />
</template>