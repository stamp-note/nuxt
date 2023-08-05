<template>
  <div>
    <v-btn
        @click="decrease"
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
    decrease() {
      this.store.decrease();
    },
  },
}
</script>