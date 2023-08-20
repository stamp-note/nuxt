<script setup lang="ts">
import {useCouponDeskStore} from "./store";

const couponDeskStore = useCouponDeskStore();

const coupon = computed(() => couponDeskStore.coupon);
const name = computed(() => couponDeskStore.userName);

const isFront = ref(true)
const frontView = ref(true)

const onToggleCoupon = () => {
  isFront.value = !isFront.value
  setTimeout(() => {
    frontView.value = isFront.value
  }, 200)
}
</script>
<template>
  <div
      class="transform transition-all duration-500"
      :class="{
        'rotate-y-180': !isFront,
      }"
  >
    <div class="w-full text-center">
      <span
          class="cursor-pointer z-10 top-3 right-3"
          @click="onToggleCoupon"
      >
        <icon class="dark:text-gray-400" name="icon-park-outline:rotation-horizontal" size="40"/>
    </span>

    </div>

    <DefaultCoupon
        v-if="frontView"
        :coupon="coupon"
        :name="name"
    />
    <DefaultBackCoupon
        v-else
    />
  </div>
</template>
<style>

  .rotate-y-180{
      transform: rotateY(180deg);
  }

</style>
