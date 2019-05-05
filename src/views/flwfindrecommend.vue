<template>
<div>
    <van-row type="flex" v-for="(item, index) in list" :key="index">
        <van-col span="8">  
            <router-link :to="'/followdetail/'+item.pid">
                <img style="width:150px;height:214px" :src="item.pimg"/>
            </router-link>
            <p style="width:150px">{{item.pdesc}}</p>
            <img style="width:34px;height:34px;border-radius:50%" :src="item.pimg"/>  
        </van-col>
    </van-row>
    <!-- <ul>
        <li style="float:left;" v-for="(item, index) in list" :key="index">
            <router-link :to="'/followdetail/'+item.pid">
                <img style="width:150px;height:214px" :src="item.pimg"/>
            </router-link>
            <p>{{item.pdesc}}</p>
            <img style="width:34px;height:34px;border-radius:50%" :src="item.pimg"/>
        </li>
    </ul> -->



</div>
</template>
<script>
import axios from "axios"
export default {
    name:'flwFindRecommend',
    data:function(){
        return{
            list:[]
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

</style>
