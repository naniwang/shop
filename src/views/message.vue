<template>
<div>
    <van-nav-bar
        title="消息"
        left-text="菜单"
        right-text="首页"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
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

    <van-row type="flex" style="background:#E6E3E3 100%;">
        <van-col offset="1" span="23" style="font-size:14px;height:60px;line-height:60px;"><router-link to="" tag="div" style="color:#888; "></router-link>收到的赞和收藏</van-col>
    </van-row>
    <van-row type="flex" style="background:#E6E3E3 100%; ">
        <van-col offset="1" span="23" style="font-size:14px;height:60px;line-height:60px;"><router-link to="" tag="div" style="color:#888; "></router-link>收到的评论和@</van-col>
    </van-row>
    <van-row type="flex" style="background:#E6E3E3 100%">
        <van-col offset="1" span="23" style="font-size:14px;height:60px;line-height:60px;"><router-link to="" tag="div" style="color:#888; "></router-link>新增关注</van-col>
    </van-row>
    <van-row type="flex" style="background:#E6E3E3 100% ">
        <van-col offset="1" span="23" style="font-size:14px;height:60px;line-height:60px;"><router-link to="" tag="div" style="color:#888; "></router-link>通知消息</van-col>
    </van-row>
    <van-row type="flex" style="background:#E6E3E3 100%;margin-top:40px; ">
        <van-col offset="1" span="23" style="font-size:14px;height:60px;line-height:60px;"><router-link to="" tag="div" style="color:#888; "></router-link>私信</van-col>
    </van-row>

</div>
</template>
<script>
export default {
    name:"Shopping",
    data:function(){
        return{
            show:false
        }
    },
    methods: {
        onClickLeft(){
            this.show = true
        },
        onClickRight(){
            this.$router.push("/mainindex")
        }
    },
}
</script>
<style scoped>
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

