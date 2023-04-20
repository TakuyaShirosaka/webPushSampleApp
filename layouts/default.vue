<template>
    <div>
        <slot/>
    </div>
</template>

<script lang="ts">
export default {
    name: "default"
}
</script>

<script setup lang="ts">
useHead({
    link: [],
    style: [{children: 'html,body { margin: 0; width: 100%; height: 100%; overflow: hidden; background-color: #EEEEEE;}'}],
})
</script>

<style scoped>

</style>