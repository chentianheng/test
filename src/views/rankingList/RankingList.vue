<template>
  <div class="bgContainer">
    <img class="subTitleImg animated fadeInLeftBig" src="../../assets/icon/subTitleImg.png" alt="">
    <p class="subTitle animated fadeIn delay-1s">温馨提示：用户每人每天投票一次</p>
    <div class="list animated bounceIn delay-1s">
      <Work
              v-for="( work,index ) in works"
              :key="index"
              :data="work"
      ></Work>
    </div>
    <img class="footerBtn animated fadeIn delay-2s" src="../../assets/icon/detailBtn-0.png" @click="toAty" alt="">
    <!--new-->
    <img class="footerBtn animated fadeIn delay-2s" src="../../assets/icon/joinBtn.png" @click="toHome" alt="">
    <!--我的作品-->
    <!--todo：根据缓存查到昵称，然后请求查看票数-->
    <!--<p class="name">我的票数：111111</p>-->
    <!--<p class="name">我的排名：1</p>-->
    <!--<button class="blueButton">我的作品</button>-->
  </div>
</template>

<script>
  import Work from './components/Work'
  import VueCookie from 'vue-cookie';
  import {share} from "../../wx";

  export default {
    name: "rankingList",
    components: {
      Work
    },
    data() {
      return {
        user: [],
        works: [],
      }
    },
    async created() {
      await this.init()
      await this.rank()
      share()
    },
    methods: {
      toAty() {
        this.$router.push('/invitation')
      },
      toHome(){
        this.$router.push('/')
      },
      init() {
        const axios = require('axios');
        let openID = VueCookie.get("openID")
        if (openID) {
          axios.get('/bmw/api/user/' + openID)
            .then(response => {
              let result = response.data
              if (result.status === 1) {
                let user = result.data;
                this.$store.commit("setUser", user)
                VueCookie.set("openID", user.openID)
                this.user = user
                this.works.push(user)
              } else {
                console.log(result.msg)
              }
            });
        }
      },
      rank() {
        let number = 200;
        const axios = require('axios')
        axios({
          method: 'get',
          url: '/bmw/api/user/rank?number=' + number,
          responseType: 'json'
        }).then(response => {
          let result = response.data;
          if (result.status === 1) {
            let rankList = result.data;
            for (let index in rankList) {
              let user = rankList[index]
              if (!!this.user && user.openID !== this.user.openID) {
                this.works.push(rankList[index]);
              }
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  .bgContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../../assets/background-2.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: black;
  }

  .list {
    display: flex;
    /*align-items: center;*/
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 98%;
    height: 25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    /*background-color: rgba(255,255,255,0.1);*/
  }

  /*滚动条样式*/
  .list::-webkit-scrollbar {
    width: 5px;
    height: 1px;
  }

  .list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    /*background-color: #1a3b88;*/
    background-color: white;
  }

  .title {
    color: #1a3b88;
    font-size: 18px;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .subTitleImg {
    margin-top: 3rem;
    width: 12rem;
    margin-bottom: 4px;
  }

  .subTitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 11px;
  }

  .footerBtn {
    width: 9rem;
  }

  .footerBtn + .footerBtn{
    margin-top: 1rem;
    width: 9rem;
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .blueButton {
    background-color: #1c69d4;
    font-size: 16px;
    margin-top: 1rem;
    height: 40px;
    width: 150px;
    color: white;
    border: none;
  }
</style>
