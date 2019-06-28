<template>
    <div class="container">
<!--衣服视图-->
        <div class="clothesImg">
             <img src="../../../assets/clothes/front.png"  alt=""/>
             <i v-show="iconShow" :class="`position${position.status}`"><img :src="imgUrl" height="30" alt=""/></i>
             <p class="text" v-show="textShow" :style="{ fontSize: text.fontSize + 'px' }">{{ text.textMsg }}</p>
        </div>
        <transition name="fade">
            <div class="textBar" v-show="textShow">
                <textarea v-model=" text.textMsg" placeholder="请输入文字" ></textarea>
                <i @click="textPlus" class="plus" ></i>
                <i @click="textReduce" class="reduce" ></i>
            </div>
        </transition>
        <!--图标选择栏-->
        <div class="iconBar">
            <!--显示文字输入-->
            <i @click="changeText" class="icon" ><img src="../../../assets/icon/text.png" height="45" width="45" alt=""/></i>
            <!--显示18个控件-->
            <i @click="change0" class="icon"><img src="../../../assets/icon/icon0.png" height="45" width="45" alt=""/></i>
            <i @click="change1" class="icon"><img src="../../../assets/icon/icon1.png" height="45" width="45" alt=""/></i>
            <i @click="change3" class="icon"><img src="../../../assets/icon/icon3.png" height="45" width="45" alt=""/></i>
            <i @click="change4" class="icon"><img src="../../../assets/icon/icon4.png" height="45" width="45" alt=""/></i>
            <i @click="change5" class="icon"><img src="../../../assets/icon/icon5.png" height="45" width="45" alt=""/></i>
            <i @click="change6" class="icon"><img src="../../../assets/icon/icon6.png" height="45" width="45" alt=""/></i>
            <i @click="change7" class="icon"><img src="../../../assets/icon/icon7.png" height="45" width="45" alt=""/></i>
            <i @click="change8" class="icon"><img src="../../../assets/icon/icon8.png" height="45" width="45" alt=""/></i>
            <i @click="change9" class="icon"><img src="../../../assets/icon/icon9.png" height="45" width="45" alt=""/></i>
            <i @click="change10" class="icon"><img src="../../../assets/icon/icon10.png" height="45" width="45" alt=""/></i>
            <i @click="change11" class="icon"><img src="../../../assets/icon/icon11.png" height="45" width="45" alt=""/></i>
            <i @click="change12" class="icon"><img src="../../../assets/icon/icon12.png" height="45" width="45" alt=""/></i>
            <i @click="change13" class="icon"><img src="../../../assets/icon/icon13.png" height="45" width="45" alt=""/></i>
            <i @click="change14" class="icon"><img src="../../../assets/icon/icon14.png" height="45" width="45" alt=""/></i>
            <i @click="change15" class="icon"><img src="../../../assets/icon/icon15.png" height="45" width="45" alt=""/></i>
            <i @click="change16" class="icon"><img src="../../../assets/icon/icon16.png" height="45" width="45" alt=""/></i>
            <i @click="change17" class="icon"><img src="../../../assets/icon/icon17.png" height="45" width="45" alt=""/></i>
            <i @click="change18" class="icon"><img src="../../../assets/icon/icon18.png" height="45" width="45" alt=""/></i>
        </div>
        <!--位置控制栏-->
        <div class="positionBar">
            <p>位置  </p>
            <p :class=" `positionItem${positionItem.positionItem1}` " @click="iconLeft">左胸</p>
            <p :class=" `positionItem${positionItem.positionItem2}` " @click="iconRight">右胸</p>
            <p :class=" `positionItem${positionItem.positionItem3}` " @click="iconMiddle">前胸</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "front",
        data(){
            return{
                positionItem:{
                    positionItem1:"Active",
                    positionItem2:"Off",
                    positionItem3:"Off"
                },
                position:{
                    status:1
                },
                imgUrl:require("@/assets/icon/bmw.png"),
                textShow : false,
                iconShow : true,
                text:{
                    textMsg : "",
                    fontSize : 12
                },
            }
        },
        methods:{
            textPlus(){
                this.text.fontSize ++;
            },
            textReduce(){
                this.text.fontSize --;
            },
            iconLeft(){
                this.position.status =1;
                this.positionItem.positionItem1 ="Active";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Off";
            },
            iconRight(){
                this.position.status =2;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Active";
                this.positionItem.positionItem3 ="Off";
            },
            iconMiddle(){
                this.position.status =3;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Active";
            },
            changeText(){
                this.textShow = true;
                this.iconShow = false;
            },
            change0(){
                this.imgUrl = require("@/assets/icon/pic0.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change1(){
                this.imgUrl = require("@/assets/icon/pic1.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change3(){
                this.imgUrl = require("@/assets/icon/pic3.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change4(){
                this.imgUrl = require("@/assets/icon/pic4.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change5(){
                this.imgUrl = require("@/assets/icon/pic5.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change6(){
                this.imgUrl = require("@/assets/icon/pic6.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change7(){
                this.imgUrl = require("@/assets/icon/pic7.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change8(){
                this.imgUrl = require("@/assets/icon/pic8.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change9(){
                this.imgUrl = require("@/assets/icon/pic9.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change10(){
                this.imgUrl = require("@/assets/icon/pic10.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change11(){
                this.imgUrl = require("@/assets/icon/pic11.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change12(){
                this.imgUrl = require("@/assets/icon/pic12.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change13(){
                this.imgUrl = require("@/assets/icon/pic13.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change14(){
                this.imgUrl = require("@/assets/icon/pic14.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change15(){
                this.imgUrl = require("@/assets/icon/pic15.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change16(){
                this.imgUrl = require("@/assets/icon/pic16.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change17(){
                this.imgUrl = require("@/assets/icon/pic17.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
            change18(){
                this.imgUrl = require("@/assets/icon/pic18.png");
                this.textShow = false;
                this.iconShow = true;
                this.text.textMsg = "";
            },
        }
    }
</script>

<style scoped>
    /*动画*/
    .fade-enter-active {
        transition: all .4s ease;
    }
    .fade-leave-active{
        transition: all .4s cubic-bezier(1.0,0.5,0.8,1.0);
    }
    .fade-enter,.fade-leave-to{
        transform:translateY(80px);
        opacity: 0;
    }


    .positionBar {
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-left: calc(16px + 1rem);
    }

    .clothesImg {
        width: 15rem;
        height: 18rem;
        overflow-y: hidden;
        margin-left: calc(16px + 1rem);
    }

    .clothesImg img {
        width: 100%;
        height: auto;
    }

    .textBar {
        display: flex;
        margin-bottom: 1rem;
        margin-left: calc(16px + 1rem);
    }

    .plus {
        background-image: url("../../../assets/icon/plus.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        width: 1.9rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        vertical-align: baseline;
        padding-top: 0.5rem;
    }

    .reduce {
        background-image: url("../../../assets/icon/reduce.png");
        background-size: auto 100%;;
        width: 1.8rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        padding-top: 0.5rem;
    }

    .container textarea {
        width: 10rem;
        background-color: rgba(255,255,255,0.5);
        border: none;
        font-size: 14px;
    }

    .text {
        color: black;
        position: relative;
        bottom: 12rem;
        white-space: pre-line;
        line-height: 1.75em;
    }

    .positionItemOff {
        color: #1a3b88;
        margin-left: 4px;
        width: 2.8rem;
        height: 1.2rem;
        border-radius: 4px;
        background-color: rgba(255,255,255,0.5);
    }

    .positionItemActive {
        color: #1a3b88;
        margin-left: 4px;
        width: 2.8rem;
        height: 1.2rem;
        border-radius: 4px;
        background-color: rgba(255,255,255,0.8);
    }

    .position1 img{
        height: auto;
        width: 40px;
        position: relative;
        bottom: 13rem;
        right: 3rem;
    }

    .position2 img{
        height: auto;
        width: 40px;
        position: relative;
        bottom: 13rem;
        left: 3rem;
    }

    .position3 img{
        height: auto;
        width: 80px;
        position: relative;
        bottom: 12rem;
    }



    .iconBar {
        display: flex;
        padding: 0.5rem;
        width: 14rem;
        height: auto;
        background-color: rgba(255,255,255,0.1);
        overflow-y: hidden;
        overflow-x: auto;
        margin-left: calc(16px + 1rem);
    }
    /*滚动条样式*/
    .iconBar::-webkit-scrollbar {
        width: 1px;
        height: 5px;
    }

    .iconBar::-webkit-scrollbar-thumb{
        border-radius: 10px;
        /*background-color: #1a3b88;*/
        background-color: rgba(237,120,50,0.8);
    }

    .icon {
        margin-left: 0.6rem;
        height: 45px;
    }
</style>
