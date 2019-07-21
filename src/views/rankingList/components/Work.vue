<template>
  <div @click="toPerson" class="worksContainer">
    <div class="clothesWork">
      <div class="clothesImgBoarder">
        <div class="clothesImg">
          <div :class="`front${data.clothes.color}`"></div>
          <!--衣服上的文字-->

            <!--v-html="data.clothes.front.text.textMsg"-->
          <p class="text"
             v-show="data.clothes.front.textShow"
             style="font-size: 11px"
          >文字设计</p>
          <!--左方的icon-->
          <i v-show="data.clothes.front.leftShow" class="position2"><img
                  :src="data.clothes.front.frontLeftImgUrl" height="30" alt=""/></i>
          <!--右方的icon-->
          <i v-show="data.clothes.front.rightShow" class="position3"><img
                  :src="data.clothes.front.frontRightImgUrl" height="30" alt=""/></i>
          <!--正方的icon-->
          <i v-show="data.clothes.front.middleShow" class="position1"><img
                  :src="data.clothes.front.frontMiddleImgUrl" height="30" alt=""/></i>
        </div>
      </div>
      <p class="name">{{ data.nickname | ellipsis}}</p>
      <div class="vote">票数：{{ data.vote }}</div>
      <!--<div class="vote">排名：{{ user.rank }}</div>-->
    </div>
    <img class="headImg" :src="data.headImgUrl" alt="">
  </div>
</template>

<script>
  export default {
    name: "work",
    filters:{
      ellipsis(value){
        if (!value) return ''
        if (value.length > 9){
          return value.slice(0,9) + '..'
        }
        return value
      }
    },
    props: {
      data: {
        type: Object,
        required: true,
        default: () => {
          return {
            clothes: {
              color: ''
            }
          }
        }
      }
    },
    created() {
      this.data.clothes = JSON.parse(decodeURIComponent(encodeURIComponent(this.data.clothesJson)))
      console.log(this.data)
    },
    data() {
      return {}
    },
    methods: {
      toPerson() {
        this.$router.push({
          path: '/vote',
          query:{
            openID : this.data.openID
          }
        })
      }
    }
  }
</script>

<style scoped>
  .worksContainer {
    margin: 0.5rem 0 0 0.5rem;
    height: 12rem;
    width: 9.7rem;
    overflow-y: hidden;
  }

  .clothesWork {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .clothesImgBoarder {
    width: 8rem;
    height: 8rem;
    overflow-y: hidden;
    border: solid 2px white;
    background-color: rgba(133, 133, 133, 0.4);
  }

  .clothesImg {
    position: relative;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    width: 8rem;
    height: 10rem;
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .vote {
    width: 6rem;
    border: solid 1px white;
    background-color: rgba(25, 59, 131, 0.1);
    margin-top: 6px;
    color: white;
    font-weight: 200;
    font-size: 12px;
    /*padding-top: 2px;*/
    /*padding-bottom: 2px;*/
  }

  .headImg {
    width: 40px;
    border: solid 2px white;
    border-radius: 60px;
    position: relative;
    bottom: 4.5rem;
    right: 3.5rem;
  }

  /*不同颜色的衣服的样式*/
  .frontWhite {
    /*padding-top: 1rem;*/
    background-image: url("../../../assets/clothes/frontWhite.png");
    background-size: auto 5rem;
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
  }

  .frontBlack {
    /*padding-top: 1rem;*/
    background-image: url("../../../assets/clothes/frontBlack.png");
    background-size: auto 5rem;
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
  }

  .frontBlue {
    /*padding-top: 1rem;*/
    background-image: url("../../../assets/clothes/frontBlue.png");
    background-size: auto 5rem;
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
  }

  .frontOrange {
    /*padding-top: 1rem;*/
    background-image: url("../../../assets/clothes/frontOrange.png");
    background-size: auto 5rem;
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
  }

  .frontGrey {
    /*padding-top: 1rem;*/
    background-image: url("../../../assets/clothes/frontGrey.png");
    background-size: auto 5rem;
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
  }


  /*正中间*/
  .position1 {
    height: auto;
    width: 2rem;
    position: absolute;
    bottom: 7.5rem;

  }

  .position1 img {
    height: auto;
    width: 1.8rem;
  }

  .text {
    color: #757575;
    white-space: pre-line;
    line-height: 1.25em;
    height: auto;
    width: 2.5rem;
    position: absolute;
    bottom: 7rem;
    z-index: 33;
  }

  /*左側*/
  .position2 {
    height: auto;
    width: 2rem;
    position: absolute;
    bottom: 8rem;
    left: 2rem;
  }

  .position2 img {
    height: auto;
    width: 1rem;
  }

  /*右側*/
  .position3 {
    height: auto;
    width: 2rem;
    position: absolute;
    bottom: 8rem;
    right: 2.5rem;
  }

  .position3 img {
    height: auto;
    width: 1rem;
  }
</style>
