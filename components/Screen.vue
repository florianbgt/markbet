<template>
    <div
        class="flex justify-center items-center w-full p-2"
        :class="fullScreen ? 'min-h-screen' : ''"
        :id="useDynamicBackground ? 'dynamic' : ''"
    >
        <div
            :data-aos="`fade-${['up', 'down', 'left', 'right'][Math.floor(Math.random()*4)]}`"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="flex flex-col justify-center items-center w-full"
        >
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

defineProps<{
    useDynamicBackground?: boolean;
    fullScreen?: boolean;
}>();

const angle: Ref<number> = ref(0)
onMounted(() => {
    angle.value += 1
})

watch(angle, (newValue, oldValue) => {
    const interval = 10
    const step = 0.1
    const min = 0
    const max = 360
    if((oldValue < newValue || newValue === 0) && newValue < max) {
        setTimeout(() => {
            angle.value += step
        }, interval)
    } else if(newValue >= max) {
        setTimeout(() => {
            angle.value = min
        }, interval)
    }
})

const cssAngle = computed(() => {
    return `${angle.value}deg`
})
</script>

<style scoped lang="scss">
@use '@/assets/colors.scss';

#dynamic {
    background: linear-gradient(
        v-bind(cssAngle), 
        colors.$primary,
        colors.$secondary,
        colors.$tertiary,
        colors.$quaternary,
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>