<template>
  <div>
    <div class="bg-black-500 flex justify-center shaddow-lg">
      <div class="container">
        <Header/>
        <NuxtPage />
      </div> 
    </div>
    <Footer/>
  </div>
</template>


<script setup lang="ts">
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})

useHead({
  title: 'Live your bet',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'description', content: 'Browse and buy bets from the best bettors in town' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
})
</script>