<template>
<div>
    <mainFootHead style="position:fixed;top:0;left:0;width:100%"></mainFootHead>
    <div class="container" style="margin-top:54px;overflow:auto">
      <router-view></router-view>
    </div>
    <van-row type="flex" justify="space-around">
      <van-col span="6"><router-link to="" tap="div">12</router-link></van-col>
      <van-col span="6" @click="btn">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
</div>
</template>
<script>
import mainFootHead from "../components/mainFootHead"
export default {
  name:"Shopping",
  components:{
    mainFootHead
  },
  methods: {
    btn(){
      console.log("aa")
    }
  },
}
</script>
<style scoped>

</style>
