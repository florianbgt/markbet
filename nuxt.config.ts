import { defineNuxtConfig } from 'nuxt'
import availableLocales from './locales/availableLocales'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    generate: {
        routes: [
            '/',
            '/about',
        ]
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@intlify/nuxt3',
        './modules/generateLocaleRoutes'
    ],
    localRoutesGenerator: {
        availableLocales
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
    },
    intlify: {
        vueI18n: {
            locale: availableLocales[0],
            fallbackLocale: availableLocales[0],
            availableLocales,
            sync: true
        }
    },
    css: [
        '~/assets/main.scss',
        '~/node_modules/flag-icons/css/flag-icons.min.css',
        '~/node_modules/aos/dist/aos.css',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/_colors.scss"',
                },
            },
        },
    },
})
