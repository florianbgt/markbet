<template>
    <Screen class="text-light" useDynamicBackground>
        <div class="flex flex-col w-full gap-2">
            <div class="text-title text-center text-light font-bold">
                {{$t('components.results.pastBet', bets.length)}}
            </div>
            <Bet
                v-for="(bet, index) in bets"
                :key="index"
                :date="bet.date"
                :bets="bet.bets"
            /> 
        </div>      
    </Screen>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' })

const bets = [
    {
        date: new Date("2022-05-18"),
        bets: [
            {
                date: new Date("2022-05-18T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "2"
            },
            {
                date: new Date("2022-05-18T21:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "3"
            }
        ]
    },
    {
        date: new Date("2022-05-17"),
        bets: [
            {
                date: new Date("2022-05-17T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "2"
            },
            {
                date: new Date("2022-05-17T21:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "3"
            }
        ]
    },
    {
        date: new Date("2022-05-16"),
        bets: [
            {
                date: new Date("2022-05-16T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "2"
            },
            {
                date: new Date("2022-05-16T21:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "3"
            }
        ]
    }
]
</script>