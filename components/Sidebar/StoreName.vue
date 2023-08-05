<script setup>
const storeName = ref("Macko's Cafe에 오신것을 환영합니다.")
</script>

<template>
    <div>
        <h1 id="storeName">{{ storeName }}</h1>
    </div>
</template>

<style lang="scss" >
    #storeName {
        font-size: $txt-l;
        font-weight: 800;
        margin-bottom: $spacing-xl;
    }
</style>