import OneSignalVuePlugin from '@onesignal/onesignal-vue3';

export default defineNuxtPlugin({
    hooks: {
        // You can directly register Nuxt app hooks here
        'app:mounted'() {
            const nuxtApp = useNuxtApp()
            nuxtApp.vueApp.use(OneSignalVuePlugin, {
                appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            })
        }
    }
})
