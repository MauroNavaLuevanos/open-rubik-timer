import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from '@/components/views/PageNotFound'
import History from '@/components/views/History'
import Timer from '@/components/views/Timer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
