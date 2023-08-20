<template>
  <div class="flex gap-2">
    <u-card
        class="relative flex w-[100px] h-[100px]"
        :ui="{
        background: 'bg-red-500',
      }"
    />
    <u-card
        class="relative flex w-[100px] h-[100px]"
        :ui="{
          background: 'bg-blue-500',
        }"
    />
    <u-card
        class="relative flex w-[100px] h-[100px]"
        :ui="{
          background: 'bg-black',
        }"
    />
  </div>
</template>
<script setup lang="ts">
</script>