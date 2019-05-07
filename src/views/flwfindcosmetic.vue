<template>
    <van-row type="flex" tag="ul" style="flex-wrap:wrap;" justify="space-around" > 
        <li v-for="(item, index) in list" :key="index" style="width:43%;;border:1px solid #cecece;margin-top:13px">
            <router-link :to="'/followdetail/'+item.pid">
                <img style="width:100%;height:214px" :src="item.pimg"/>
            </router-link>
            <p>{{item.pdesc}}</p>
            <img style="width:34px;height:34px;border-radius:50%;margin-right:15px" :src="item.pimg"/>
            <span style="font-size:12px;margin-bottom:10px">{{item.pname}}</span>
            <button @click="up" style="border:none;background:white">点赞</button>
        </li>
    </van-row>
</template>
<script>
import axios from "axios"
export default {
    name:'flwFindCosmetic',
    data:function(){
        return{
            list:[]
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
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:2064}
        }).then((data)=>{
            _this.list = data.data.data
        })
    },
}
</script>
<style scoped>
li{
    list-style: none;
} 
</style>
