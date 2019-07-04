<template>
    <div class="bgContainer">
        <div class="tableContainer animated fadeInUp">
            <p class="title">填写信息</p>
            <!--选择宝马3的理由-->
            <label class="label" for="like">*选择全新宝马3系的理由（多选）：</label>
            <select class="select" v-model="clothes.reason.selected"  multiple id="like">
                    <option v-for="(multOption,index) in clothes.reason.options"
                            :value="multOption"
                            :key="index"
                    >{{ multOption }}</option>
             </select>
            <label class="label" for="name">*请输入您的姓名：</label>
            <div class="nameSex">

                <!--姓名-->

                <input type="text" id="name" class="nameInput" placeholder="姓名" v-model="clothes.name">

                <!--性别-->

                <input id="1" type="radio" value="gentleman" v-model="clothes.sex">
                <label class="label" for="1">先生</label>

                <input id="2" type="radio" value="lady" v-model="clothes.sex">
                <label class="label" for="2">女士</label>
                <!--<p>{{ sex }}</p>-->
            </div>

            <!--联系方式-->
            <label class="label" for="phone">*请输入您的手机：</label>
            <input type="text" id="phone" class="input" placeholder="移动电话" v-model="clothes.phone">
            <!--经销商-->
            <label class="label" for="fourS">*经销商：</label>
            <select class="select" v-model="clothes.fourS.selected"  id="fourS">
                <option disabled>请选择经销商</option>
                <option v-for="(option,index) in clothes.fourS.options"
                        :value="option"
                        :key="index"
                >{{ option }}</option>
            </select>
        </div>

        <button class="blueButton animated fadeIn" @click="upload">提交并上传</button>

        <!--隐藏弹框-->
        <div class="blackContainer animated zoomIn" v-show="clothes.uploadSuccessful" >
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
                        <i v-show="clothes.front.leftShow" class="position1"><img :src="clothes.front.frontLeftImgUrl" height="30" alt=""/></i>
                        <!--右方的icon-->
                        <i v-show="clothes.front.rightShow" class="position2"><img :src="clothes.front.frontRightImgUrl" height="30" alt=""/></i>
                        <!--正方的icon-->
                        <i v-show="clothes.front.middleShow" class="position3"><img :src="clothes.front.frontMiddleImgUrl" height="30" alt=""/></i>
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
                        <i v-show="clothes.back.iconShow" class="position4"><img :src="clothes.back.backImgUrl" height="30" alt=""/></i>
                        <p class="text" v-show="clothes.back.textShow" :style="{ fontSize: clothes.back.text.fontSize + 'px' }">{{ clothes.back.text.textMsg }}</p>
                    </div>
                </div>
            </div>
            <p class="pTitle">设计上传完成</p>
            <!--<p class="content">*了解更多活动详情，请咨询宝马当地授权经销商。</p>-->
            <!--<button class="voteBtn">分享拉票</button>-->
            <button class="voteBtn" @click="toInvitation">发布会详情</button>
        </div>

        <!--toast消息-->
        <div class="toast animated fadeIn" v-show="toastShow">
            {{toastText}}
        </div>
        <!--end-->
    </div>
</template>

<script>
    export default {
        name: "Information",
        data(){
            return{
                clothes: {},
                frontShow:true,
                backShow:false,
                toastShow: false,
                toastText: '',
            }
        },
        created() {
            this.clothes = this.$store.state.clothes
            this.clothes.fourS.selected = "请选择经销商"
        },
        methods:{
            upload(){
                // console.log(this.clothes.reason.selected)
               if (this.clothes.reason.selected === null || this.clothes.reason.selected.length < 1){
                   this.toast('请选择理由')
               } else if (this.clothes.name === "") {
                   this.toast('请填写姓名')
               } else if (this.clothes.phone === "") {
                   this.toast('请填写手机号')
               } else if (this.clothes.fourS.selected === "请选择经销商"){
                   this.toast('请选择经销商')
               } else {
                   this.$store.commit("setClothes", this.clothes)
                   this.clothes.uploadSuccessful = !this.clothes.uploadSuccessful
                   const axios = require('axios');
                   axios({
                       method: 'post',
                       url:'/bmw/api/user/',
                       data:this.clothes
                   })
               }
                // if(this.clothes.reason.selected || this.clothes.name || this.clothes.phone || this.clothes.fourS.selected){


                // }else {
                //     this.toast('请完善资料')
                // }
            },
            toInvitation(){
                this.$router.push('/invitation')
            },
            changeClothes(){
                this.frontShow =!this.frontShow;
                this.backShow =!this.backShow;
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
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../assets/background-3.png");
        background-size:  100%  auto;
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
        -moz-appearance:none;
        -webkit-appearance:none;
        background: white url("../assets/icon/down.png") no-repeat scroll right center ;
        background-size: 1.2rem auto;
        border-radius: 4px;
        padding-left: 5px;
    }
    .nameInput {
        width: 50%;
        height: 2rem;
        border: solid 1px transparent;
        -moz-appearance:none;
        -webkit-appearance:none;
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
        -moz-appearance:none;
        -webkit-appearance:none;
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
        background-color: rgba(0,0,0,0.85);
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
        bottom: 8.5rem;
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
        bottom: 8.5rem;
        z-index: 33;
    }

    .position4 img{
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
        padding:   15px;
        max-width: 150px;
        font-size: 14px;
        height: auto;
    }
</style>
