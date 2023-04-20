import {defineNuxtConfig} from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config

const environment = process.env.ENV || 'development'
const envSet = require(`./env/env.${environment}.js`)

export default defineNuxtConfig({
    runtimeConfig: {
        public: envSet,
        nodeEnv: process.env.NODE_ENV
    },
    app: {
        head: {
            meta: [],
            link: [
                {rel: "manifest", href: "/manifest.json"},
                {rel: 'icon', type: 'image/x-icon', href: '/image.jpg'}
            ],
            script: [],
        },
    }
});