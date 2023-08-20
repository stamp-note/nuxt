<template>
  <div class="absolute h-full w-[9999px] z-0 opacity-50">
    <img
        ref="bgImageRef"
        class="h-full w-auto top-0 left-0"
        :src="bgImage"
        alt="logo"
    />
  </div>
</template>
<script setup lang="ts">
import bgImage from '~/assets/images/pexels-afta-putta-gunawan-683039.jpg';
</script>