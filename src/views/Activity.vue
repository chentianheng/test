<template>
    <div class="bgContainer">
        <!--点击提示-->
        <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png" @click="toActivityTwo" alt="" >
        <img style="position: absolute;height: 45px;width: auto;right: 10px;top: 10px;z-index: 10"
             src="../assets/icon/ranking.png" @click="toRanking" alt=""/>
        <!--<div :style="{height : outHeight}"></div>-->
        <div class="imgContainer" :style="{height : innerHeight}" @click="toActivityTwo">
            <div class="card1 animated fadeInLeft"></div>
            <div class="card2 animated fadeInRight"></div>
            <div class="card3 animated fadeInLeft"></div>
            <div class="card4 animated fadeInRight"></div>
        </div>
            <img class="content1 animated bounceIn" src="../assets/activity/1-1.png" alt="">
            <img class="content2 animated bounceIn" src="../assets/activity/2.png" alt="">
            <img class="content3 animated bounceIn" src="../assets/activity/3.png" alt="">
            <img class="content4 animated bounceIn" src="../assets/activity/4.png" alt="">
    </div>



</template>

<script>
    export default {
        name: "Activity",
        data(){
            return{
                innerHeight: (window.innerHeight) + 'px',
                outHeight: this.innerHeight
            }
        },
        methods:{
            toActivityTwo(){
                this.$router.push('/activitytwo')
            },
            toRanking(){
                this.$router.push('/ranking')
            }
        }
    }
</script>

<style scoped>
    .bgContainer {
        background-repeat: no-repeat;
        background-color: black;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        position: relative;
    }

    .imgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .imgCardContainer{
        width: 100%;
        height: auto;
    }

    .card1 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity/card1.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size: 100% ;
    }

    .card2 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity/card2-3.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size: auto 100% ;
    }

    .card3 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity/card3.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size:  100% auto;
    }

    .card4 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity/card4.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size:  100% auto;
    }

    /*.content1{*/
        /*width: 14rem;*/
        /*height: 7rem;*/
        /*position: relative;*/
        /*animation-delay: 1000ms;*/
    /*}*/

    .content1{
        width: 60%;
        position: absolute;
        top: 9%;
        left: 2%;
        animation-delay: 1000ms;
    }

    .content2{
        width: 60%;
        position: absolute;
        top: 11%;
        right: 2%;
        animation-delay: 1200ms;
    }

    .content3{
        width: 60%;
        position: absolute;
        top: 65%;
        left: 5%;
        animation-delay: 1300ms;
    }

    .content4{
        width: 60%;
        position: absolute;
        top: 70%;
        right: 2%;
        animation-delay: 1500ms;
        overflow-y: hidden;
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
