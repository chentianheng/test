<template>
    <div class="bgContainer"  @click="toActivity">
        <!--点击提示-->
        <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png"  alt="" >
        <img class="content1 animated fadeIn " src="../assets/navi/1.png"  alt="">
        <img class="content2 animated fadeInUp delay-1s" src="../assets/navi/2.png"  alt="">
        <img class="content3 animated fadeInUp delay-1s" src="../assets/navi/3.png"  alt="">
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


    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 45%;
        top: 45%;
        z-index: 1000
    }

    .content1 {
        margin-top: 1rem;
        width: 90%;
    }

    .content2 {
        width: 80%;
    }

    .content3 {
        margin-top: 2rem;
        width: 80%;
    }
</style>
