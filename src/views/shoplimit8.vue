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
                    <!-- <van-card  v-for="(item, index) in data" :key="index"
                        num="2"
                        :price="item.pprice"
                        :desc="item.pdesc"  
                        :title="item.pname"
                        :thumb="item.pimg"
                    >
                        <div slot="footer">
                            <router-link to="'/shopdetail/'+item.pid" >
                                <van-button size="mini">马上抢</van-button>
                            </router-link> 
                        </div>
                    </van-card> -->

            <van-row type="flex" style="width:100%;flex-wrap:wrap">
                <van-col span="24" v-for="(item, index) in data" :key="index" style="margin-top:10px;padding:10px;height:90px">
                    <van-row type="flex" justify="space-between">
                        <van-col span="6">
                            <img :src="item.pimg" style="width:100%;height:90px">
                        </van-col>
                        <van-col span="16">
                            <p style="padding:0;margin:0;font-size:12px">{{item.pname}}</p>
                            <span style="font-size:12px;color:#8c8c8c">{{item.pdesc}}</span>
                            <p style="padding:0;margin:0">{{"￥"+item.pprice}}</p>
                            <van-row type="flex" justify="space-around">
                                <van-col span="16"></van-col>
                                <van-col span="6">
                                    <router-link to="/" @click.native="btn(item,pid)" tag="div" style="width:76px;height:22px;line-height:22px;font-size:12px;text-align:center;border:1px solid #cecece">马上抢</router-link>
                                </van-col>
                                 <van-col span="2"></van-col>   
                            </van-row>
                        </van-col>
                    </van-row>
                </van-col>
            </van-row>







        </div>
</template>
<script>
import axios from "axios"
export default {
    name:'shopLimit8',
    data:function(){
        return{
            data:[]
        }
    },
    methods: {
        btn(id){
            console.log("aa")
            // this.$router.push("/shopdetail/"+id)
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

