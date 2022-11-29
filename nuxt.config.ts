// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },

    css: [
        '@/assets/css/main.css',
    ],

    app: {
        head: {
            meta: [
                { name: 'author', content: 'Armin Salihović' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://www.armin.ba' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
            ]
        }
    },


})
