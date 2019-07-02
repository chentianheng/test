<template>
    <div class="bgContainer">
        <img class="title animated fadeInUp" src="../assets/icon/homeTitle.png" alt="">
        <img class="clothes animated flipInX" src="../assets/clothes/frontWhite.png" alt="">
        <div class="contents animated bounceIn " @click="toClothes">
            <img src="../assets/icon/homeIcon.png" alt="" style="width: 50%">
        </div>
        <div class="footerBtn">
            <router-link to="/introduction" class="voteBtn1 animated fadeIn"></router-link>
            <router-link to="/introduction" class="voteBtn2 animated fadeIn"></router-link>
            <router-link to="/introduction" class="voteBtn3 animated fadeIn"></router-link>
        </div>

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
        background-image: url("../assets/background-2.jpg");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
        position: relative;
        overflow-y: hidden;
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
        bottom: 14rem;
        /*animation-duration: 1500ms;*/
        animation-delay: 1500ms;
    }

    .content {
        font-size: 14px;
        font-weight: 600;
    }

    .voteBtn1 {
        background-image: url("../assets/icon/detailBtn.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }

    .voteBtn2 {
        background-image: url("../assets/icon/detailBtn-1.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }

    .voteBtn3 {
        background-image: url("../assets/icon/detailBtn-2.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 6rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        animation-duration: 800ms;
        animation-delay: 1200ms;
    }
    .footerBtn {
        position: absolute;
        bottom: 2rem;
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
</style>
