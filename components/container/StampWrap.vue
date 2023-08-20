<template>
  <div
      class="w-100 h-100"
      @mouseleave="onMouseLeave"
      @mousemove="onMouseMove"
  >
    <slot />
    <img
        class="stamp-stick fixed"
        alt="stamp-stick"
        :style="{
          left: stickX? stickX + 'px': 'auto',
          top: stickY? stickY + 'px': 'auto',
        }"
        :src="stampStick"
        width="40"
    />
  </div>
</template>
<script>
import stampStick from "@/assets/coupons/stamp-stick.png";
export default {
  name: 'stamp-wrap',
  setup(){

    return {
      stampStick,
    }
  },
  data(){
    return {
      stickX: 0,
      stickY: 0,
    }
  },
  methods: {
    onMouseMove(ev) {
      this.stickX = ev.clientX - 20;
      this.stickY = ev.clientY -122;
    },
    onMouseLeave() {
      this.stickX = 0;
      this.stickY = 0;
    }
  }
}
</script>
