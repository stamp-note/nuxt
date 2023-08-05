<script setup lang="ts">
import {useMainViewStore} from "~/stores/mainView";

const store = useMainViewStore();
const options = computed(() => store.options)


const selected = computed({
  get: () => {
    const idx = store.options.findIndex((option) => option.label === store.viewMode);
    if (idx === -1) {
      store.setViewMode(store.options[0].label);
      return store.options[0];
    }
    return store.options[idx];
  },
  set: (value) => {
    store.setViewMode(value.label)
  }
})
</script>
<template>
  <div
      class="w-[200px]"
  >
    <u-select-menu
        v-model="selected"
        :options="options"
        :ui="{
        background: 'bg-red-100 dark:bg-white'
      }"
    >
      <template #label>
        <div class="flex">
          <icon
              class="mt-auto mb-auto"
              :name="selected.label === 'Customer' ? 'gg:screen' : selected.label === 'Admin'?'jam:screen-f': 'gis:screen-dub'"
          />
          <span
              class="ml-2"
          >
          {{ selected.label }}
        </span>
        </div>
      </template>
      <template #option="{option}">
        <div class="flex">
          <icon
              class="mt-auto mb-auto"
              :name="option.label === 'Customer' ? 'gg:screen' : option.label === 'Admin'?'jam:screen-f': 'gis:screen-dub'"
          />
          <span
              class="ml-2 whitespace-nowrap"
          >
        {{ option.label }}
      </span>
        </div>
      </template>
    </u-select-menu>
  </div>
</template>
<style scoped>
</style>