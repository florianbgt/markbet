<template>
    <div class="bg-dark flex flex-row justify-between md:justify-start items-center p-2">
        <Link :to="localePath('index')" variant="light" size="lg" class="hidden md:block mr-3">
            <img src="/logo-dark.svg" width="60" alt="logo" />
        </Link>
        <Link :to="localePath('index')" variant="light" size="lg" class="mx-1 grow md:grow-0">
            <div class="flex flex-nowrap items-center gap-1">
                <font-awesome-icon :icon="['fas', 'home']" />
                <span class="hidden md:inline">
                    {{ $t('components.header.home') }}
                </span>
            </div>
        </Link>
        <Link :to="localePath('results')" variant="light" size="lg" class="mx-1 grow md:grow-0">
            <div class="flex flex-nowrap items-center gap-1">
                <font-awesome-icon :icon="['fas', 'list']" />
                <span class="hidden md:inline">
                    {{ $t('components.header.results') }}
                </span>
            </div>
            
        </Link>
        <Link :to="localePath('about')" variant="light" size="lg" class="mx-1 grow md:grow-0">
            <div class="flex flex-nowrap items-center gap-1">
                <font-awesome-icon :icon="['fas', 'circle-info']" />
                <span class="hidden md:inline">
                    {{ $t('components.header.about') }}
                </span>
            </div>
        </Link>
        <Link :to="localePath('contact')" variant="light" size="lg" class="mx-1 grow md:grow-0">
            <div class="flex flex-nowrap items-center gap-1">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span class="hidden md:inline">
                    {{ $t('components.header.contact') }}
                </span>
            </div>
        </Link>
        <div class="flex grow justify-end">
            <Language />
        </div>
    </div>  
</template>

<script setup lang="ts">
</script>