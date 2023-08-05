<template>
  <div class="grid grid-cols-10 gap-1 min-h-[inherit]">
    <div class="col-span-3 border-r-2">
      <div class="m-3">
        <SidebarView />
      </div>
    </div>
    <div class="col-span-7">
      <NuxtPageView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore} from "~/stores/counter";

const store = useCounterStore();
const count = computed(()=>store.count);
</script>

<style lang="scss" scoped>
    .mainWrap {
        display: flex;
        width: 100%;
    }
</style>