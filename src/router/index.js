import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: '',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      name: '导航一',
      component: Home,
      iconCls: 'el-icon-message'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
