import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import { routes } from './routes';

const router = new VueRouter({ routes, mode: 'history' });

//Es6 - Parâmetro e valor com menos nome. 

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})