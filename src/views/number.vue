<template>
    <div class="container">
        <van-row type="flex" justify="center">
            <van-col span="24" style="color:#888888;font-size:28px;margin-bottom:30px;margin-top:-20px;text-align:center">输入验证码</van-col> 
        </van-row>
        <van-password-input
            :value="value"
            :mask="false"
            @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        />



        <van-button type="primary" size="large" @click="numberbtn({number:value})" style="height:40px;background:#F4F4F4;border:none;line-height:40px;color:#8C8C8C;margin-top:40px;margin-bottom:12px;">确定</van-button> 
        <van-row type="flex" justify="space-between" style="margin-top:5px">
                <van-col span="12"><button type="default" @click="forget" style="background:white;border:none;color:#888">忘记密码</button></van-col> 
                <van-col span="12"><router-link to="/login" style="color:#888;float:right">密码登陆</router-link></van-col>
            </van-row>
    </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
    name:"Number",
    data:function(){
        return{
            value:"",
            tit:"返回",
            showKeyboard: true
        }
    },
    methods: {
        ...mapActions(["numberbtn"]),
        btn(){
            this.$router.push("/index")
        },
        forget(){
            this.$router.push("/forgetpassword")  
        },
        passwordlogin(){
            this.$router.push("/login")  
        },
        onInput(key) {
        this.value = (this.value + key).slice(0, 6);
        },
        onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
        }
    }
}
</script>

<style scoped>
.container{
    margin-left:43px;
    margin-right: 39px;
}
</style>
