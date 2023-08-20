<template>
  <NuxtLayout >
    <NuxtLoadingIndicator />
    <NuxtPage />
    <Modal />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { setTheme } = useTheme();
const nuxtApp = useNuxtApp()

onMounted(() => {
  const theme = window.localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
  }
})

function emitWindowResize() {
  if(nuxtApp.$windowResize) {
    nuxtApp.$windowResize();
  }
}
onMounted(() =>{
  window.addEventListener('resize', emitWindowResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', emitWindowResize)
})
</script>
