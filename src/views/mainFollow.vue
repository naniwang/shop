<template> 
<div>
     <van-row type="flex" justify="space-between" style="background:#E8E8E8;">
                 <van-col span="8">
                 <van-row type="flex" justify="space-between">
                    <van-col span="4" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;"></van-col>
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




        <ul>
            <li v-for="(item, index) in list" :key="index" style="border-bottom:3px solid #BBBBBB;width:100%">
                <van-row type="flex" justify="center" style="margin:20px 0">
                    <van-col span="20">
                        <img @click="toImg(item.pid)" :src="item.pimg" style="width:100%;height:230px;">
                        </van-col>
                </van-row>
                <van-row type="flex" justify="center" style="margin-bottom:15px">
                    <van-col offset="0" span="20">{{item.pdesc}}</van-col>
                </van-row>
                <van-row type="flex" justify="center">
                    <van-col offset="2" span="4" ><img style="width:43px;height:43px;border:1px solid #cecece;border:1px solid #cecece;border-radius:50%;" :src="item.pimg"></van-col>
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
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:2064}
        }).then((data)=>{
            _this.list = data.data.data
        })
    },
    methods: {
        toImg(id){
             this.$router.push("/followdetail/"+id)
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
</style>
