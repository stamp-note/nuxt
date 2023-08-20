<script setup lang="ts">
import {useCustomerStore} from "../store";

const store = useCustomerStore();
const onBackClick = () => {
  store.setViewMode('welcome')
}

const view = ref('init')
</script>
<template>
  <slot name="back-button">
    <div class="absolute top-2 left-2">
      <icon
          @click="onBackClick"
          class="cursor-pointer"
          name="mdi:arrow-back"
          size="24"
      />
    </div>
  </slot>
  <div class="m-auto">
    <div v-if="view === 'init'">
      <div class="flex flex-col gap-5 p-20">
        <NuxtPageCustomerCouponDeskCoupon/>

        <u-button
            class="w-1/2 m-auto"
            color="primary"
            @click="view = 'ink'"
            size="lg"
            block
        >
          쿠폰 찍기
        </u-button>
        <u-button
            class="w-1/2 m-auto"
            color="primary"
            disabled
            size="lg"
            block
        >
          쿠폰 사용하기
        </u-button>
        <u-button
            class="w-1/2 m-auto"
            color="gray"
            @click="onBackClick"
            size="lg"
            block
        >
          나가기
        </u-button>
      </div>
    </div>
    <ContainerStampWrap
        v-else
    >
      <div class="flex flex-col gap-5 p-20">
        <NuxtPageCustomerCouponDeskActiveCoupon/>

        <NuxtPageCustomerCouponDeskInkBoard
            class="m-auto"
        />
        <u-button
            class="w-1/2 m-auto"
            color="gray"
            @click="view = 'init'"
            size="lg"
            block
        >
          취소하기
        </u-button>
      </div>
    </ContainerStampWrap>
  </div>
</template>