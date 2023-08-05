<template>
  <NuxtLayout >
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useTheme } from '~/composables/theme';

const { setTheme } = useTheme();
onMounted(() => {
  const theme = window.localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
  }
})
</script>
