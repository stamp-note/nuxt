<template>
  <div
      class="relative"
  >
    <img
        :src="coupon.image"
        @click.stop.prevent="onClick"
        alt="coupon"
        style="width: 300px"
    >
    <slot />
  </div>
</template>
<script setup lang="ts">
import {useStampStore} from "~/stores/stamp";
import coupon01 from '~/assets/coupons/coupon01.png';

const store = useStampStore();
const coupon = {
  image: coupon01,
}

function onClick(e) {
  store.addStampLocation([e.offsetX, e.offsetY]);
}
</script>
<style lang="scss" scoped>

</style>