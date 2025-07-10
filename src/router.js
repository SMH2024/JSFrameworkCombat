import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './views/Home.vue';
import Characters from './views/Characters.vue';
import Play from './views/Play.vue';
import Instructions from './views/Instructions.vue';
import store from './store';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: { path: 'home' }
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'instructions',
      path: '/instructions',
      component: Instructions
    },
    {
      name: 'characters',
      path: '/characters',
      component: Characters
    },
    {
      path: '/play',
      component: Play,
      beforeEnter(to, from, next) {
        if (store.getters.player.name) {
          next();
        } else {
          next({ name: 'characters' });
        }
      }
    }
  ]
});
