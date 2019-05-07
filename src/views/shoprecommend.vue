<template>
<div>

    <van-row type="flex" justify="space-around" style="background:white 100%;height:36px;line-height:36px;background:#FDFDFD 100%;">
        <van-col span="4"><router-link to="/shoprecommend" tag="span" style="color:#101010">推荐</router-link></van-col>
        <van-col span="4"><router-link to="/shopcare" tag="span">护肤</router-link></van-col>
        <van-col span="4"><router-link to="/shopcosmetic" tag="span">彩妆</router-link></van-col>
    </van-row>

    <div style="padding:0 20px 0 19px;">
        <van-swipe :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in list" :key="index">
                <img style="width:100%;" :src="item.banner_img_url"/>
            </van-swipe-item> 
        </van-swipe>

        <van-row>
            <van-col span="24" >
                <router-link to="" tag="div" style="background:#aaa 100%;border-radius:6px;overflow:hidden"> 
                    <van-row justify="space-around">
                         <van-col span="6" style="width:83px;height:82px;margin:9px 0 9px 30px;float:left;boder:1px solid #cecece">
                             <img src="" style="width:100%;height:100%"  >
                         </van-col>
                         <van-col span="6">
                             <span style="font-size:12px;color:#101010;margin:28px 0 0 40px;float:left;">双十一来啦</span>
                         </van-col>
                         <van-col span="6">
                             <span style="width:60px;color:#101010;float:left;height:60px;border-radius:50%;line-height:60px;background:white;text-align:center;padding:0;margin:20px 27px 20px 28px">Go</span>
                         </van-col>
                     </van-row>
                </router-link>
            </van-col>
        </van-row> 

        <van-row type="flex" justify="space-between" style="margin-top:10px;">
            <van-col span="10" style="background:#F8F8F8 100%;">
                <router-link to="/shoplimit" tag="div">
                    <div style="width:100%;padding-left:10px;font-size:14px;margin-bottom:10px;">双十一限时购</div>
                    <van-row type="flex" justify="space-around">
                        <van-col span="10" style="height:50px;width:60px;background:#8c8c8c;margin-bottom:10px;"><img src=""></van-col>
                        <van-col span="10" style="height:50px;width:60px;background:#8c8c8c"><img src=""></van-col>
                    </van-row>
                </router-link>
            </van-col>
            <van-col span="10" style="background:#F8F8F8 100%;">
                <router-link to="" tag="div">
                    <div style="width:100%;padding-left:10px;font-size:14px;margin-bottom:10px">双十一预售</div>
                    <van-row type="flex" justify="space-around">
                        <van-col span="10" style="height:50px;width:60px;background:#8c8c8c;margin-bottom:10px;"><img src=""></van-col>
                        <van-col span="10" style="height:50px;width:60px;background:#8c8c8c"><img src=""></van-col>
                    </van-row>
                </router-link>
            </van-col>
        </van-row>


        <van-row type="flex" justify="space-between" style="backgroud:#F8F8F8 100%">
            <van-col span="6" >
                <router-link to="" tag="div">
                    <div style="padding-left:13px;margin-top:10px">超值特惠</div>  
                    <van-row type="flex" justify="center" >
                        <van-col style="width:69px;height:60px;background:#BBBBBB 100%;margin-bottom:10px;">
                            <img src=""/>
                        </van-col>
                    </van-row> 
                </router-link>
            </van-col>
            <van-col span="6">
                 <router-link to="" tag="div">
                    <div style="padding-left:13px;margin-top:10px"> 人气产品</div>  
                    <van-row type="flex" justify="center" >
                        <van-col style="width:69px;height:60px;background:#BBBBBB 100%;margin-bottom:10px;">
                            <img src=""/>
                        </van-col>
                    </van-row> 
                </router-link>
            </van-col>
            <van-col span="6">
                 <router-link to="" tag="div">
                    <div style="padding-left:13px;margin-top:10px">小红书店</div>  
                    <van-row type="flex" justify="center" >
                        <van-col style="width:69px;height:60px;background:#BBBBBB 100%;margin-bottom:10px;">
                            <img src=""/>
                        </van-col>
                    </van-row> 
                </router-link>    
            </van-col>
        </van-row>

        <van-row type="flex" style="flex-wrap:wrap" justify="space-between">
            <van-col v-for="(item, index) in list1" :key="index" style="width:48%;height:210px;padding:8px 14px;font-size:12px">
                <router-link :to="'shopdetail/'+item.pid" tag="div">
                    <img style="width:100%;height:120px" :src="item.pimg">
                    <p>{{item.pdesc}}</p>
                    <span>{{item.pname}}</span>
                    <i>{{"￥"+item.pprice}}</i>
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
            list:"",
            list1:""
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
        }),
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:2064}
        }).then((data)=>{
            _this.list1 = data.data.data
        })

    },
}
</script>
<style scoped>
span{
    color: #8c8c8c
} 
</style>
