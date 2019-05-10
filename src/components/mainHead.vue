<template>
<div> 
    <van-tabbar v-model="active" active-color="#262626" fixed style="background:#E8E8E8;font-size:20px">
        <van-tabbar-item fixed style="font-size:20px;" to="/mainindex">首页</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;" to="/shopping" >商城</van-tabbar-item>
        <van-tabbar-item style="font-size:20px;font-weight:900"><van-icon name="plus" /></van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="/message">消息</van-tabbar-item>
        <van-tabbar-item style="font-size:20px" to="" @click="me()">我</van-tabbar-item>
    </van-tabbar>

    </div>


</template>
<script>
var token = localStorage.getItem('token')
export default {
    name:"mainHead",
    data:function(){
        return{
            isfalse:'color1',
            active:0             
        }
    },
    methods:{
        me(){
            if(token == null){
                this.$router.push("/login")
            } else{
                this.$router.push("/me")
            }
        }
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
.router-link-active{
    color:#101010;
}
</style>
