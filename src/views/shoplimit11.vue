<template>
    <div>
            <van-row type="flex" justify="space-around" style="margin-top:85px;height:19px;padding-top:6px;background:#F8F8F8 100%;">
                <van-col span="10" style="font-size:12px;">双十一同价提前购</van-col>
                <van-col span="10">
                    <van-row type="flex" justify="space-between">
                        <van-col span="12" style="font-size:12px;">距离结束还有</van-col>
                        <van-col span="4" style="font-size:12px;text-align:center">3</van-col>
                        <van-col span="4" style="font-size:12px;">小时</van-col>
                    </van-row>
                </van-col>
            </van-row> 

            <van-card
                v-for="(item, index) in data" :key="index"
                num="2"
                :price="item.pprice"
                :desc="item.pdesc"  
                :title="item.pname"
                :thumb="item.pimg"
            >
                <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button to="'/shopdetail/'+item.pid"  @click="shopdetail(item.pid)" size="mini">马上抢</van-button>
                </div>
            </van-card>
        </div>
</template>
<script>
import axios from "axios"
export default {
    name:'shopLimit11',
    data:function(){
        return{
            data:[]
        }
    },
    methods: {
        shopdetail(id){
            console.log("aa")
            this.$router.push("/shopdetail/"+id)
        }, 
    },
    mounted(){
        var _this = this
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:2064}
        }).then(function(data){
            _this.data = data.data.data
        })
    }
}
</script>
<style scoped>

</style>

