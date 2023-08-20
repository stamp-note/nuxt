<script setup lang="ts">
const localSelectedQuestion = ref(null);


function reset() {
  localSelectedQuestion.value = null;
}
onMounted(() => {
  reset();
})

</script>
<template>
  <ModalLayoutDefault
      hide-footer
  >
    <u-form
        class="m-4 flex flex-col gap-2"
    >
      <u-form-group
          label="이름"
      >
        <u-input
            size="xl"
            placeholder="이름을 입력해주세요"
        />
      </u-form-group>
      <u-form-group
          label="본인 확인 설정"
      >
        <u-select-menu
            v-model="localSelectedQuestion"
            size="xl"
            placeholder="질문을 선택해주세요"
            :options="[
              {label: '직접입력하기', value: 'custom'},
              {label: '태어난 고향이 어디인가요?', value: 'birth_location'},
              {label: '생일이 언제인가요?', value: 'birth_date'},
              {label: '가장 좋아하는 음식은 무엇인가요?', value: 'favorite_food'},
              {label: '가장 좋아하는 색상은 무엇인가요?', value: 'favorite_color'},
              {label: '가장 좋아하는 동물은 무엇인가요?', value: 'favorite_animal'},
              {label: '가장 좋아하는 영화는 무엇인가요?', value: 'favorite_movie'},
              {label: '가장 좋아하는 책은 무엇인가요?', value: 'favorite_book'},
              {label: '가장 좋아하는 음악은 무엇인가요?', value: 'favorite_music'},
              {label: '가장 좋아하는 스포츠는 무엇인가요?', value: 'favorite_sports'},

            ]"
            :uiMenu="{
              height: 'h-[120px]'
            }"
        />
      </u-form-group>
      <u-input
        v-if="localSelectedQuestion?.value === 'custom'"
        size="xl"
        placeholder="질문을 입력해주세요"
      />
      <u-input
          size="xl"
          placeholder="질문에 대한 답변을 입력해주세요"
      />

    </u-form>
  </ModalLayoutDefault>
</template>
