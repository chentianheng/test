<template>
    <div class="bgContainer">
        <p class="title">#全新BMW3系广州发布会寻找潮流达人#</p>
        <div class="colorBar">
            <p>颜色</p>
            <div class="white"></div>
            <div class="black"></div>
            <div class="blue"></div>
            <div class="orange"></div>
            <div class="grey"></div>
        </div>
        <div id="nav">
            <div class="middleContainer">
                <router-link to="/front" class="leftBtn"><img src="../../assets/icon/left.png" alt=""></router-link>
                <transition name="cub">
                    <keep-alive><router-view/></keep-alive>
                </transition>
                <router-link to="/back" class="rightBtn"><img src="../../assets/icon/next.png" alt=""></router-link>
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
    }

    .colorBar p {
        color: white;
        font-size: 14px;
        padding-right: 1rem;
    }

    .white {
        height: 20px;
        width: 20px;
        background-color: white;
        border-radius: 60px;
        margin-right: 1rem;
    }

    .black {
        height: 20px;
        width: 20px;
        background-color: black;
        border-radius: 60px;
        margin-right: 1rem;
    }

    .blue {
        height: 20px;
        width: 20px;
        background-color: blue;
        border-radius: 60px;
        margin-right: 1rem;
    }

    .orange {
        height: 20px;
        width: 20px;
        background-color: orange;
        border-radius: 60px;
        margin-right: 1rem;
    }

    .grey {
        height: 20px;
        width: 20px;
        background-color: grey;
        border-radius: 60px;
        margin-right: 1rem;
    }

    #nav {
        padding: 15px;
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
        align-items: center;
    }

    .leftBtn img{
        width: 30px;
    }

    .rightBtn img{
        width: 30px;
    }
</style>
