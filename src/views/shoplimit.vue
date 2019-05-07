<template>
    <div>
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000">
            <van-row type="flex" justify="space-around" style="height:45px;background:#DDDDDD;">
                <van-col span="7">
                    <van-icon name="arrow-left" @click="backgo" style="width:80px;height:30px;font-size:24px;line-height:30px;text-align:center;background:white;margin-top:7px;"/>
                </van-col>
                <van-col span="7">
                    <van-row type="flex" justify="center">
                        <van-col span="20" style="line-height:45px;">限时购</van-col>
                    </van-row>
                </van-col>
                <van-col span="7" style="width:80px;height:30px;font-size:14px;line-height:30px;text-align:center;background:white;margin-top:7px;">分享</van-col>
            </van-row>


            <van-row id="hove" type="flex" justify="space-around" style="height:40px;background:#AAAAAA 100%">
                <van-col span="4">
                    <router-link to="/shoplimit8" tag="span">
                        <div class="cla" style="text-align:center; ">8:00</div>
                        <div class="cla" style="font-size:12px;text-align:center; ">爆款直降</div>
                    </router-link>
                </van-col>
                <van-col span="4">
                    <router-link to="/shoplimit9" tag="span">
                        <div class="cla" style="text-align:center; ">9:00</div>
                        <div class="cla" style="font-size:12px;text-align:center; ">爆款直降</div>
                    </router-link>
                </van-col>
                <van-col span="4">
                    <router-link to="/shoplimit10" tag="span">
                        <div class="cla" style="text-align:center; ">10:00</div>
                        <div class="cla" style="font-size:12px;text-align:center; ">爆款直降</div>
                    </router-link>
                </van-col>
                <van-col span="4">
                    <router-link to="/shoplimit11" tag="span">
                        <div class="cla" style="text-align:center; ">11:00</div>
                        <div class="cla" style="font-size:12px;text-align:center;">爆款直降</div>
                    </router-link>
                </van-col>
            </van-row>
        </div>


         <router-view></router-view>
 

    </div>
</template>
<script>
export default {
    name:'shopLimit',
    methods: {
        backgo(){
            this.$router.push("/shoprecommend")
        }
    },
}
</script>
<style scoped>
/* .cla{
     color:#8c8c8c
} */
#hove .router-link-active{
     color:blue
}
</style>
