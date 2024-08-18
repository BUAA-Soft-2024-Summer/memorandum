import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'List',
      component: () => import('../views/List.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('../views/Add.vue')
    },
    {
      path: '/rubbish',
      name: 'Rubbish',
      component: () => import('../views/Rubbish.vue')
    },
  ]
})

export default router
