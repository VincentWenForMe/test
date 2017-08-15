import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Display from '../components/display.vue';
import Author from '../components/author.vue';
import GetStart from '../components/getStart.vue';
import Api from '../components/api.vue';
import About from '../components/about.vue';
import SignIn from '../components/singIn.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/getStart',
      component: GetStart
    },
    {
      path: '/api',
      component: Api
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/signIn',
      component: SignIn
    },
    {
      path: '/display/:id',
      name: 'display',
      component: Display
    },
    {
      path: '/author/:loginname',
      name: 'author',
      component: Author
    }
  ]
})
