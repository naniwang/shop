<template>
    <van-row type="flex" tag="ul" style="flex-wrap:wrap;margin-top:13px" justify="space-around" > 
        <li v-for="(item, index) in list" :key="index" style="width:43%;margin-top:13px;;border:1px solid #cecece">
            <router-link :to="'/followdetail/'+item.gid">
                <img style="width:100%;height:214px" :src="'http://39.97.116.110:8081/webapp/media/images/goods/'+item.gimg"/>
            </router-link>
            <p style="font-size:12px;">{{item.gname}}</p>
            <img style="width:34px;height:34px;border-radius:50%;margin-right:15px" :src="'http://39.97.116.110:8081/webapp/media/images/shop/'+item.sheadpic"/>
            <span style="font-size:12px">{{item.pname}}</span>
            <button @click="up" style="border:none;background:white">点赞</button>
        </li>
    </van-row>
</template>
<script>
import axios from "axios"
export default {
    name:'flwFindRecommend',
    data:function(){
        return{
            list:[],
        }
    },
     methods: {
        up(){
            // 点赞
            console.log("aaa")
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://39.97.116.110:8081/girl/goods/salenine.do",
            params:{uid:2064}
        }).then((data)=>{
             _this.list = data.data.data.slice(0,8)
        })
    },
}
</script>
<style scoped>
li{
    list-style: none;
} 
</style>
