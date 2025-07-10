import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './views/Home';
import Characters from './views/Characters';
import Play from './views/Play';
import Instructions from './views/Instructions';
import Practice from './views/Practice';
import PracticePlay from './views/PracticePlay';
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
      name: 'practice',
      path: '/practice',
      component: Practice
    },
    {
      name: 'practice-play',
      path: '/practice-play',
      component: PracticePlay
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
