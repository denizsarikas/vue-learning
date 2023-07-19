import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstFormView from '../views/FirstForm.vue'
import HwFormView from '../views/HwForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/firstform',
    name: 'FirstForm',
    component: FirstFormView
  },
  {
    path: '/hwform',
    name: 'HwForm',
    component: HwFormView
  },
  // {
  //   path: '/coaches/:id',
  //   component: CoachDetail,
  //   props: true,
  //   children: [
  //     { path: 'contact', component: ContactCoach } // /coaches/c1/contact
  //   ]
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
