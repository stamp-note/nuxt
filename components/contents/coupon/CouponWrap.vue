<template>
    <div>
        <div class="couponWrap">
            <ContentsCouponCustomer />
            <ContentsCouponStamp />
            <ContentsCouponDesc />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .couponWrap {
        width: 600;
        height: 450px;
        border-radius: 16px;
        background-color: #fff;
        box-shadow: $box-shadow;
        padding: $spacing-m;
    }
</style>