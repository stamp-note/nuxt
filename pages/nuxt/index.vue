<template>
  <div class="mainWrap">
    <!-- nuxt
    {{count}}
    <ContainersNuxtIncreaseBtn />
    <ShowTextBtn /> -->
    <SidebarSideBar />
    <ContentsCouponWrap />
  </div>
</template>
<script>
import { useCounterStore} from "~/stores/counter";

export default {
    setup() {
        const store = useCounterStore();
        return {
            store,
        };
    },
    computed: {
        count() {
            return this.store.count;
        }
    },
}
</script>

<style lang="scss" scoped>
    .mainWrap {
        display: flex;
        width: 100%;
    }
</style>