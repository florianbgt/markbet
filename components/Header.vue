<template>
    <div id="main" class="w-full bg-black-500 flex justify-center shadow-lg">
        <div class="container bg-dark flex flex-row justify-between md:justify-start items-center p-2">
            <Link :to="localePath('index')" variant="light" size="lg" class="hidden md:block mr-3">
                <img src="/logo-dark.svg" width="60" alt="logo" />
            </Link>
            <Link :to="localePath('index')" variant="light" size="lg" class="mx-1 grow md:grow-0">
                <div class="flex flex-nowrap items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <span class="hidden md:inline">
                        {{ $t('components.header.home') }}
                    </span>
                </div>
            </Link>
            <Link :to="localePath('results')" variant="light" size="lg" class="mx-1 grow md:grow-0">
                <div class="flex flex-nowrap items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'list']" />
                    <span class="hidden md:inline">
                        {{ $t('components.header.results') }}
                    </span>
                </div>
                
            </Link>
            <Link :to="localePath('about')" variant="light" size="lg" class="mx-1 grow md:grow-0">
                <div class="flex flex-nowrap items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'circle-info']" />
                    <span class="hidden md:inline">
                        {{ $t('components.header.about') }}
                    </span>
                </div>
            </Link>
            <Link :to="localePath('contact')" variant="light" size="lg" class="mx-1 grow md:grow-0">
                <div class="flex flex-nowrap items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <span class="hidden md:inline">
                        {{ $t('components.header.contact') }}
                    </span>
                </div>
            </Link>
            <div class="flex grow justify-end">
                <Language />
            </div>
        </div>  
    </div>
    <transition name="slidedown">
        <div v-if="!isVisible" class="hidden lg:flex fixed top-0 left-0 right-0 flex justify-center z-50">
            <div class="container flex items-center mx-1 mt-2">
                <Link @click="scrollTop()" :to="localePath('index')" variant="light" size="lg" class="mx-1">
                    {{ $t('components.header.home') }}
                </Link>
                <Link @click="scrollTop()" :to="localePath('results')" variant="light" size="lg" class="mx-1">
                    {{ $t('components.header.results') }}
                </Link>
                <Link @click="scrollTop()" :to="localePath('about')" variant="light" size="lg" class="mx-1">
                    {{ $t('components.header.about') }}
                </Link>
            </div>
        </div>  
    </transition>
</template>

<script setup lang="ts">
onMounted(() => {
    window.addEventListener("scroll", onScroll)
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll)
})

let isVisible = ref(true)

const onScroll = () => {
    isVisible.value = window.scrollY < 100
}

const scrollTop = () => {
    document.getElementById('__nuxt').scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
#main {
    height: 70px
}

.slidedown-enter-active {
  transition: max-height 1s ease-in;
}
.slidedown-leave-active {
  transition: max-height 0s;
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