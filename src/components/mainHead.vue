<template>
<div>
    <div>
        <van-row type="flex" justify="space-between" style="background:#E8E8E8;">
                 <van-col span="8">
                 <van-row type="flex" justify="space-between">
                    <van-col span="4" style="width:39px;height:39px;border:1px solid #cecece;margin-top:1px;margin-left:8px;border-radius:50%;background:white;"></van-col>
                 </van-row>
             </van-col>
            <van-col span="12" style="margin-top:11px;">
                <van-row type="flex" justify="space-between; " id="bg">
                    <van-col span="6"><router-link to="/mainfollow" tag="span">关注</router-link></van-col>
                    <van-col span="6"><router-link to="/followfind" tag="span">发现</router-link></van-col>
                    <van-col span="6"><router-link to="/followaround" tag="span">周围</router-link></van-col>
                </van-row>
            </van-col>
            <van-col span="4"></van-col>
        </van-row>
        <van-row type="flex" justify="center"> 
            <van-col span="20">
                <van-search placeholder='大家都在搜索"玩转万圣节派对"' v-model="value" input-align="center"/>
            </van-col> 
        </van-row>
    </div>


    
    <van-tabbar v-model="active" active-color="#262626" fixed style="background:#E8E8E8;font-size:20px">
        <van-tabbar-item fixed style="font-size:20px;" to="/mainindex">首页</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;" to="/shopping" >商城</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;font-weight:900"><van-icon name="plus" /></van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/message">消息</van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/me">我</van-tabbar-item>
    </van-tabbar>

    </div>


</template>
<script>
export default {
    name:"mainHead",
    data:function(){
        return{
            isfalse:'color1',
            value:"",
            active:0
        }
    },
    methods:{

    }
}
</script>
<style scoped> 
.color1{
    color:#8C8C8C
}
.color2{
    color:#101010
}
#bg van-col{
    background: none;
    border: none
}
</style>
