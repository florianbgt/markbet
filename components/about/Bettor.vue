<template>
    <Screen class="bg-tertiary text-light">
        <p class="text-center text-title font-bold break-words">
            {{ $t('components.about.bettor.experienceBettor') }}
        </p>
        <p class="text-primary text-center text-xl font-bold break-words">
            {{ $t('components.about.bettor.helpCommunity') }}
        </p>
        <div class="flex justify-center mx-2 mt-2">
            <ul class="list-disc">
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.1') }}
                </li>
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.2') }}
                </li>
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.3') }}
                </li>
                <li class="text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.4') }}
                </li>
            </ul>
        </div>
    </Screen>
</template>

<script setup lang="ts">
</script>