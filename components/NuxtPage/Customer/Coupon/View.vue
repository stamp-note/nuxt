<script setup lang="ts">
import {useCustomerStore} from "../store";

const store = useCustomerStore();
const onBackClick = () =>{
  store.setViewMode('welcome')
}
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
    쿠폰 페이지 입니다.
  </div>
</template>