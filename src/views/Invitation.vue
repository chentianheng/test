<template>
    <div class="bgContainer"  @click="toNavi">
        <!--点击提示-->
            <img class="tips animated bounceIn delay-3s infinite " src="../assets/icon/click.png"  alt="" >
            <!--<img class="design" src="../assets/design.png" alt="">-->
            <div  class="animated fadeIn" style="height: 90%;overflow-y: auto;display: flex;align-items: center;flex-direction: column">
                <img class="content" src="../assets/designTitle.png" alt="">
                <!--<img class="content" src="../assets/designSubTitle.png" alt="">-->
                <div class="title"><p>活动时间</p></div>
                <div class="detail"><p>2019年7月13日18:30</p></div>
                <div class="title"><p>活动地点</p></div>
                <div class="detail"><p>广州塔二层观景平台</p></div>
                <br>
                <div class="title"><p>活动流程</p></div>
                <div class="detail2">
                    <p>18:30-19:30</p>
                    <p>签到-暖场秀</p>
                </div>
                <div class="detail2">
                    <p>19:30-19:55</p>
                    <p>全新BMW 3系故事说</p>
                </div>
                <div class="detail2">
                    <p>19:55-20:21</p>
                    <p>新车亮相讲解</p>
                </div>
                <div class="detail2">
                    <p>20:21-20:30</p>
                    <p>重燃MISSION3</p>
                </div>
                <div class="detail2">
                    <p>20:30-21:00</p>
                    <p>全新BMW 3系电音派对</p>
                </div>
            </div>
            <!--<footer style="color: #FFFFFF;font-size: 13px;margin-top: 2px;position: absolute;bottom: 1rem">详情请联系BMW广州特约授权经销商</footer>-->
    </div>
</template>

<script>
    import {share} from "../wx";

    export default {
        name: "Invitation",
        methods:{
            toNavi(){
                this.$router.push('/navigation')
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
        background-image: url("../assets/background-kv.png");
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
        margin-bottom: 2rem;
    }

    .content  + .content{
        margin-top: 2rem;
        width: 75%;
        margin-bottom: 2rem;
    }

    .title {
        color: white;
        background-color: rgba(255,255,255,0.73);
        font-size: 12px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        /*text-align: left;*/
        font-weight: 500;
        text-align: center;
    }

    .detail {
        color: white;
        background-color: rgba(0,0,0,0.23);
        font-size: 12px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        /*text-align: left;*/
        font-weight: 500;
    }

    .detail2 {
        color: white;
        background-color: rgba(0,0,0,0.23);
        font-size: 12px;
        padding: 2px 5px;
        width: 75%;
        margin-top: 4px;
        /*text-align: left;*/
        font-weight: 500;
        display: flex;
        justify-content: space-between;
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
