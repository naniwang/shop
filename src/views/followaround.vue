<template>
    <div>
        <van-row type="flex" justify="space-between" style="background:#E8E8E8;">
                 <van-col span="8">
                 <van-row type="flex" justify="space-between">
                 <van-col span="4" tag="button" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;"><img @click="btn()" src=""></van-col>
                 </van-row>
             </van-col>
            <van-col span="12" style="margin-top:11px;"> 
                <van-row type="flex" justify="space-between; ">
                    <van-col span="6"><router-link to="/mainfollow" tag="span">关注</router-link></van-col>
                    <van-col span="6"><router-link to="/followfind" tag="span">发现</router-link></van-col>
                    <van-col span="6"><router-link to="/followaround" tag="span">周围 </router-link></van-col>
                </van-row>
            </van-col>
            <van-col span="4"></van-col>
        </van-row>
        <van-row type="flex" justify="center"> 
            <van-col span="20">
                <van-search placeholder='大家都在搜索"玩转万圣节派对"' v-model="value" input-align="center"/>
            </van-col> 
        </van-row>

        <van-row type="flex" tag="ul" style="flex-wrap:wrap;" justify="space-around" > 
            <li v-for="(item, index) in list" :key="index" style="width:43%;;border:1px solid #cecece;margin-top:13px">
                <router-link :to="'/followdetail/'+item.pid">
                    <img style="width:100%;height:214px" :src="item.pimg"/>
                </router-link>
                <div style="font-size:12px;">{{item.pdesc}}</div>
                <img style="width:34px;height:34px;border-radius:50%;margin-right:15px;" :src="item.pimg"/>
                <span style="font-size:12px;margin-right:30px">{{item.pname}}</span>
                <button @click="up" style="border:none;background:white">点赞</button>
            </li>
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
            <div><router-link to="/cartwish" tag="span">心愿单</router-link></div> 
            <div style="margin-bottom:23px;"><router-link to="" tag="span">pin会员卡</router-link></div> 
            <p></p>
            <div style="margin-top:22px;"><router-link to="" tag="span">帮助与客服</router-link></div> 
            <div><router-link to="" tag="span">设置</router-link></div> 
        </van-popup>  
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"followAround",
    data:function(){
        return{
            show:false,
            value:"",
            list:[]
        }
    },
    methods: {
        btn(){
            this.show = true
        },
        up(){
            // 点赞
            console.log("aaa")
        }
    },
     mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:1887}
        }).then((data)=>{
            _this.list = data.data.data
        })
    }
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
.router-link-active{
    color:blue;
}
</style>
