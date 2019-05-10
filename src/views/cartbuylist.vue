<template>
    <div>
        <van-nav-bar
            title="订单页"
            left-text="首页"
            left-arrow
            @click-left="onClickLeft"
        />

         <van-row type="flex" style="flex-wrap:wrap; ">
            <van-col span="24" v-for="(data, index) in list" :key="index" style="padding:20px 60px 23px 14px;margin-top:10px;background:#F8F8F8 100%;">
                <van-row type="flex">
                    <van-col span="13">
                        <van-row type="flex">
                            <van-col span="6">
                                <input type="checkbox" ref="peript" @click="ipt(data.id,index)">
                            </van-col>
                            <van-col span="18">
                                <img :src="'http://39.97.116.110:8081/webapp/media/images/goods/'+data.gpic" style="width:100px;height:100px;"> 
                            </van-col>
                        </van-row>
                          
                    </van-col>
                    <van-col span="11">
                        <span style="font-size:10px">{{data.goodsname}}</span>
                        <i>{{"￥"+data.price}}</i> 
                        <div>
                            <van-button type="default" @click="pay(data.id)" style="float:right;width:60px;height:30px;text-align:center;line-height:30px;background:#f8f8f8;color:#101010;margin-top:10px ">支付</van-button>
                            <van-button type="default" @click="del(data.id)" style="float:right;width:60px;height:30px;text-align:center;line-height:30px;background:red;color:#101010;margin:10px 10px 0 10px;">删除</van-button>
                        </div>
                    </van-col>
                </van-row>
            </van-col>
        </van-row>
        <van-row type="flex" style="background:#F8F8F8;margin-top:20px;height:30px;text-align:center;line-height:30px;">
            <van-col span="6" style="">
                全选：<input type="checkbox"  ref="allipt" @click="iptall()">
            </van-col>
            <van-col span="4"></van-col>
            <van-col span="6">
                总价：{{price}}
            </van-col>
            <van-col span="4">
                <router-link to="" @click.native="alldel" tag="span">删除</router-link>
            </van-col>
            <van-col span="4">
                <router-link to="" tag="span">结算</router-link>
            </van-col>
        </van-row>






    </div>
</template>
<script>
import axios from "axios"
import qs from "qs"
var token = localStorage.getItem("token")

export default {
    name:"cartBuyList",
    data:function(){
        return{
            list:"",
            id:"",
            price:""
        }
    },
    methods: {
        pay(){
            
        },
        onClickLeft(){
            this.$router.push("/mainindex")
        },
        del(id){
            var _this = this
            axios({
                method:"get",
                url:"http://39.97.116.110:8081/girl/order/delorder.do",
                params:qs.stringify({oid:id})
            }).then(function(data){
                if(data.data.code == 1000){
                    // _this.$router.go(0)
                }
            })
        },
        iptall(){

        },
        alldel(){

        },

    },
    mounted(){
        var _this = this
        axios({
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            method:"post",
            url:"http://39.97.116.110:8081/girl/order/order.do",
            data:qs.stringify({token:token})
        }).then((data)=>{
            _this.list = data.data.data
        })
    }
}
</script>
<style scoped>

</style>
