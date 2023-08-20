<script setup lang="ts">
import {useUserCouponStore} from "~/stores/user-coupon";
import {useCustomerCouponStore} from "~/components/NuxtPage/Customer/Coupon/store";

const userCouponStore = useUserCouponStore();
const customerCouponStore = useCustomerCouponStore();

const coupon = computed({
  get: () => userCouponStore.coupon,
  set: (value) => userCouponStore.setCoupon(value),
})
</script>
<template>
  <Coupon :coupon="coupon" />
</template>