<template>
    <div>
        <van-nav-bar
            left-arrow
            fixed
            border
            @click-left="onClickLeft"
        />

        <ul class="container">
            <li>
                <van-row type="flex">
                    <van-col span="2"></van-col>
                    <van-col span="4" class="Img"><img src=""/></van-col>
                    <van-col span="2"></van-col>
                    <van-col span="16" class="mycont">span: 6</van-col>
                </van-row>
                <van-row type="flex">
                    <van-col span="8"></van-col>
                    <van-col span="16" class="talk"> 
                         <van-row type="flex">
                            <van-col span="4"></van-col> 
                            <van-col span="20">
                                
                            </van-col> 
                        </van-row>
                    </van-col>
                </van-row>
            </li>
        </ul>
        <h1>{{username}}</h1>

    </div> 
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"Talk",
    data:function(){
        return{

        }
    },
    computed: {
        ...mapState(["username"])
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted() {
        
    },
}
</script>
<style scoped>
.container{
    margin-top: 66px;
    margin-bottom: 15px;
}
.container .Img{
    width: 63px;
    height: 63px;
    display: block;
    border: 1px solid #cecece;
    border-radius: 50%;
}
.container .mycont{
    font-size: 16px;
    font-weight: 100;
    margin-top:25px
}
.container .talk{

}
</style>
