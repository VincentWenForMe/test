<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo"><img src="../assets/cnodejs_light.svg" alt=""></div>
      <ul class="nav-bar">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/getStart">新手入门</router-link>
        </li>
        <li>
          <router-link to="/api">API</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
        <li>
          <router-link to="/signUp">注册</router-link>
        </li>
        <li>
          <router-link to="/signIn">登录</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style>
  .header {
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background: #444;
    font-size: 13px;
    line-height: 34px;
  }
  
  .header img {
    vertical-align: middle;
  }
  
  .header-wrapper {
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
  }
  
  .logo {
    flex: 0 0 120px;
    width: 120px;
  }
  
  .nav-bar {
    flex: 1;
    text-align: right;
  }
  
  .nav-bar li {
    display: inline-flex;
    padding: 0 15px;
  }
  
  .nav-bar li a {
    color: #ccc;
    text-decoration: none;
  }
  
  .nav-bar li a.router-link-exact-active {
    color: #fff;
  }
</style>
