<template>
    <div class="relative">
        <button @click="isOpen = !isOpen" class="bg-light hover:opacity-strong text-lg py-1 pl-2 pr-1 rounded-full">
            <span :class="`fi fi-${languages[$i18n.locale]}`" />
            <span class="text-dark font-bold">{{ isOpen ? '&#9650;' : '&#9660;' }}</span>
        </button>
        <transition name="slidedown">
            <div
                v-if="isOpen"
                class="origin-top-right absolute top-10 left-0 right-0 mt-2 rounded-md shadow-lg bg-light"
            >
                <div class="py-1" role="none">
                    <button
                        v-for="(language, key) in languages"
                        :key="key"
                        @click="setLanguage(key)"
                        type="button"
                        class="hover:opacity-strong text-lg w-full py-1 rounded-full"
                    >
                        <span :class="`fi fi-${language}`" />
                    </button>
                </div>
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

const setLanguage = (value: 'en' | 'fr' | 'es' | 'de') => {
    const name: string = useRoute().name as string
    const currentLocale = name.split('-')[0]
    useRouter().push({name: name.replace(currentLocale, value)})
    isOpen.value = false
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