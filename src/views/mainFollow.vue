<template> 
<div>
     <van-row type="flex" justify="space-between" style="background:#E8E8E8;">
                 <van-col span="8">
                 <van-row type="flex" justify="space-between">
                 <van-col span="4" tag="button" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;"><img style="width:39px;height:39px;border:none;border-radius:50%;" @click="btn()" src="http://39.97.116.110:8081/webapp/media/images/73291794_p0_master1200.jpg"></van-col>
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
                    <div><router-link to="/cartbuylist" tag="span">订单</router-link></div>
                    <div><router-link to="" tag="span">PIN劵</router-link></div>
                    <div><router-link to="/cartwish" tag="span">心愿单</router-link></div> 
                    <div style="margin-bottom:23px;"><router-link to="" tag="span">pin会员卡</router-link></div> 
                    <p></p>
                    <div style="margin-top:22px;"><router-link to="/setting" tag="span">帮助与客服</router-link></div> 
                    <div><router-link to="/setting" tag="span">设置</router-link></div> 
                </van-col>
                <van-col span="10"></van-col>

            </van-row>
        </van-popup>   


        <ul style="margin-bottom:45px">
            <li v-for="(item, index) in list" :key="index" style="border-bottom:3px solid #BBBBBB;width:100%">
                <van-row type="flex" justify="center" style="margin:20px 0">
                    <van-col span="20">
                        <img @click="toImg(item.gid)" :src="'http://39.97.116.110:8081/webapp/media/images/goods/'+item.gimg" style="width:100%;height:230px;">
                        </van-col>
                </van-row>
                <van-row type="flex" justify="center" style="margin-bottom:15px">
                    <van-col offset="0" span="20">{{item.gname}}</van-col>
                </van-row>
                <van-row type="flex" justify="center">
                    <van-col offset="2" span="4" ><img style="width:43px;height:43px;border:1px solid #cecece;border:1px solid #cecece;border-radius:50%;" :src="'http://39.97.116.110:8081/webapp/media/images/shop/'+item.sheadpic"></van-col>
                    <van-col span="4"></van-col>
                    <van-col span="14" class="btn" style="margin-top:10px;">
                        <van-button type="default">收藏</van-button>
                        <van-button type="default" to="/talk">评论</van-button>
                        <van-button type="default">点赞</van-button>
                    </van-col>
                </van-row>
            </li>
        </ul>
</div>
          
</template>
<script>
import axios from "axios"
export default {
    name:"mainFollow",
    data:function(){
        return{
            list:"",
            value:"",
            show:false
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://39.97.116.110:8081/girl/goods/countten.do",
        }).then((data)=>{
            console.log(data.data.data)
            _this.list = data.data.data
        })
    },
    methods: {
        toImg(id){
             this.$router.push("/followdetail/"+id)
        },
        btn(){
            this.show =true
        }
    },
}
</script>
<style scoped>
.btn button{
    width: 54px;
    height: 30px;
    border:none;
    color: #8C8C8C;
    background:#E8E8E8;
    font-size:12px;
    line-height: 30px;
    text-align: center
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
