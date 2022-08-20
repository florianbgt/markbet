<template>
    <div class="flex bg-primary justify-center shadow-lg min-h-screen">
        <div
            class="container flex flex-col items-center justify-center m-2 gap-3"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <div class="text-title text-light font-bold">
                {{$t('components.results.pastBet', bets.length)}}
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

<script setup lang="ts">
const bets = [
    {
        date: new Date("2022-05-18"),
        bets: [
            {
                date: new Date("2022-05-18T20:00:00Z"),
                sport: "Football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "2"
            },
            {
                date: new Date("2022-05-18T21:00:00Z"),
                sport: "Football",
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
        date: new Date("2022-05-17"),
        bets: [
            {
                date: new Date("2022-05-17T20:00:00Z"),
                sport: "Football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "2"
            },
            {
                date: new Date("2022-05-17T21:00:00Z"),
                sport: "Football",
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
        date: new Date("2022-05-16"),
        bets: [
            {
                date: new Date("2022-05-16T20:00:00Z"),
                sport: "Football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "2"
            },
            {
                date: new Date("2022-05-16T21:00:00Z"),
                sport: "Football",
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: "Total of goal",
                result: "1",
                odds: "3"
            }
        ]
    }
]
</script>