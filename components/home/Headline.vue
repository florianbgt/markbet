<template>
    <Screen class="bg-dark500 text-light">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="flex flex-col items-center justify-center">
                <p class="text-light text-left text-title font-lato break-words">
                    {{ $t('components.home.headline.title') }}
                </p>
                <p class="text-light text-center text-xl font-lato break-words">
                    {{ $t('components.home.headline.from') }}
                </p>
            </div>
            <div class="grid grid-cols-2 gap-1">
                <nuxt-img src="/foot.jpg" height="200" width="300" alt="football" />
                <nuxt-img src="/basket.jpg" height="200" width="300" alt="basketball" />
                <nuxt-img src="/tennis.jpg" height="200" width="300" alt="tennis" />
                <nuxt-img src="/nfl.jpg" height="200" width="300" alt="american football" />
            </div>
        </div>
    </Screen> 
</template>

<script setup lang="ts">
</script>