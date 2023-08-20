<script setup lang="ts">
import {useCustomerStore} from "~/components/NuxtPage/Customer/store";

const store = useCustomerStore();

const view = computed(() => store.viewMode);
</script>
<template>
  <div class="relative flex w-full h-full overflow-hidden">
    <NuxtPageCustomerWelcomeView
        v-if="view === 'welcome'"
    />
    <NuxtPageCustomerCouponView
        v-else
    />
  </div>
</template>