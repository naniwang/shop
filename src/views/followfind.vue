<template>
    <div>
        <van-row type="flex" justify="space-between" style="background:#E8E8E8;">
                 <van-col span="8">
                 <van-row type="flex" justify="space-between">
                 <van-col span="4" tag="button" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;"><img @click="btn()" src=""></van-col>
                 </van-row>
             </van-col>
            <van-col span="12" style="margin-top:11px;"> 
                <van-row type="flex"  class="FlwFind" justify="space-between;">
                    <van-col span="6"><router-link to="/mainfollow" tag="span">关注</router-link></van-col>
                    <van-col span="6"><router-link to="/followfind" tag="span" style="color:blue;">发现</router-link></van-col>
                    <van-col span="6"><router-link to="/followaround" tag="span">周围 </router-link></van-col>
                </van-row>
            </van-col>
            <van-col span="4"></van-col>
        </van-row>
        <van-row type="flex" justify="center" > 
            <van-col span="20">
                <van-search placeholder='大家都在搜索"玩转万圣节派对"' v-model="value" input-align="center"/>
            </van-col> 
        </van-row>

        <van-popup v-model="show" position="left" :overlay="true" style="width:80%;height:100%" class="more">
            <div style="width:150px;height:30px;margin-left:50px;line-height:30px;font-size:20px;margin-top:35px;margin-bottom:30px;">更多</div>
            <div><router-link to="" tag="span">我的关注</router-link></div>
            <div><router-link to="" tag="span">我的收藏</router-link></div>
            <div style="margin-bottom:19px;"><router-link to="" tag="span">我的草稿</router-link></div>
            <p></p>
            <div style="margin-top:30px;"><router-link to="" tag="span">购物车</router-link></div>
            <div><router-link to="" tag="span">订单</router-link></div>
            <div><router-link to="" tag="span">PIN劵</router-link></div>
            <div><router-link to="" tag="span">心愿单</router-link></div> 
            <div style="margin-bottom:23px;"><router-link to="" tag="span">pin会员卡</router-link></div> 
            <p></p>
            <div style="margin-top:22px;"><router-link to="" tag="span">帮助与客服</router-link></div> 
            <div><router-link to="" tag="span">设置</router-link></div> 
        </van-popup>  

        <van-row type="flex" justify="space-around" class="flwfind" style="font-size:12px;background:#F8F8F8 100%;width:100%;height:31px;line-height:31px;">
            <van-col span="2"><router-link to="/flwfindrecommend" >推荐</router-link></van-col>
            <van-col span="2"><router-link to="/flwfindcosmetic">彩妆</router-link></van-col>
            <van-col span="2"><router-link to="/flwfindcare">护肤</router-link></van-col>
            <van-col span="2"><router-link to="/flwfindvideo">视频</router-link></van-col>
        </van-row>

        <router-view></router-view>

    </div>
</template>
<script>
export default {
    name:"followFind",
    data:function(){
        return{
            show:false,
            value:"",
        }
    },
    methods: {
        btn(){
            this.show = true
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
img{
    width:39px;
    height: 39px;
}
p{
    width:150px;
    height:1px;
    margin-left:60px;
    background: #BBBBBB 100%;
}
.FlwFind .router-link-active{
    color:#8c8c8c;
}
.flwfind .router-link-active{
    color:#101010
} 
</style>
