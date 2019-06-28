<template>
    <div class="clothesImg">
        <div :class="`clothes${color}`"></div>
        <!--衣服上的文字-->
        <p class="text"
           v-show="textShow"
           :style="{fontSize: this.text.fontSize-3 + 'px'}"
           v-html="text.textMsg"
        ></p>
        <i :class="`position${position.status}`" v-show="iconShow"><img :src="iconUrl" alt=""></i>
    </div>
</template>

<script>
    export default {
        name: "PersonalFront",
        data(){
            return{
                iconUrl:require("@/assets/icon/pic10.png"),
                color:"White",
                position:{
                    status:1
                },
                text:{
                    textMsg:"11111",
                    fontSize:12
                },
                user:{
                    name:"user111",
                    headImgURL:require("@/assets/icon/icon15.png"),
                    vote:10000,
                    rank:1
                },
                textShow:false,
                iconShow:true
            }
        }
    }
</script>

<style scoped>
    /*动画*/
    .cub-enter-active {
        transition: all .8s ease;
    }
    .cub-leave-active{
        opacity: 0;
    }
    .cub-enter,.cub-leave-to{
        transform:translateX(10rem);
        opacity: 0;
    }

    .clothesImg {
        /*padding-top: 1rem;*/
        margin-top: 2.2rem;
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;
        width: 11rem;
        height: 16rem;
        overflow-y: hidden;
        /*overflow-x: hidden;*/
    }

    /*不同颜色的衣服的样式*/
    .clothesWhite {
        /*margin-top: 2.5rem;*/
        background-image: url("../../../assets/clothes/front.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;

    }

    /*正中间*/
    .position1 {
        height: auto;
        width: 4rem;
        position: relative;
        bottom: 9.5rem;
    }

    .position1 img{
        height: auto;
        width: 4rem;
    }
    /*左側*/
    .position2 {
        height: auto;
        width: 2rem;
        position: relative;
        bottom: 9rem;
        right: 1.8rem;
    }

    .position2 img{
        height: auto;
        width: 2rem;
    }
    /*右側*/
    .position3 {
        height: auto;
        width: 2rem;
        position: relative;
        bottom: 9rem;
        left: 1.6rem;
    }

    .position3 img{
        height: auto;
        width: 2rem;
    }

    .text {
        height: auto;
        width: 4rem;
        position: relative;
        bottom: 11rem;
        white-space: pre-line;
    }
</style>
