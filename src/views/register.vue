<template>
<div class="container">
    <van-row type="flex" justify="center" class="biaoti">
        <van-col span="6" class="biaoti" style="color:#888888;font-size:28px;margin-top: -20px;
    margin-bottom: 30px;">请注册</van-col> 
    </van-row>
   <van-cell-group>
        <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        ref="yhm"
        />
        <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        />
        <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            ref = "mm"
        />
        <van-field
            v-model="password1"
            type="password"
            label="确认密码"
            placeholder="请输入密码"
        />
    </van-cell-group> 
    <div class="register">
        <van-button type="info" size="large" @click="register()" style="height:40px;background:#F4F4F4;border:none;line-height:40px;color:#8C8C8C;">注册</van-button>   
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    name:"Register",
    props:["name"],
    data:function(){
        return{
            username:"",
            password:"",
            password1:"",
            phone:"",
            sms:"",
            tit:"返回"
        }
    },
    mounted(){
        this.$emit("toparent",this.tit)
    },
    methods:{

        register(){
            var _this = this
            // 调用后台数据 以及正则验证
            //用户名验证
            var yhm = null
            //用户名正则，4到16位（字母，数字，下划线，减号）  
            var reg = /^[a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(_this.username)){
                yhm = true
            } else {
                yhm = false
                _this.username = ""
            }

            var mm = null 
            //密码正则，4到16位（字母，数字，下划线，减号）
            var reg = /^[a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(_this.password)){
                mm = true
            } else {
                mm = false
                _this.password = ""
            }

            axios({
                method:"get",
                url:"http://jx.xuzhixiang.top/ap/api/reg.php",
                params:{username:_this.username,password:_this.password},
            }).then(function(data){
                if(data.data.code == 1 && yhm && mm){
                    _this.$router.push("/login")
                }else {
                    _this.$router.push("/register")
                }
            })
        }
    }
}
</script>

<style scoped> 
.container{
    margin-top: 46px; 
    margin-left: 20px;
    margin-right: 20px;
}
</style>
