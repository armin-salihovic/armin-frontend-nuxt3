<template>
  <Custom>
    <Error404 />
  </Custom>
</template>

<script setup>
import Custom from "./layouts/custom";

const props = defineProps({
  error: Object
})
</script>
