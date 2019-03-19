<template>
  <div>
    <v-header></v-header>
    <h2>这是一个新闻组件--{{msg}}</h2>
    <ul>
      <li>
        1111
      </li>
      <li>
        2222
      </li>
      <li>
        3333
      </li>
    </ul>
  </div>

</template>

<script>
  import header from './Header.vue';

  export default {
    components: {
      'v-header': header
    },
    data() {
      return {
        msg: '我是一个新闻组件'
      }
    }
  }
</script>

<style lang="css" scoped>
  li {
    list-style-type: none;
  }
</style>
