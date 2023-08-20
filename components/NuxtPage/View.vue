<script setup lang="ts">
import {useMainStore} from "./store";

const store = useMainStore();

store.loadViewMode();
const view = computed(() => store.viewMode);


</script>
<template>
  <div class="h-full">
    <slot name="top-right">
      <div class="absolute top-2 right-2 z-10 flex gap-2">
        <CommonThemeBtn/>
<!--        <NuxtPageViewSelect/>-->
      </div>
    </slot>
    <slot>
      <div class="flex gap-2 h-full">
        <div
            v-if="view.startsWith('Customer')"
            class="flex-1 flex"
        >
            <NuxtPageCustomerView/>
        </div>
        <div
            v-if="view.endsWith('Admin')"
            class="flex-1 flex"
        >
            <NuxtPageAdminView/>
        </div>
      </div>
    </slot>

  </div>
</template>
