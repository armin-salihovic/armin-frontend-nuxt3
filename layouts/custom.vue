<script setup>
const {panel, closePanel} = usePanel();

const panelBackground1 = ref();
const panelBackground2 = ref();

function handlePanelClick(event) {
  if(event.target === panelBackground1.value || event.target === panelBackground2.value) {
    window.history.back();
    closePanel();
  }
}

function handleClose() {
  window.history.back();
  closePanel();
}

const {links} = useLinks();

const settings = useState('settings');
</script>

<template>
  <div>
    <div class="content w-full block bg-white max-w-screen-2xl mr-auto sm:py-0">
      <header class="flex justify-between w-full sm:mt-auto sm:sticky top-0 sm:py-6 bg-white z-10 p-6 sm:px-12">
        <div class="hidden sm:block sm:w-2/6 sm:leading-none sm:align-baseline sm:text-xl uppercase">
          <NuxtLink to="/">Armin</NuxtLink>
        </div>
        <NuxtLink class="sm:align-baseline sm:order-3 sm:hidden" to="/"><img class="logo" src="/img/logo_4.2.svg" alt="logo"></NuxtLink>
        <div class="text-lg flex flex-col sm:w-4/6 sm:flex-row justify-start sm:text-xl sm:leading-none gap-5">
          <NuxtLink v-for="link in links" :key="link" :to="link.route" activeClass="nav-link-active" class="nav-link">{{ link.name }}</NuxtLink>
        </div>
        <span class="hidden sm:block"></span>
      </header>
      <slot></slot>
      <hr class="my-10 h-px bg-black border-0">
      <div class="grid grid-cols-6 px-6 pb-10 sm:px-12 text-lg sm:text-xl">
        <aside class="md:col-span-2 col-span-6">
          <h3 class="">&copy; Armin Salihović</h3>
        </aside>
        <div class="md:col-span-4 col-span-6 flex flex-row gap-5">
          <NuxtLink :to="settings['social_github']" target="_blank" class="link-underline">GitHub</NuxtLink>
          <NuxtLink :to="settings['social_linkedin']" target="_blank" class="link-underline">LinkedIn</NuxtLink>
          <NuxtLink :to="`mailto:${settings['social_email']}`" target="_blank" class="link-underline">{{ settings['social_email'] }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="panel__container overflow-hidden" @click="handlePanelClick" ref="panelBackground1">
      <div class="panel cursor-pointer absolute top-0 right-0 max-w-screen-3xl z-50 2xl:pl-56 xl:pl-32 lg:pl-0" ref="panelBackground2">
        <header class="flex justify-between py-6 px-6 sm:px-10 fixed top-0 bg-white leading-none text-xl cursor-default z-20">
          <h2 class="">{{ panel.title }}</h2>
          <div class="cursor-pointer fixed top-6 right-6 sm:right-14" @click="handleClose">
              <div class="relative hidden sm:block">Close</div>
              <img class="icon-cross sm:h-2.5 h-3.5 block sm:absolute right-16 top-1/4" src="/img/icon-cross.svg" alt="cross icon"/>
          </div>
        </header>
        <div class="inner-panel bg-white cursor-default" v-html="panel.content">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '~/assets/css/style.css';

@media (max-width: 639px) {
  .icon-cross {
    margin-top: 3px;
  }
}
</style>