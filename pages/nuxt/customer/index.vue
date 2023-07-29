<template>
  <div>
    broadcast channel 로 데이터 전달하기

    <v-btn
        @click="onClick"
        color="primary"
    >
      +
    </v-btn>

  </div>
</template>
<script>
import {useBrowserEvent} from "~/stores/browser-event";
import { BroadcastChannel } from 'broadcast-channel';
const channel = new BroadcastChannel('foobar');


export default {
  name: 'customer',
  setup(){
    definePageMeta({
      layout: "default",
    });
  },
  methods: {
    onClick() {
      channel.postMessage({foo: 'bar'});
    },
  },
  mounted() {
    channel.onmessage = (ev) => {
      console.log(ev);
    };
  },
}
</script>