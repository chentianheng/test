<template>
    <div class="clothesImg">
        <div :class="`back${clothes.color}`"></div>
        <!--衣服上的文字-->
        <p class="text"
           v-show="clothes.back.textShow"
           :style="{fontSize: clothes.back.text.fontSize-3 + 'px'}"
           v-html="clothes.back.text.textMsg"
        ></p>
        <i class="position1" v-show="clothes.back.iconShow"><img :src="clothes.back.imgUrl" alt=""></i>
    </div>
</template>

<script>
    export default {
        name: "PersonalBack",
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
                        textShow : true,
                        iconShow : false,
                        text:{
                            textMsg : "1231&#10;12312",
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
        /*justify-content: center;*/
        align-items: center;
        width: 11rem;
        height: 16rem;
        overflow-y: hidden;
        /*overflow-x: hidden;*/
    }

    /*不同颜色的衣服的样式*/
    .backWhite {
        background-image: url("../../../assets/clothes/backWhite.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .backBlack {
        background-image: url("../../../assets/clothes/backBlack.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .backBlue {
        background-image: url("../../../assets/clothes/backBlue.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .backOrange {
        background-image: url("../../../assets/clothes/backOrange.png");
        background-size: auto 11.5rem;
        width: 11rem;
        height: 14rem;
        background-repeat: no-repeat;
    }

    .backGrey {
        background-image: url("../../../assets/clothes/backGrey.png");
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

    .position1 img {
        height: auto;
        width: 4rem;
    }

    .text {
        height: auto;
        width: 4rem;
        position: relative;
        bottom: 11rem;
        white-space: pre-line;
        color: #757575;
    }
</style>
