<template>
  <div>
    <h1>Home page</h1>
    <div>{{msg}}</div>
    <input v-model.lazy="msg" type="text"/>
    <sample-component :list="vlist" :msg="msg"></sample-component>
  </div>
</template>

<script>
  import AppSampleComponent from '../components/sample.vue';
  
  export default {
    data() {
      return {
        msg: 'sample msg',
        vlist: ['a','b','c']
      };
    },
    components: {
      sampleComponent: AppSampleComponent
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>