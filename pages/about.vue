<template>
  <div>
    <Head>
      <Title>{{ settings['about_meta_title'] }}</Title>
      <Meta name="description" :content="settings['about_meta_description']" />
      <Meta property="og:title" :content="settings['about_meta_title']" />
      <Meta property="og:image" :content="settings['about_og']" />
      <Meta property="og:description" :content="settings['about_meta_description']" />
    </Head>
    <article v-if="data">
      <div class="article-content" v-html="data.data.content"></div>
    </article>
    <Error404 v-else-if="error" />
    <!--  <div class="pr-32 xl:pr-32 pr-0 gap-1 gap-2 gap-3 gap-4 gap-5 gap-6 xs:block xs:hidden block"></div>-->
  </div>
</template>

<script setup>
const settings = useState('settings');

definePageMeta({
  layout: 'custom',
})

useHead({
  title: `About | Armin Salihović`,
});

const route = useRoute();

const projects = useState('about', () => []);

const config = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch(`${config.public.apiBase}/about`, {
  key: route.params.slug,
})
</script>
