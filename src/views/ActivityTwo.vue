<template>
    <div class="bgContainer">
        <!--点击提示-->
        <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png"  @click="toRanking" alt="" >
        <img style="position: absolute;height: 45px;width: auto;right: 10px;top: 10px;z-index: 10"
             src="../assets/icon/ranking.png" @click="toRanking" alt=""/>
        <!--<div :style="{height : outHeight}"></div>-->
        <div class="imgContainer" :style="{height : innerHeight}" >
            <div class="card1 animated fadeInLeft"></div>
            <div class="card2 animated fadeInRight"></div>
            <div class="card3 animated fadeInLeft"></div>
            <div class="card4 animated fadeInRight"></div>
        </div>
            <img class="content1 animated fadeIn" src="../assets/activity2/t1.png" alt="">
            <img class="content2 animated fadeIn" src="../assets/activity2/t2.png" alt="">
            <img class="content3 animated fadeIn" src="../assets/activity2/t3.png" alt="">
            <img class="content4 animated fadeIn" src="../assets/activity2/t4.png" alt="">
    </div>

</template>

<script>
    import {share} from "../wx";

    export default {
        name: "ActivityTwo",
        data(){
            return{
                innerHeight: (window.innerHeight) + 'px',
                outHeight: this.innerHeight
            }
        },
      created() {
          share()
      },
        methods:{
            toRanking(){
                 this.$router.push('/ranking')
             },
            toNavi(){
                this.$router.push('/navigation')
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
        height: 24%;
        overflow-y: hidden;
        background-image: url("../assets/activity2/1.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size: 100%;
    }

    .card2 {
        width: 100%;
        height: 24%;
        overflow-y: hidden;
        background-image: url("../assets/activity2/2.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size: 100% ;
    }

    .card3 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity2/3.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size:  100% ;
    }

    .card4 {
        width: 100%;
        height: 27%;
        overflow-y: hidden;
        background-image: url("../assets/activity2/4.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size: auto 100% ;
    }
    .content1{
        width: 25%;
        position: absolute;
        top: 11%;
        left: 2%;
        animation-delay: 1000ms;
    }

    .content2{
        width: 40%;
        position: absolute;
        top: 30%;
        left: 5%;
        animation-delay: 1200ms;
    }

    .content3{
        width: 25%;
        position: absolute;
        top: 60%;
        right: 5%;
        animation-delay: 1300ms;
    }

    .content4{
        width: 40%;
        position: absolute;
        bottom: 6%;
        left: 5%;
        animation-delay: 1500ms;
        overflow-y: hidden;
    }

    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 10px;
        top: 30px;
        z-index: 1000
    }


</style>
