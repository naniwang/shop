<template>
<div style="margin-bottom:50px">
    <van-row type="flex" justify="space-between" style="background:#E8E8E8;">
                 <van-col span="8">
                 <van-row type="flex" justify="space-between">
                   <van-col span="4" style="height:30px;margin-top:10px;margin-left:33px;">
                        <van-icon name="arrow-left" @click="goback()"/>
                    </van-col>
                 </van-row>
             </van-col>
            <van-col span="12" style="margin-top:11px;">
                <van-row type="flex" justify="space-between; ">
                    <van-col span="6"><router-link to="/mainfollow" tag="span">关注</router-link></van-col>
                    <van-col span="6"><router-link to="/followfind" tag="span">发现</router-link></van-col>
                    <van-col span="6"><router-link to="/followaround" tag="span">周围</router-link></van-col>
                </van-row>
            </van-col>
            <van-col span="4"></van-col>
        </van-row>
        <van-row type="flex" justify="center"> 
            <van-col span="20">
                <van-search placeholder='大家都在搜索"玩转万圣节派对"' v-model="value" input-align="center"/>
            </van-col> 
        </van-row>

 


    <van-row type="flex" justify="space-between">
        <van-col span="12">
            <van-row type="flex">
                <van-col span="2"></van-col>
                <van-col span="4"><img :src="list.pimg"  style="width:40px;heigt:40px;border-radius:50%"/></van-col>
                <van-col span="5"></van-col>
                <van-col span="11" style="margin-top:10px">{{list.pname}}</van-col>
            </van-row>
        </van-col>
        <van-col span="12">
            <van-row type="flex">
                <van-col span="8"></van-col>
                <van-col span="5" style="margin-top：10px;"><button to="" >关注</button></van-col>
                <van-col span="2"></van-col>
                <van-col span="5" style="margin-top：10px;"><button to=""  @click="tap()">分享</button></van-col>
            </van-row>
        </van-col>
    </van-row>
    <van-row span="24" style="margin-bottom:20px">
        <van-col span="24">
            <img :src="list.pimg" style="width:100%;height:240px"/>
        </van-col>
    </van-row>
    <van-row span="24" style="margin-bottom:20px">
        <van-col span="4"></van-col>
        <van-col offset="2" span="16">
            <span>{{list.pdesc}}</span>
        </van-col>
        <van-col span="4"></van-col>
    </van-row>


    <van-row span="24" style="margin-bottom:20px">
        <van-col span="10">
            <van-row span="24" style="margin-bottom:20px">
                <van-col offset="4" span="18">
                    <button to="" @click="tap()">转发</button>
                </van-col>
            </van-row>
        </van-col>
        <van-col span="14">
            <van-row span="24" style="margin-bottom:20px">
                <van-col offset="5" span="3">
                    <button to="">收藏</button>
                </van-col>
                <van-col offset="3" span="3">
                    <button to="">评论</button>
                </van-col>
                <van-col offset="3" span="3">
                    <button to="">点赞</button>
                </van-col>

            </van-row>
        </van-col>
    </van-row>

    <van-popup v-model="show" position="right" style="height:100%;width:80%"> 
        <van-row type="flex" justify="space-around" style="margin-top:136px;margin-bottom:26px">
            <van-col span="4" class="Link"><router-link to="" tag="span">微信</router-link></van-col>
            <van-col span="4" class="Link"><router-link to="" tag="span">朋友圈</router-link></van-col>
            <van-col span="4" class="Link"><router-link to="" tag="span">微博</router-link></van-col> 
        </van-row>
        <van-row type="flex" justify="space-around">
            <van-col span="4" class="Link"><router-link to="" tag="span">QQ好友</router-link></van-col>
            <van-col span="4" class="Link"><router-link to="" tag="span">QQ空间</router-link></van-col>
            <van-col span="4" class="Link"><router-link to="" tag="span">人人</router-link></van-col>
        </van-row>
    </van-popup>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:"followDetail",
    data:function(){
        return{
            id:'',
            list:"",
            show:false
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/detail.php",
            params:{id:_this.$route.params.id},
        }).then((data)=>{
            _this.list = data.data.data
            console.log(data.data.data)
        })
    },
    methods: {
        tap(){
            this.show = true
        },
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
button{
width:41px;height:30px;background:#BBBBBB 100%;color:#AAAAAA 100%;border:none;font-size:12px;
}
.Link{
    width:63px;
    height:63px;
    border:1px solid #cecece;
    border-radius: 50%;
    line-height: 63px;
    text-align: center;
    font-size:14px;
    color:#101010;
}
</style>
