<template>
    <div class="clothesImg">
        <div :class="`front${clothes.color}`"></div>
        <!--衣服上的文字-->
        <p class="text"
           v-show="clothes.front.textShow"
           :style="{fontSize: this.clothes.front.text.fontSize-3 + 'px'}"
           v-html="clothes.front.text.textMsg"
        ></p>
        <i :class="`position${clothes.front.position}`" v-show="clothes.front.iconShow"><img :src="clothes.front.imgUrl" alt=""></i>
    </div>
</template>

<script>
    export default {
        name: "PersonalFront",
        data(){
            return{
                clothes:{
                    front:{
                        position:1,
                        imgUrl:require("@/assets/icon/pic1.png"),
                        textShow : false,
                        iconShow : true,
                        text:{
                            textMsg : "",
                            fontSize : 12
                        },
                    },
                    back:{
                        position:3,
                        imgUrl:require("@/assets/icon/pic1.png"),
                        textShow : false,
                        iconShow : true,
                        text:{
                            textMsg : "",
                            fontSize : 12
                        },
                    },
                    color:"Blue",
                },
                user:{
                    name:"user111",
                    headImgURL:require("@/assets/icon/icon15.png"),
                    vote:10000,
                    rank:1
                }
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
        margin-top: 2.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 11rem;
        height: 16rem;
        overflow-y: hidden;
    }

    /*不同颜色的衣服的样式*/
    .frontWhite {
        background-image: url("../../../assets/clothes/frontWhite.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .frontBlack {
        background-image: url("../../../assets/clothes/frontBlack.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .frontBlue {
        background-image: url("../../../assets/clothes/frontBlue.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .frontOrange {
        background-image: url("../../../assets/clothes/frontOrange.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .frontGrey {
        background-image: url("../../../assets/clothes/frontGrey.png");
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
