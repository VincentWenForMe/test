<template>
  <div class="side-inHome">
    <dl class="topic-no-answer">
      <dt class="title">回复量最多的话题</dt>
      <dd v-for="(item, index) in topicTheme" v-if="item.reply_count > 20">
        <router-link :to="{name: 'display', params: {id: item.id}}">{{item.title}}</router-link>
      </dd>
    </dl>
    <dl class="topic-no-answer">
      <dt class="title">积分榜 TOP 100 >></dt>
      <dd>记录一下Ubuntu 16.04 下部署基于Node.js</dd>
      <dd>记录一下Ubuntu 16.04 下部署基于Node.js</dd>
      <dd>记录一下Ubuntu 16.04 下部署基于Node.js</dd>
      <dd>记录一下Ubuntu 16.04 下部署基于Node.js</dd>
      <dd>记录一下Ubuntu 16.04 下部署基于Node.js</dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'side-inHome',
    data() {
      return {
        topicTheme: [],
      }
    },
    computed: {},
    mounted() {
      this.axios.get('https://cnodejs.org/api/v1/topics').then((res) => {
        this.topicTheme = res.data.data;
      }).catch(err => console.log(err));
    }
  }
</script>

<style>
  .side-inHome {
    flex: 1;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }
  
  .topic-no-answer {
    margin-bottom: 20px;
    padding: 0 0 20px;
    background: #ffffff;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }
  
  .topic-no-answer .title {
    padding: 10px;
    margin-bottom: 10px;
    color: #51585c;
    background-color: #f6f6f6;
  }
  
  .topic-no-answer dd {
    padding: 0 10px;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
