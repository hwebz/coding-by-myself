import Vue from 'vue'
import Router from 'vue-router'
import Counter from './views/CounterView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkClass: "nav-link",
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'counter',
      component: Counter
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import(/* webpackChunkName: "todo" */ './views/TodoView.vue')
    },
  ]
})
