<template>
  <div class="bgContainer">
    <!--点击提示-->
    <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png" @click="toRanking" alt="">
    <div class="blackContainer animated zoomIn">
      <!--front衣服视图-->
      <div class="" v-show="frontShow">
        <div class="clothesImgBoarder">
          <!--衣服编辑框+颜色位置-->
          <img style="width: 30px;position: relative;left: 6rem;"
               src="../assets/icon/changeIcon.png"
               @click="changeClothes"
               alt=""/>

          <div class="clothesImg animated fadeIn">

            <div :class="`front${this.user.clothes.color}`"></div>
            <!--左方的icon-->
            <i v-show="this.user.clothes.front.leftShow" class="position1"><img
                    :src="this.user.clothes.front.frontLeftImgUrl" height="30" alt=""/></i>
            <!--右方的icon-->
            <i v-show="this.user.clothes.front.rightShow" class="position2"><img
                    :src="this.user.clothes.front.frontRightImgUrl" height="30" alt=""/></i>
            <!--正方的icon-->
            <i v-show="this.user.clothes.front.middleShow" class="position3"><img
                    :src="this.user.clothes.front.frontMiddleImgUrl" height="30" alt=""/></i>
            <p class="text" v-show="this.user.clothes.front.textShow"
               :style="{ fontSize: this.user.clothes.front.text.fontSize + 'px' }">{{
              this.user.clothes.front.text.textMsg }}</p>
          </div>
        </div>
      </div>
      <!--Back衣服视图-->
      <div class="" v-show="backShow">
        <div class="clothesImgBoarder">
          <!--衣服编辑框+颜色位置-->
          <img style="width: 30px;position: relative;left: 6rem;"
               src="../assets/icon/changeIcon.png"
               @click="changeClothes"
               alt=""/>

          <div class="clothesImg animated fadeIn">
            <div :class="`back${this.user.clothes.color}`"></div>
            <i v-show="this.user.clothes.back.iconShow" class="position4"><img :src="this.user.clothes.back.backImgUrl"
                                                                               height="30" alt=""/></i>
            <!--<p class="text" v-show="works.clothesJson.back.textShow" :style="{ fontSize: works.clothesJson.back.text.fontSize + 'px' }">{{ clothes.back.text.textMsg }}</p>-->
          </div>
        </div>
      </div>
      <!--<p class="pTitle">设计上传完成</p>-->
      <!--<p class="content">*了解更多活动详情，请咨询宝马当地授权经销商。</p>-->
      <img class="footerBtn" src="../assets/icon/voteBtn2.png" @click="toVote" alt="">
      <img class="footerBtn" src="../assets/icon/detailBtn-0.png" @click="toAty" alt="">
      <img class="footerBtn" src="../assets/icon/joinBtn.png" @click="toHome" alt="">
    </div>

    <!--toast消息-->
    <div class="toast animated fadeIn" v-show="toastShow">
      {{toastText}}
    </div>
  </div>
</template>

