<template>
    <div>
        <van-nav-bar
            title="个人中心"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        <div style="padding:10px 20px 0 10px;">
            <van-row type="flex" justify="center" >
                <van-col span="2"></van-col>
                <van-col span="16"> 
                    <van-cell-group>
                        <van-field
                            v-model="username"
                            placeholder="修改名字"
                        />   
                    </van-cell-group> 
                </van-col>  
            </van-row>
            <van-row type="flex" justify="center" >
                <van-col span="2"></van-col>
                <van-col span="16"><van-cell-group>
                        <van-field
                            v-model="cart"
                            placeholder="身份证"
                        />   
                    </van-cell-group></van-col>  
            </van-row>
            <van-row type="flex" justify="center" >
                <van-col span="2"></van-col>
                <van-col span="16"><van-cell-group>
                        <van-field
                            v-model="sex"
                            placeholder="修改性别"
                        />   
                    </van-cell-group></van-col>  
            </van-row>
            
        </div>
        <div style="padding:10px">
            <van-row type="flex" style="background:#8c8c8c">
                <van-col span="24">
                    <router-link  to="" @click.native="save" tag="div" style="height:30px;line-height:30px;text-align:center;width:100%">保存</router-link>
                </van-col>
            </van-row>
        </div>

        
<van-popup v-model="show" style="width:200px;height:30px;text-align:center;height:30px;">修改成功</van-popup>


    </div>
</template>
<script>
var token = localStorage.getItem("token")
import axios from "axios"
import qs from "qs"

export default {
    name:"myselfSetting",
    data:function(){
        return{
            username:"",
            cart:"",
            sex:"",
            show:false
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        save(){
            console.log("aa")
            var _this = this
            axios({
                method:"post",
                url:"http://39.97.116.110:8081/girl/user/update.do",
                data:qs.stringify({username:_this.username,idcard:_this.cart,gender:_this.sex,token:token})
            }).then((data)=>{
                console.log(data.data)
                this.show=true
            })
        }
    },

}
</script>
