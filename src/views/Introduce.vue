<template>
    <div class="bgContainer">
        <div class="blackContainer animated zoomIn" @click="backHome">
            <img class="animated fadeInUp title" src="../assets/introduce/title.png" alt="">
            <img class="animated fadeInUp content" src="../assets/introduce/1.png" alt="">
            <img class="animated fadeInUp content1" src="../assets/introduce/2.png" alt="">
            <img class="animated fadeInUp content1" src="../assets/introduce/3.png" alt="">
            <img class="animated fadeInUp content1" src="../assets/introduce/4.png" alt="">
            <img class="animated fadeInUp content2" src="../assets/introduce/5.png" alt="">
            <img class="animated fadeInUp content2" src="../assets/introduce/6.png" alt="">
        </div>
        <footer style="color: #727171;font-size: 16px;margin-top: 2px">最终解释权归所有BMW中国所有</footer>
    </div>

</template>

<script>
    export default {
        name: "introduce",
        methods:{
            backHome(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .bgContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/background.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
    }

    .blackContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0,0,0,0.7);
        width: 90%;
        height: 90%;
        overflow-y: auto;
    }

    .title {
        margin-top: 2rem;
        width: 47%;
        animation-delay: 500ms;
    }

    .content {
        margin-top: 1rem;
        width: 95%;
        animation-delay: 550ms;
    }

    .content1 {
        margin-top: 1rem;
        width: 95%;
        animation-delay: 800ms;
    }

    .content2 {
        margin-top: 1rem;
        width: 95%;
        animation-delay: 900ms;
    }

</style>
