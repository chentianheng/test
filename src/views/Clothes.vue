<template>
    <div class="bgContainer">
        <!--front衣服视图-->
        <div class="" v-show="frontShow">
                <div class="clothesImgBoarder">
                    <!--衣服编辑框+颜色位置-->
                    <img style="width: 30px;position: relative;left: 6rem;"
                         src="../assets/icon/changeIcon.png"
                         @click="changeClothes"
                         alt=""/>

                    <div class="clothesImg animated fadeIn">
                        <div :class="`front${clothes.color}`"></div>
                        <!--左方的icon-->
                        <i v-show="clothes.front.leftShow" class="position1"><img :src="frontLeftImgUrl" height="30" alt=""/></i>
                        <!--右方的icon-->
                        <i v-show="clothes.front.rightShow" class="position2"><img :src="frontRightImgUrl" height="30" alt=""/></i>
                        <!--正方的icon-->
                        <i v-show="clothes.front.middleShow" class="position3"><img :src="frontMiddleImgUrl" height="30" alt=""/></i>
                        <p class="text" v-show="clothes.front.textShow" :style="{ fontSize: clothes.front.text.fontSize + 'px' }">{{ clothes.front.text.textMsg }}</p>
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
                    <div :class="`back${clothes.color}`"></div>
                    <i v-show="clothes.back.iconShow" class="position4"><img :src="backImgUrl" height="30" alt=""/></i>
                </div>
            </div>
        </div>
        <div class="colorBar">
            <div class="white" @click="changeWhite"></div>
            <div class="black" @click="changeBlack"></div>
            <div class="blue" @click="changeBlue"></div>
            <div class="orange" @click="changeOrange"></div>
            <!--<div class="grey" @click="changeGrey"></div>-->
        </div>
        <!--position操控-->
        <div class="positionContainer animated bounceInRight" v-show="position.positionShow">
            <!--位置控制栏-->
                <p :class=" `positionItem${positionItem.positionItem3}` " @click="iconMiddle">正前</p>
                <p :class=" `positionItem${positionItem.positionItem1}` " @click="iconLeft">左前</p>
                <p :class=" `positionItem${positionItem.positionItem2}` " @click="iconRight">右前</p>
                <p :class=" `positionItem${positionItem.positionItem4}` " @click="iconBack">后背</p>
        </div>
        <!--左icon操控-->
        <div class="iconBar animated bounceInRight" v-show="position.leftPositionShow">
            <div class="iconContainer">
                <!--显示文字输入-->
                <!--<i @click="frontChangeText" class="icon" ><img src="../assets/icon/text.png" width="45" alt=""/></i>-->
                <!--显示18个控件-->
                <i class="icon"
                   @click="frontLeftChangeIcon(index)"
                   v-for="(iconBar,index) in iconBars"
                   :key="index"
                ><img :src="iconBar.imgUrl"  width="45" alt=""></i>
            </div>
        </div>

        <!--右icon操控-->
        <div class="iconBar animated bounceInRight" v-show="position.rightPositionShow">
            <div class="iconContainer">
                <!--显示文字输入-->
                <!--<i @click="frontChangeText" class="icon" ><img src="../assets/icon/text.png" width="45" alt=""/></i>-->
                <!--显示18个控件-->
                <i class="icon"
                   @click="frontRightChangeIcon(index)"
                   v-for="(iconBar,index) in iconBars"
                   :key="index"
                ><img :src="iconBar.imgUrl"  width="45" alt=""></i>
            </div>
        </div>

        <!--正icon操控-->
        <div class="iconBar animated bounceInRight" v-show="position.middlePositionShow">
            <div class="iconContainer">
                <!--显示文字输入-->
                <i @click="frontChangeText" class="icon" ><img src="../assets/icon/text.png" width="45" alt=""/></i>
                <!--显示18个控件-->
                <i class="icon"
                   @click="frontMiddleChangeIcon(index)"
                   v-for="(iconBar,index) in iconBars"
                   :key="index"
                ><img :src="iconBar.imgUrl"  width="45" alt=""></i>
            </div>
        </div>

        <!--文字输入栏-->
        <transition name="fade">
            <div class="positionContainerText" v-show="position.textPositionShow">
                <!--1111-->
                    <textarea v-model="clothes.front.text.textMsg" placeholder="请输入文字" ></textarea>
                    <i @click="frontTextPlus" class="plus" ></i>
                    <i @click="frontTextReduce" class="reduce" ></i>

            </div>
        </transition>

        <!--背icon操控-->
        <div class="iconBar animated bounceInRight" v-show="position.backPositionShow">
            <div class="iconContainer">
                <!--显示文字输入-->
                <!--<i @click="backChangeText" class="icon" ><img src="../assets/icon/text.png" width="45" alt=""/></i>-->
                <!--显示18个控件-->
                <i class="icon"
                   @click="backMiddleChangeIcon(index)"
                   v-for="(iconBar,index) in iconBars"
                   :key="index"
                ><img :src="iconBar.imgUrl"  width="45" alt=""></i>
            </div>
        </div>


        <!--底部按钮-->
        <div class="footerBtnContainer" v-show="pathShow">
            <button  class="blackBtn" @click="backToHome">取消定制</button>
            <button class="blackBtn" @click="toInfo">提交作品</button>
        </div>

        <div class="footerBtnContainer" v-show="changeShow">
            <button class="blackBtn" @click="cancelChange"><img src="../assets/icon/cancelBtn.png" style="height: 1rem" alt=""></button>
            <button class="blackBtn" @click="saveChange"><img src="../assets/icon/saveBtn.png" style="height: 1rem" alt=""></button>
        </div>

        <!--toast消息-->
        <div class="toast animated fadeIn" v-show="toastShow">
            {{toastText}}
        </div>
        <!--end-->
    </div>
