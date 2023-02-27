// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    },
    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        }
    ],
    css: [
        'vuetify/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css',
        'assets/css/table.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        define: {
            "process.env.DEBUG": false
        }
    }
})
