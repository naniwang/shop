<template>
<div>
    <van-row type="flex" justify="space-around" style="height:36px;line-height:36px;background:#FDFDFD 100%;">
        <van-col span="4"><router-link to="/shoprecommend" tag="span">推荐</router-link></van-col>
        <van-col span="4"><router-link to="/shopcare" tag="span">护肤</router-link></van-col>
        <van-col span="4"><router-link to="/shopcosmetic" tag="span" style="color:#101010">彩妆</router-link></van-col>
    </van-row>

    <van-row type="flex" style="flex-wrap:wrap" justify="space-between">
        <van-col v-for="(item, index) in list1" :key="index" style="width:48%;height:210px;padding:8px 14px;font-size:12px">
            <router-link :to="'/shopdetail/'+item.gid" tag="div">
                <img style="width:100%;height:120px" :src="'http://39.97.116.110:8081/webapp/media/images/goods/'+item.gimg">
                <p>{{item.gname}}</p>
                <span>{{item.sname}}</span>
                <i>{{"￥"+item.price}}</i>
            </router-link>
        </van-col>
    </van-row>

</div>
</template>
<script>
import axios from "axios"
export default {
    name:"shopCosmetic",
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
            url:"http://39.97.116.110:8081/girl/goods/salenine.do",
        }).then((data)=>{
            _this.list1 = data.data.data
            console.log(data.data.data)
        })
    },
}
</script>
<style scoped>
span{
    color: #8c8c8c
} 
</style>
