<template>
  <div class="home-wrapper">
    <div class="main-home">
      <router-view></router-view>
    </div>
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
  import Sidebar from './sidebar.vue';
  export default {
    name: 'home',
    components: {
      'v-sidebar': Sidebar
    }
  }
</script>

<style>
  .home-wrapper {
    display: flex;
    width: 90%;
    margin: 20px auto 0;
  }
  
  .main-home {
    flex: 2.9;
    margin-right: 20px;
    border-radius: 3px 3px 0 0;
    background: #ffffff;
    overflow: hidden;
  }
</style>
