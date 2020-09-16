import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login';
import Dashboard from './views/customer/Dashboard'
import MassageList from './views/MassageList'
import Therapist from './views/Therapist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/type',
      component: MassageList
    },
    {
      path: '/facilitator',
      component: Therapist
    }
  ]
})
