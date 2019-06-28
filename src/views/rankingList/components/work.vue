<template>
    <div @click="toPerson" class="worksContainer">
        <div class="clothesWork">
            <div class="clothesImg">
                <div :class="`clothes${data.color}`"></div>
                <!--衣服上的文字-->
                <p class="text" v-show="data.textShow">{{ data.text.textMsg }}</p>
                <!--图标的位置，写n个样式地址-->
                <i :class="`position${data.position.status}`" v-show="data.iconShow"><img :src="data.iconUrl" alt=""></i>
            </div>
            <p class="name">{{ data.user.name }}</p>
            <div class="vote">票数：{{ data.user.vote }}</div>
            <!--<div class="vote">排名：{{ user.rank }}</div>-->
        </div>
        <img class="headImg" :src="data.user.headImgURL" alt="">
    </div>
</template>

<script>
    export default {
        name: "work",
        props:{
            data: {
                type:Object,
                required:true
            }
        },
        data(){
            return{}
        },
        methods:{
            toPerson(){
                this.$router.push({path: '/personal'})
            }
        }
    }
</script>

<style scoped>
    .worksContainer {
        margin: 0.5rem 0 0 0.5rem;
        height: 12rem;
        width: 9.7rem;
        overflow-y: hidden;
    }

    .clothesWork {
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;
    }

    .clothesImg {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 7rem;
        overflow-y: hidden;
        /*margin-left: calc(16px + 1rem);*/
        border:solid 2px #193b83;
        background-color:rgba(25,59,131,0.2);
    }

    .name {
        font-size: 14px;
        font-weight: 600;
        color: white;
        margin-top: 3px;
        margin-bottom: 3px;
    }

    .vote {
        width: 6rem;
        border:solid 1px #193b83;
        background-color:rgba(25,59,131,0.1);
        margin-top: 6px;
        color: white;
        font-weight: 200;
        font-size: 12px;
        padding-top: 2px;
        padding-bottom: 2px;
    }

    .headImg {
        width: 40px;
        border: solid 2px white;
        border-radius: 60px;
        position: relative;
        bottom: 4.5rem;
        right: 3.5rem;
    }
    /*不同颜色的衣服的样式*/
    .clothesWhite {
        /*padding-top: 1rem;*/
        background-image: url("../../../assets/clothes/front.png");
        background-size: auto 5rem;
        width: 5rem;
        height: 5rem;
        background-repeat: no-repeat;
    }

    /*正中间*/
    .position1 {
        height: auto;
        width: 2rem;
        position: relative;
        bottom: 4rem;
    }

    .position1 img{
        height: auto;
        width: 2rem;
    }
    /*左側*/
    .position2 {
        height: auto;
        width: 2rem;
        position: relative;
        bottom: 4rem;
        right: 0.8rem;
    }

    .position2 img{
        height: auto;
        width: 1rem;
    }
    /*右側*/
    .position3 {
        height: auto;
        width: 2rem;
        position: relative;
        bottom: 4rem;
        left: 0.6rem;
    }

    .position3 img{
        height: auto;
        width: 1rem;
    }
</style>
