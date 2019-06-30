<template>
    <div class="bgContainer">

        <p class="title animated fadeInUp">#一直潮一直秀——THE3联名T恤设计大赛#</p>

        <div id="nav">
            <div class="middleContainer animated  zoomIn">
                <!--<router-link to="/front" class="directionBtn"><img src="../../assets/icon/left.png" alt=""></router-link>-->
                <transition name="cub">
                <!--front衣服视图-->
                  <div class="container" v-show="frontShow">
                    <div class="clothesImgBoarder">
                        <div class="clothesImg">
                            <!--<img :src="clothesImgUrl"  alt=""/>-->
                            <div :class="`front${clothes.color}`"></div>
                            <i v-show="clothes.front.iconShow" :class="`position${clothes.front.position}`"><img :src="imgUrl" height="30" alt=""/></i>
                            <p class="text" v-show="clothes.front.textShow" :style="{ fontSize: clothes.front.text.fontSize + 'px' }">{{ clothes.front.text.textMsg }}</p>
                        </div>
                    </div>

                    <!--文字输入栏-->
                    <transition name="fade">
                        <div class="textBar" v-show="clothes.front.textShow">
                            <textarea v-model="clothes.front.text.textMsg" placeholder="请输入文字" ></textarea>
                            <i @click="frontTextPlus" class="plus" ></i>
                            <i @click="frontTextReduce" class="reduce" ></i>
                        </div>
                    </transition>
                    <!--图标选择栏-->
                    <div class="iconBar">
                        <!--显示文字输入-->
                        <i @click="frontChangeText" class="icon" ><img src="../assets/icon/text.png" height="45" width="45" alt=""/></i>
                        <!--显示18个控件-->

                        <i class="icon"
                           @click="frontChangeIcon(index)"
                           v-for="(iconBar,index) in iconBars"
                           :key="index"
                        ><img :src="iconBar.iconUrl" height="45" width="45" alt=""></i>

                    </div>
                    <!--位置控制栏-->
                    <div class="positionBar">
                        <p>位置  </p>
                        <p :class=" `positionItem${positionItem.positionItem1}` " @click="iconLeft">左胸</p>
                        <p :class=" `positionItem${positionItem.positionItem2}` " @click="iconRight">右胸</p>
                        <p :class=" `positionItem${positionItem.positionItem3}` " @click="iconMiddle">前胸</p>
                        <p :class=" `positionItem${positionItem.positionItem4}` " @click="iconBack">后背</p>
                    </div>
                </div>
                </transition>
                <transition name="cub">
                <!--Back衣服视图-->
                <div class="container" v-show="backShow">
                    <div class="clothesImgBoarder">
                        <div class="clothesImg">
                            <div :class="`back${clothes.color}`"></div>
                            <i v-show="clothes.back.iconShow" :class="`position${clothes.back.position}`"><img :src="imgUrl" height="30" alt=""/></i>
                            <p class="text" v-show="clothes.back.textShow" :style="{ fontSize: clothes.back.text.fontSize + 'px' }">{{ clothes.back.text.textMsg }}</p>
                        </div>
                    </div>
                        <!--文字输入栏-->
                        <transition name="fade">
                            <div class="textBar" v-show="clothes.back.textShow">
                                <textarea v-model="clothes.back.text.textMsg" placeholder="请输入文字" ></textarea>
                                <i @click="backTextPlus" class="plus" ></i>
                                <i @click="backTextReduce" class="reduce" ></i>
                            </div>
                        </transition>
                        <!--图标选择栏-->
                        <div class="iconBar">
                            <!--显示文字输入-->
                            <i @click="backChangeText" class="icon" ><img src="../assets/icon/text.png" height="45" width="45" alt=""/></i>
                            <!--显示18个控件-->
                            <i class="icon"
                               @click="backChangeIcon(index)"
                               v-for="(iconBar,index) in iconBars"
                               :key="index"
                            ><img :src="iconBar.iconUrl" height="45" width="45" alt=""></i>

                        </div>
                        <!--位置控制栏-->
                        <div class="positionBar">
                            <p>位置  </p>
                            <p :class=" `positionItem${positionItem.positionItem1}` " @click="iconLeft">左胸</p>
                            <p :class=" `positionItem${positionItem.positionItem2}` " @click="iconRight">右胸</p>
                            <p :class=" `positionItem${positionItem.positionItem3}` " @click="iconMiddle">前胸</p>
                            <p :class=" `positionItem${positionItem.positionItem4}` " @click="iconBack">后背</p>
                        </div>
                    </div>
                <!--颜色控制栏-->
                </transition>
                <div class="colorBar">
                    <div class="white" @click="changeWhite"></div>
                    <div class="black" @click="changeBlack"></div>
                    <div class="blue" @click="changeBlue"></div>
                    <div class="orange" @click="changeOrange"></div>
                    <div class="grey" @click="changeGrey"></div>
                </div>
                <!--<router-link to="/back" class="directionBtn"><img src="../../assets/icon/next.png" alt=""></router-link>-->
            </div>

        </div>

        <button class="blueButton animated fadeInUp" @click="toInfo">提交</button>
    </div>
