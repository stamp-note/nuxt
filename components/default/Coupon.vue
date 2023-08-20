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
      class="relative"
      :class="computedUi"
  >
    <img
        class="w-full"
        :src="couponImg"
        alt="coupon"
    >
    <div
        class="absolute top-[8%] left-[5%] w-[15%] h-[10%]
               font-bold bg-gray-100 flex"
    >
      <div class="w-full m-auto text-center overflow-hidden text-ellipsis text-gray-600 whitespace-nowrap">
        {{name}}
      </div>
    </div>
    <slot />
  </div>
</template>
