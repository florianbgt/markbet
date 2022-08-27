<template>
    <a v-if="external" :href="to" target="_blank" :class="classes">
        <slot/>
    </a>
    <NuxtLink v-else :to="to" :class="classes">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
    import {useRoute} from 'vue-router'
    const props = defineProps<{
        to?: string,
        external?: true,
        size: 'sm' | 'md' | 'lg' | 'xl',
        variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'light' | 'dark',
    }>()

    const classes = computed(() => {
        let textSize: string
        switch(props.size) {
            case 'sm':
                textSize = 'text-sm'
                break
            case 'md':
                textSize = 'text-md'
                break
            case 'lg':
                textSize = 'text-lg'
                break
            case 'xl':
                textSize = 'text-xl'
                break
        }
        let textColor: string
        switch(props.variant) {
            case 'primary':
                textColor = 'text-primary'
                break
            case 'secondary':
                textColor = 'text-secondary'
                break
            case 'tertiary':
                textColor = 'text-tertiary'
                break
            case 'quaternary':
                textColor = 'text-quaternary'
                break
            case 'light':
                textColor = 'text-light'
                break
            case 'dark':
                textColor = 'text-dark'
                break
        }
        if (!props.external && useRoute().path === props.to) return `${textSize} ${textColor} font-bold underline`
        return `${textSize} ${textColor} font-bold hover:underline`
    })
</script>
