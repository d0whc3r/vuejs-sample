<template>
  <div>
    <ul>
      <li v-for="(element, index) in list">
        {{index}}.- {{element}}
        <button @click="showAlert(index, element)">click me! ({{msg}})</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['list', 'msg'],
    methods: {
      showAlert(num, text) {
        alert(num + ' and text: ' + text);
      }
    }
  }
</script>

<style scoped>
  ul li {
    color: blue;
    font-size: 1.5rem;
  }
</style>