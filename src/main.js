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
  const axios = require('axios');
  let openID = VueCookie.get("openID");
  let code =to.query.code;
  let voteOpenID = to.query.openID;
  let user = store.state.user

  if (!openID && !code) {
    //先跳转到微信端请求授权
    if (to.name === 'vote') {
      window.location.href("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b5f9dbc5c61f4e9&redirect_uri=" + encodeURIComponent("http://binarytre.com/vote?openID=" + voteOpenID) + "&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect")
    } else {
      window.location.href("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b5f9dbc5c61f4e9&redirect_uri=http%3A%2F%2Fbinarytre.com&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect")
    }
  }

  if (user && user.hasOwnProperty("openID")){
    if (to.name === "clothes") {
      // console.log(user.clothesJson)
      if (user.clothesJson) {
        next({ path: '/ranking' })
      }else {
        next()
      }
    }
  } else if (openID) {
    await axios.get('/bmw/api/user/' + openID)
      .then(function (response) {
        let result = response.data
        if (result.status === 1) {
          let user = result.data;
          store.commit("setUser", user)
          VueCookie.set("openID", user.openID)
          if (to.name === "clothes") {
            // console.log(user.clothesJson)
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
