import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import History from './views/History.vue'
import Apply from './views/Apply.vue'
import FAQ from './views/FAQ.vue'
import Notice from './views/Notice.vue'
import NoticeWrite from './views/NoticeWrite.vue'
import NoticeDetail from './views/NoticeDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/apply',
    name: 'apply',
    component: Apply
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/notice/write/:id?',
    name: 'notice-write',
    component: NoticeWrite
  },
  {
    path: '/notice/:id',
    name: 'notice-detail',
    component: NoticeDetail
  }
]

const router = createRouter({
  history: createWebHistory(),  // Vue Router 4에서는 createWebHistory 사용
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
