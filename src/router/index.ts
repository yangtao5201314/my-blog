import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "homepage" */ '../views/homepage/index.vue'),
    children: [],
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import(/* webpackChunkName: "navigation" */ '@v/navigation/index.vue'),
    children: [],
  },
  {
    path: '/warbler/js',
    name: 'warblerJS',
    component: () => import(/* webpackChunkName: "warblerJS" */ '@v/warblerJs/index.vue'),
    children: [],
  },
  {
    path: '/warbler/cli',
    name: 'warblerCli',
    component: () => import(/* webpackChunkName: "warblerCli" */ '@v/warblerCli/index.vue'),
    children: [],
  },
  {
    path: '/dataCenter',
    name: 'dataCenter',
    component: () => import(/* webpackChunkName: "dataCenter" */ '@v/dataCenter/index.vue'),
    children: [],
  },
  {
    path: '/warblerCenter',
    name: 'warblerCenter',
    component: () => import(/* webpackChunkName: "warblerCenter" */ '@v/warblerCenter/index.vue'),
    children: [],
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@v/contact/index.vue'),
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
