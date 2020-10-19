// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import Index from './pages/Index.vue'
import Procuct from './pages/Product.vue'
import Detail from './pages/Detail.vue'
import Login from './pages/Login.vue'
import Order from './pages/Order.vue'
import OrderList from './pages/OrderList.vue'
import OrderConfirm from './pages/OrderConfirm.vue'
import OrderPay from './pages/OrderPay.vue'
import Alipay from './pages/Alipay.vue'
import Cart from './pages/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'product/:id',
        name: 'product',
        component: Procuct
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: Alipay
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

Vue.use(Router)

// const routerHistory = createWebHistory()
// const router = createRouter({
//   history: routerHistory,
//   routes
// })

const router = new Router({
  mode:'history',
  routes
})

export default router