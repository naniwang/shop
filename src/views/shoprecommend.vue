<template>
<div>

    <van-row type="flex" justify="space-around" style="background:#F8F8F8 100%;">
        <van-col span="4"><router-link to="/shoprecommend" tag="span" style="color:#101010">推荐</router-link></van-col>
        <van-col span="4"><router-link to="/shopcare" tag="span">护肤</router-link></van-col>
        <van-col span="4"><router-link to="/shopcosmetic" tag="span">彩妆</router-link></van-col>
    </van-row>

    <div style="padding:0 20px 0 19px">
        <van-swipe :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in list" :key="index">
                <img style="width:100%;" :src="item.banner_img_url"/>
            </van-swipe-item> 
        </van-swipe>

        <van-row>
            <van-col span="24" >
                <router-link to="" tag="div" style="background:#aaa 100%;border-radius:6px;overflow:hidden"> 
                    <van-row>
                         <van-col style="width:83px;height:82px;margin:9px 0 9px 30px;float:left;boder:1px solid #cecece">
                             <img src="" style="width:100%;height:100%"  >
                         </van-col>
                         <van-col>
                             <span style="font-size:12px;color:#101010;margin:28px 0 0 44px;float:left;">双十一特惠</span>
                         </van-col>
                         <van-col>
                             <span style="width:60px;color:#101010;float:left;height:60px;border-radius:50%;line-height:60px;background:white;text-align:center;padding:0;margin:20px 27px 20px 17px">Go</span>
                         </van-col>
                     </van-row>
                </router-link>
            </van-col>
        </van-row> 
    </div>




</div>
</template>
<script>
import axios from "axios"
export default {
    name:"shopRecommend",
    data:function(){
        return{
            list:""
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:" http://jx.xuzhixiang.top/ap/api/bannerlist.php",
            params:{uid:2064}
        }).then(function(data){
            _this.list = data.data.data
        })
    },
}
</script>
<style scoped>
span{
    color: #8c8c8c
} 
</style>
