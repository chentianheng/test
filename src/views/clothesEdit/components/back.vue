<template>
    <div class="container">
        <!--衣服视图-->
        <div class="clothesImg">
            <img src="../../../assets/clothes/back.png"  alt=""/>
            <i class="iconMiddle"><img src="../../../assets/icon/bmw.png" height="30" width="30" alt=""/></i>
        </div>
        <!--图标选择栏-->
        <div class="iconBar">
            <i class="icon"><img src="../../../assets/icon/text.png" height="45" width="45" alt=""/></i>
            <!--todo:for循环获取图标-->
            <i class="icon"><img src="../../../assets/icon/bmw.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>
            <i class="icon"><img src="../../../assets/icon/cog.png" height="45" width="45" alt=""/></i>

        </div>
        <!--位置控制栏-->
        <div class="positionBar">
            <p>位置  </p>
            <p class="positionItem" @click="iconMiddle">后背</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "back",
        data(){
            return{
                isLeft : false,
                isMiddle : false,
                isRight : true
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
    .positionBar {
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: #FFFFFF;
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
        font-size: 14px;
    }

    .clothesImg {
        /*display: flex;*/
        /*justify-content: center;*/
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
        margin-left: 1rem;
        width: 2.8rem;
        height: 1.2rem;
        border-radius: 4px;
        background-color: rgba(255,255,255,0.5);
    }


    .iconMiddle img{
        width: 60px;
        height: auto;
        position: relative;
        bottom: 13rem;
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
