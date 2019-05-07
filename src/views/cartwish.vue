<template>
    <div>
        <van-row type="flex" style="height:45px;line-height:45px;background:#F8F8F8 100%;margin-bottom:5px;">
            <van-col offset="1" span="4">
                <router-link to="/shoprecommend" tag="span" style="display:block;width:40px;height:30px;line-height:30px;text-align:center;background:#E8E8E8 100%;color:#101010;font-size:12px;margin-top:10px;">返回</router-link>
            </van-col>
            <van-col offset="5" span="4" style="font-size:16px;font-weight:300;color:#8c8c8c;">心愿单</van-col>
        </van-row>

        <van-row type="flex" style="padding:20px 60px 23px 14px;background:#F8F8F8 100%;">
            <van-col span="24">
                <van-row type="flex">
                    <van-col span="13">
                         <van-checkbox v-model="checked">
                            <img :src="data.pimg" style="width:100px;height:100px;"> 
                        </van-checkbox> 
                    </van-col>
                    <van-col span="11">
                        <span>{{data.pname}}</span>
                        <p></p> 
                        <i>{{"￥"+data.pprice}}</i>
                        <p></p> 
                        <van-stepper v-model="value" />
                    </van-col>
                </van-row>
            </van-col>
        </van-row>
        
        <van-row type="flex" justify="center" style="margin-top:17px;">
            <van-col span="10">------猜你喜欢------</van-col>
        </van-row>

        

    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"cartWish",
    data:function(){
        return{
            checked:true,
            data:"",
            value:1
        }
    },
    methods: {
          
    },    
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/detail.php",
            params:{id:_this.$route.params.id}
        }).then((data)=>{
            _this.data = data.data.data
        })
    },
}
</script>
<style scoped> 

</style>
