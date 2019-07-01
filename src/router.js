import Vue from 'vue'
import Router from 'vue-router'
import Clothes from './views/ClothesEdit'
import Ranking from './views/rankingList/RankingList'
import Personal from './views/personal/Personal'
import PersonalFront from './views/personal/children/PersonalFront'
import PersonalBack from './views/personal/children/PersonalBack'
import Introduction from './views/Introduce'
import Home from './views/Home'
import Information from './views/Information'
import Invitation from './views/Invitation'
import Activity from './views/Activity'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction,
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: Clothes,
    },
    {
      path: '/information',
      name: 'information',
      component: Information,
    },
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
    },
    {
      path:'/invitation',
      name:'invitation',
      component:Invitation,
      meta:{
        title:'发布详情页'
      }
    },
    {
      path:'/activity',
      name:'activity',
      component:Activity,
      meta:{
        title:'活动亮点'
      }
    }

  ]
})
