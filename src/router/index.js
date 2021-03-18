import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Memo from '../views/Memo.vue'
import Schedule from '../views/Schedule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/memo',
    name: 'Memo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Memo
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
