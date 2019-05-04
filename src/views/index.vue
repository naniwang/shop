<template>
    <div>
        <Head :name1="tit"></Head> 
        <div class="container">
             <!-- 首页中间部分内容 -->
             <router-view @toparent="tap($event)"></router-view>
        </div>

    </div>
</template>
<script>
import Head from "@/components/Head"
export default {
    name:"Index",
    data:function(){
        return{
            tit:"返回"
        }
    },
    components:{
        Head
    },
    methods:{
        tap(msg){
            console.log(msg)
            this.tit = msg
        }
    }
}
</script>
<style scoped>
.container{
    margin-top: 46px;
}
</style>

