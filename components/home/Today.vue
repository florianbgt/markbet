<template>
    <Screen class="text-light" useDynamicBackground>
        <div class="flex flex-col w-full gap-2">
            <div class="text-title text-center font-bold">
                {{$t('components.home.todayBet', bets.length)}}
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
        date: new Date("2022-05-19"),
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 1}),
                odds: "1.25"
            },
            {
                date: new Date("2022-05-19T21:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.total', {count: 3}),
                odds: "3"
            }
        ]
    },
    {
        date: new Date("2022-05-19"),
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                result: t('components.bet.result.corner', { name: 'Lyon'}),
                odds: "2"
            }
        ]
    }
];
</script>