<style scoped>
@import '~/assets/css/style.css';
</style>

<template>
  <div class="w-full block bg-white h-screen max-w-screen-2xl mr-auto p-6 md:p-10 xl:p-20">
    <div class="flex justify-between pb-10 lg:pb-28 flex-col-reverse sm:flex-row items-start gap-16">
      <h1 class="text-5xl lg:text-6xl lg:tracking-widest flex flex-col lg:flex-row whitespace-pre fw-500"><span>Armin </span><span>Salihović</span></h1>
      <div class="flex justify-between w-full sm:mt-auto">
        <a class="sm:ml-auto sm:align-baseline" href="/"><img class="logo" src="/img/logo_3.2.1.svg" alt="logo"></a>
        <div class="sm:hidden text-lg flex flex-col justify-start leading-none gap-5 ">
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="#">About</NuxtLink>
          <NuxtLink to="#">Music</NuxtLink>
          <NuxtLink to="#">Contact</NuxtLink>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex text-xl flex-col gap-4 lg:text-2xl border-b border-black pb-6 items-start mb-14 lg:mb-28 nav">
      <NuxtLink to="/projects"><span class="bg-black"></span><span class="link-space"></span>Projects</NuxtLink>
      <NuxtLink to="#"><span class="bg-black"></span><span class="link-space"></span>About</NuxtLink>
      <NuxtLink to="#"><span class="bg-black"></span><span class="link-space"></span>Music</NuxtLink>
      <div class="flex justify-between w-full">
        <NuxtLink to="#"><span class="bg-black"></span><span class="link-space"></span>Contact</NuxtLink>
        <div class="flex gap-10">
          <NuxtLink to="#">Github</NuxtLink>
          <NuxtLink to="#">Linkedin</NuxtLink>
          <NuxtLink to="#">hello@armin.ba</NuxtLink>
        </div>
      </div>
    </div>
    <div class="text-lg sm:text-2xl lg:text-4xl pt-5 sm:pt-0 pb-10 mb-10 sm:mb-0 md:pb-14 lg:pb-28 leading-light sm:leading-snug border-b border-black sm:border-none">Hello, I'm a computer scientist, an electronics enthusiast, and a musician.</div>
    <div class="sm:hidden text-lg flex flex-col justify-start leading-none gap-5 pb-10 mr-10">
      <NuxtLink to="#">github</NuxtLink>
      <NuxtLink to="#">linkedin</NuxtLink>
      <NuxtLink to="#">hello@armin.ba</NuxtLink>
    </div>
    <div class="border-b border-black w-24 lg:w-1/12"></div>
  </div>
</template>
