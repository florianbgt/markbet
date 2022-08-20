<template>
    <div class="flex bg-primary justify-center shadow-lg min-h-screen">
        <div
            class="container flex flex-col items-center justify-center m-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p class="text-light text-center text-title font-bold break-words">
                {{ $t('components.about.user.wantToBet') }}
            </p>
            <p class="text-tertiary text-center text-xl font-bold break-words">
                {{ $t('components.about.user.hereToHelp') }}
            </p>
            <div class="flex justify-center mx-2 mt-2">
                <ul class="list-disc">
                    <li class="text-light text-lg font-bold break-words">
                        {{ $t('components.about.user.list.1') }}
                    </li>
                    <li class="text-light text-lg font-bold break-words">
                        {{ $t('components.about.user.list.2') }}
                    </li>
                    <li class="text-light text-lg font-bold break-words">
                        {{ $t('components.about.user.list.3') }}
                    </li>
                </ul>
            </div>
            
            
        </div>
    </div>
</template>

<script setup lang="ts">
</script>