<template>
    <div class="container">
        <van-row type="flex" justify="center" class="biaoti">
            <van-col span="24" class="biaoti" style="color:#888888;font-size:28px;text-align:center;">手机号密码登陆</van-col> 
        </van-row>
        <van-cell-group >
            <van-field
                v-model="phone"
                placeholder="请输入手机号"
            />
            <van-field
                v-model="password"
                type="password"
                placeholder="请输入密码"
            />
        </van-cell-group>
        <div class="login">
            <van-button type="primary" size="large" @click="login({password:password,phone:phone})" style="height:40px;background:#F4F4F4;border:none;line-height:40px;color:#8C8C8C;">登陆</van-button>
            <van-row type="flex" style="margin-top:5px">
                <van-col span="12"><button type="default" @click="forget" style="background:white;border:none;color:#888">忘记密码</button></van-col> 
                <van-col span="12">
                    <router-link to="/phonelogin" style="color:#888;float:right">验证码登陆</router-link>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    name:"Login", 
    data:function(){
        return{
            username:"",
            password:"",
            tit:"返回",
            phone:"",
            token:""
        }
    },
    methods:{
        ...mapActions(["login"]),  
        forget(){
            this.$router.push("/forgetpassword")
        },
        phonelogin(){
            this.$router.push("/phonelogin")
        }
    },
    mounted() {
        this.$emit("toparent",this.tit)
    }
}
</script>
<style scoped>
.container{
    margin-top: 46px; 
    margin-left: 20px;
    margin-right: 20px;
}
.login{
    margin-top: 30px;
}
.biaoti{
    margin-top: 15px;
    margin-bottom: 25px;
}
</style>
