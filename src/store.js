import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes:{
       front:{
         leftShow : true,
         rightShow : false,
         middleShow : false,
         frontLeftImgUrl:"",
         frontRightImgUrl:"",
         frontMiddleImgUrl:"",
         textShow : false,
         text:{
           textMsg : "",
           fontSize : 12
         },
       },
       back:{
         backImgUrl:"",
         textShow : false,
         iconShow : true,
         text:{
           textMsg : "",
           fontSize : 12
         },
       },
       color:"White",
       reason:{
         options:["外观", "内饰", "操控", "品牌", "科技感", "动力"],
         selected:[],
       },
       name:"",
       sex:"lady",
       phone:"",
       fourS:{
         options:[
           "广州宝悦汽车贸易有限公司",
           "广东粤宝汽车销售服务有限公司",
           "广州宝悦汽车贸易有限公司第一分公司",
           "广州宝泽汽车销售服务有限公司",
           "广州粤之宝汽车销售服务有限公司",
           "广州宝泰行汽车销售服务有限公司",
           "广州市广德宝汽车销售服务有限公司",
           "广州市昌宝汽车销售服务有限公司",
           "广州宝升行汽车销售服务有限公司",
           "广州君宝汽车销售服务有限公司",
           "广东南方宝诚汽车销售服务有限公司"],
         selected:"",
       },
       uploadSuccessful:false
     },
    user: {},
    rankList:[],
    wxConfig: {},
    url: 'http://binarytre.com'
  },
  mutations: {
    setClothes(state, clothes) {
      state.clothes = clothes
    },
    setUser(state, user) {
      state.user = user
    },
    setRankList(state,rankList)  {
        state.rankList = rankList
    },
    updateWxConfig(state, wxConfig) {
      state.wxConfig = wxConfig
    },
    setUrl(state, url) {
      state.url = url
    }
  },
  actions: {
    async latestWxConfig({state, commit}) {
      const axios = require('axios');
      await axios({
        method: 'get',
        url: '/bmw/api/mp/oauth2/JsTicket?url=' + state.url,
        responseType: 'json'
      }).then(response => {
        let data = response.data;
        if (data.status === 1) {
          let result = data.data
          let wxConfig = {
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: result.appId, // 必填，公众号的唯一标识
            timestamp: result.timestamp, // 必填，生成签名的时间戳
            nonceStr: result.nonceStr, // 必填，生成签名的随机串
            signature: result.signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          };
          commit('updateWxConfig', wxConfig)
        }
      })
    }
  }
})
