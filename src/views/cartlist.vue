<template>
    <div>
        <van-nav-bar
            title="购物车"
            left-text="首页"
            left-arrow
            @click-left="onClickLeft"
        />


        <van-row type="flex" style="flex-wrap:wrap; ">
            <van-col span="24" v-for="(data, index) in data" :key="index" style="padding:20px 60px 23px 14px;margin-top:10px;background:#F8F8F8 100%;">
                <van-row type="flex">
                    <van-col span="13">
                        <van-row type="flex">
                            <van-col span="6">
                                <input type="checkbox" ref="peript" @click="ipt(data.id,index)">
                            </van-col>
                            <van-col span="18">
                                <img :src="'http://39.97.116.110:8081/webapp/media/images/goods/'+data.imgpath" style="width:100px;height:100px;"> 
                            </van-col>
                        </van-row>
                          
                    </van-col>
                    <van-col span="11">
                        <span style="font-size:10px">{{data.goodsname}}</span>
                        <i>{{"￥"+data.price}}</i> 
                        <div>
                            <van-button type="default" @click="del(data.id)" style="float:right;width:60px;height:30px;text-align:center;line-height:30px;background:red;color:#101010">删除</van-button>
                        </div>
                    </van-col>
                </van-row>
            </van-col>
        </van-row>
        <van-row type="flex" style="background:#F8F8F8;margin-top:20px;height:30px;text-align:center;line-height:30px;">
            <van-col span="6" style="">
                全选：<input type="checkbox"  ref="allipt" @click="iptall()">
            </van-col>
            <van-col span="4"></van-col>
            <van-col span="6">
                总价：{{price}}
            </van-col>
            <van-col span="4">
                <router-link to="" @click.native="alldel" tag="span">删除</router-link>
            </van-col>
            <van-col span="4">
                <router-link to="" tag="span">结算</router-link>
            </van-col>
        </van-row>



    </div>
</template>
<script>
import axios from "axios"
import qs from "qs" 
 
var token = localStorage.getItem("token")
export default {
    name:"cartList",
    data:function(){
        return{
            data:"",
            value:"",
            arr:[],
            listarr:[], 
            price:""
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push("/mainindex")
        },
        del(id){
            console.log(id)
            axios({
                method:"post",
                url:"http://39.97.116.110:8081/girl/cart/delete.do",
                data:qs.stringify({id:id})
            }).then((data)=>{
                if(data.data.code == 1000){
                    this.$router.go(0)
                }
            }).catch(()=>{
                console.log("删除失败")
            })
        },
        ipt(id,index){
            console.log(this.$refs.peript[index].checked )
            for(var i = 0;i<this.listarr[0].length;i++){
                if(this.listarr[0][i].id == id && this.$refs.peript[index].checked == true){
                    this.price +=  parseInt(this.listarr[0][i].price)
                }else{
                    // this.price = this.price - this.listarr[0][i].price
                }
            }
            if(this.$refs.peript[index].checked== false){
                this.price = parseInt(this.price) - parseInt(this.listarr[0][index].price)
            }

            if(this.$refs.peript[index].checked==true && this.arr.indexOf(id)==-1){
                this.arr.push(id) 
            } else{
                this.arr.splice(this.arr.indexOf(id),1)
            }
            if(this.arr.length==this.listarr[0].length){
                this.$refs.allipt.checked = true 
            }else{
                this.$refs.allipt.checked = false
            }  
        },
        alldel(){
            var _this = this
            for(var i =0;i < this.arr.length; i++){
                axios({
                    method:"post",
                    url:"http://39.97.116.110:8081/girl/cart/delete.do",
                    data:qs.stringify({id:_this.arr[i]})
                }).then((data)=>{
                    if(data.data.code == 1000){
                        console.log("删除成功")
                    }
                }).catch(()=>{
                    console.log("删除失败")
                })
            }
            this.$router.go(0)
        },
        iptall(){
            this.price = 0
            console.log(this.listarr.length)
            if(this.$refs.allipt.checked == true){
                for(var i = 0;i<this.listarr[0].length;i++){
                   this.$refs.peript[i].checked = true 
                    this.price +=  this.listarr[0][i].price
                }
            } else {
                for(var i = 0;i<this.listarr[0].length;i++){
                   this.$refs.peript[i].checked = false 
                   this.price = 0
                }
            }
        }
    },
    mounted() {
        var _this = this
        axios({
            method:"post",
            url:"http://39.97.116.110:8081/girl/cart/list.do",
            data:qs.stringify({token:token})
        }).then(function(data){
            _this.data = data.data.data
            _this.listarr.push(data.data.data)
        })
        this.price = 0
    },
}
</script>
<style scoped>

</style>
