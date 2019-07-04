<template>
    <div class="bgContainer">
        <div class="userInfoContainer">
            <img class="headImg" :src="user.headImgURL" alt="">
            <p class="name">{{ user.name }}</p>
        </div>
        <div class="clothesContainer">
            <router-link to="/personal" class="directionBtn"><img src="../../assets/icon/left.png" alt=""></router-link>
                <transition name="cub">
                     <keep-alive><router-view/></keep-alive>
                </transition>
            <router-link to="/personal/back" class="directionBtn"><img src="../../assets/icon/next.png" alt=""></router-link>
        </div>
        <div class="voteContainer">
            <div class="vote">排名：{{ user.rank }}</div>
            <div class="vote">票数：{{ user.vote }}</div>
        </div>
        <button class="voteBtn">投票</button>
        <button class="voteBtn">分享拉票</button>
    </div>
</template>

<script>
    import {share} from "../../wx";

    export default {
        name: "Personal",
        data(){
            return{
                user:{
                    name:"user111",
                    headImgURL:require("@/assets/icon/icon15.png"),
                    vote:100200,
                    rank:1232
                },
            }
        },
      created() {
          share()
      }
    }
</script>

<style scoped>
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../../assets/background-1.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
    }

    .userInfoContainer {
        margin-top: 1.4rem;
        display: flex;
        align-items: center;
        width: 80%;
        margin-bottom: 1.4rem;
    }

    .headImg {
        width: 50px;
        border: solid 2px white;
        border-radius: 60px;
    }

    .name {
        font-size: 18px;
        font-weight: 600;
        color: white;
        margin-left: 1rem;
    }

    .clothesContainer {
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        width: 15rem;
        height: 15rem;
        overflow-y: hidden;
        border:solid 2px #193b83;
        background-color:rgba(25,59,131,0.2);
    }

    .directionBtn img{
        width: 30px;
        margin-top: 7rem;
    }

    .voteContainer {
        display: flex;
        width: 15rem;
        justify-content: space-between;
    }

    .vote {
        width: auto;
        padding: 2px 4px;
        border:solid 1px #193b83;
        background-color:rgba(25,59,131,0.1);
        margin-top: 6px;
        color: white;
        font-weight: 200;
        font-size: 16px;
    }

    .voteBtn {
        background-image: url("../../assets/icon/voteBtn.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 10rem;
        height: 2.2rem;
        border: none;
        background-color: transparent;
        margin-top: 1rem;
        color: white;
    }
</style>
