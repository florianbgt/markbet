<template>
    <div class="flex bg-black justify-center shadow-lg">
        <div class="container flex flex-col items-center justify-around mx-2 py-3 gap-1">
            <Link external to="mailto:contact@liveyourbet.com" variant="light" size="lg">
                contact@liveyourbet.com
            </Link>
            <div class="flex gap-3">
                <Link external to="https://instagram.com" variant="light" size="xl">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </Link>
                <Link external to="https://facebook.com" variant="light" size="xl">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </Link>
                <Link external to="https://telegram.com" variant="light" size="xl">
                    <font-awesome-icon :icon="['fab', 'telegram']" />
                </Link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>