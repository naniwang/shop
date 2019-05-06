<template>
<div>
    <van-row type="flex" justify="space-around" style="margin-top:-3px">
        <van-col span="2"><router-link to="/shoprecommend" tag="span">推荐</router-link></van-col>
        <van-col span="2"><router-link to="/shopcare" tag="span">护肤</router-link></van-col>
        <van-col span="2"><router-link to="/shopcosmetic" tag="span" style="color:#101010">彩妆</router-link></van-col>
    </van-row>



</div>
</template>
<script>
export default {
    name:"shopCosmetic"
}
</script>
<style scoped>
span{
    color: #8c8c8c
} 
</style>
