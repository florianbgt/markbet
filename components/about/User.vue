<template>
    <Screen class="bg-primary text-light">
        <p class="text-center text-title font-bold break-words">
            {{ $t('components.about.user.wantToBet') }}
        </p>
        <p class="text-tertiary text-center text-xl font-bold break-words">
            {{ $t('components.about.user.hereToHelp') }}
        </p>
        <div class="flex justify-center mx-2 mt-2">
            <ul class="list-disc">
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.user.list.1') }}
                </li>
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.user.list.2') }}
                </li>
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.user.list.3') }}
                </li>
            </ul>
        </div>
    </Screen>
</template>

<script setup lang="ts">
</script>