<template>
    <div>


    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"shopBuy",
    data:function(){
        return{
            data:""
        }
    },
    methods: {
        
    },
    mounted() {
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/detail.php",
            params:{id:_this.$route.params.id}
        }).then((data)=>{
            _this.data = data.data.data
        })
    },
}
</script>
<style scoped>

</style>
