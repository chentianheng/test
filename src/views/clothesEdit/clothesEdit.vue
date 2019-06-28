<template>
    <div class="bgContainer">
        <p class="title">#一直潮一直秀——THE3联名T恤设计大赛#</p>

        <div id="nav">
            <div class="middleContainer">
                <router-link to="/front" class="directionBtn"><img src="../../assets/icon/left.png" alt=""></router-link>
                <transition name="cub">
                    <keep-alive><router-view/></keep-alive>
                </transition>
                <div class="colorBar">
                    <div class="white"></div>
                    <div class="black"></div>
                    <div class="blue"></div>
                    <div class="orange"></div>
                    <div class="grey"></div>
                </div>
                <router-link to="/back" class="directionBtn"><img src="../../assets/icon/next.png" alt=""></router-link>
            </div>

        </div>

        <button class="blueButton">提交</button>
    </div>
</template>

<script>
    export default {
        name: "clothesDemo",

    }
</script>

<style scoped>
    /*动画*/
    .cub-enter-active {
        transition: all .8s ease;
    }
    .cub-leave-active{
        opacity: 0;
        /*transition: all 0s cubic-bezier(1.0,0.5,0.8,1.0);*/
    }
    .cub-enter,.cub-leave-to{
        transform:translateX(10rem);
        opacity: 0;
    }
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../../assets/background-1.png");
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

    #nav a {
        text-decoration: none;
        font-weight: 600;
        color: #FFFFFF;
    }

    #nav a.router-link-exact-active {
        color: #1a3b88;
    }
    *{
        margin: 0;
    }

    .blueButton {
        background-color: #1c69d4;
        font-size: 16px;
        margin-top: 2rem;
        height: 40px;
        width: 150px;
        color: white;
        border: none;
    }

    .middleContainer {
        display: flex;
        /*justify-content: center;*/
        /*align-items: center;*/
    }

    .directionBtn img{
        width: 30px;
        margin-top: 7rem;
    }


</style>
