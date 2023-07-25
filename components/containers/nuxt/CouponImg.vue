<template>
  <div>
    <v-img
        class="position-relative"
        :src="coupon.image"
        @click.stop.prevent="onClick"
        width="300px"
        contain
    >
      <slot />
    </v-img>
  </div>
</template>
<script>
import {useStampStore} from "~/stores/stamp";
import coupon01 from '~/assets/coupons/coupon01.png';
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
        image: coupon01,
      },

    }
  },
  methods: {
    onClick(e) {
      console.log(e)
      this.store.addStampLocation([e.offsetX, e.offsetY]);
    },
  },

}
</script>
<style lang="scss" scoped>

</style>