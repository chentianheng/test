<template>
    <div class="bgContainer">
        <p class="title">#一直潮一直秀——THE3联名T恤设计大赛#</p>
        <img class="subTitleImg" src="../../assets/icon/subTitleImg.png" alt="">
        <p class="subTitle">温馨提示：用户每人每天投票一次</p>
        <div class="list">
            <Work
                v-for="work in works"
                :key="work.id"
                :data="work"
            ></Work>
        </div>
        <!--我的作品-->
        <!--todo：根据缓存查到昵称，然后请求查看票数-->
        <!--<p class="name">我的票数：111111</p>-->
        <!--<p class="name">我的排名：1</p>-->
        <!--<button class="blueButton">我的作品</button>-->
    </div>
</template>

<script>
    import Work from './components/work'
    export default {
        name: "rankingList",
        components: {
            Work
        },
        data(){
            return{
                works:[
                    { iconUrl:require("@/assets/icon/pic10.png"),
                        color:"White",
                        position:{
                            status:1
                        },
                        text:{
                            textMsg:"11111",
                            fontSize:12
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon15.png"),
                            vote:10000,
                            rank:1
                        },
                        textShow:false,
                        iconShow:true
                    },
                    { iconUrl:require("@/assets/icon/pic0.png"),
                        color:"White",
                        position:{
                            status:2
                        },
                        text:{
                            textMsg:"133311",
                            fontSize:12
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon9.png"),
                            vote:12300,
                            rank:2
                        },
                        textShow:false,
                        iconShow:true
                    },
                    { iconUrl:require("@/assets/icon/pic0.png"),
                        color:"White",
                        position:{
                            status:3
                        },
                        text:{
                            textMsg:"133311",
                            fontSize:12
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/bmw.png"),
                            vote:12300,
                            rank:2
                        },
                        textShow:false,
                        iconShow:true
                    },
                    { iconUrl:require("@/assets/icon/pic0.png"),
                        color:"White",
                        position:{
                            status:1
                        },
                        text:{
                            textMsg:"133311",
                            fontSize:12
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/bmw.png"),
                            vote:12300,
                            rank:2
                        },
                        textShow:false,
                        iconShow:true
                    },
                    { iconUrl:require("@/assets/icon/pic0.png"),
                        color:"White",
                        position:{
                            status:1
                        },
                        text:{
                            textMsg:"133311",
                            fontSize:12
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/bmw.png"),
                            vote:12300,
                            rank:2
                        },
                        textShow:false,
                        iconShow:true
                    }
                    ],

            }
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

    .list {
        display: flex;
        flex-wrap:wrap;
        overflow-y: auto;
        width: 21rem;
        height: 25rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-color: rgba(255,255,255,0.1);
    }

    /*滚动条样式*/
    .list::-webkit-scrollbar {
        width: 5px;
        height: 1px;
    }

    .list::-webkit-scrollbar-thumb{
        border-radius: 10px;
        /*background-color: #1a3b88;*/
        background-color: rgba(237,120,50,0.8);
    }

    .title {
        color: #1a3b88;
        font-size: 18px;
        font-weight: 600;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .subTitleImg {
        width: 12rem;
        margin-bottom: 4px;
    }

    .subTitle {
        color: rgba(255,255,255,0.7);
        font-size: 11px;
    }

    .name {
        font-size: 14px;
        font-weight: 600;
        color: white;
        margin-top: 3px;
        margin-bottom: 3px;
    }

    .blueButton {
        background-color: #1c69d4;
        font-size: 16px;
        margin-top: 1rem;
        height: 40px;
        width: 150px;
        color: white;
        border: none;
    }
</style>
