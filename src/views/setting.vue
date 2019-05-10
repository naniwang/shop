<template>
    <div>
        <van-nav-bar
            title="设置"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        <div style="padding:10px 20px 0 10px;">
            <van-row type="flex" justify="center" style="line-height:60px;height:60px;border:1px solid #E8E8E8 100%;border-bottom:none;">
                <van-col span="2"></van-col>
                <van-col span="16"><router-link to="/myselfsetting" tag="span">个人资料</router-link></van-col> 
                <van-col span="6">
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
            <van-row type="flex" justify="center" style="line-height:60px;height:60px;border:1px solid #E8E8E8 100%;border-bottom:none;">
                <van-col span="2"></van-col>
                <van-col span="16">账号与安全</van-col> 
                <van-col span="6">
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
            <van-row type="flex" justify="center" style="line-height:60px;height:60px;border:1px solid #E8E8E8 100%;border-bottom:none;">
                <van-col span="2"></van-col>
                <van-col span="16">我收到的赞</van-col> 
                <van-col span="6">
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
            <van-row type="flex" justify="center" style="line-height:60px;height:60px;border:1px solid #E8E8E8 100%;border-bottom:none;">
                <van-col span="2"></van-col>
                <van-col span="16">新消息通知</van-col> 
                <van-col span="6">
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
            <van-row type="flex" justify="center" style="line-height:60px;height:60px;border:1px solid #E8E8E8 100%;border-bottom:none;">
                <van-col span="2"></van-col>
                <van-col span="16">隐私</van-col> 
                <van-col span="6">
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
            <van-row type="flex" justify="center" style="line-height:60px;height:60px;border:1px solid #E8E8E8 100%;border-bottom:none;">
                <van-col span="2"></van-col>
                <van-col span="16">通用</van-col> 
                <van-col span="6">
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
        </div>

        



    </div>
</template>
<script>
export default {
    name:"Setting",
    methods: {
        onClickLeft(){
            this.$router.push("/mainindex")
        }
    },
}
</script>
