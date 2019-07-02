<template>
    <div class="bgContainer">
        <!--<div :style="{height : outHeight}"></div>-->
        <div class="imgContainer" :style="{height : innerHeight}">
            <div class="card1 animated fadeInLeft"></div>
            <div class="card2 animated fadeInRight"></div>
            <div class="card3 animated fadeInLeft"></div>
            <div class="card4 animated fadeInRight"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ActivityTwo",
        data(){
            return{
                innerHeight: (window.innerHeight) + 'px',
                outHeight: this.innerHeight
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
        background-size: auto 100% ;
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

</style>
