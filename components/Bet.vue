<template>
    <div class="text-dark w-full border-md border-dark rounded-lg overflow-hidden">
        <div class="bg-dark">
            <div class="text-light text-center text-xl font-bold">
                {{ date.toLocaleString([], {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }) }}
            </div>
        </div>
        <div v-for="(bet, index) in bets" :key="index" class="bg-light p-1 border-b-sm">
            <div class="text-lg font-bold">
                <div class="text-dark">
                    {{bet.date.toLocaleString([], {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    })}}
                </div>
                {{bet.sport}} -
                <span class="text-primary">
                    {{bet.competition}}
                </span>
            </div>
            <div class="text-xl font-bold text-center">
                {{bet.team1}}
                <span class="font-normal text-lg">
                    {{$t('components.bet.vs')}}
                </span>
                {{bet.team2}}
            </div>
            <div class="text-lg text-center">
                {{bet.result}}
            </div>
            <div class="text-lg text-end">
                <span class="text-primary font-bold">
                    {{$t('components.bet.odds', bets.length).toUpperCase()}}:
                </span>
                {{bet.odds}}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    date: Date;
    bets: Array<{
        date: Date;
        sport: string;
        competition: string;
        team1: string;
        team2: string;
        result: string;
        odds: string;
    }>
}>();
</script>