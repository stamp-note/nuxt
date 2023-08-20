<script setup lang="ts">
import couponImg from '~/assets/coupons/coupon01.png';
import _ from 'lodash';

const props = defineProps({
  coupon: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    default: '홍길동',
  },
  ui: {
    type: Object,
    default: {},
  }
})

const localUi = ref({
  width: 'w-[400px]'
})

const computedUi = computed(() => {
  return _.values({
    ...localUi.value,
    ...props.ui,
  }).join(' ')
})
</script>
<template>
  <div
      class="relative rotate-y-180 text-black"
      :class="computedUi"
  >
    <div
        class="relative w-full"
    >
      <div
          class="absolute w-[calc(100%-24px)] h-[calc(100%-24px)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] z-10"
      >
        Macko's Cafe
        <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <icon size="50" name="ic:baseline-coffee" />
        </div>
      </div>
      <img
          class="w-full"
          :src="couponImg"
          alt="coupon"
      >
    </div>
  </div>
</template>
