<template>
  <template v-for="stampLocation in stampLocationList">
    <img
        class="absolute stamp-wrap"
        alt="stamp"
        :src="stamp.image"
        :style="{
            left: stampLocation[0] + 'px',
            top: stampLocation[1] + 'px',
        }"
    />
  </template>
</template>
<script>
import {useStampStore} from "~/stores/stamp";
import stamp01 from '~/assets/coupons/stamp01.png';

export default {
  setup() {
    const store = useStampStore();
    return {
      store,
    }
  },
  data(){
    return {
      stamp:{
        image: stamp01,
      },
    }
  },
  computed: {
    stampLocationList() {
      return this.store.stampLocationList;
    }
  },
}
</script>
<style lang="scss" scoped>
.stamp-wrap{
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 50px;
}
</style>