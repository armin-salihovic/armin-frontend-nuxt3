<template>
  <div>
    <div class="pt-6 sm:px-12">
      <PageHeader title="Hello, <br>I'm Armin" />
    </div>
    <div v-if="data">
      <div v-html="data.data.content"></div>
    </div>
    <div class="pb-6 sm:px-12">
      <div class="flex grid grid-cols-6 text-base md:text-lg gap-4">
        <aside class="md:col-span-2 col-span-6">
          <h4 class="font-bold"></h4>
        </aside>
        <div class="block-paragraph md:col-span-4 col-span-6 pr-0 xl:pr-32 flex gap-16 sm:gap-10">
          <a href="https://www.linkedin.com/in/armin-salihovic/" target="_blank" class="icon sm:border sm:border-black sm:h-24 sm:w-24 sm:flex sm:justify-center sm:items-center">
            <img class="h-7" src="/img/icon-linkedin.svg" alt="">
          </a>
          <a href="mailto:hello@armin.ba" target="_blank" class="icon sm:border sm:border-black sm:h-24 sm:w-24 sm:flex sm:justify-center sm:items-center">
            <img class="h-7" src="/img/icon-envelope.svg" alt="">
          </a>
          <a href="https://github.com/armin-salihovic" target="_blank" class="icon sm:border sm:border-black sm:h-24 sm:w-24 sm:flex sm:justify-center sm:items-center">
            <img class="h-7" src="/img/icon-github.svg" alt="">
          </a>
          <div @click="copyToClip" class="cursor-pointer icon sm:border sm:border-black sm:h-24 sm:w-24 sm:flex sm:justify-center sm:items-center">
            <img class="h-7" src="/img/icon-discord.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <MessageBox :open="messageBox.open" :message="messageBox.message" :type="messageBox.type" @close="messageBox.open = false" />
<!--      <div class="border border-black p-6 h-24 w-24 w-48 h-48 h-32 h-28 w-28 w-32">-->
  </div>

</template>

<style scoped>
.icon {
  transition: all 300ms ease, -webkit-transform 300ms ease;
}
.icon:hover {
  color: white;
  background-color: rgb(0 0 0);
}
.icon:hover img {
  filter: invert(97%) sepia(0%) saturate(7%) hue-rotate(167deg) brightness(118%) contrast(100%);
}

@media (max-width: 639px) {
  .icon:hover {
    color: unset;
    background-color: unset;
  }

  .icon:hover img {
    filter: unset;
  }
}
</style>

<script setup>
const messageBox = ref({
  open: false,
  type: '',
  message: {
    title: '',
    content: [],
  }
});

function copyToClip() {
  navigator.clipboard.writeText("Arminius#9617").then(function() {
    openMessageBox('success', 'Copied to clipboard', null);
    setTimeout(() => { messageBox.value.open = false; }, 3000);
  }, function(err) {
    console.error(err);
  });
}

function openMessageBox(type, title, content) {
  messageBox.value.open = true;
  messageBox.value.type = type;
  messageBox.value.message = {
    title: title,
    content: content,
  }
}

definePageMeta({
  layout: 'custom',
})

useHead({
  title: `Armin Salihović`,
});

const { data, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/home`);
</script>
