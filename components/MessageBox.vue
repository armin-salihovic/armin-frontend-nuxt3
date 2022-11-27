<template>
  <div :class="[open ? 'message-box__opened':'', type === 'success' ? 'bg-green-800' : '', type === 'fail' ? 'bg-red-800' : '', 'message-box p-6 sm:px-12 fixed bottom-0 left-0 max-w-screen-2xl mr-auto w-full z-50']">
    <div class="flex grid grid-cols-6 gap-4 py-0 lg:py-3">
      <aside class="md:col-span-2 col-span-6">
        <h4 @click="$emit('close')" class="text-white text-lg md:text-xl font-bold cursor-pointer">Close</h4>
      </aside>
      <div class="md:col-span-3 col-span-6">
        <h5 class="text-white text-lg md:text-xl font-bold">{{ message.title }}</h5>
        <div class="py-10">
            <p v-for="x in message.content" class="text-white text-base md:text-lg " v-html="x"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: {
    default: false,
  },
  message: {
    default: { title: '', content: [] },
  },
  type: {
    default: '',
  }
})
</script>

<style scoped>
.message-box {
  opacity: 0;
  height: 0;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  transform: translateY(70px);
}
.message-box.message-box__opened {
  opacity: 1;
  height: unset;
  transform: none;
}
</style>