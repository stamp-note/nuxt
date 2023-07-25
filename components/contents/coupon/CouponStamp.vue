<template>
    <div>
        <ul class="couponStamp">
            <li>1</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .couponStamp li {
        display: flex;
        width: 120px;
        height: 120px;
        font-size: $txt-l;
        font-weight: 800;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #999;
        border-radius: 100%;
        background-color: #d9d9d9;
        gap: $spacing-xs;

    }
    .couponStamp li.on {
        font-size: 0;
        color: transparent;
        background-color: #FF6060;
    }
</style>