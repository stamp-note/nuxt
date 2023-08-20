<script setup lang="ts">
import {useUserCouponStore} from "~/stores/user-coupon";

const userCouponStore = useUserCouponStore();

onMounted(() => {
  userCouponStore.reset();
  userCouponStore.loadUserList();
})

</script>
<template>
  <ModalLayoutDefault
      title="내 쿠폰 찾기"
      hide-footer
  >
    <div class="m-4 flex flex-col gap-3">
      <div class="flex">
        <NuxtPageCustomerFindCouponModalSearchInput
        />
      </div>
      <NuxtPageCustomerFindCouponModalTable
      />
      <div class="flex justify-center">
        <NuxtPageCustomerFindCouponModalPagination
        />
      </div>

    </div>
  </ModalLayoutDefault>
</template>