<script setup lang="ts">
import {useCustomerStore} from "~/components/NuxtPage/Customer/store";

const store = useCustomerStore();
const nuxtApp = useNuxtApp();

const rows = ref([
  {name: 'Apple', price: 100},
  {name: 'Banana', price: 200},
  {name: 'Orange', price: 300},
])

const columns = ref([
  {key: 'name', label: 'Name'},
  {key: 'price', label: 'Price'},
])

const onSelect = (selectedRow) => {
  store.setViewMode('coupon');
  nuxtApp.$hideModal();
}
</script>
<template>
  <u-table
      :rows="rows"
      :columns="columns"
      @select="onSelect"
  >

  </u-table>
</template>