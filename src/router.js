import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import History from './views/History.vue'
import Apply from './views/Apply.vue'
import QnA from './views/QnA.vue'
import Notice from './views/Notice.vue'
import NoticeWrite from './views/NoticeWrite.vue'
import NoticeDetail from './views/NoticeDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
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
      path: '/qna',
      name: 'qna',
      component: QnA
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
})
