<template>
    <div class="bgContainer"  >
        <!--点击提示-->
        <img style="position: absolute;height: 45px;width: auto;right: 10px;top: 10px;z-index: 10"
             src="../assets/icon/ranking.png" @click="toRanking" alt=""/>
        <div class="minContainer" @click="toActivity">
            <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png"   alt="" >
            <img class="content1 animated fadeIn " src="../assets/navi/1.png"  alt="">
            <img class="content2 animated fadeInUp delay-1s" src="../assets/navi/2.png"  alt="">
            <img class="content3 animated fadeInUp delay-1s" src="../assets/navi/3.png"  alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        methods:{
            toActivity(){
                this.$router.push('/activity')
            },
            toRanking(){
                this.$router.push('/ranking')
            }
        }
    }
</script>

<style scoped>
    .bgContainer {
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;
        background-image: url("../assets/background-3.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
    }

    .minContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 45%;
        top: 45%;
        z-index: 1000
    }

    .content1 {
        margin-top: 2rem;
        width: 90%;
    }

    .content2 {
        width: 75%;
    }

    .content3 {
        margin-top: 2rem;
        width: 75%;
    }

    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 10%;
        top: 45%;
        z-index: 1000
    }

</style>