<script>
  // 分享开发nnn
  export default {
    name: "Vote",
    async created() {
      // 1.从路由拿回openID
      this.openID = this.$route.query.openID
      // 2.对接接口，获取数据并储存
      const axios = require('axios');
      await axios({
        method: 'get',
        url: '/bmw/api/user/' + this.openID,
        responseType: 'json'
      }).then(response => {
        let result = response.data;
        if (result.status === 1) {
          this.user = result.data;
          this.user.clothes = JSON.parse(decodeURIComponent(encodeURIComponent(this.user.clothesJson)))
        } else {
          console.log(result.msg)
        }
      })
      await this.$store.dispatch('latestWxConfig', location.href.split('#')[0])
      wx.config(this.$store.state.wxConfig)
      console.log(wx)
      this.share();
    },
    data() {
      return {
        openID: "",
        frontShow: true,
        backShow: false,
        user: {},
        toastShow: false,
        toastText: '',
      }
    },
    methods: {
      changeClothes() {
        this.frontShow = !this.frontShow;
        this.backShow = !this.backShow;
      },
      toRanking() {
        this.$router.push('/ranking')
      },
      toAty() {
        this.$router.push('/invitation')
      },
      toHome() {
        this.$router.push('/')
      },
      toVote() {
        const axios = require('axios');
        let that = this;
        let userID = this.user.id;
        let openID = this.$store.state.user.openID;
        axios({
          method: 'post',
          url: '/bmw/api/vote',
          params: {
            openID: openID,
            userID: userID
          }
        }).then(function (response) {
          let result = response.data;
          let msg = result.msg;
          that.toast(msg);
        }).catch(function (error) {
          console.log(error);
        });
      },
      toast(str) {
        let v = this
        v.toastText = str
        v.toastShow = true
        setTimeout(function () {
          v.toastShow = false
        }, 1500)
      },
      // 分享方法，用nnn
      share() {
        var that = this
        this.option = {
          title: '全城寻求潮流达人', // 分享标题, 请自行替换
          desc: '全新BMW 3系广州发布会', // 分享描述, 请自行替换
          link: encodeURIComponent("http://binarytre.com/vote?openID=" + this.openID), // 分享链接，根据自身项目决定是否需要split
          imgUrl: "https://mo.bintre.com/bmw.png" // 分享图标, 请自行替换，需要绝对路径
        }
        wx.onMenuShareTimeline({
          title: that.option.title, // 分享标题
          link: that.option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: that.option.imgUrl, // 分享图标
          success() {
            alert('分享朋友圈成功')
            // 用户确认分享后执行的回调函数
          },
          cancel() {
            // 用户取消分享后执行的回调函数
          }
        })
        wx.onMenuShareAppMessage({
          title: that.option.title, // 分享标题
          desc: that.option.desc, // 分享描述
          link: that.option.link,
          imgUrl: that.option.imgUrl, // 分享图标
          success: function () {
            alert('分享给朋友成功')
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      },
    }
  }
</script>

<style scoped>
  .bgContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/background-3.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: black;
  }

  .title {
    margin-top: 2rem;
    font-size: 26px;
    color: white;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .pTitle {
    /*margin-top: ;*/
    font-size: 20px;
    color: white;
    font-weight: 300;
  }

  .content {
    margin-top: 1rem;
    font-size: 12px;
    color: white;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .tableContainer {
    display: flex;
    flex-direction: column;
    width: 70%;
    overflow-x: hidden;
  }

  .select {
    width: 97%;
    height: 2rem;
    border: solid 1px transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: white url("../assets/icon/down.png") no-repeat scroll right center;
    background-size: 1.2rem auto;
    border-radius: 4px;
    padding-left: 5px;
  }

  .nameInput {
    width: 50%;
    height: 2rem;
    border: solid 1px transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: white;
    border-radius: 4px;
    margin-right: 14px;
    padding-left: 5px;
  }

  .nameSex {
    text-align: left;
  }

  .input {
    width: 95%;
    height: 2rem;
    border: solid 1px transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: white;
    border-radius: 4px;
    padding-left: 5px;
    padding-right: 0;
  }

  .label {
    margin-top: 1rem;
    color: white;
    font-size: 14px;
    text-align: left;
    width: 100%;
    margin-right: 14px;
  }

  .blueButton {
    background-color: transparent;
    background-image: url("../assets/icon/commonBtn.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    font-size: 16px;
    font-weight: 500;
    /*text-align: right;*/
    padding-bottom: 1rem;
    padding-left: 2rem;
    margin-top: 3rem;
    height: 2rem;
    width: 12rem;
    color: white;
    border: none;
    animation-delay: 800ms;

  }

  .blackContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.85);
    width: 80%;
    height: 90%;
    overflow-y: auto;
    position: absolute;
    top: 1.5rem;
    padding: 1rem;
  }

  .voteBtn {
    background-image: url("../assets/icon/voteBtn.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: 10rem;
    height: 2.2rem;
    border: none;
    background-color: transparent;
    margin-top: 2rem;
    color: white;
    font-size: 16px;
  }

  .clothesImgBoarder {
    /*margin-left: calc(16px + 1rem);*/
    position: relative;
    padding: 1rem 1rem 0;
    width: 15rem;
    height: 19rem;
    background-color: rgba(45, 45, 45, 0.4);
    overflow-y: hidden;
    margin-bottom: 1rem;
  }

  .clothesImg {
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 25rem;
    align-items: center;

  }

  /*衣服位置定位*/
  .position1 {
    height: auto;
    width: 25px;
    /*position: relative;*/
    /*bottom: 20rem;*/
    /*right: 2.5rem;*/
    position: absolute;
    bottom: 12rem;
    left: 5rem;
    z-index: 11;
  }

  .position1 img {
    height: auto;
    width: 25px;

  }

  .position2 {
    height: auto;
    width: 25px;
    /*position: relative;*/
    /*bottom: 20rem;*/
    /*left: 2.5rem;*/
    position: absolute;
    bottom: 12rem;
    right: 5rem;
    z-index: 22;
  }

  .position2 img {
    height: auto;
    width: 25px;
  }

  .position3 {
    height: auto;
    width: 80px;
    position: absolute;
    bottom: 10rem;
    z-index: 33;
  }

  .position3 img {
    height: auto;
    width: 80px;
  }

  .position4 {
    height: auto;
    width: 80px;
    position: absolute;
    bottom: 11.5rem;
    z-index: 33;
  }

  .position4 img {
    height: auto;
    width: 80px;
  }

  .text {
    color: #757575;
    white-space: pre-line;
    line-height: 1.25em;
    height: auto;
    width: 8.8rem;
    position: absolute;
    bottom: 8.5rem;
    z-index: 33;
  }

  /*不同颜色的衣服的样式*front*/
  .frontWhite {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/frontWhite.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .frontBlack {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/frontBlack.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .frontBlue {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/frontBlue.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .frontOrange {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/frontOrange.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .frontGrey {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/frontGrey.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  /*不同颜色的衣服的样式*back*/
  .backWhite {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/backWhite.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
    margin-bottom: 1px;
  }

  .backBlack {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/backBlack.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .backBlue {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/backBlue.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .backOrange {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/backOrange.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .backGrey {
    /*margin-top: 2.5rem;*/
    background-image: url("../assets/clothes/backGrey.png");
    background-size: 15rem auto;
    width: 15rem;
    height: 25rem;
    background-repeat: no-repeat;
  }

  .footerBtn {
    margin-top: 1rem;
    width: 10rem;
  }

  .toast {
    position: fixed;
    z-index: 2000;
    left: 50%;
    top: 45%;
    transition: all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color: #FFF;
    background: rgba(17, 17, 17, 0.7);
    /*height: 45px;*/
    /*line-height: 45px;*/
    padding: 15px;
    max-width: 150px;
    font-size: 14px;
    height: auto;
  }

  .tips {
    position: absolute;
    height: 50px;
    width: auto;
    right: 10%;
    top: 80%;
    z-index: 1000
  }
</style>
