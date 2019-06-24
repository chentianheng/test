<template>
    <div class="bgContainer">
        <div class="middleContainer">
            <div class="clothesImg">
                <img src="../assets/clothes/front.png"  alt=""/>
                <i :class="{ iconLeft: isLeft , iconMiddle: isMiddle , iconRight: isRight }">
                    <img src="../assets/icon/cog.png" height="30" width="30" alt=""/>
                </i>
            </div>
            <div class="logoBar">
                <i><img src="../assets/icon/cog.png" height="30" width="30" alt=""/></i>
                <i><img src="../assets/icon/download.png" height="30" width="30" alt=""/></i>
            </div>
        </div>
        <div class="positionBar">
            <p @click="iconLeft">左</p>
            <p @click="iconRight">右</p>
            <p @click="iconMiddle">中</p>
            <p>领口</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "clothesDemo",
        data(){
            return{
                isLeft : true,
                isMiddle : false,
                isRight : false
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
            }
        }
    }
</script>

<style scoped>
    .bgContainer {
        background-color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .middleContainer {
        display: flex;
        align-items: center;
    }

    .logoBar {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;
        height: 16rem;
        width: 3rem;
        background-color: rgba(255,255,255,0.15);
    }

    .positionBar {
        margin: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 10rem;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        background-color: rgba(255,255,255,0.15);
    }

    .clothesImg {
        width: 15rem;
    }

    .clothesImg img {
        width: 100%;
        height: auto;
    }

    .positionBar p {
        display: inline-flex;
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
</style>
