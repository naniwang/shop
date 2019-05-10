<template>
<div>
    <div class="hello">
     <button
            style="width:80px;height:30px;background:#F4F4F4;border:none;border-radius:4px;margin-top:10px;line-height:30px;color:#BBBBBB"
            @click="onClickLeft"
        >{{tit}}</button> 
  </div>

    <div class="container">
        <van-row type="flex" justify="center">
            <van-col span="24" style="color:#888888;font-size:22px;margin-bottom:30px;margin-top:20px;text-align:center;">登陆后可查看我的主页</van-col> 
        </van-row>
        <van-cell-group> 
            <van-field
                clearable
                v-model="loginphone" 
                placeholder="请输入手机号" 
            />
        </van-cell-group>
        <van-button type="primary" size="large" @click="loginPhone({phone:loginphone})" style="heig·ht:40px;background:#F4F4F4;border:none;line-height:40px;color:#8C8C8C;margin-top:40px;margin-bottom:12px;">发送验证码</van-button> 
        <van-row type="flex">
            <van-col span="24" style="text-align:center;color:#8c8c8c">
                <router-link  to="" @click.native="send()" tag="span">重新发送</router-link>
            </van-col>
        </van-row>

   </div>


    <van-popup v-model="show" position="left" :overlay="true" style="width:80%;height:100%" class="more">
            <van-row type="flex" justify="sapce-between">
                <van-col span="4"></van-col>
                <van-col>
                    <div style="width:150px;height:30px;margin-left:50px;line-height:30px;font-size:20px;margin-top:35px;margin-bottom:30px;">更多</div>
                    <div><router-link to="" tag="span">我的关注</router-link></div>
                    <div><router-link to="" tag="span">我的收藏</router-link></div>
                    <div style="margin-bottom:19px;"><router-link to="" tag="span">我的草稿</router-link></div>
                    <p></p>
                    <div style="margin-top:30px;"><router-link to="" tag="span">购物车</router-link></div>
                    <div><router-link to="" tag="span">订单</router-link></div>
                    <div><router-link to="" tag="span">PIN劵</router-link></div>
                    <div><router-link to="/cartwish" tag="span">心愿单</router-link></div> 
                    <div style="margin-bottom:23px;"><router-link to="" tag="span">pin会员卡</router-link></div> 
                    <p></p>
                    <div style="margin-top:22px;"><router-link to="" tag="span">帮助与客服</router-link></div> 
                    <div><router-link to="" tag="span">设置</router-link></div> 
                </van-col>
                <van-col span="10"></van-col>

            </van-row>
        </van-popup> 




</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name:"Phonelogin",
    data:function(){
        return{
            tit:"首页",
            loginphone:"",
            show:false
        }
    },
    mounted() {
        this.$emit("toparent",this.tit)
    },
    methods: {
        ...mapActions(["loginPhone"]) , 
        send(){
            this.$router.push("/forgetpassword")
        },
        onClickLeft(){
            this.show = true
        }
    },
}
</script>

<style scoped>
.container{
    margin-left:43px;
    margin-right: 39px;
}
.more span{
    font-size: 14px;
    height:30px;
    line-height: 30px;
    margin-left: 76px;
    margin-bottom:10px;
    color:#8C8C8C;
    height:30px;
} 
</style>
