<template>
    <div class="bgContainer">
        <img class="design" src="../assets/design.png" alt="">
        <img class="content" src="../assets/designTitle.png" alt="">
        <img class="content" src="../assets/designSubTitle.png" alt="">
        <p class="title">活动时间</p>
        <p class="detail">2019年7月13日19时</p>
        <p class="title">活动地点</p>
        <p class="detail">广州塔二层观景平台</p>
        <br>
        <p class="title">活动流程</p>
        <p class="detail">18:30-19:00  签到入场 30分钟</p>
        <p class="detail">18:30-19:00  签到入场 30分钟</p>
        <p class="detail">18:30-19:00  签到入场 30分钟</p>
        <p class="detail">18:30-19:00  签到入场 30分钟</p>
        <footer style="color: #727171;font-size: 16px;margin-top: 2px;position: absolute;bottom: 1rem">最终解释权归所有BMW中国所有</footer>
    </div>
</template>

<script>
    export default {
        name: "Invitation"
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
        background-color: #193b81;
        font-size: 16px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        text-align: left;
        font-weight: 300;
    }

    .detail {
        color: black;
        background-color: rgba(255,255,255,0.5);
        font-size: 16px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        text-align: left;
        font-weight: 300;
    }
</style>
