<template>
<div style="margin-top:45px;">
    <van-row type="flex" justify="space-between">
        <van-col span="12">
            <van-row type="flex">
                <van-col span="2">1</van-col>
                <van-col span="4">1</van-col>
                <van-col span="18"><span>{{list.pname}}</span></van-col>
            </van-row>
        </van-col>
        <van-col span="12">
            <van-row type="flex" style="margin-top：52px;">
                <van-col span="8"></van-col>
                <van-col span="5"><button to="" style="width:41px;height:30px;background:#BBBBBB 100%;color:#AAAAAA 100%;border:none;font-size:12px;">关注</button></van-col>
                <van-col span="2"></van-col>
                <van-col span="5"><button to="/share" style="width:41px;height:30px;background:#BBBBBB 100%;color:#AAAAAA 100%;border:none;font-size:12px;">分享</button></van-col>
            </van-row>
        </van-col>
    </van-row>




</div>
</template>
<script>
import axios from "axios"
export default {
    name:"followDetail",
    deta:function(){
        return{
            id:'',
            list:[]
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/detail.php",
            params:{id:_this.$route.params.id},
        }).then((data)=>{
            _this.list = data.data
        })
    },
}
</script>
<style scoped>

</style>
