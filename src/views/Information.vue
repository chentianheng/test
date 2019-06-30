<template>
    <div class="bgContainer">
        <div class="tableContainer animated fadeInUp">
            <p class="title">填写信息</p>
            <!--选择宝马3的理由-->
            <label class="label" for="like">*选择全新宝马3系的理由：</label>
            <select class="select" v-model="reason.selected"  multiple id="like">
                    <option v-for="(multOption,index) in reason.options"
                            :value="multOption"
                            :key="index"
                    >{{ multOption }}</option>
             </select>
            <label class="label" for="name">*请输入您的姓名：</label>
            <div class="nameSex">

                <!--姓名-->

                <input type="text" id="name" class="nameInput" placeholder="姓名" v-model="name">

                <!--性别-->

                <input id="1" type="radio" value="gentleman" v-model="sex">
                <label class="label" for="1">先生</label>

                <input id="2" type="radio" value="lady" v-model="sex">
                <label class="label" for="2">女士</label>
                <!--<p>{{ sex }}</p>-->
            </div>

            <!--联系方式-->
            <label class="label" for="phone">*请输入您的手机：</label>
            <input type="text" id="phone" class="input" placeholder="移动电话" v-model="phone">
            <!--经销商-->
            <label class="label" for="fourS">*经销商：</label>
            <select class="select" v-model="fourS.selected"  id="fourS">
                <option disabled>请选择经销商</option>
                <option v-for="(option,index) in fourS.options"
                        :value="option"
                        :key="index"
                >{{ option }}</option>
            </select>
        </div>

        <button class="blueButton animated fadeIn">提交并上传作品</button>

    </div>
</template>

<script>
    export default {
        name: "Information",
        data(){
            return{
                reason:{
                    options:["外观", "内饰", "操控", "品牌", "科技感", "动力"],
                    selected:[],
                },
                name:"",
                sex:"lady",
                phone:"",
                fourS:{
                    options:[
                        "广州宝悦汽车贸易有限公司",
                        "广东粤宝汽车销售服务有限公司",
                        "广州宝悦汽车贸易有限公司第一分公司",
                        "广州宝泽汽车销售服务有限公司",
                        "广州粤之宝汽车销售服务有限公司",
                        "广州宝泰行汽车销售服务有限公司",
                        "广州市广德宝汽车销售服务有限公司",
                        "广州市昌宝汽车销售服务有限公司",
                        "广州宝升行汽车销售服务有限公司",
                        "广州君宝汽车销售服务有限公司",
                        "广东南方宝诚汽车销售服务有限公司"],
                    selected:"",
                }

            }
        },
        created() {
            this.fourS.selected = "请选择经销商"
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
        margin-top: 2rem;
        font-size: 26px;
        color: white;
        font-weight: 300;
    }

    .tableContainer {
        display: flex;
        flex-direction: column;
        width: 70%;
    }

    .select {
        width: 100%;
        height: 2rem;
        border: solid 1px transparent;
        -moz-appearance:none;
        -webkit-appearance:none;
        background: white url("../assets/icon/down.png") no-repeat scroll right center ;
        background-size: 1.2rem auto;
        border-radius: 4px;

    }
    .nameInput {
        width: 55%;
        height: 2rem;
        border: solid 1px transparent;
        -moz-appearance:none;
        -webkit-appearance:none;
        background: white;
        border-radius: 4px;
        margin-right: 14px;
    }

    .nameSex {
        text-align: left;
    }

    .input {
        width: 100%;
        height: 2rem;
        border: solid 1px transparent;
        -moz-appearance:none;
        -webkit-appearance:none;
        background: white;
        border-radius: 4px;
    }

    .label {
        margin-top: 1rem;
        color: white;
        font-size: 14px;
        text-align: left;
        width: 100%;
        margin-right: 14px;
    }

    .blueButton {
        background-color: #1c69d4;
        font-size: 16px;
        margin-top: 2rem;
        height: 40px;
        width: 150px;
        color: white;
        border: none;
        animation-delay: 800ms;
    }
</style>
