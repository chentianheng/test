import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import axios from 'axios'
import VueCookie from 'vue-cookie';

Vue.config.devtools = true
// import VueTouch from 'vue-touch';

Vue.use(VueCookie);

// 引入左右滑动事件
// Vue.use(VueTouch, {name: 'v-touch'});
// VueTouch.config.swipe = {
//     threshold: 100 //手指左右滑动距离
// }

Vue.config.productionTip = false

router.beforeEach( async (to, from, next) => {
  // todo:获取cookie是否有openID
  // 有：查询用户信息
  // 无：授权（动态授权，静态授权）
  // 获取code（to.query.code）之后全局保存用户对象，cookie保存openID
  let openID = VueCookie.get("openID");
  let code =to.query.code;
  const axios = require('axios');

  openID = "oHDTCwX3Ql7BkN5zeJQFFmlbHECY"

  if (openID){
    await axios.get('/bmw/api/user/' + openID)
        .then(function (response) {
            let result = response.data
            if (result.status === 1) {
                let user = result.data;
                store.commit("setUser", user)
                VueCookie.set("openID", user.openID)
                if (from.name === "home") {
                    console.log(user.clothesJson)
                    if (user.clothesJson) {
                        next({ path: '/ranking' })
                    }else {
                        next()
                    }
                }
            } else {
                console.log(result.msg)
            }

        });
  } else {
    //  静态授权
    if(to.name === "vote"){
      await axios.get('/bmw/api/mp/oauth2/base?code=' + code)
          .then(function (response) {
              let result = response.data
              if (result.status === 1) {
                  let openID = result.data;
                  VueCookie.set("openID", openID)
              } else {
                  console.log(result.msg)
              }
          })
    } else {
      await axios.get('/bmw/api/mp/oauth2?code=' + code)
          .then(function (response) {
              let result = response.data
              if (result.status === 1) {
                  let user = result.data;
                  store.commit("setUser", user)
                  VueCookie.set("openID", user.openID)
                  if (from.name === "home") {
                      console.log(user.clothesJson)
                      if (user.clothesJson) {
                          next({ path: '/ranking' })
                      }else {
                          next()
                      }
                  }
              } else {
                  console.log(result.msg)
              }
            // store.commit()
          })
    }
  }
  next()
});

new Vue({
  axios,
  animated,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
