import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/BlogLogin'
import BlogIn from '@/components/BlogIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogLogin',
      component: BlogLogin
    },
    {
      path: '/',
      name: 'BlogIn',
      component: BlogIn
    }

  ]
})
