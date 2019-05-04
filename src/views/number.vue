<template>
    <div class="container">
        <van-row type="flex" justify="center">
            <van-col span="12" style="color:#888888;font-size:28px;margin-bottom:30px;margin-top:-20px">输入验证码</van-col> 
        </van-row>
        <van-password-input
            :value="value"
            :mask="false"
            @focus="showKeyboard = true"
        />
        <van-button type="primary" size="large" @click="btn" style="height:40px;background:#F4F4F4;border:none;line-height:40px;color:#8C8C8C;margin-top:40px;margin-bottom:12px;">确定</van-button> 
        <van-row type="flex" justify="space-between" style="margin-top:5px">
                <van-col span="8"><button type="default" @click="forget" style="background:white;border:none;color:#888">忘记密码</button></van-col> 
                <van-col span="8"><button type="default" @click="passwordlogin" style="background:white;border:none;color:#888">密码登陆</button> </van-col>
            </van-row>
    </div>
</template>

<script>
export default {
    name:"Number",
    data:function(){
        return{
            value:"",
            tit:"返回"
        }
    },
    methods: {
        btn(){
            this.$router.push("/index")
        },
        forget(){
            this.$router.push("/forgetpassword")  
        },
        passwordlogin(){
            this.$router.push("/login")  
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
