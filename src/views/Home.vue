<template>
    <div class="bgContainer">
        <img class="title animated fadeInUp" src="../assets/introduce/title.png" alt="">
        <img class="clothes animated flipInX" src="../assets/clothes/frontWhite.png" alt="">
        <div class="contents animated bounceIn " @click="toClothes">
            <p class="content">敲一下T恤</p>
            <p class="content">3秒制作</p>
            <p class="content">年轻人最爱潮服</p>
        </div>
        <router-link to="/introduction" class="voteBtn animated fadeIn"></router-link>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            toClothes(){
                this.$router.push('/clothes')
            }
        }
    }
</script>

<style scoped>
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../assets/background.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
    }

    .title {
        width: 80%;
    }

    .title {
        margin-top: 2rem;
        width: 47%;
        animation-delay: 200ms;
    }

    .clothes{
        margin-top: 4rem;
        width: 70%;
        animation-delay: 400ms;
    }

    .contents {
        position: relative;
        bottom: 12rem;
        /*animation-duration: 1500ms;*/
        animation-delay: 1500ms;
    }

    .content {
        font-size: 14px;
        font-weight: 600;
    }

    .voteBtn {
        position: absolute;
        bottom: 2rem;
        background-image: url("../assets/icon/detailBtn.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 7rem;
        height: 2.2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }

</style>
