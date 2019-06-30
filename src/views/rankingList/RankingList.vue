<template>
    <div class="bgContainer">
        <p class="title">#一直潮一直秀——THE3联名T恤设计大赛#</p>
        <img class="subTitleImg" src="../../assets/icon/subTitleImg.png" alt="">
        <p class="subTitle">温馨提示：用户每人每天投票一次</p>
        <div class="list">
            <Work
                v-for="( work,index ) in works"
                :key="index"
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
    import Work from './components/Work'
    export default {
        name: "rankingList",
        components: {
            Work
        },
        data(){
            return{
                works:[
                    { clothes:{
                            front:{
                                position:1,
                                imgUrl:require("@/assets/icon/pic1.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            back:{
                                position:3,
                                imgUrl:require("@/assets/icon/pic2.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            color:"Blue",
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon15.png"),
                            vote:10000,
                            rank:1
                        }
                    },
                    { clothes:{
                            front:{
                                position:1,
                                imgUrl:require("@/assets/icon/pic6.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            back:{
                                position:3,
                                imgUrl:require("@/assets/icon/pic8.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            color:"Blue",
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon12.png"),
                            vote:10000,
                            rank:1
                        }
                    },
                    { clothes:{
                            front:{
                                position:1,
                                imgUrl:require("@/assets/icon/pic9.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            back:{
                                position:3,
                                imgUrl:require("@/assets/icon/pic2.png"),
                                textShow : true,
                                iconShow : false,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            color:"Grey",
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon15.png"),
                            vote:10000,
                            rank:1
                        }
                    },
                    { clothes:{
                            front:{
                                position:1,
                                imgUrl:require("@/assets/icon/pic1.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            back:{
                                position:3,
                                imgUrl:require("@/assets/icon/pic1.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            color:"Blue",
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon15.png"),
                            vote:10000,
                            rank:1
                        }
                    },
                    { clothes:{
                            front:{
                                position:1,
                                imgUrl:require("@/assets/icon/pic1.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            back:{
                                position:3,
                                imgUrl:require("@/assets/icon/pic1.png"),
                                textShow : false,
                                iconShow : true,
                                text:{
                                    textMsg : "",
                                    fontSize : 12
                                },
                            },
                            color:"Blue",
                        },
                        user:{
                            name:"user111",
                            headImgURL:require("@/assets/icon/icon15.png"),
                            vote:10000,
                            rank:1
                        }
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
        background-image: url("../../assets/background.png");
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
        background-color: rgba(28,105,212,0.8);
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
