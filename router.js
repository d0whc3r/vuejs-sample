import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/home.vue';
import Start from './pages/start.vue';
import NotFound from './pages/notfound.vue';

Vue.use(Router);

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

export default router;