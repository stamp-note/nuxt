<script setup lang="ts">
import questionOptions from "./questionOptions.js";
import {useUserCouponStore} from "~/stores/user-coupon";

const userCouponStore = useUserCouponStore();

const errorUi = ref('pt-2 px-3 text-xs text-red-500 dark:text-red-400 ')

const localValue = ref({})
const form = ref()

function onSubmit() {
  form.value!.validate()
      .then((valid) => {
        if (valid) {
          const name = localValue.value.name;
          const question = localValue.value.selectedQuestion?.value === 'custom' ? localValue.value.question : localValue.value.selectedQuestion?.label;
          const answer = localValue.value.answer;
          userCouponStore.addUser(name, question, answer);
          reset();
          useNuxtApp().$hideModal();
        }
      })
      .catch(() => {

      })
}

const validate = async (state) => {
  const errors = [];
  if (!state.name) {
    errors.push({path: 'name', message: '이름을 입력해주세요'});
    return errors;
  }
  if(await userCouponStore.hasUserName(state.name)){
    errors.push({path: 'name', message: '이미 존재하는 이름입니다 다른 이름을 입력해주세요'});
    return errors;
  }
  if(!(2<=state.name.length && state.name.length<=20)){
    errors.push({path: 'name', message: '이름은 2글자 이상 20글자 이하로 입력해주세요'});
    return errors;
  }
  if (!state.selectedQuestion) {
    errors.push({path: 'selectedQuestion', message: '질문을 선택해주세요'});
    return errors;
  }
  if (state.selectedQuestion?.value === 'custom') {
    if(!state.question) {
      errors.push({path: 'question', message: '질문을 입력해주세요'});
      return errors;
    }
    if(!(state.question.length<=50)){
      errors.push({path: 'question', message: '질문은 50글자 이하로 입력해주세요'});
      return errors;
    }
  }

  if (!state.answer) {
    errors.push({path: 'answer', message: '답변을 입력해주세요'});
    return errors;
  }
  if(!(state.answer.length<=20)){
    errors.push({path: 'answer', message: '답변은 20글자 이하로 입력해주세요'});
    return errors;
  }

  return errors;
}

function reset() {
  localValue.value = {};
}

onMounted(() => {
  reset();
})

</script>
<template>
  <ModalLayoutDefault
      title="내 쿠폰 만들기"
      hide-footer
  >
    <u-form
        ref="form"
        class="m-4 flex flex-col gap-4"
        :state="localValue"
        :validate="validate"
        @submit.prevent="onSubmit"
    >
      <div>
        <u-form-group
            label="이름"
            name="name"
            :ui="{
              error: errorUi
          }"
        >
          <u-input
              v-model="localValue.name"
              size="lg"
              placeholder="이름을 입력해주세요"
          />
        </u-form-group>
      </div>
      <div class="flex flex-col gap-2">
        <u-form-group
            label="쿠폰 사용 시 본인 확인"
            name="selectedQuestion"
            :ui="{
              error: errorUi
          }"
        >
          <u-select-menu
              v-model="localValue.selectedQuestion"
              size="lg"
              placeholder="질문을 선택해주세요"
              :options="questionOptions"
              :uiMenu="{
              height: 'h-[120px]'
            }"
          />

        </u-form-group>
        <u-form-group
            v-if="localValue?.selectedQuestion?.value === 'custom'"
            name="question"
            :ui="{
              error: errorUi
          }"
        >
          <u-input
              v-model="localValue.question"
              size="lg"
              placeholder="질문을 입력해주세요"
          />
        </u-form-group>

        <u-form-group
            name="answer"
            :ui="{
              error: errorUi
          }"
        >
          <u-input
              v-model="localValue.answer"
              size="lg"
              placeholder="질문에 대한 답변을 입력해주세요"
          />
        </u-form-group>
      </div>
      <u-button
          type="submit"
          size="lg"
          block
      >
        쿠폰 생성
      </u-button>

    </u-form>
  </ModalLayoutDefault>
</template>
