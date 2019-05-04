<template>
<h1>店铺详情</h1>


</template>
<script>
import axios from "axios"
export default {
    name:"followDetail",
    deta:function(){
        return{
            id:'',
            list:""
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
}
</script>
<style scoped>

</style>
