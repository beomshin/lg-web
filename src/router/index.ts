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
    component: () => import('../views/page/test/BoardListView.vue')
  },
  {
    path: '/board/enroll/anonym',
    name: 'BoardEnrollAnonymView',
    component: () => import('../views/page/test/enroll/BoardEnrollAnonymView.vue')
  },
  {
    path: '/board/enroll/user',
    name: 'BoardEnrollUserView',
    component: () => import('../views/page/test/enroll/BoardEnrollUserView.vue')
  },
  {
    path: '/board/detail',
    name: 'BoardDetailView',
    component: () => import('../views/page/test/BoardDetailView.vue')
  },
  {
    path: '/board/update',
    name: 'BoardUpdateView',
    component: () => import('../views/page/test/BoardUpdateView.vue')
  },
  {
    path: '/lawfirm',
    name: 'LawFirmBody',
    component: () => import('../views/page/test/lawFirm/LawFirmBody.vue'),
    children: [
      {
        path: '/lawfirm/list',
        name: 'LawFirmList',
        component: () => import('../views/page/test/lawFirm/LawFirmList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
