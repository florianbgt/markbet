import { defineNuxtConfig } from 'nuxt'
import availableLocales from './locales/availableLocales'

let routes = []

availableLocales.forEach(locale => {
    routes.push(`/${locale}/`)
    routes.push(`/${locale}/results/`)
    routes.push(`/${locale}/about/`)
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    nitro: {
        prerender: {
            routes
        }
    },
    generate: {
        routes: [
            '/',
            '/about',
        ]
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@intlify/nuxt3',
        './modules/generate-locale-routes'
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
