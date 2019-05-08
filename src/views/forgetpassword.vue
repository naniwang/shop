<template>
    <div class="container">
        <van-row type="flex" justify="center">
            <van-col span="24" style="text-align:center;color:#888888;font-size:28px;margin-bottom:30px;margin-top:-20px">验证手机号</van-col> 
        </van-row>
        <van-cell-group> 
            <van-field
                clearable
                v-model="phone" 
                placeholder="请输入手机号" 
            />
        </van-cell-group>
        <van-button type="primary" size="large" @click="btn" style="height:40px;background:#F4F4F4;border:none;line-height:40px;color:#8C8C8C;margin-top:40px;margin-bottom:12px;">发送验证码</van-button>
        <van-row type="flex" justify="center">
            <van-col span="24" style="text-align:center;color:#888888;">
                <router-link to="/forgetpassword" tag="span">重新发送</router-link>
            </van-col> 
        </van-row>   
        
    </div>
</template>
<script>
export default {
    name:"Forgetpassword",
    data:function(){
        return{
            phone:"",
            tit:"返回"
        }
    },
    methods: {
        btn(){
            this.$router.push("/number")
        },
        send(){
            this.$router.push("/forgetpassword")
        }

    },
}
</script>
<style scoped>
.container{
    margin-left:43px;
    margin-right: 39px;
}
</style>
