<template>
  <div class="p-6 sm:px-12">
    <PageHeader title="Contact" />
      <div class="flex pb-16 grid grid-cols-6 text-base md:text-lg gap-4">
        <aside class="md:col-span-2 col-span-6">
          <h4 class="font-bold">Write me a message!</h4>
        </aside>
        <div class="md:col-span-3 col-span-6">
          <div class="mb-10 w-full flex flex-col sm:flex-row gap-10 ">
            <input class="py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full sm:w-1/2" id="name" type="text" placeholder="Name*">
            <input class="py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full sm:w-1/2" id="email" type="email" placeholder="Email*">
          </div>
          <input class="py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full mb-10" id="subject" type="text" placeholder="Subject*">
          <textarea placeholder="Message" class="mb-5 h-48 resize-none py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full"></textarea>
          <button class=" py-2 px-10 mr-2 mb-2 text-base font-bold focus:outline-none bg-white border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out">Send</button>
        </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
})

useHead({
  title: `Contact | Armin Salihović`,
});
</script>