<template>
    <div class="flex bg-light justify-center shadow-lg min-h-screen">
        <div
            class="container flex flex-col items-center justify-center m-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p v-html="$t('components.about.whatWeDo.whatWeDo')" class="text-dark text-center text-title font-bold break-words"/>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>