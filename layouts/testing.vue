<template>
  <div>

    <CommonThemeBtn
        class="absolute top-2 right-2"
    />
    <div class="w-100 d-flex">
      <div class="mx-auto">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'testing',
}
</script>