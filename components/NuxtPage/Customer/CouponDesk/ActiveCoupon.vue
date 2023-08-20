<script setup lang="ts">
import {useCouponDeskStore} from "./store";

const couponDeskStore = useCouponDeskStore();

const coupon = computed(() => couponDeskStore.coupon);
const name = computed(() => couponDeskStore.userName);

</script>
<template>
  <div
  >
    <DefaultCoupon
        :coupon="coupon"
        :name="name"
    />
  </div>
</template>
<style>
</style>