</template>

<script>
    export default {
        name: "clothesDemo",
        data(){
            return{
                clothes:{
                    front:{
                        position:1,
                        imgUrl:require("@/assets/icon/pic1.png"),
                        textShow : false,
                        iconShow : true,
                        text:{
                            textMsg : "",
                            fontSize : 12
                        },
                    },
                    back:{
                        position:3,
                        imgUrl:require("@/assets/icon/pic1.png"),
                        textShow : false,
                        iconShow : true,
                        text:{
                            textMsg : "",
                            fontSize : 12
                        },
                    },
                    color:"White",
                },
                positionItem:{
                    positionItem1:"Active",
                    positionItem2:"Off",
                    positionItem3:"Off",
                    positionItem4:"Off"
                },
                clothesImgUrl:require("@/assets/clothes/frontWhite.png"),
                iconBars:[
                    {
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
                    },{
                        iconUrl:require("@/assets/icon/icon5.png"),
                        imgUrl:require("@/assets/icon/pic5.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon6.png"),
                        imgUrl:require("@/assets/icon/pic6.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon7.png"),
                        imgUrl:require("@/assets/icon/pic7.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon8.png"),
                        imgUrl:require("@/assets/icon/pic8.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon9.png"),
                        imgUrl:require("@/assets/icon/pic9.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon10.png"),
                        imgUrl:require("@/assets/icon/pic10.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon11.png"),
                        imgUrl:require("@/assets/icon/pic11.png"),
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
                        iconUrl:require("@/assets/icon/icon27.png"),
                        imgUrl:require("@/assets/icon/pic27.png"),
                    },{
                        iconUrl:require("@/assets/icon/icon28.png"),
                        imgUrl:require("@/assets/icon/pic28.png"),
                    }],
                imgUrl:require("@/assets/icon/pic1.png"),
                frontShow:true,
                backShow:false

            }
        },
        methods:{
            frontTextPlus(){
                this.clothes.front.text.fontSize ++;
            },
            frontTextReduce(){
                this.clothes.front.text.fontSize --;
            },
            backTextPlus(){
                this.clothes.back.text.fontSize ++;
            },
            backTextReduce(){
                this.clothes.back.text.fontSize --;
            },
            iconLeft(){
                this.frontShow = true;
                this.backShow = false;
                this.clothes.front.position =1;
                this.positionItem.positionItem1 ="Active";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Off";
                this.positionItem.positionItem4 ="Off";
            },
            iconRight(){
                this.frontShow = true;
                this.backShow = false;
                this.clothes.front.position =2;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Active";
                this.positionItem.positionItem3 ="Off";
                this.positionItem.positionItem4 ="Off";
            },
            iconMiddle(){
                this.frontShow = true;
                this.backShow = false;
                this.clothes.front.position =3;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Active";
                this.positionItem.positionItem4 ="Off";
            },
            iconBack(){
                this.frontShow = false;
                this.backShow = true;
                this.positionItem.positionItem1 ="Off";
                this.positionItem.positionItem2 ="Off";
                this.positionItem.positionItem3 ="Off";
                this.positionItem.positionItem4 ="Active";
            },
            frontChangeText(){
                this.clothes.front.textShow = true;
                this.clothes.front.iconShow = false;
            },
            backChangeText(){
                this.clothes.back.textShow = true;
                this.clothes.back.iconShow = false;
            },
            frontChangeIcon(index){
                this.imgUrl = this.iconBars[index].imgUrl;
                this.clothes.front.textShow = false;
                this.clothes.front.iconShow = true;
                this.clothes.front.text.textMsg = "";
            },
            backChangeIcon(index){
                this.imgUrl = this.iconBars[index].imgUrl;
                this.clothes.back.textShow = false;
                this.clothes.back.iconShow = true;
                this.clothes.back.text.textMsg = "";
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
            toInfo(){
                this.$router.push('/information')
            }
        }

    }
</script>

<style scoped>
    .cub-enter-active {
        transition: all .8s ease;
    }
    .cub-leave-active{
        opacity: 0;
    }
    .cub-enter,.cub-leave-to{
        transform:translateX(10rem);
        opacity: 0;
    }

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

    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../assets/background.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
    }

    .title {
        color: #1a3b88;
        font-size: 18px;
        font-weight: 600;
        margin-top: 2rem;
        margin-bottom: 1rem;
        animation-delay: 200ms;
    }

    .positionBar {
        margin-top: 1rem;
        /*padding-left: 1rem;*/
        /*padding-right: 1rem;*/
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-left: calc(16px + 1rem);
    }
    .clothesImgBoarder {
        margin-left: calc(16px + 1rem);
        width: 15rem;
        height: 18rem;
        overflow-y: hidden;
    }

    .clothesImg {
        display: flex;
        flex-direction: column;
        width: 15rem;
        height: 25rem;
        align-items: center;

    }

    .textBar {
        display: flex;
        margin-bottom: 1rem;
        margin-left: calc(16px + 1rem);
    }

    .plus {
        background-image: url("../assets/icon/plus.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        width: 1.9rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        vertical-align: baseline;
        padding-top: 0.5rem;
    }

    .reduce {
        background-image: url("../assets/icon/reduce.png");
        background-size: auto 100%;;
        width: 1.8rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        padding-top: 0.5rem;
    }

    .colorBar {
        display: flex;
        flex-direction: column;
        margin-top: 4.5rem;
    }


    .white {
        height: 16px;
        width: 16px;
        background-color: white;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .black {
        height: 16px;
        width: 16px;
        background-color: black;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .blue {
        height: 16px;
        width: 16px;
        background-color: blue;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .orange {
        height: 16px;
        width: 16px;
        background-color: orange;
        border-radius: 60px;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .grey {
        height: 16px;
        width: 16px;
        background-color: grey;
        border-radius: 60px;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
    }

    #nav {
        margin-top: 15px;
        padding: 0;
        color: white;
    }

    .container textarea {
        width: 10rem;
        background-color: rgba(255,255,255,0.5);
        border: none;
        font-size: 14px;
    }

    .text {
        color: #757575;
        position: relative;
        bottom: 18rem;
        white-space: pre-line;
        line-height: 1.25em;
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

    .position1 {
        height: auto;
        width: 40px;
        position: relative;
        bottom: 19rem;
        right: 2.5rem;
    }

    .position1 img{
        height: auto;
        width: 40px;

    }

    .position2 {
        height: auto;
        width: 40px;
        position: relative;
        bottom: 19rem;
        left: 2.5rem;
    }

    .position2 img{
        height: auto;
        width: 40px;
    }

    .position3 {
        height: auto;
        width: 80px;
        position: relative;
        bottom: 18rem;
    }

    .position3 img{
        height: auto;
        width: 80px;
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
        background-color: rgba(28,105,212,0.8);
    }

    .icon {
        margin-left: 0.6rem;
        height: 45px;
    }

    .blueButton {
        background-color: #1c69d4;
        font-size: 16px;
        margin-top: 2rem;
        height: 40px;
        width: 150px;
        color: white;
        border: none;
        animation-delay: 800ms;
    }

    .middleContainer {
        display: flex;
        animation-delay: 500ms;
        /*justify-content: center;*/
        /*align-items: center;*/
    }

    .directionBtn img{
        width: 30px;
        margin-top: 7rem;
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
</style>
