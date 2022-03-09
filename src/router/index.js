import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultLayout from '@/components/DefaultLayout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
