<template>
  <div>
    nuxt
    test
    {{count}}
    <ContainersNuxtIncreaseBtn />
  </div>
</template>
<script>
import { useCounterStore} from "~/stores/counter";

export default {
  setup() {
    const store = useCounterStore();
    return {
      store,
    }
  },
  computed: {
    count() {
      return this.store.count;
    }
  }
}
</script>