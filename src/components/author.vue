<template>
  <div class="author panel">
    <div class="inner userinfo">
      <div class="user_big_avatar">
        <img src="" :src="useInfo.avatar_url" class="user_avatar" title="lellansin">
      </div>
      <a class="dark">{{useInfo.loginname}}</a>
      
      <div class="user_profile">
        <span class="big">{{useInfo.score}}</span> 积分
        <ul class="unstyled">
          <li>
            <a class="dark" href="/user/lellansin/collections" target="_blank">
              <span class="big collect-topic-count">{{collectInfo.length}}</span>个话题收藏
            </a>
          </li>
          <li>
            <i class="fa fa-lg fa-fw fa-home"></i>
            <a class="dark" href="http://lellansin.com/" target="_blank">http://lellansin.com/</a>
          </li>
          <li>
            <i class="fa fa-lg fa-fw fa-map-marker"></i>
            <span class="dark">上海</span>
          </li>
          <li>
            <i class="fa fa-lg fa-fw fa-github"></i>
            <a class="dark" href="https://github.com/Lellansin" target="_blank">
              @{{useInfo.loginname}}
            </a>
          </li>
          <li>
            <i class="fa fa-lg fa-fw fa-twitter"></i>
            <a class="dark" href="http://weibo.com/lellansin" target="_blank">http://weibo.com/{{useInfo.loginname}}</a>
          </li>
        
        </ul>
      </div>
      <p class="col_fade">注册时间 4 年前</p>
    
    </div>
  </div>
</template>

<script>
  export default {
    name: 'author',
    data() {
      return {
        useInfo: {},
        collectInfo: []
      }
    },
    mounted() {
      this.axios.get('https://cnodejs.org/api/v1/user/' + this.$route.params.loginname).then((res) => {
        this.useInfo = res.data.data;
        console.log(this.useInfo);
      }).catch((err) => {
        console.log(err);
      });
      this.axios.get('https://cnodejs.org/api/v1/topic_collect/' + this.$route.params.loginname).then((res) => {
        this.collectInfo = res.data.data;
        console.log(this.collectInfo);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
</script>

<style>
  @import "../assets/display.css";
</style>
