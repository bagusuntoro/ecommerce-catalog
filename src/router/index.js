import { createRouter, createWebHistory } from 'vue-router'
import Mens from '../views/mens/ParentMens.vue'


const routes = [
  {
    path: '/',
    name: 'mens',
    component: Mens
  },
  {
    path: '/womens',
    name: 'womens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/womens/ParentWomens.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
