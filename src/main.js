import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import axios from 'axios'
import VueCookie from 'vue-cookie';
import {removeParam} from "./wx";

Vue.config.devtools = true
// import VueTouch from 'vue-touch';

Vue.use(VueCookie);

// 引入左右滑动事件
// Vue.use(VueTouch, {name: 'v-touch'});
// VueTouch.config.swipe = {
//     threshold: 100 //手指左右滑动距离
// }

Vue.config.productionTip = false

import {dynamic, base} from "./wx";
router.beforeEach( async (to, from, next) => {
  const axios = require('axios');
  let openID = VueCookie.get("openID");
  let code =to.query.code;
  let voteOpenID = to.query.openID;
  let user = store.state.user

  if (!store.state.url) {
    let url = location.href.split('#')[0];
    if (url.indexOf("from") > -1 || url.indexOf("isappinstalled") > -1) {
      window.location.href = removeParam("isappinstalled", removeParam("from", location.href.split('#')[0]))
    } else {
      store.commit("setUrl", location.href.split('#')[0]);
    }
  }

  if (to.name === 'vote') {
    if (openID) {
      next()
    } else {
      if (code) {
        base(code);
        next()
      } else {
        window.location.href = ("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b5f9dbc5c61f4e9&redirect_uri=" + encodeURIComponent("http://binarytre.com/vote?openID=" + voteOpenID) + "&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect")
      }
    }
  } else if (to.name === 'clothes') {
    if (openID && user && user.hasOwnProperty("openID")) {
      if (user.clothesJson) {
        next({ path: '/ranking' })
      }else {
        next()
      }
    }
  } else if (to.name === 'home') {
    if (openID) {
      await axios.get('/bmw/api/user/' + openID)
        .then(function (response) {
          let result = response.data
          if (result.status === 1) {
            let user = result.data;
            if (user) {
              store.commit("setUser", user);
              VueCookie.set("openID", user.openID)
            } else {
              if (code) {
                dynamic(code);
                next();
              } else {
                window.location.href = ("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b5f9dbc5c61f4e9&redirect_uri=http%3A%2F%2Fbinarytre.com&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect")
              }
            }
          } else {
            console.log(result.msg)
          }
        });
    } else {
      if (code) {
        dynamic(code);
        next();
      } else {
        window.location.href = ("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5b5f9dbc5c61f4e9&redirect_uri=http%3A%2F%2Fbinarytre.com&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect")
      }
    }
  } else {
    next()
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
