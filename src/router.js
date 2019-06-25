import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import ClothesHome from './views/clothesEdit/clothesHome'
import Front from './views/clothesEdit/components/front'
import Back from './views/clothesEdit/components/back'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/front',
      name: 'clothesHome',
      component: ClothesHome,
      children:[
        {
          path:'/front',
          name:'front',
          component:Front,
          meta:{
            title:'正面'
          }
        },
        {
          path: '/back',
          name: 'back',
          component: Back,
          meta: {
            title: '背面'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
