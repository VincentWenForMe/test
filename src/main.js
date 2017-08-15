// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import Vuex from 'vuex';

Vue.use(Vueaxios, axios);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tab: 'all',
    list: [],
  },
  mutations: {
    changeTab(state, payload) {
      state.tab = payload.type || state.tab;
      state.list = payload.list || state.list;
    }
  }
})


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
