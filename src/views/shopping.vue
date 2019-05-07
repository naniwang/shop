<template>
<div>
    <mainFootHead style="position:fixed;top:0;left:0;width:100%"></mainFootHead>
    <div class="container" style="margin-top:54px;overflow:auto">
      <router-view></router-view>
    </div>
     
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
