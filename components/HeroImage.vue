<template>
  <div class="pb-10">
    <figure class="hidden xs:block img-container mb-3" :style="`background-image:url('${data.data.image_lqpi}'); `">
      <img class="lazyload blur-up w-full w-full bg-center absolute" :src="data.data.image" :data-src="data.data.image" alt="">
    </figure>
    <figure class="block xs:hidden img-container image-square mb-3" :style="`background-image:url('${data.data.image_mobile_lqpi}'); `">
      <img class="lazyload blur-up w-full w-full bg-center absolute" :src="data.data.image_mobile" :data-src="data.data.image_mobile" alt="">
    </figure>
  </div>
</template>

<script setup>
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

defineProps({
  data: {
    required: true,
  }
})

</script>

<style scoped>

.blur-up {
  opacity: 0;
  transition: opacity 600ms ease, -webkit-filter 600ms ease;
}

.blur-up.lazyloaded {
  opacity: 1;
}

img {
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

.img-container {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

@media (min-width: 1000px) {
  .img-container {
    padding-bottom: 40%;
    height: 615px;
  }

  img {
    height: 615px;
  }
}
</style>