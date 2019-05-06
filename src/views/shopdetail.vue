<template>
    <div>
        <div class="container" style="position:relative;"> 
            <van-icon class="leftIcon" @click="backgo"  name="arrow-left" style= "font-weight:900;position:absolute;top:19px;left:14px;"/>
            <img style="width:100%;height:380px;" :src="data.pimg">
        </div>
        <div style="background:#F8F8F8 100%;margin-bottom:16px;">
            <van-row type="flex" justify="space-around">
                <van-col span="16"><i>{{"￥"+data.pprice}}</i></van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row type="flex" justify="space-around" style="margin-top:5px;">
                <van-col span="16" style="line-height:29px">{{data.pname}}</van-col>
                <van-col span="4"><router-link :to="'/cartwish/'+data.pid" tag="div" style="width:60px;height:29px;font-size:14px;background:#E8E8E8 100%;line-height:29px;text-align:center;">心愿单</router-link></van-col>
            </van-row>
            <van-row type="flex" justify="space-around" style="margin-top:5px;margin-bottom:6px;">
                <van-col span="16" style="line-height:29px"></van-col>
                <van-col span="4"><router-link to="" tag="div" style="width:60px;height:29px;color:#AAAAAA 100%;line-height:29px;text-align:center;">优惠券</router-link></van-col>
            </van-row>
        </div>
            <van-row type="flex" justify="center">
                <van-col span="18">
                    {{data.pdesc}}
                </van-col>
            </van-row>

        <van-goods-action>
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-mini-btn
                info="num"
                icon="cart-o"
                text="购物车"
            />
            <van-goods-action-mini-btn
                icon="shop-o"
                text="店铺"
            />
            <van-goods-action-big-btn text="加入购物车" />
            <van-goods-action-big-btn
                primary
                text="立即购买"
            />
        </van-goods-action>
    </div> 
</template>
<script>
import axios from "axios"
export default {
    name:"shopDetail",
    data:function(){
        return{
            data:'',
            num:''
        }
    },
    methods: {
        backgo(){
            this.$router.go(-1)
        }
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
.leftIcon{ 
}
i{
    font-size:18px;
    margin-left:5%
}
p{
    font-size:14px;
}
</style>
