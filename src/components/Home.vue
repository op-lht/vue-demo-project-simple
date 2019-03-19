<!--一个vue文件由三部分组成：模板，script,style-->
<template>
  <!--vue模板中的所有内容都要被一个根元素所包含-->
  <div>
    <v-header></v-header>
    <h2>这是一个首页组件--{{msg}}</h2>
    <button @click="run()">哈哈哈</button>
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
        msg: '我是一个首页组件'
      }
    },
    methods: {
      run() {
        alert(this.msg);
      }
    }
  }
</script>

<style lang="css" scoped>
  /*我们希望在这个组件中设置的样式只在这个组件中生效,在style中添加scoped*/
  h2 {
    color: red;
  }
</style>
