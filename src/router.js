import Vue from 'vue'
import Router from 'vue-router'
import Clothes from './views/Clothes'
import Ranking from './views/rankingList/RankingList'
// import Personal from './views/personal/Personal'
// import PersonalFront from './views/personal/children/PersonalFront'
// import PersonalBack from './views/personal/children/PersonalBack'
import Introduction from './views/Introduce'
import Home from './views/Home'
import Information from './views/Information'
import Invitation from './views/Invitation'
import Activity from './views/Activity'
import ActivityTwo from './views/ActivityTwo'
import Vote from './views/Vote'
import Navigation from './views/Navigation'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: "/bmw/",
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
    // {
    //   path:'/personal',
    //   name:'personal',
    //   component:Personal,
    //   redirect:'/personal/front',
    //   children: [
    //     {
    //       path:'/personal/front',
    //       name:'front',
    //       component:PersonalFront,
    //       meta:{
    //         title:'正面'
    //       }
    //     },
    //     {
    //       path:'/personal/back',
    //       name:'back',
    //       component:PersonalBack,
    //       meta:{
    //         title:'背面'
    //       }
    //     }
    //   ]
    // },
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
    },
    {
      path:'/activitytwo',
      name:'activityTwo',
      component:ActivityTwo,
      meta:{
        title:'活动亮点'
      }
    },
    {
      path:'/vote',
      name:'vote',
      component:Vote,
      meta:{
        title:'投票页面'
      }
    },{
      path:'/navigation',
      name:'navigation',
      component:Navigation,
      meta: {
        title: '导航页面'
      }
    }




  ]
})
