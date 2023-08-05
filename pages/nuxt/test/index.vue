<template>
  <div>
    테스트 목록들
  </div>
  <ul>
    <template
        v-for="item in $router.options.routes"
    >

    <li v-if="item.path.startsWith('/nuxt/test')">

      <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
    </li>
    </template>

  </ul>
</template>
<script>
export default {
  name: 'test',
  setup(){
    definePageMeta({
      layout: "testing",
    });
  },
  mounted() {
    console.log('test', this.$router);
  }
}
</script>