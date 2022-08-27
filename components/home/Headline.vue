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
                <img src="/foot.png" width="300" alt="logo" />
                <img src="/basket.png" width="300" alt="logo" />
                <img src="/tennis.png" width="300" alt="logo" />
                <img src="/nfl.png" width="300" alt="logo" />
            </div>
        </div>
    </Screen> 
</template>

<script setup lang="ts">
</script>