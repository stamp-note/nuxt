<template>
  <div>
    <v-img
        class="position-relative"
        :src="coupon.image"
        @click="onClick"
        width="300px"
        contain
    >
      <slot />
    </v-img>
  </div>
</template>
<script>
import {useStampStore} from "~/stores/stamp";
export default {
  setup() {
    const store = useStampStore();
    return {
      store,
    }
  },
  data() {
    return {
      coupon: {
        image: '/coupons/coupon01.png',
      },

    }
  },
  methods: {
    onClick(e) {
      this.store.addStampLocation([e.offsetX, e.offsetY]);
    },
  },

}
</script>
<style lang="scss" scoped>

</style>