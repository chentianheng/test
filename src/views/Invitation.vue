<template>
    <div class="bgContainer"  @click="toActivity">
        <!--点击提示-->
            <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png"  alt="" >
            <img class="design" src="../assets/design.png" alt="">
            <div  class="animated fadeIn" style="height: 90%;overflow-y: auto;display: flex;align-items: center;flex-direction: column">
                <img class="content" src="../assets/designTitle.png" alt="">
                <img class="content" src="../assets/designSubTitle.png" alt="">
                <p class="title">活动时间</p>
                <p class="detail">2019年7月13日18:30</p>
                <p class="title">活动地点</p>
                <p class="detail">广州塔二层观景平台</p>
                <br>
                <p class="title">活动流程</p>
                <p class="detail">18:30-19:30 签到-暖场秀</p>
                <p class="detail">19:30-19:55 BMW3系故事说 </p>
                <p class="detail">19:55-20:21 新车亮相讲解 </p>
                <p class="detail">20:21-20:30 重燃MISSION3 </p>
                <p class="detail">20:30-21:00 BMW3系电音派对</p>
            </div>
            <footer style="color: #FFFFFF;font-size: 16px;margin-top: 2px;position: absolute;bottom: 1rem">最终解释权归所有BMW中国所有</footer>
    </div>
</template>

<script>
    import {share} from "../wx";

    export default {
        name: "Invitation",
        methods:{
            toActivity(){
                this.$router.push('/activity')
            },
            toRanking(){
                this.$router.push('/ranking')
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
        background-image: url("../assets/background-3.png");
        background-size:  100%  auto;
        background-repeat: no-repeat;
        background-color: black;
    }

    .design {
        width: 100%;
        position: absolute;
        top: 1rem;
    }

    .content {
        margin-top: 3rem;
        width: 80%;
    }

    .content  + .content{
        margin-top: 2rem;
        width: 75%;
        margin-bottom: 2rem;
    }

    .title {
        color: white;
        background-color: #3E3A39;
        font-size: 16px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        text-align: left;
        font-weight: 600;
    }

    .detail {
        color: black;
        background-color: rgba(255,255,255,0.5);
        font-size: 16px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        text-align: left;
        font-weight: 600;
    }

    .tips{
        position: absolute;
        height: 30px;
        width: auto;
        right: 45%;
        top: 45%;
        z-index: 1000
    }
</style>
