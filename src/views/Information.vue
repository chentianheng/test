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
        <!--提交按钮-->
        <button class="blueButton animated fadeIn" @click="upload">提交并上传作品</button>
        <!--页脚-->
        <footer style="position: absolute;bottom: 2rem;color: #727171;font-size: 16px">最终解释权归所有BMW中国所有</footer>
        <!--隐藏弹框-->
        <div class="blackContainer animated zoomIn" v-show="clothes.uploadSuccessful" >
            <img class="animated bounceIn delay-1s" src="../assets/icon/gift-2.png" alt="">
            <p class="pTitle">设计上传完成</p>
            <p class="content">*了解更多活动详情，请咨询宝马当地授权经销商。</p>
            <button class="voteBtn">分享拉票</button>
            <button class="voteBtn" @click="toInvitation">发布会详情</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Information",
        data(){
            return{
                clothes: {},
            }
        },
        created() {
            this.clothes = this.$store.state.clothes
            this.clothes.fourS.selected = "请选择经销商"
        },
        methods:{
            upload(){
                this.$store.commit("setClothes", this.clothes)
                this.clothes.uploadSuccessful = !this.clothes.uploadSuccessful
                const axios = require('axios');
                axios({
                    method: 'post',
                    url:'/bmw/api/user/',
                    data:{
                        json: this.clothes
                    }
                })
            },
            toInvitation(){
                this.$router.push('/invitation')
            }

        }
    }
</script>

<style scoped>
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
        margin-top: 2rem;
        font-size: 26px;
        color: white;
        font-weight: 300;
    }
    .pTitle {
        margin-top: 1rem;
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
        width: 55%;
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
        background-color: #1c69d4;
        font-size: 16px;
        margin-top: 2rem;
        height: 40px;
        width: 150px;
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
        margin-top: 1rem;
        color: white;
        font-size: 16px;
    }
</style>
