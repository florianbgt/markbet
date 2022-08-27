<template>
    <Screen class="text-light" fullScreen useDynamicBackground>
        <div class="flex flex-col items-center w-full gap-2">
            <div class="text-title">
                {{$t('components.results.pastBet', bets.length)}}
            </div>
            <Bet
                v-for="(bet, index) in bets"
                :key="index"
                :bettor="bet.bettor"
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
        bettor: "Best Bite",
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                country: 'fr',
                sportIcon: 'futbol',
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.category.total'),
                result: 1,
                odds: 1.25,
            },
            {
                date: new Date("2022-05-19T20:00:00Z"),
                country: 'es',
                sportIcon: 'futbol',
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.category.total'),
                result: 1,
                odds: 1.25,
            },
            {
                date: new Date("2022-05-19T21:00:00Z"),
                country: 'un',
                sportIcon: 'basketball',
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.category.total'),
                result: 3,
                odds: 3,
            }
        ]
    },
    {
        bettor: "Montanazz",
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                country: 'eu',
                sportIcon: 'football',
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.category.corner'),
                result: 'psg',
                odds: 2,
            }
        ]
    }
];
</script>