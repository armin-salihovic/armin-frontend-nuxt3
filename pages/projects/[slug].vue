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
      <figure class="img-container mb-3" :style="`background-image:url('${data.data.image_lqpi}');`">
        <img class="lazyload blur-up w-full w-full bg-center absolute" :src="data.data.image" :data-src="data.data.image" alt="">
      </figure>
    </div>
    <div class="p-6 md:p-10 p-6 sm:px-12" v-html="data.data.content">
    </div>
  </article>
  <Error404 v-else-if="error" />
</template>

<style scoped>
img {
  height: 615px;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

.img-container {
  padding-bottom: 40%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  height: 615px;
}

.blur-up {
  opacity: 0;
  transition: opacity 600ms ease, -webkit-filter 600ms ease;
}

.blur-up.lazyloaded {
  opacity: 1;
}
</style>