import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/page/test/main/MainView.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/page/test/member/SignView.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/page/test/board/BoardBody.vue'),
    children: [
      {
        path: '/board/list',
        name: 'BoardListPage',
        component: () => import('../views/page/test/board/list/BoardListPage.vue')
      },
      {
        path: '/board/enroll/anonym',
        name: 'BoardEnrollAnonymView',
        component: () => import('../views/page/test/board/enroll/BoardEnrollAnonymView.vue')
      },
      {
        path: '/board/enroll/user',
        name: 'BoardEnrollUserView',
        component: () => import('../views/page/test/board/enroll/BoardEnrollUserView.vue')
      },
      {
        path: '/board/detail',
        name: 'BoardDetailPage',
        component: () => import('../views/page/test/board/detail/BoardDetailPage.vue')
      },
      {
        path: '/board/update',
        name: 'BoardUpdateView',
        component: () => import('../views/page/test/board/update/BoardUpdateView.vue')
      },
    ]

  },
  {
    path: '/lawfirm',
    name: 'LawFirmBody',
    component: () => import('../views/page/test/lawFirm/LawFirmBody.vue'),
    children: [
      {
        path: '/lawfirm/list',
        name: 'LawFirmList',
        component: () => import('../views/page/test/lawFirm/list/LawFirmList.vue')
      },
      {
        path: '/lawfirm/detail',
        name: 'LawFirmDetail',
        component: () => import('../views/page/test/lawFirm/detail/LawFirmDetail.vue')
      },
      {
        path: '/lawfirm/board/detail',
        name: 'LawFirmBoardDetailPage',
        component: () => import('../views/page/test/board/detail/BoardDetailPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
