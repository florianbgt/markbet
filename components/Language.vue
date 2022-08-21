<template>
    <div class="relative">
        <button @click="isOpen = !isOpen" class="bg-light hover:opacity-strong text-lg p-1 rounded-lg">
            <span :class="`fi fi-${languages[$i18n.locale]}`" />
        </button>
        <transition name="slidedown">
            <div
                v-if="isOpen"
                class="origin-top-right absolute top-10 left-0 mt-2 rounded-md shadow-lg bg-light"
            >
                <NuxtLink
                    v-for="(language, key) in languages"
                    :key="key"
                    :to="switchLocalePath(key)"
                    @click="isOpen = false"
                    type="button"
                    class="hover:opacity-strong text-lg w-full px-1"
                >
                    <span :class="`fi fi-${language}`" />
                </NuxtLink> 
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const languages = {
    en: 'gb',
    fr: 'fr',
    es: 'es',
    de: 'de',
}

const isOpen = ref(false)
</script>

<style scoped>
.slidedown-enter-active {
  transition: max-height 0.5s ease-in;
}
.slidedown-leave-active {
  transition: max-height 0.2s ease-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-min-height: 100vh;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>