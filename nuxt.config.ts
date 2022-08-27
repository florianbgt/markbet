import { defineNuxtConfig } from 'nuxt'

const pages = [
    '/',
    '/results/',
    '/about/'
]
const locales = ['en', 'fr', 'es', 'de']
let routes = []
locales.forEach(locale => {
    pages.forEach(page => {
        routes.push(`/${locale}${page}`)
    })
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    generate: {
        routes: routes
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
    },
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json',
            },
            {
                code: 'fr',
                file: 'fr.json',
            },
            {
                code: 'es',
                file: 'es.json',
            },
            {
                code: 'de',
                file: 'de.json',
            },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        strategy: 'prefix',
    },
    css: [
        '~/assets/main.scss',
        '~/node_modules/flag-icons/css/flag-icons.min.css',
        '~/node_modules/aos/dist/aos.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
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
