import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// export default new Router({
const routes = [
  {
    path: "/",
    compoent: () => import("./views/Home/index.vue")
    // meta: {
    //   title: "首页"
    // }
  },
  {
    path: "/city",
    compoent: () => import("./views/City/index.vue")
    // meta: {
    //   title: "城市页"
    // }
  },
  {
    path: "/tickets",
    compoent: () => import("./views/Tickets/index.vue"),
    children: [
      {
        path: "/child",
        compoent: () => import("./views/Tickets/children.vue")
      },
      {
        path: "/dance",
        compoent: () => import("./views/Tickets/dance.vue")
      },
      {
        path: "/musical",
        compoent: () => import("./views/Tickets/musical.vue")
      },
      {
        path: "/sports",
        compoent: () => import("./views/Tickets/sports.vue")
      }
    ]
  },
  {
    path: "/buy",
    compoent: () => import("./views/Buy/index.vue")
    // meta: {
    //   title: "买票"
    // }
  },
  {
    path: "/center",
    compoent: () => import("./views/Center/index.vue")
  },
  {
    path: "/login",
    compoent: () => import("./views/Login/index.vue")
  },
  {
    path: "/pay",
    compoent: () => import("./views/Pay/index.vue")
  },
  {
    path: "/stars",
    compoent: () => import("./views/Stars/index.vue")
  },

  {
    path: "/search",
    compoent: () => import("./views/Search/index.vue")
  },
  {
    path: "/posters",
    compoent: () => import("./views/Posters/index.vue")
  }
]
// })
const router = new Router({
  routes
})
export default router
