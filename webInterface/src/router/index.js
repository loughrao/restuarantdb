import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menus from '@/components/sql/Menus'
import Food from '@/components/sql/Food'
import Employees from '@/components/sql/Employees'
import Roles from '@/components/sql/Roles'
import Customers from '@/components/sql/Customers'
import Orders from '@/components/sql/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menus',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/roles',
      name: 'Roles',
      component: Roles
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
  ]
})
