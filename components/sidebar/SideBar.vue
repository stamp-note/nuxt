<template>
    <div class="sideBarWrap">
        <SidebarStoreName />
        <SidebarStoreInfo />
        <SidebarStoreHours />
    </div>
</template>

<style lang="scss" scoped>
    .sideBarWrap {
        width: 30%;
        height: 100vh;
        border-right: 1px solid #000;
        padding: $spacing-s;
    }
</style>