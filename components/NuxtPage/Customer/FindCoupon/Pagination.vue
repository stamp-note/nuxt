<script setup lang="ts">
import {useUserCouponStore} from "~/stores/user-coupon";

const userCouponStore = useUserCouponStore();

userCouponStore.loadUserList();

const page = computed({
  get: () => userCouponStore.page,
  set: (value) => userCouponStore.setPage(value),
})

const perPage = computed(() => userCouponStore.perPage);


const total = computed(() => userCouponStore.total)
</script>
<template>
  <u-pagination
      v-model="page"
      :page-count="perPage"
      :total="total"
  />
</template>