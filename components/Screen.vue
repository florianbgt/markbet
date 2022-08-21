<template>
    <div
        :id="useDynamicBackground ? 'dynamic' : ''"
        class="flex justify-center shadow-lg min-h-screen"
    >
        <div
            class="container flex flex-col items-center justify-center m-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

defineProps<{
    useDynamicBackground?: boolean;
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