<template>
    <div>
        <HomeHeadline v-if="width > 640"/>
        <HomeToday/>
    </div>
</template>

<script setup lang="ts">
const width = ref(null)
onMounted(() => {
    width.value = window.innerWidth
})
</script>