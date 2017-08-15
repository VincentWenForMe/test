<template>
  <div class="hello">
    <ul class="type-list">
      <li @click="changeTab('all')" :class="tab==='all'? 'active': ''">全部</li>
      <li @click="changeTab('good')" :class="tab==='good'? 'active': ''">精华</li>
      <li @click="changeTab('share')" :class="tab==='share'? 'active': ''">分享</li>
      <li @click="changeTab('ask')" :class="tab==='ask'? 'active': ''">问答</li>
      <li @click="changeTab('job')" :class="tab==='job'? 'active': ''">招聘</li>
      <li @click="changeTab('dev')" :class="tab==='dev'? 'active': ''">客户端测试</li>
    </ul>
    <ul class="topics-list">
      <li v-for="(item, index) in list" :key="item.id">
            <span class="span-1"><img src="" :src="item.author.avatar_url" width="30"
                                      height="30" alt=""></span>
        <span class="span-2">{{item.reply_count}}/{{item.visit_count}}</span>
        <span class="span-3" v-show="!(tab==='good')" :class="!item.top? 'sp': ''">
              {{item.top ? '置顶': sorted(item.tab)}}
            </span>
        <span class="span-3" v-if="tab==='good'"><em>精华</em></span>
        <span class="span-4"><router-link
          :to="{name: 'display', params: {id: item.id}}">{{item.title}}</router-link></span>
        <div class="right-li">
          <img src="https://avatars2.githubusercontent.com/u/13548748?v=4&s=120" width="18"
               height="18" alt="">
          <em class="time">{{timeBetween(item.last_reply_at)}}</em> <br>
          {{infos.id}}
        </div>
      </li>
    </ul>
    <div class="page">
      <a @click="prevPage" title="上一页">«</a><a @click="nextPage" title="下一页">»</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        page: 1,
        infos: {
          author:{
            loginname: '',
            avatar_url: ''
          }
        }
      }
    },
    computed: {
      tab() {
        return this.$store.state.tab;
      },
      list() {
        return this.$store.state.list;
      }
    },
    methods: {
      changeTab(type, page) {
        this.$store.commit('changeTab', { type: type, list: [] });
        this.axios.get(`https://cnodejs.org/api/v1/topics?tab=${type}&page=${page}`).then(result => result.data.data).then((list) => {
          this.$store.commit('changeTab', {
            type: type,
            list: list
          })
        })
      },
      sorted(s) {
        switch (s) {
          case 'good':
            return '精华';
            break;
          case 'share':
            return '分享';
            break;
          case 'ask':
            return '问答';
            break;
          case 'job':
            return '招聘';
            break;
          case 'dev':
            return '测试';
            break;
          default:
            return '未知';
            break
        }
      },
      prevPage() { //上一页
        if (this.page != 0) {
          this.page--;
          console.log(this.page);
          this.changeTab(this.tab, this.page);
        } else {
          alert('已是首页了！');
          return false;
        }
      },
      nextPage() { // 下一页
        if (this.list.length < 40) {
          alert('已是尾页了！');
          return false;
        } else {
          this.page++;
          console.log(this.page);
          this.changeTab(this.tab, this.page);
        }
        
      },
      timeBetween(l) {
        let ll = new Date(l);
        let nn = new Date();
        let be = Math.abs(ll - nn);
        if (be < 1000) {
          return '刚刚更新';
        } else if (be < 3600000) {
          return Math.ceil(be / 60000) + '分前';
        } else if (be < 86400000) {
          return Math.ceil(be / 3600000) + '小时前';
        } else if (be < 2592000000) {
          return Math.ceil(be / 86400000) + '天前';
        } else if (be < 946080000000) {
          return Math.ceil(be / 2592000000) + '月前';
        } else if (be > 946080000000) {
          return Math.ceil(be / 946080000000) + '年前';
        }
      },
      relies(id) {
        this.axios.get('https://cnodejs.org/api/v1/topic/' + id).then((res) => {
          this.infos.author = res.data.data;
          console.log(res.infos);
        }).catch(res => console.log(res));
      },
      
    },
    created() {
      this.changeTab('all');
    }
  }
</script>

<style scoped>
  .type-list {
    display: flex;
    padding: 8px 10px;
    background-color: #f6f6f6;
  }
  
  .type-list li {
    padding: 3px 8px;
    margin-right: 10px;
    color: #80bd01;
  }
  
  .type-list li:hover, .type-list li.active {
    color: #ffffff;
    background: #80bd01;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .topics-list li {
    display: flex;
    /*height: 30px;*/
    padding: 10px;
    line-height: 30px;
    border-top: 1px solid #f6f6f6;
  }
  
  .topics-list li img {
    vertical-align: middle;
  }
  
  .topics-list li span {
    /*flex: auto;*/
  }
  
  .topics-list li:hover {
    background: #f6f6f6;
  }
  
  .span-1 {
    flex: 0 0 30px;
    width: 30px;
    margin-right: 10px;
  }
  
  .span-2 {
    min-width: 90px;
    margin-right: 10px;
    text-align: center;
  }
  
  .topics-list li span.span-3 {
    flex: 0 0 33px;
    position: relative;
    top: 2px;
    width: 33px;
    height: 25px;
    margin-right: 10px;
    font-size: 12px;
    border-radius: 3px 3px 0 0;
    color: #ffffff;
    background: #80bd01;
    text-align: center;
    line-height: 25px;
  }
  
  .topics-list li span.span-3.sp {
    background-color: #e5e5e5;
    color: #999;
  }
  
  .topics-list li span.span-4 {
    flex: 1;
  }
  
  .topics-list li .right-li {
    flex: 0 0 90px;
    margin-left: 10px;
    text-align: right;
  }
  
  .topics-list li .right-li em {
    display: inline-block;
    min-width: 60px;
    text-align: right;
  }
  
  .page {
    padding: 10px;
  }
  
  .page a {
    display: inline-block;
    padding: 4px 12px;
    line-height: 20px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0;
    cursor: pointer;
  }
  
  .page a:first-child {
    border-left: 1px solid #ddd;
  }
</style>
