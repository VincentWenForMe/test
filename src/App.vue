<template>
  <div id="app">
    <v-header></v-header>
    <v-home></v-home>
    <v-end></v-end>
  </div>
</template>

<script>
  import Header from './components/header.vue';
  import Home from './components/home.vue';
  import End from './components/end.vue';
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      'v-home': Home,
      'v-end': End
    },
  }
</script>

<style></style>
