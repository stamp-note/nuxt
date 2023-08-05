<template>
  <div>
    <ContainerNuxtStampWrap>
      <div class="flex flex-row">
        <div class="basis-full">

          <ContainerNuxtCouponImg>
            <ContainerNuxtStampImgGroup/>
          </ContainerNuxtCouponImg>

        </div>

      </div>
      <div class="flex flex-row justify-center">
        <div class="basis-10">
          <ContainerNuxtStampPad/>
        </div>
      </div>
    </ContainerNuxtStampWrap>
  </div>

</template>
<script>
import {useTheme} from "~/composables/theme";

export default {
  name: 'card-test',
  setup() {
    definePageMeta({
      layout: "testing",
    });

    useTheme().getTheme();
  }
}
</script>