<template>
  <div>
    <CommonPasswordPad />

  </div>
</template>
<script>
import { BroadcastChannel } from 'broadcast-channel';
const channel = new BroadcastChannel('foobar');


export default {
  name: 'customer',
  setup(){
    definePageMeta({
      layout: "testing",
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