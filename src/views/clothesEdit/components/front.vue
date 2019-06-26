<template>
    <div class="container">
<!--衣服视图-->
        <div class="clothesImg">
             <img src="../../../assets/clothes/front.png"  alt=""/>
             <i :class="{ iconLeft: isLeft , iconMiddle: isMiddle , iconRight: isRight }"><img :src="imgUrl" height="30" width="30" alt=""/></i>
        </div>
        <!--图标选择栏-->
        <div class="iconBar">
            <i class="icon"><img src="../../../assets/icon/text.png" height="45" width="45" alt=""/></i>
            <i @click="change0" class="icon"><img src="../../../assets/icon/icon0.png" height="45" width="45" alt=""/></i>
            <!--<i @click="change1" class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>-->
            <i @click="change1" class="icon"><img src="../../../assets/icon/icon1.png" height="45" width="45" alt=""/></i>
            <i @click="change3" class="icon"><img src="../../../assets/icon/icon3.png" height="45" width="45" alt=""/></i>

        </div>
        <!--位置控制栏-->
        <div class="positionBar">
            <p>位置  </p>
            <p class="positionItem" @click="iconLeft">左胸</p>
            <p class="positionItem" @click="iconRight">右胸</p>
            <p class="positionItem" @click="iconMiddle">前胸</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "front",
        data(){
            return{
                isLeft : false,
                isMiddle : false,
                isRight : true,
                imgUrl:require("@/assets/icon/bmw.png"),
            }
        },
        methods:{
            iconLeft(){
                this.isLeft = true;
                this.isMiddle = false;
                this.isRight = false;
            },
            iconRight(){
                this.isLeft = false;
                this.isMiddle = false;
                this.isRight = true;
            },
            iconMiddle(){
                this.isLeft = false;
                this.isMiddle = true;
                this.isRight = false;
            },
            change0(){
                this.imgUrl = require("@/assets/icon/icon0.png");
            },
            change1(){
                this.imgUrl = require("@/assets/icon/icon1.png");
            },
            change3(){
                this.imgUrl = require("@/assets/icon/icon3.png");
            }
        }
    }
</script>

<style scoped>
    .positionBar {
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
    }

    .clothesImg {
        width: 15rem;
        height: 18rem;
        overflow-y: hidden;
    }

    .clothesImg img {
        width: 100%;
        height: auto;
    }

    .positionItem {
        color: #1a3b88;
        margin-left: 4px;
        width: 2.8rem;
        height: 1.2rem;
        border-radius: 4px;
        background-color: rgba(255,255,255,0.5);
    }

    .iconLeft img{
        width: 30px;
        height: auto;
        position: relative;
        bottom: 13rem;
        right: 3rem;
    }

    .iconMiddle img{
        width: 60px;
        height: auto;
        position: relative;
        bottom: 13rem;
    }

    .iconRight img{
        width: 30px;
        height: auto;
        position: relative;
        bottom: 13rem;
        left: 3rem;
    }

    .iconBar {
        display: flex;
        padding: 0.5rem;
        width: 14rem;
        height: auto;
        background-color: rgba(255,255,255,0.1);
        overflow-y: hidden;
        overflow-x: auto;
    }
    /*滚动条样式*/
    .iconBar::-webkit-scrollbar {
        width: 1px;
        height: 5px;
    }

    .iconBar::-webkit-scrollbar-thumb{
        border-radius: 10px;
        /*background-color: #1a3b88;*/
        background-color: rgba(237,120,50,0.8);
    }

    .icon {
        margin-left: 0.6rem;
        height: 45px;
    }
</style>
