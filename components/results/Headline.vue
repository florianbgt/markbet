<template>
    <div class="flex bg-dark500 justify-center shadow-lg min-h-screen">
        <div
            class="container flex flex-col items-center justify-center m-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div class="flex flex-col items-center justify-center">
                    <p class="text-light text-left text-title font-bold break-words">
                        {{ $t('components.results.headline.title') }}
                    </p>
                    <p class="text-light text-center text-xl font-bold break-words">
                        {{ $t('components.results.headline.from') }}
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <img src="/foot.png" width="300" alt="logo" />
                    <img src="/basket.png" width="300" alt="logo" />
                    <img src="/tennis.png" width="300" alt="logo" />
                    <img src="/nfl.png" width="300" alt="logo" />
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
</script>