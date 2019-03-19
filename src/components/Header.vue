<template>
  <div>
    <h2>这是一个头部组件--{{msg}}</h2>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        msg: '我是一个头部组件'
      }
    }
  }
</script>

<style lang="css" scoped>
  h2 {
    background: #000;
    color: white;
    line-height: 60px;
    margin-top: 0px;
  }
</style>
