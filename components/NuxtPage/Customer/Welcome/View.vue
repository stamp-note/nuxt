<script setup>
const nuxtApp = useNuxtApp()

const onFindCouponClick = () => {
  if(nuxtApp.$showModal) {
    nuxtApp.$showModal({
      component: () => import('../FindCoupon/View.vue'),
      size: 'xl'
    })
  }
}
const onMakeCouponClick = () => {
  if(nuxtApp.$showModal){
    nuxtApp.$showModal({
      component: () => import('../MakeCoupon/View.vue'),
      size: 'md'
    })
  }
}
</script>
<template>
    <NuxtPageCustomerWelcomeBackground />
    <div class="z-10 m-auto">
      <div class="flex flex-col gap-2">
        <u-button
            size="xl"
            :ui="{
              background: 'bg-white',
            }"
            @click="onFindCouponClick"
        >
          내 쿠폰 찾기
        </u-button>
        <u-button
            size="xl"
            :ui="{
              background: 'bg-white',
            }"
            @click="onMakeCouponClick"
        >
          쿠폰 만들기
        </u-button>
      </div>
    </div>
</template>