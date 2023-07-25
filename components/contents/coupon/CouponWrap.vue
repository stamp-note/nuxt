<template>
    <div>
        <div class="couponWrap">
            <CouponCustomer />
            <CouponStamp />
            <CouponDesc />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .couponWrap {
        width: 800;
        height: 450px;
        border-radius: 16px;
        background-color: #fff;
        box-shadow: $box-shadow;
        padding: $spacing-m;
    }
</style>