import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Goods = (resolve) => {
 import('@/components/goods/goods.vue').then((module) => {
   resolve(module)
 })
}
const Ratings = (resolve) => {
 import('@/components/rattings/rattings.vue').then((module) => {
   resolve(module)
 })
}
const Seller = (resolve) => {
 import('@/components/seller/seller.vue').then((module) => {
   resolve(module)
 })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/rattings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    },
  ]
})
