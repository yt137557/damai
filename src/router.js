import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
const routes = [
  {
    path: '/',
    component: () => import('./views/Home/index.vue')
    // meta: {
    //   title: '首页'
    // }
  },
  {
    path: '/city',
    component: () => import('./views/City/index.vue')
    // meta: {
    //   title: "城市页"
    // }
  },
  {
<<<<<<< HEAD
    path: '/tickets/:goodid',
    component: () => import('./views/Tickets/index.vue')

    // children: [
    //   {
    //     path: "child",
    //     component: () => import("./views/Tickets/children.vue")
    //   },
    //   {
    //     path: "dance",
    //     component: () => import("./views/Tickets/dance.vue")
    //   },
    //   {
    //     path: "musical",
    //     component: () => import("./views/Tickets/musical.vue")
    //   },
    //   {
    //     path: "sports",
    //     component: () => import("./views/Tickets/sports.vue")
    //   }
    // ]
  },
  {
    path: '/buy/:showId',
=======
    path: '/tickets',
    component: () => import('./views/Tickets/index.vue'),
    children: [
      {
        path: 'child',
        component: () => import('./views/Tickets/children.vue')
      },
      {
        path: 'dance',
        component: () => import('./views/Tickets/dance.vue')
      },
      {
        path: 'musical',
        component: () => import('./views/Tickets/musical.vue')
      },
      {
        path: 'sports',
        component: () => import('./views/Tickets/sports.vue')
      }
    ]
  },
  {
    path: '/buy',
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
    component: () => import('./views/Buy/index.vue')
    // meta: {
    //   title: "买票"
    // }
  },
  {
    path: '/center',
    component: () => import('./views/Center/index.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue')
  },
  {
    path: '/pay',
    component: () => import('./views/Pay/index.vue')
  },
  {
    path: '/stars',
    component: () => import('./views/Stars/index.vue')
  },

  {
    path: '/search',
    component: () => import('./views/Search/index.vue')
<<<<<<< HEAD
  },
  {
    path: '/posters',
    component: () => import('./views/Posters/index.vue')
  },
  {
    path: '/sign-up',
    component: () => import('./views/Sign/index.vue')
=======
  },
  {
    path: '/posters',
    component: () => import('./views/Posters/index.vue')
  },
  {
    path: '/sign-up',
    component: () => import('./views/Sign/index.vue')
  },
  {
    path: '*',
    redirect: '/'
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
  }
]
// })
const router = new Router({
  routes
})

// 全局前置路由
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (window.login) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  } else {
    next()
  }
})
export default router
