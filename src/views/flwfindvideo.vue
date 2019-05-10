<template>
    <van-row type="flex" tag="ul" style="flex-wrap:wrap;" justify="space-around" > 
        <li v-for="(item, index) in list" :key="index" style="width:43%;;border:1px solid #cecece;margin-top:13px">
            <router-link :to="'/followdetailx/'+item.pid">
                <img style="width:100%;height:214px" :src="item.pimg"/>
            </router-link>
            <p>{{item.pdesc}}</p>
            <img style="width:34px;height:34px;border-radius:50%;margin-right:15px;float:left" :src="item.pimg"/>
            <span style="font-size:12px;">{{item.pname}}</span> 
        </li>
    </van-row>
</template>
<script>
import axios from "axios"
export default {
    name:'flwFindVideo',
    data:function(){
        return{
            list:""
        }
    },
    methods: {
        
    },
    mounted(){
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:2064}
        }).then((data)=>{
            console.log(data.data.data)
            _this.list = data.data.data
            })
    }
}
</script>
<style scoped>

</style>