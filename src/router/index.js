import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import i18n from '../plugins/i18n.js';

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/vife',
    name: 'vife',
    component: () => import('../views/ViFE.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (store.state.language.language && store.state.language.language !== i18n.locale) {
    i18n.locale = store.state.language.language;
    next();
  } else if (!store.state.language.language) {
    store.dispatch('language/setLanguage', navigator.languages)
        .then(() => {
          i18n.locale = store.state.language.language;
          next();
        });
  } else {
    next();
  }
});

export default router
