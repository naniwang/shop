<template>
<div style="margin-top:45px;">
    <van-row type="flex" justify="space-between">
        <van-col span="12">
            <van-row type="flex">
                <van-col span="2"></van-col>
                <van-col span="4"><img :src="this.list.pimg"  style="width:40px;heigt:40px;border-radius:50%"/></van-col>
                <van-col span="5"></van-col>
                <van-col span="11" style="margin-top:10px">{{this.list.pname}}</van-col>
            </van-row>
        </van-col>
        <van-col span="12">
            <van-row type="flex">
                <van-col span="8"></van-col>
                <van-col span="5" style="margin-top：10px;"><button to="">关注</button></van-col>
                <van-col span="2"></van-col>
                <van-col span="5" style="margin-top：10px;"><button to="/share">分享</button></van-col>
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

    <van-popup v-model="show" position="right" :overlay="false" style="width:80%">
    内容
    </van-popup>

</div>
</template>
<script>
import axios from "axios"
export default {
    name:"followDetail",
    deta:function(){
        return{
            id:'',
            list:'',
            show:''
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
        })
    },
    methods: {
        tap(){
            this.show = true
        }
    },
}
</script>
<style scoped>
button{
width:41px;height:30px;background:#BBBBBB 100%;color:#AAAAAA 100%;border:none;font-size:12px;
}
</style>
