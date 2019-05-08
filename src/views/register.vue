<template>
<div class="container">
    <van-row type="flex" justify="center" class="biaoti">
        <van-col span="6" class="biaoti" style="color:#888888;font-size:24px;margin-top: -20px;
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
       <van-cell-group>
            <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
            <van-button @click="btnphone()" slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
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

    <van-popup v-model="show">用户名或密码错误,请重新输入!!!用户名/密码为4到16位(字母,数字,下划线,减号)</van-popup>

</div>
</template>

<script>
import axios from "axios"
import qs from "qs"
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
            tit:"返回",
            show:false,
            ph:"",
        }
    }, 
    mounted(){
        this.$emit("toparent",this.tit)
    },
    methods:{
        btnphone(){
           var _this = this
            var reg = /^[1]([3-9])[0-9]{9}$/
            if(reg.test(_this.phone)){
                axios({
                    method:"post",
                    headers:{'Content-Type':'application/x-www-form-urlencoded'},
                    url:"http://39.97.116.110:8081/girl/sms/sendmsg.do",
                    data:{phone:_this.phone}
                }).then((data)=>{
                    console.log(data.data.code)
                    if(data.data.code == 1000){
                        _this.ph = true
                    }else{
                        _this.ph = false
                    }
                })
            } 
        },
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

            var mm1 = null 
            //密码正则，4到16位（字母，数字，下划线，减号）
            var reg = /^[a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(_this.password1)){
                mm1 = true
            } else {
                mm1 = false
                _this.password1 = ""
            }
            var ms = null
            axios({
                header:{'Content-Type':'application/json'},
                method:"post",
                url:"http://39.97.116.110:8081/girl/sms/checkcode.do",
                data:{"code":_this.sms,"phone":_this.phone}
            }).then(function(data){
                if(data.data.code==1000){
                    ms = true
                }else{
                    ms = false
                }
            })

            //注册验证
            axios({
                header:{'Content-Type':'application/json'},
                method:"post",
                url:"http://39.97.116.110:8081/girl/user/register.do",
                data:{"password":_this.password,"phone":_this.phone}
            }).then(function(data){
                console.log(_this.ph)
                if(data.data.code == 1000 && yhm && mm && mm1 && _this.ph==true && ms){
                    _this.$router.push("/login")
                }else {
                    _this.show = true
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
