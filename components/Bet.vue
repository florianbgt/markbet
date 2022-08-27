<template>
    <div class="text-dark w-full max-w-[1000px] border-md border-dark rounded-lg overflow-hidden">
        <div class="flex items-center justify-between bg-dark px-2">
            <div class="text-light font-lato text-center text-xl font-bold">
                {{ bettor }}
            </div>
            <div v-if="bets.length > 1" class="hidden md:block text-xl font-staatliches text-end text-light">
                <span>
                    {{$t('components.bet.combinedOdds', bets.length).toUpperCase()}}:
                </span>
                {{Math.round(bets.map(bet => bet.odds).reduce((x, a) => x * a, 1)* 100) / 100}}
            </div>
        </div>
        <div v-for="(bet, index) in bets" :key="index" class="bg-light p-1 border-b-sm">
            <div class="flex flex-wrap justify-between" style="letter-spacing: 0.5px">
                <div class="font-staatliches text-xl">
                    {{bet.sport}} -
                    <span class="text-primary">
                        {{bet.competition}}
                    </span>
                </div>
                <div class="text-dark font-roboto text-lg">
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
            <div class="text-lg font-lato font-thin text-center">
                {{bet.category}}:
                <span class="font-bold">
                    {{bet.result}}
                </span>
            </div>
            <div class="flex justify-between">
                <div
                    class="font-staatliches text-xl"
                    :class="`${bet.status === 'won' ? 'text-green' : bet.status === 'lost' ? 'text-red' : 'text-yellow'}`"
                >
                    <template v-if="bet.status">
                        {{$t(`components.bet.status.${bet.status}`)}}
                    </template>
                </div>
                <div class="text-lg font-staatliches">
                    <span class="text-primary">
                        {{$t('components.bet.odds', bets.length).toUpperCase()}}:
                    </span>
                    {{bet.odds}}
                </div>
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
        result: string | number;
        odds: number;
        status?: "won" | "lost" | "canceled";
    }>
}>();
</script>