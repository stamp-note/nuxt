<template>
  <div>
    <button @click="increment">+</button>
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
  methods: {
    increment() {
      this.store.increment();
    },
  },
}
</script>