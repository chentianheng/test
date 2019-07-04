<template>
    <div class="bgContainer">
        <!--点击提示-->
        <img class="tips animated bounceIn delay-5s infinite " src="../assets/icon/click.png"  alt="" @click="toClothes">
        <img class="title animated fadeInUp" src="../assets/icon/homeTitle.png" alt="">
        <img class="clothes animated flipInX" src="../assets/clothes/frontWhite.png" alt="">
        <div class="contents animated bounceIn  " @click="toClothes">
            <img src="../assets/icon/homeIcon.png" alt="" style="width: 50%">
        </div>

        <!--弹窗-->
        <!--活动说明-->
        <div class="img animated fadeIn" @click="show1" v-show="showOne">
            <img style="width: 80%" src="../assets/rules/content1.png" alt="" >
            <!--页脚-->
            <footer style="position: absolute;bottom: 2px;color: #727171;font-size: 12px">最终解释权归所有BMW中国所有</footer>
        </div>
        <div class="img animated fadeIn" @click="show2" v-show="showTwo">
            <img style="width: 60%" src="../assets/rules/content2.png" alt="" >
            <footer style="position: absolute;bottom: 2px;color: #727171;font-size: 12px">最终解释权归所有BMW中国所有</footer>
        </div>
        <div class="img animated fadeIn" @click="show3" v-show="showThree">
            <img style="width: 90%" src="../assets/rules/content3.png" alt="" >
            <footer style="position: absolute;bottom: 2px;color: #727171;font-size: 12px">最终解释权归所有BMW中国所有</footer>
        </div>

        <div class="footerBtn">
            <button  class="voteBtn1 animated fadeIn" @click="show1"></button>
            <button  class="voteBtn2 animated fadeIn" @click="show2"></button>
            <button  class="voteBtn3 animated fadeIn" @click="show3"></button>
        </div>



    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                showOne:false,
                showTwo:false,
                showThree:false,
            }
        },
        methods:{
            toClothes(){
                this.$router.push('/clothes')
            },
            show1(){
                this.showOne = !this.showOne;
                this.showTwo=false;
                this.showThree=false;
            },
            show2(){
                this.showTwo = !this.showTwo
                this.showOne=false;
                this.showThree=false;
            },
            show3(){
                this.showThree = !this.showThree
                this.showOne=false;
                this.showTwo=false;
            },

        }
    }
</script>

<style scoped>
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../assets/background-2.jpg");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
        position: relative;
        overflow-y: hidden;
    }

    .title {
        width: 80%;
    }

    .title {
        margin-top: 2rem;
        width: 47%;
        animation-delay: 200ms;
    }

    .clothes{
        margin-top: 4rem;
        width: 70%;
        animation-delay: 400ms;
    }

    .contents {
        position: relative;
        bottom: 14rem;
        /*animation-duration: 1500ms;*/
        animation-delay: 1500ms;
    }

    .content {
        font-size: 14px;
        font-weight: 600;
    }

    .voteBtn1 {
        position: relative;
        background-image: url("../assets/icon/detailBtn.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }

    .voteBtn2 {
        position: relative;
        background-image: url("../assets/icon/detailBtn-1.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }

    .voteBtn3 {
        background-image: url("../assets/icon/detailBtn-2.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }
    .footerBtn {
        position: absolute;
        bottom: 2rem;
        display: flex;
        justify-content: space-between;
        width: 80%;
    }

    /*新弹窗*/
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 76%;
        position: absolute;
        left: 10%;
        bottom: 15%;
        border: solid 1px white;
        background-color: rgba(0,0,0,0.8);
        z-index: 100;
        animation-duration: 500ms;
        /*background-image: url("../assets/rules/background2.png");*/
        /*background-size: auto 100%;*/
        /*background-repeat: no-repeat;*/
    }

    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 45%;
        top: 45%;
        z-index: 1000
    }
</style>
