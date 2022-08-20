<template>
    <div id="main" class="flex justify-center shadow-lg min-h-screen">
        <div
            class="container flex flex-col items-center justify-center m-2 gap-3"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <div class="text-title text-light font-bold">
                {{$t('components.home.todayBet', bets.length)}}
            </div>
            <Bet
                v-for="(bet, index) in bets"
                :key="index"
                :date="bet.date"
                :bets="bet.bets"
            />            
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/colors.scss';

#main {
    background: linear-gradient(
        v-bind(cssAngle), 
        colors.$primary,
        colors.$secondary,
        colors.$tertiary,
        colors.$quaternary,
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>

<script setup lang="ts">
import { Ref } from 'vue';

const angle: Ref<number> = ref(0)
onMounted(() => {
    angle.value += 1
})

watch(angle, (newValue, oldValue) => {
    const interval = 10
    const step = 0.1
    const min = 0
    const max = 360
    if((oldValue < newValue || newValue === 0) && newValue < max) {
        setTimeout(() => {
            angle.value += step
        }, interval)
    } else if(newValue >= max) {
        setTimeout(() => {
            angle.value = min
        }, interval)
    }
})

const cssAngle = computed(() => {
    return `${angle.value}deg`
})

const bets = [
    {
        date: new Date("2022-05-19"),
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                sport: "football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "2"
            },
            {
                date: new Date("2022-05-19T21:00:00Z"),
                sport: "football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "3"
            }
        ]
    },
    {
        date: new Date("2022-05-19"),
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                sport: "football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "2"
            }
        ]
    }
];
</script>