<script setup lang="ts">

import {useUserCouponStore} from "~/stores/user-coupon";

const userCouponStore = useUserCouponStore();

const search = computed({
  get: () => userCouponStore.search,
  set: (value) => userCouponStore.setSearch(value),
})
</script>
<template>
  <u-input
      v-model="search"
      placeholder="Search"
  >
    <template #leading>
      <icon
          name="ic:round-search"
          size="20"
      />
    </template>
  </u-input>
</template>