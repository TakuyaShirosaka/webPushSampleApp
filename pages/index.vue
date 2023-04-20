<template>
    <div class="wrap">
        <h1 class="content">Welcome to the Underground。</h1>
        <p class="content">WebPush体験</p>
    </div>
</template>

<script lang="ts">
export default {
    name: "index"
}
</script>

<script setup lang="ts">
onMounted(() => {
    const globalProperties = useNuxtApp().vueApp.config.globalProperties;
    console.dir(globalProperties.$OneSignal);
    globalProperties.$OneSignal.on("subscriptionChange", function (isSubscribed) {
        console.log("The user's subscription state is now:", isSubscribed);
        alert("The user's subscription state is now:" + isSubscribed);
    });
})
</script>


<style scoped>
.wrap {
    display: flex;
    flex-flow: column;
}

.content {
    padding: 1em;
    margin: 0.5em auto;
}
</style>