</template>

<script>
    import {share} from "../wx";

    export default {
        name: "Clothes",
        data(){
            return {
                clothes:{},
                positionItem:{
                    positionItem1:"Off",
                    positionItem2:"Off",
                    positionItem3:"Active",
                    positionItem4:"Off"
                },
                clothesImgUrl:require("@/assets/clothes/frontWhite.png"),
                iconBars:[
                    {
                        iconUrl:require("@/assets/icon/icon23.png"),
                        imgUrl:require("@/assets/icon/pic23.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon24.png"),
                        imgUrl:require("@/assets/icon/pic24.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon25.png"),
                        imgUrl:require("@/assets/icon/pic25.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon26.png"),
                        imgUrl:require("@/assets/icon/pic26.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon5.png"),
                        imgUrl:require("@/assets/icon/pic5.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon6.png"),
                        imgUrl:require("@/assets/icon/pic6.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon9.png"),
                        imgUrl:require("@/assets/icon/pic9.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon28.png"),
                        imgUrl:require("@/assets/icon/pic28.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon27.png"),
                        imgUrl:require("@/assets/icon/pic27.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon11.png"),
                        imgUrl:require("@/assets/icon/pic11.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon10.png"),
                        imgUrl:require("@/assets/icon/pic10.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon13.png"),
                        imgUrl:require("@/assets/icon/pic13.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon14.png"),
                        imgUrl:require("@/assets/icon/pic14.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon15.png"),
                        imgUrl:require("@/assets/icon/pic15.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon16.png"),
                        imgUrl:require("@/assets/icon/pic16.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon17.png"),
                        imgUrl:require("@/assets/icon/pic17.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon18.png"),
                        imgUrl:require("@/assets/icon/pic18.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon19.png"),
                        imgUrl:require("@/assets/icon/pic19.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon20.png"),
                        imgUrl:require("@/assets/icon/pic20.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon21.png"),
                        imgUrl:require("@/assets/icon/pic21.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon22.png"),
                        imgUrl:require("@/assets/icon/pic22.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon1.png"),
                        imgUrl:require("@/assets/icon/pic1.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon2.png"),
                        imgUrl:require("@/assets/icon/pic2.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon3.png"),
                        imgUrl:require("@/assets/icon/pic3.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon4.png"),
                        imgUrl:require("@/assets/icon/pic4.png"),
                    }],
                frontLeftImgUrl:"",
                frontRightImgUrl:"",
                frontMiddleImgUrl:"",
                backImgUrl:"",
                frontShow:true,
                backShow:false,
                position:{
                    positionShow:true,
                    leftPositionShow:false,
                    rightPositionShow:false,
                    middlePositionShow:false,
                    backPositionShow:false,
                    textPositionShow:false,
                },
                changeShow:false,
                pathShow:true,
                toastShow: false,
                toastText: '',
            }
        },
        created(){
            this.clothes = this.$store.state.clothes
            share()
        },
        methods:{
            frontTextPlus(){
                this.clothes.front.text.fontSize ++;
            },
            frontTextReduce(){
                this.clothes.front.text.fontSize --;
            },
            changeWhite(){
                this.clothes.color = "White"
            },
            changeBlack(){
                this.clothes.color = "Black"
            },
            changeBlue(){
                this.clothes.color = "Blue"
            },
            changeOrange(){
                this.clothes.color = "Orange"
            },
            changeGrey(){
                this.clothes.color = "Grey"
            },
            changeClothes(){
                this.frontShow =!this.frontShow;
                this.backShow =!this.backShow;
            },
            iconLeft(){
                this.frontShow = true;
                this.backShow = false;
                this.pathShow = false;
                this.changeShow = true;
                this.position.positionShow = false;
                this.position.leftPositionShow = true;
                this.clothes.front.position =1;
                this.positionItem.positionItem1 ="Active";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Off";
                this.positionItem.positionItem4 ="Off";
            },
            iconRight(){
                this.frontShow = true;
                this.backShow = false;
                this.pathShow = false;
                this.changeShow = true;
                this.position.positionShow = false;
                this.position.rightPositionShow = true;
                this.clothes.front.position =2;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Active";
                this.positionItem.positionItem3 ="Off";
                this.positionItem.positionItem4 ="Off";
            },
            iconMiddle(){
                this.frontShow = true;
                this.backShow = false;
                this.pathShow = false;
                this.changeShow = true;
                this.position.positionShow = false;
                this.position.middlePositionShow = true;
                this.clothes.front.position =3;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Active";
                this.positionItem.positionItem4 ="Off";
            },
            iconBack(){
                this.frontShow = false;
                this.backShow = true;
                this.pathShow = false;
                this.changeShow = true;
                this.position.positionShow = false;
                this.position.backPositionShow = true;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Off";
                this.positionItem.positionItem4 ="Active";
            },
            frontChangeText(){
                // 文字显示
                this.clothes.front.textShow = true;
                this.clothes.front.middleShow = false;
                this.position.middlePositionShow =false;
                this.position.textPositionShow =true
            },
            frontLeftChangeIcon(index){
                this.frontLeftImgUrl = this.iconBars[index].imgUrl;
                this.clothes.front.frontLeftImgUrl = this.frontLeftImgUrl;
                this.clothes.front.leftShow = true;
            },
            frontRightChangeIcon(index){
                this.frontRightImgUrl = this.iconBars[index].imgUrl;
                this.clothes.front.frontRightImgUrl = this.frontRightImgUrl;
                this.clothes.front.rightShow = true;
            },
            frontMiddleChangeIcon(index){
                this.frontMiddleImgUrl = this.iconBars[index].imgUrl;
                this.clothes.front.frontMiddleImgUrl = this.frontMiddleImgUrl;
                this.clothes.front.middleShow = true;
            },
            backMiddleChangeIcon(index){
                this.backImgUrl = this.iconBars[index].imgUrl;
                this.clothes.back.backImgUrl = this.backImgUrl;
                this.clothes.back.iconShow = true;
            },
            cancelChange(){
                if(this.position.leftPositionShow){
                    this.frontLeftImgUrl ="";
                    this.clothes.front.frontLeftImgUrl ="";
                    this.pathShow =true ;
                    this.changeShow =false ;
                    this.position.positionShow = true;
                    this.position.leftPositionShow = false;
                }else if (this.position.rightPositionShow) {
                    this.frontRightImgUrl ="";
                    this.clothes.front.frontRightImgUrl ="";
                    this.pathShow =true ;
                    this.changeShow =false ;
                    this.position.positionShow = true;
                    this.position.rightPositionShow = false;
                }else if (this.position.middlePositionShow) {
                    this.frontMiddleImgUrl ="";
                    this.clothes.front.backImgUrl ="";
                    this.pathShow =true ;
                    this.changeShow =false ;
                    this.position.positionShow = true;
                    this.position.middlePositionShow = false;
                }else if (this.position.backPositionShow) {
                    this.backImgUrl ="";
                    this.clothes.back.backImgUrl ="";
                    this.pathShow =true ;
                    this.changeShow =false ;
                    this.position.positionShow = true;
                    this.position.backPositionShow = false;
                }else if (this.position.textPositionShow ) {
                    // 111
                    this.clothes.front.text = "";
                    this.pathShow =true ;
                    this.changeShow =false ;
                    this.position.positionShow = true;
                    this.position.textPositionShow = false
                }
            },
            backToHome(){
                this.frontLeftImgUrl ="";
                this.clothes.front.frontLeftImgUrl ="";
                this.frontRightImgUrl ="";
                this.clothes.front.frontRightImgUrl ="";
                this.frontMiddleImgUrl ="";
                this.clothes.front.backImgUrl ="";
                this.backImgUrl ="";
                this.clothes.front.backImgUrl ="";
                this.clothes.front.text = "";
                this.$router.push('/')
            },
            saveChange(){
                this.pathShow =true ;
                this.changeShow =false ;
                this.position.positionShow = true;
                this.position.middlePositionShow = false;
                this.position.leftPositionShow = false;
                this.position.rightPositionShow = false;
                this.position.backPositionShow = false;
                this.position.textPositionShow = false

            },
            toInfo(){
                // console.log(this.clothes)
                if (!this.frontLeftImgUrl  && !this.frontRightImgUrl && !this.frontMiddleImgUrl   && !this.backImgUrl  && !this.clothes.front.text) {
                    this.toast('请先完成您的作品')
                }else {
                    this.$store.commit("setClothes", this.clothes)
                    this.$router.push('/information')
                }

            },
            toast (str) {
                let v = this
                v.toastText = str
                v.toastShow = true
                setTimeout(function(){
                    v.toastShow = false
                }, 1500)
            }

        }
    }
