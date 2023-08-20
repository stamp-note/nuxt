<script setup lang="ts">
import {useCustomerStore} from "~/components/NuxtPage/Customer/store";
import {useUserCouponStore} from "~/stores/user-coupon";
import {useCouponDeskStore} from "~/components/NuxtPage/Customer/CouponDesk/store";
import _  from 'lodash';

const couponDeskStore = useCouponDeskStore();
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
  const couponCopy = _.cloneDeep(selectedRow.couponList[selectedRow.couponList.length-1]);
  couponDeskStore.setCoupon(couponCopy);
  couponDeskStore.setUserName(selectedRow.name);
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
        <DefaultCoupon
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