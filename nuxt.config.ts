import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: true},
    app: {
        cdnURL: 'https://stamp-note.github.io/nuxt/',
        buildAssetsDir: './',
    },
    dir:{
        public: 'public',

    },

    modules: [
        'nuxt-typed-router',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxthq/ui',
        'nuxt-lodash',
        'nuxt-icon'
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
    },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"],
        alias: [
            ["camelCase", "stringToCamelCase"], // => stringToCamelCase
            ["kebabCase", "stringToKebab"], // => stringToKebab
            ["isDate", "isLodashDate"], // => _isLodashDate
        ],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: `@import '~/style/index.scss';`
                }
            }
        }
    }

})

