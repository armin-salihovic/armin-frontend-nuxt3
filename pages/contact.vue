<template>
  <div class="p-6 sm:px-12">
    <Head>
      <Title>{{ settings['contact_meta_title'] }}</Title>
      <Meta name="description" :content="settings['contact_meta_description']" />
      <Meta property="og:title" :content="settings['contact_meta_title']" />
      <Meta property="og:image" :content="settings['contact_og']" />
      <Meta property="og:description" :content="settings['contact_meta_description']" />
    </Head>
    <PageHeader title="Contact" />
      <div class="flex pb-16 grid grid-cols-6 text-base md:text-lg gap-4">
        <aside class="md:col-span-2 col-span-6">
          <h4 class="font-bold">Write me a message!</h4>
        </aside>
        <div class="md:col-span-3 col-span-6">
          <div class="mb-10 w-full flex flex-col sm:flex-row">
            <div class="flex flex-col w-full sm:w-1/2 mb-10 sm:mb-0 sm:pr-5">
              <input v-model="emailData.name" @keyup="validateName" @focus="closeMessageBox" :class="[validations.name.errors ? 'border-red-500' : 'border-black focus:border-green-400', 'py-2 border-b text-gray-600 placeholder-gray-400 outline-none']" id="name" type="text" placeholder="Name*">
              <small v-if="validations.name.errors" class="text-red-500">{{ validations.name.message }}</small>
            </div>
            <div class="flex flex-col w-full sm:w-1/2 sm:pl-5">
              <input v-model="emailData.email" @focus="closeMessageBox" :class="[validations.email.errors ? 'border-red-500' : 'border-black focus:border-green-400', 'py-2 border-b text-gray-600 placeholder-gray-400 outline-none']" id="email" type="email" placeholder="Email*">
              <small v-if="validations.email.errors" class="text-red-500">{{ validations.email.message }}</small>
            </div>
          </div>
          <div class="flex flex-col w-full mb-10">
            <input v-model="emailData.subject" @keyup="validateSubject" @focus="closeMessageBox" :class="[validations.subject.errors ? 'border-red-500' : 'border-black focus:border-green-400 ', 'py-2 border-b text-gray-600 placeholder-gray-400 outline-none']" id="subject" type="text" placeholder="Subject*">
            <small v-if="validations.subject.errors" class="text-red-500">{{ validations.subject.message }}</small>
          </div>
          <div class="flex flex-col w-full mb-5">
            <textarea v-model="emailData.message" @keyup="validateMessage" @focus="closeMessageBox" placeholder="Message" :class="[validations.message.errors ? 'border-red-500' : 'border-black focus:border-green-400', 'h-48 resize-none py-2 border-b text-gray-600 placeholder-gray-400 outline-none']"></textarea>
            <small v-if="validations.message.errors" class="text-red-500">{{ validations.message.message }}</small>
          </div>
          <button @click="sendEmail" class=" py-2 px-10 mr-2 mb-2 text-base font-bold focus:outline-none bg-white border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out">Send</button>
        </div>
    </div>
    <MessageBox :open="messageBox.open" :message="messageBox.message" :type="messageBox.type" @close="closeMessageBox" />
  </div>
</template>

<script setup>
const settings = useState('settings');
const config = useRuntimeConfig();

definePageMeta({
  layout: 'custom',
})

useHead({
  title: `Contact | Armin Salihović`,
});

const messageBox = ref({
  open: false,
  type: '',
  message: {
    title: '',
    content: [],
  }
});

const emailData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

watch(
    () => emailData.value.email,
    () => {
      validateEmail();
    }
)

function clearEmailData() {
  emailData.value.name = '';
  emailData.value.email = '';
  emailData.value.subject = '';
  emailData.value.message = '';
}

const submitted = ref(false);

async function sendEmail() {
  submitted.value = true;

  if(validateForm()) return;

  try {
    await $fetch(`${config.public.apiBase}/send-email`,{
      method: 'post',
      body: emailData.value,
    });

    submitted.value = false;
    openMessageBox('success', 'Message Sent!', ['Thanks for reaching out!', 'I\'ll get back to you as soon as possible! :)']);
    clearEmailData();
  } catch (e) {
    if(e.data === undefined || e.data.errors === undefined) {
      openMessageBox('fail', 'Unexpected Server Error', ['Oops... This is embarrassing... :(', `Please email me directly at <a class="underline" target="_blank" href="mailto:${settings.value['social_email']}">${settings.value['social_email']}</a>`]);
    } else {
      const errors = [];
      for (let err of Object.keys(e.data.errors)) {
        errors.push(e.data.errors[err][0]);
      }
      openMessageBox('fail', 'Error!', errors);
    }
  }
}

function closeMessageBox() {
  messageBox.value.open = false;
}

function openMessageBox(type, title, content) {
  messageBox.value.open = true;
  messageBox.value.type = type;
  messageBox.value.message = {
    title: title,
    content: content,
  }
}

const validations = ref({
  name: {
    errors: false,
    message: null,
  },
  email: {
    errors: false,
    message: null,
  },
  subject: {
    errors: false,
    message: null,
  },
  message: {
    errors: false,
    message: null,
  },
})

function validateForm() {
  validateName();
  validateSubject();
  validateMessage();
  validateEmail();
  return formHasErrors();
}

function validateName() {
  if(!submitted.value) return;

  if(emailData.value.name === '') {
    validations.value.name.errors = true;
    validations.value.name.message = 'Name is required';
  } else {
    validations.value.name.errors = false;
  }
}

function validateSubject() {
  if(!submitted.value) return;

  if(emailData.value.subject === '') {
    validations.value.subject.errors = true;
    validations.value.subject.message = 'Subject is required';
  } else {
    validations.value.subject.errors = false;
  }
}

function validateMessage() {
  if(!submitted.value) return;

  if(emailData.value.message === '') {
    validations.value.message.errors = true;
    validations.value.message.message = 'Message is required';
  } else {
    validations.value.message.errors = false;
  }
}

function validateEmail() {
  if(!submitted.value) return;

  const emailRegex = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';

  if(emailData.value.email === '') {
    validations.value.email.errors = true;
    validations.value.email.message = 'Email is required'
  } else if(!emailData.value.email.match(emailRegex)) {
    validations.value.email.errors = true;
    validations.value.email.message = 'Value is not a valid email address'
  } else {
    validations.value.email.errors = false;
  }
}

const formHasErrors = () => validations.value.name.errors || validations.value.subject.errors || validations.value.message.errors || validations.value.email.errors;
</script>

