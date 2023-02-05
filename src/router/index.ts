import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/page/test/MainView.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/page/test/SignView.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/page/test/BoardView.vue')
  },
  {
    path: '/board/enroll',
    name: 'boardEnroll',
    component: () => import('../views/page/test/BoardEnrollView.vue')
  },
  {
    path: '/board/detail',
    name: 'BoardDetailView',
    component: () => import('../views/page/test/BoardDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
