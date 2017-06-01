import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import NotFound from '../views/404'
import Table from '../views/nav1/Table'
import Form from '../views/nav1/Form'
import User from '../views/nav1/User'
import Page4 from '../views/nav2/Page4'
import Page5 from '../views/nav2/Page5'
import Page6 from '../views/nav3/Page6'

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
      path: '/404',
      name: '',
      component: NotFound,
      hidden: true
    },
    {
      path: '/',
      name: '导航一',
      component: Home,
      iconCls: 'el-icon-message',
      children: [
        {
          path: '/table',
          component: Table,
          name: 'Table'
        },
        {
          path: '/form',
          component: Form,
          name: 'Form'
        },
        {
          path: '/user',
          component: User,
          name: '列表'
        }
      ]
    },
    {
      path: '/',
      name: '导航二',
      component: Home,
      iconCls: 'fa fa-id-card-o',
      children: [
        {
          path: '/page4',
          component: Page4,
          name: '页面4'
        },
        {
          path: '/page5',
          component: Page5,
          name: '页面5'
        }
      ]
    },
    {
      path: '/',
      name: '',
      component: Home,
      iconCls: 'fa fa-address-card',
      leaf: true,
      children: [
        {
          path: '/page6',
          component: Page6,
          name: '导航三'
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
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
