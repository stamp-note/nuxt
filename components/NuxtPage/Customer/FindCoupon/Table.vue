<script setup lang="ts">
import {useCustomerStore} from "~/components/NuxtPage/Customer/store";
import {useUserCouponStore} from "~/stores/user-coupon";

const customerStore = useCustomerStore();
const userCouponStore = useUserCouponStore();
const nuxtApp = useNuxtApp();

const page = computed({
  get: () => userCouponStore.page,
  set: (value) => userCouponStore.setPage(value),
})
const pageCount = computed(() => userCouponStore.perPage);

const rows = computed(() => {
  return userCouponStore.searchUserList.slice((page.value - 1) * pageCount.value, page.value * pageCount.value);
})

const columns = ref([
  {key: 'couponList', label: 'Coupon'},
  {key: 'name', label: 'Name'},
])

const onSelect = (selectedRow) => {

  customerStore.setViewMode('coupon');
  nuxtApp.$hideModal();
}
</script>
<template>
  <u-card
      :ui="{
        body:{
          padding: 'p-0',
        },
      }"
  >
    <u-table
        :rows="rows"
        :columns="columns"
        :ui="{
          thead: 'sticky top-0 z-10',
        }"
        @select="onSelect"
    >
      <template #couponList-data="{row}">
        <CouponView
            :coupon="row.couponList[row.couponList.length-1]"
            :ui="{
              width: 'w-[200px]'
            }"
            :name="row.name"
        />
      </template>

    </u-table>
  </u-card>
</template>