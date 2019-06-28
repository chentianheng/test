import Vue from 'vue'
import Router from 'vue-router'
import ClothesHome from './views/clothesEdit/clothesEdit'
import Front from './views/clothesEdit/children/front'
import Back from './views/clothesEdit/children/back'
import Ranking from './views/rankingList/rankingList'
import Personal from './views/personal/Personal'
import PersonalFront from './views/personal/children/PersonalFront'
import PersonalBack from './views/personal/children/PersonalBack'

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
      ]},
    {
      path:'/ranking',
      name:'ranking',
      component:Ranking,
    },
    {
      path:'/personal',
      name:'personal',
      component:Personal,
      redirect:'/personal/front',
      children: [
        {
          path:'/personal/front',
          name:'front',
          component:PersonalFront,
          meta:{
            title:'正面'
          }
        },
        {
          path:'/personal/back',
          name:'back',
          component:PersonalBack,
          meta:{
            title:'背面'
          }
        }
      ]
    }

  ]
})
