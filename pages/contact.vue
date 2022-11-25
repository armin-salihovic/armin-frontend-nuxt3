<template>
  <div class="p-6 sm:px-12">
    <PageHeader title="Contact" />
      <div class="flex pb-16 grid grid-cols-6 text-base md:text-lg gap-4">
        <aside class="md:col-span-2 col-span-6">
          <h4 class="font-bold">Write me a message!</h4>
        </aside>
        <div class="md:col-span-3 col-span-6">
          <div class="mb-10 w-full flex flex-col sm:flex-row gap-10 ">
            <input v-model="emailData.name" @focus="closeSuccessBox" class="py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full sm:w-1/2" id="name" type="text" placeholder="Name*">
            <input v-model="emailData.email" @focus="closeSuccessBox" class="py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full sm:w-1/2" id="email" type="email" placeholder="Email*">
          </div>
          <input v-model="emailData.subject" @focus="closeSuccessBox" class="py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full mb-10" id="subject" type="text" placeholder="Subject*">
          <textarea v-model="emailData.message" @focus="closeSuccessBox" placeholder="Message" class="mb-5 h-48 resize-none py-2 border-b border-black focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none w-full"></textarea>
          <button @click="sendEmail" class=" py-2 px-10 mr-2 mb-2 text-base font-bold focus:outline-none bg-white border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out">Send</button>
        </div>
    </div>
    <div :class="[successBox ? 'message-box__opened':'', 'message-box p-6 sm:px-12 bg-green-800 fixed bottom-0 left-0 max-w-screen-2xl mr-auto w-full z-50']">
      <div class="flex grid grid-cols-6 gap-4 py-0 lg:py-3">
        <aside class="md:col-span-2 col-span-6">
          <h4 @click="closeSuccessBox" class="text-white text-lg md:text-xl font-bold cursor-pointer">Close</h4>
        </aside>
        <div class="md:col-span-3 col-span-6">
          <h5 class="text-white text-lg md:text-xl font-bold">Message Sent!</h5>
          <div class="py-10">
            <p class="text-white text-base md:text-lg ">Thanks for reaching out!</p>
            <p class="text-white text-base md:text-lg ">I'll get back to you as soon as possible! :)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const successBox = ref(false);

definePageMeta({
  layout: 'custom',
})

useHead({
  title: `Contact | Armin Salihović`,
});

const emailData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})


function clearEmailData() {
  emailData.value.name = '';
  emailData.value.email = '';
  emailData.value.subject = '';
  emailData.value.message = '';
}

async function sendEmail() {
  try {
    await $fetch(`http://127.0.0.1:8000/api/send-email`,{
      method: 'post',
      body: emailData.value,
    });

    successBox.value = true;
    clearEmailData();
  } catch (e) {

  }
}

function closeSuccessBox() {
  successBox.value = false;
}
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