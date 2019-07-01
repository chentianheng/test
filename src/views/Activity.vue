<template>
    <div class="bgContainer">
        <div class="imgContainer">
            <div class="card1 animated fadeInLeft"></div>
            <div class="card2 animated fadeInRight"></div>
            <div class="card3 animated fadeInLeft"></div>
            <div class="card4 animated fadeInRight">

            </div>
            <!--&lt;!&ndash;绝对定位&ndash;&gt;-->
            <img class="content4 animated bounceIn" src="../assets/activity/4.png" alt="">
            <img class="content1 animated bounceIn" src="../assets/activity/1.png" alt="">
            <img class="content2 animated bounceIn" src="../assets/activity/2.png" alt="">
            <img class="content3 animated bounceIn" src="../assets/activity/3.png" alt="">

        </div>
    </div>



</template>

<script>
    export default {
        name: "Activity"
    }
</script>

<style scoped>
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;;
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: #f69202;
    }

    .card1 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity/card1.png");
        background-repeat: no-repeat;
        background-color: #010415;
        background-size: auto 100% ;
    }

    .card2 {
        width: 100%;
        height: 25%;
        overflow-y: hidden;
        background-image: url("../assets/activity/card2-2.png");
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

    .imgCard {
        width: 100%;
        height: auto;
    }

    .content1{
        width: 60%;
        position: absolute;
        top: 8%;
        left: 5%;
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
        animation-delay: 1500ms;
        overflow-y: hidden;
    }
</style>