</script>

<style scoped>
/*动画*/
    .fade-enter-active {
        transition: all .4s ease;
    }
    .fade-leave-active{
        transition: all .2s ease-out;
    }
    .fade-enter{
        transform:translateX(100%);
        opacity: 0;
    }
    .fade-leave-to{
        transform:translateY(5rem);
        opacity: 0;
    }



    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/background-3.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
        position: relative;
        overflow-x: hidden;
    }

    .clothesImgBoarder {
        /*margin-left: calc(16px + 1rem);*/
        position: relative;
        padding: 1rem 1rem 0;
        width: 15rem;
        height: 19rem;
        background-color:rgba(45,45,45,0.4) ;
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

    .position1 img{
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

    .position2 img{
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

    .position3 img{
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

    .position4 img{
        height: auto;
        width: 80px;
    }

    /*不同颜色的控制栏*front*/
    .colorBar {
        display: flex;
        /*margin-top: 4.5rem;*/
    }

    .white {
        height: 24px;
        width: 24px;
        background-color: white;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
        /*border: 2px solid darkgrey;*/
    }

    .black {
        height: 24px;
        width: 24px;
        background-color: black;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .blue {
        height: 24px;
        width: 24px;
        background-color: blue;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .orange {
        height: 24px;
        width: 24px;
        background-color: orange;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .grey {
        height: 24px;
        width: 24px;
        background-color: grey;
        border-radius: 60px;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
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

    /*控制位置栏*/
    .positionContainer {
        margin-top: 1rem;
        display: flex;
        /*padding: 0.5rem 0;*/
        width: 100%;
        height: 5rem;
        justify-content: space-between;
        align-items: center;
        /*margin-left: calc(16px + 1rem);*/
    }
    .iconBar {
        margin-top: 0.5rem;
        height: 5rem;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .iconContainer {
        display: flex;
        width: 135rem;
        height: 5rem;
    }

    .icon {
        display: flex;
        margin-right: 1px;
        justify-content: center;
        align-items: center;
        color: black;
        /*margin: 0 4px;*/
        width: 5rem;
        height: 100%;
        border-radius: 1px;
        background-color: rgba(255,255,255,0.5);
        line-height: 5rem;
    }

    .iconActive {
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        /*margin: 0 4px;*/
        width: calc((100% - 3%)/4);
        height: 100%;
        border-radius: 1px;
        background-color: rgba(255,255,255,0.8);
        line-height:5rem;
    }

    /*滚动条样式*/
    .iconBar::-webkit-scrollbar {
        width: 1px;
        height: 5px;
    }

    .iconBar::-webkit-scrollbar-thumb{
        border-radius: 10px;
        /*background-color: #1a3b88;*/
        background-color: rgba(152,152,152,0.8);
    }

    /*底部提交按钮*/
    .footerBtnContainer {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .blackBtn {
        text-decoration: none;
        font-size: 14px;
        color: white;
        border: none;
        background-color:rgba(51,51,51,0.8) ;
        width: calc((100% - 1%)/2);
        padding: 0.5rem 0;
    }

    textarea {
        width: 50%;
        height: 80%;
        background-color: rgba(255,255,255,0.5);
        border: none;
        font-size: 14px;
        border-radius: 5px;
    }

    .plus {
        background-image: url("../assets/icon/plus.png");
        background-size: auto 50%;
        background-position:center;
        background-repeat: no-repeat;
        width: 5rem;
        height: 100%;
        border-radius: 1px;
        vertical-align: baseline;
    }

    .reduce {
        background-image: url("../assets/icon/reduce.png");
        background-size: auto 50%;
        background-position:center;
        background-repeat: no-repeat;
        width: 5rem;
        height: 100%;
        border-radius: 1px;
        vertical-align: baseline;
    }

    .positionContainerText {
        margin-top: 1rem;
        display: flex;
        /*padding: 0.5rem 0;*/
        width: 100%;
        height: 5rem;
        justify-content: center;
        align-items: center;
        /*margin-left: calc(16px + 1rem);*/
        background-color: rgba(255,255,255,0.5);
    }

    .positionContainer {
        margin-top: 1rem;
        display: flex;
        /*padding: 0.5rem 0;*/
        width: 100%;
        height: 5rem;
        justify-content: space-between;
        align-items: center;
        /*margin-left: calc(16px + 1rem);*/
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

    .positionItemOff {
        color: black;
        /*margin: 0 4px;*/
        width: calc((100% - 3%)/4);
        height: 100%;
        border-radius: 1px;
        background-color: rgba(255,255,255,0.5);
        line-height: 5rem;
    }

    .positionItemActive {
        color: black;
        /*margin: 0 4px;*/
        width: calc((100% - 3%)/4);
        height: 100%;
        border-radius: 1px;
        background-color: rgba(255,255,255,0.8);
        line-height:5rem;
    }

    .toast {
        position: fixed;
        z-index: 2000;
        left: 50%;
        top:45%;
        transition:all .5s;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        border-radius: 5px;
        color:#FFF;
        background: rgba(17, 17, 17, 0.7);
        padding:  15px;
        max-width: 150px;
        font-size: 14px;
        height: auto;
    }

</style>
