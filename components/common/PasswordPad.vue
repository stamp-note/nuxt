<template>
  <div
      class="w-full mt-10 flex justify-center items-center"
  >
    <u-card
        class="w-[400px]"
    >
      <template #header>비밀번호 입력</template>
      <div class="password-pad">
        <div class="password-pad__input">
          <input type="password" v-model="password"/>
        </div>
        <div class="grid grid-cols-3 border-t border-l">
          <div
              class="relative pt-[50%] border-r border-b"
              v-for="key in keys"
              :key="key"
          >

            <button
                class="absolute top-0 left-0 w-full h-full text-center
                       hover:bg-gray-100 active:bg-gray-200"
            >
              {{ key }}
            </button>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end">
          <u-button
              variant="outline"
              color="primary"
          >
            확인
          </u-button>
        </div>
      </template>
    </u-card>
  </div>
</template>
<script setup>
const keys = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, '지우기', 0, '리셋']);

</script>