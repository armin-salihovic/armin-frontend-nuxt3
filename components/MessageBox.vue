<template>
  <div :class="[open ? 'message-box__opened':'', type === 'success' ? 'bg-green-800' : '', type === 'fail' ? 'bg-red-800' : '', 'message-box p-6 sm:px-12 fixed bottom-0 left-0 max-w-screen-2xl mr-auto w-full z-50']">
    <div class="flex grid grid-cols-6 gap-4 py-0 lg:py-3">
      <aside class="md:col-span-2 col-span-6 relative">
        <h4 @click="$emit('close')" class="icon-cross text-white text-lg md:text-xl font-bold cursor-pointer">
          <img src="/img/icon-cross.svg" class="h-4" alt="">
        </h4>
      </aside>
      <div class="md:col-span-3 col-span-6 mt-4 md:mt-0">
        <h5 class="text-white text-lg md:text-xl font-bold">{{ message.title }}</h5>
        <div v-if="message.content !== null" class="py-10">
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
.icon-cross {
  filter: invert(97%) sepia(0%) saturate(7%) hue-rotate(167deg) brightness(118%) contrast(100%);
  position: absolute;
  top: 6px;
}
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