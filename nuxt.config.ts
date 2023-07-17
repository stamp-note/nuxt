import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: true},
    app: {
        cdnURL: 'https://stamp-note.github.io/nuxt/',
    },

    modules: [
        'nuxt-typed-router',
        '@pinia/nuxt',
        '@invictus.codes/nuxt-vuetify',
    ],
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },

        moduleOptions: {
            /* nuxt-vuetify module options */
            treeshaking: true,
            useIconCDN: true,

            /* vite-plugin-vuetify options */
            styles: true,
            autoImport: true,
            useVuetifyLabs: true,
        }
    }
})
