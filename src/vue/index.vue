<template>
<div>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</div>
</template>
<style scoped>
  h1 {
    color: red;
  }
</style>
<script>
  export default {
    data() {
      return {
        msg: 'Hello,Webpack'
      }
    }
  }
</script>