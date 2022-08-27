<template>
    <div class="text-dark w-full max-w-[1000px] border-md border-dark rounded-lg overflow-hidden">
        <div class="flex items-center justify-between bg-dark px-2">
            <div class="text-light font-roboto text-center text-xl font-bold">
                {{ bettor }}
            </div>
            <div class="text-light font-lato text-center text-xl font-bold">
                {{ bettor }}
            </div>
            <div class="text-light font-staatliches text-center text-xl font-bold">
                {{ bettor }}
            </div>
            <div v-if="bets.length > 1" class="hidden md:block text-lg text-end text-light">
                <span class="font-bold">
                    {{$t('components.bet.combinedOdds', bets.length).toUpperCase()}}:
                </span>
                {{bets.map(bet => bet.odds).reduce((x, a) => x * a, 1)}}
            </div>
        </div>
        <div v-for="(bet, index) in bets" :key="index" class="bg-light p-1 border-b-sm">
            <div class="flex flex-wrap justify-between text-lg font-bold">
                <div>
                    {{bet.sport}} -
                    <span class="text-primary">
                        {{bet.competition}}
                    </span>

                </div>
                <div class="text-dark">
                    {{bet.date.toLocaleString([], {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    })}}
                </div>
            </div>
            <div class="text-xl font-bold text-center">
                {{bet.team1}}
                <span class="font-normal text-lg">
                    {{$t('components.bet.vs')}}
                </span>
                {{bet.team2}}
            </div>
            <div class="text-lg text-center">
                {{bet.category}}: {{bet.result}}
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
    bettor: string;
    bets: Array<{
        date: Date;
        sport: string;
        competition: string;
        team1: string;
        team2: string;
        category: string;
        result: string;
        odds: string;
    }>
}>();
</script>