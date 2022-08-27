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
        bets: [{
                date: new Date("2022-05-19T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.result.total'),
                result: 1,
                odds: 1.25,
                status: "won",
            },
            {
                date: new Date("2022-05-19T21:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.result.total'),
                result: 3,
                odds: 3,
                status: "lost",
            }
        ]
    },
    {
        bettor: "Montanazz",
        bets: [
            {
                date: new Date("2022-05-19T20:00:00Z"),
                sport: t('components.bet.sports.football'),
                competition: "Ligue 1",
                team1: "Paris Saint Germain",
                team2: "Olympique de Lyon",
                category: t('components.bet.result.corner'),
                result: 'psg',
                odds: 2,
                status: "canceled",
            }
        ]
    }
];
</script>