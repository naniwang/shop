<template>
    <div>
            <van-row type="flex" justify="space-around" style="margin-top:85px;height:19px;padding-top:6px;background:#F8F8F8 100%;">
                <van-col span="10" style="font-size:12px;">双十一同价提前购</van-col>
                <van-col span="10">
                    <van-row type="flex" justify="space-between">
                         <van-col span="24" style="font-size:12px;width:100%;height:19px;" >
                        <countdown
                            v-on:start_callback="countDownS_cb(1)" 
                            v-on:end_callback="countDownE_cb(1)" 
                            :currentTime="new Date().getTime()" 
                            :startTime="startTime" 
                            :endTime="endTime" 
                            tipTextEnd="距离时间结束" 
                            endText="秒杀结束" 
                            dayTxt="天" 
                            hourTxt="时" 
                            minutesTxt="分" 
                            secondsTxt="秒"  >
                        </countdown>
                    </van-col> 
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
                    <van-button :to="'/shopdetail/'+item.pid"  @click="shopdetail(item.pid)" size="mini">马上抢</van-button>
                </div>
            </van-card>
        </div>
</template>
<script>
import Countdown from "vue2-countdown"
import axios from "axios"
export default {
    name:'shopLimit10',
    data:function(){
        return{
            data:[],
            startTime: new Date('2019/5/8 22:00:00').getTime(), //剩余开始时间
            endTime: new Date('2019/5/8 23:00:00').getTime() //剩余结束时间
        }
    },
    methods: {
        shopdetail(id){
            console.log("aa")
            this.$router.push("/shopdetail/"+id)
        }, 
         countDownS_cb(value) {
            console.log('callBack--'+value+'--开始倒计时结束回调');
        },
            countDownE_cb(value) {
            console.log('callBack--'+value+'--活动剩余倒计时结束回调');
            if(this.endTime <= 0) return
        } 
    },
    components:{
        Countdown
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

