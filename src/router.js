import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
        path:"/Coin",
          name:"Coin",
          component: () => import(/* webpackChunkName: "about" */ './views/Coin/Coin.vue')
      },
      {
        path:"/otc",
          name:"otc",
          component:()=> import('./views/otc/otc.vue')
      },
      {
        path:"/SuperWallet",
          name:"SuperWallet",
          component:() => import('./views/SuperWallet/SuperWallet.vue')
      }
  ]
})
