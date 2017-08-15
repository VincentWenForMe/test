<template>
  <div class="display">
    <div class="topic_header new-css">
      <span class="topic_full_title">
        <span class="put_top" v-show="con.top">置顶</span>
          {{con.title}}
        </span>
      <div class="changes">
        <span>
          发布于 6 个月前
        </span>
        <span>
          作者 <router-link
          :to="{name: 'author', params: { loginname: con.author.loginname}}">{{con.author.loginname}}</router-link>
        </span>
        <span>
          {{con.visit_count}} 次浏览
        </span>
        <span>
            最后一次编辑是 3 个月前
          </span>
        <span> 来自 分享</span>
      </div>
    </div>
    <div v-html="con.content"></div>
  </div>
</template>

<script>
  export default {
    name: 'display',
    data() {
      return {
        con: {
          author: {
            loginname: ''
          }
        }
      }
    },
    mounted() {
      this.axios.get('https://cnodejs.org/api/v1/topic/' + this.$route.params.id).then((res) => {
        this.con = res.data.data;
//        console.log(this.con)
      }).catch((res) => {
//        console.log(res);
      })
    }
  }
</script>

<style>
  @import "../assets/display.css";
  
  .markdown-text {
    margin: 0 10px;
  }
  
  .new-css {
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 20px;
  }
  
  .topic_full_title {
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>
