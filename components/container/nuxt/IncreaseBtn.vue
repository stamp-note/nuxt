<template>
  <div>
    <v-btn
        @click="increment"
        color="primary"
    >
      +
    </v-btn>
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