<template>
<div style="z-index:1000">
    <div>
        <van-row type="flex" style="background:#E8E8E8 100%;">
            <van-col span="4">
                <van-row type="flex">
                    <van-col span="4" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;">
                        <img style="width:39px;height:39px;border:none;border-radius:50%;" @click="btn()" src="http://39.97.116.110:8081/webapp/media/images/73291794_p0_master1200.jpg">
                    </van-col>
                </van-row>
            </van-col> 
            <van-col span="19">
                <input type="text" style="margin-top:8px;height:20px;width:100%;border:none;border-radius:3px;padding-left:3px" placeholder='大家都在搜索"玩转万圣节派对"' v-model="value" >
            </van-col> 
        </van-row> 
    </div>

    <van-tabbar v-model="active" active-color="#262626" fixed style="position:fixed;bottom:-1px;left:0;background:#E8E8E8;font-size:20px">
        <van-tabbar-item fixed style="font-size:20px;color:#8c8c8c" to="/mainindex">首页</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;color:#262626" to="/shopping">商城</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;font-weight:900"><van-icon name="plus"/></van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/message">消息</van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/me">我</van-tabbar-item>
    </van-tabbar>




     <van-popup v-model="show" position="left" :overlay="true" style="width:80%;height:100%" class="more">
            <van-row type="flex" justify="sapce-between">
                <van-col span="4"></van-col>
                <van-col>
                    <div style="width:150px;height:30px;margin-left:50px;line-height:30px;font-size:20px;margin-top:35px;margin-bottom:30px;">更多</div>
                    <div><router-link to="" tag="span">我的关注</router-link></div>
                    <div><router-link to="" tag="span">我的收藏</router-link></div>
                    <div style="margin-bottom:19px;"><router-link to="" tag="span">我的草稿</router-link></div>
                    <p></p>
                    <div style="margin-top:30px;"><router-link to="/cartlist" tag="span">购物车</router-link></div>
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
export default {
    name:"mainFootHead",
    data:function(){
        return{
            value:"",
            active:0,
            show:false
        }
    }  ,
    methods: {
        btn(){
            this.show =true
        }
    },  
}
</script>
<style scoped>
.van-search .van-cell{
    padding:0 10px 0 0
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
