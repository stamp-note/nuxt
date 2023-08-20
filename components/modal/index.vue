<script setup lang="ts">
import {Module} from "vm";

const nuxtApp = useNuxtApp()

const show = ref(false);

const localComponent = shallowRef(null)
const localSize = ref('lg');

const convertSize = ref({
  'xs': 'max-w-xs',
  'sm': 'max-w-sm',
  'md': 'sm:max-w-md',
  'lg': 'sm:max-w-lg',
  'xl': 'sm:max-w-xl'
})
const localPreventClose = ref(false);

type ModalObj = {
  component: Function,
  size: string,
  preventClose: boolean
}
nuxtApp.provide('showModal', (modalObj: ModalObj) => {
  modalObj
      .component()
      .then(res => {
        localComponent.value = res.default
        if (modalObj.size) {
          localSize.value = modalObj.size;
        }
        if (modalObj.preventClose) {
          localPreventClose.value = modalObj.preventClose;
        }
        show.value = true;
      });
})

nuxtApp.provide('hideModal', () =>{
  show.value = false;
})
</script>
<template>
  <u-modal
      v-model="show"
      :prevent-close="localPreventClose"
      :ui="{
        width: convertSize[localSize]
      }"
  >
    <component
        :is="localComponent"
    >
    </component>
  </u-modal>
</template>