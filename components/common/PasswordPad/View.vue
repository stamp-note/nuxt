<script setup lang="ts">
import {useSettingsStore} from "~/stores/settings";
import {usePasswordPadStore} from "~/components/common/PasswordPad/store";

const settingStore = useSettingsStore();

settingStore.setPassword('1111')
const store = usePasswordPadStore();

onMounted( () => {
  store.init()
})
const passwordInputScreen = ref(null)

</script>
<template>
  <ModalLayoutDefault
      hide-header
      hide-footer
  >
    <div
        class="w-full"
        @keyup.prevent="store.clickKey($event.key)"
    >
      <div class="py-4"/>
      <div
          ref="passwordInputScreen"
          class="flex flex-col"
      >
        <div class="flex-auto text-center">
        <span class="hidden">
          잘못된 비밀번호 입니다.
        </span>
          비밀번호를 입력해 주세요.
          <span class="hidden">
          비밀번호가 초기화 되었습니다.
        </span>
          <span class="text-xs text-gray-400 dark:text-gray-600">
          (초기 비밀번호 1111)
        </span>

        </div>
        <div class="pt-4"/>
        <div class="flex-auto flex w-full justify-center gap-2">
          <div v-for="i in store.passwordLength">
            <div
                class="flex-1 pt-[100%] w-4 rounded-full border"
                :class="{
                  'bg-gray-400 dark:bg-gray-600': i <= store.password.length
                }"
            />
          </div>
        </div>
      </div>
      <div class="py-4"/>
      <div class="grid grid-cols-3 border-t">
        <div
            class="relative pt-[61.8%]"
            v-for="key in store.keys"
            :key="key"
        >
          <template v-if="key === 'del'">
            <u-button
                @click="store.clickKey(key)"
                variant="ghost"
                color="gray"
                class="absolute top-0 left-0 h-full font-bold"
                block
            >
              <icon
                  name="icon-park-solid:delete-two"
                  size="20"
              />
            </u-button>
          </template>
          <template v-else-if="key === 'clear'">
            <u-button
                @click="store.clickKey(key)"
                class="absolute top-0 left-0 h-full font-bold"
                color="gray"
                variant="ghost"
                block
            >
              <icon
                  name="radix-icons:reset"
                  size="20"
              />
            </u-button>
          </template>
          <template v-else>
            <u-button
                @click="store.clickKey(key)"
                variant="ghost"
                color="gray"
                class="absolute top-0 left-0 h-full font-bold"
                size="lg"
                block
            >
              {{ key }}
            </u-button>
          </template>
        </div>
      </div>
    </div>
  </ModalLayoutDefault>
</template>
