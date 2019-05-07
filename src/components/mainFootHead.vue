<template>
<div style="z-index:1000">
    <div>
        <van-row type="flex" style="background:#E8E8E8 100%;">
            <van-col span="4">
                <van-row type="flex">
                    <van-col span="4" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;">
                        
                    </van-col>
                </van-row>
            </van-col> 
            <van-col span="19">
                <input type="text" style="margin-top:8px;height:20px;width:100%;border:none;border-radius:3px;padding-left:3px" placeholder='大家都在搜索"玩转万圣节派对"' v-model="value" >
            </van-col> 
        </van-row> 
    </div>

    <van-tabbar v-model="active" active-color="#262626" fixed style="position:fixed;bottom:-1px;left:0;background:#E8E8E8;font-size:20px">
        <van-tabbar-item fixed style="font-size:20px;color:#8c8c8c" to="/mainindex">首页</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;color:#262626" to="/shopping">商城</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;font-weight:900"><van-icon name="plus"/></van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/message">消息</van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/me">我</van-tabbar-item>
    </van-tabbar>

    </div>


</template>
<script>
export default {
    name:"mainFootHead",
    data:function(){
        return{
            value:"",
            active:0
        }
    }    
}
</script>
<style scoped>
.van-search .van-cell{
    padding:0 10px 0 0
}
</style>
