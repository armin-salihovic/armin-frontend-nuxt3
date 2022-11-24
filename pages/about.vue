<template>
  <div>
    <article v-if="data">
      <div class="article-content" v-html="data.data.content"></div>
    </article>
    <Error404 v-else-if="error" />
    <!--  <div class="pr-32 xl:pr-32 pr-0 gap-1 gap-2 gap-3 gap-4 gap-5 gap-6 xs:block xs:hidden block"></div>-->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
})

useHead({
  title: `About | Armin Salihović`,
});

const route = useRoute();

const projects = useState('about', () => []);

const { data, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/about`, {
  key: route.params.slug,
})
</script>
