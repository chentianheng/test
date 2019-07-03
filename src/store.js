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
    }
  },
  actions: {

  }
})
