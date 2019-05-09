<template>
  <div class="hello">
     <button
            style="width:80px;height:30px;background:#F4F4F4;border:none;border-radius:4px;margin-top:10px;line-height:30px;color:#BBBBBB"
            @click="onClickLeft"
        >{{name1}}</button> 
  </div>
</template>

<script>
export default {
  name: 'Head', 
  props:['name1'],
  data () {
    return { 
        name:"返回"
    }
  },
  methods:{
     onClickLeft(){
       this.$router.go(-1)
     },
     onClickRight(){

     },
     tap(msg){
       
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
