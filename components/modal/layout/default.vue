<script setup lang="ts">
const nuxtApp = useNuxtApp();
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  okText: {
    type: String,
    default: '확인',
  },
  cancelText: {
    type: String,
    default: '취소',
  },
})

const emit = defineEmits(['close', 'ok', 'cancel']);

const onClose = () => {
  emit('close');
  nuxtApp.$hideModal()
}

const onCancel = () => {
  emit('cancel');
  nuxtApp.$hideModal()
}

const onOk = () => {
  emit('ok');
  nuxtApp.$hideModal()
}

</script>
<template>
  <u-card
      :ui="{
          body: {
            padding: 'p-0',
          }
        }"
  >
    <slot name="header">
      <div
          v-if="!hideHeader"
          class="flex justify-between items-center p-4"
      >
        <div
            class="text-xl font-bold"
        >
          {{ title }}
        </div>
        <div>
          <icon
              class="cursor-pointer"
              :name="'ant-design:close-outlined'"
              @click="onClose"
          />
        </div>
      </div>
    </slot>

    <slot />

    <slot name="footer">
      <div
          v-if="!hideFooter"
          class="flex justify-end items-center p-4"
      >
        <u-button
            @click="onCancel"
            variant="ghost"
            color="gray"
        >
          {{ props.cancelText }}
        </u-button>
        <u-button
            @click="onOk"
            variant="ghost"
            color="primary"
        >
          {{ props.okText }}
        </u-button>
      </div>

    </slot>
  </u-card>
</template>