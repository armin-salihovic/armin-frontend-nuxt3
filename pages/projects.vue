<script setup>
onMounted(()=>{
  if(process.client) { document.body.classList.add('relative') }
})

definePageMeta({
  layout: 'custom',
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
