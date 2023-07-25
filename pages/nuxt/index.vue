<template>
  <div>
    nuxt
    {{count}}
    <ContainersNuxtIncreaseBtn />
    <ShowTextBtn />
    <SidebarSideBar />
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