<template>
    <div>
        <div class="container" style="position:relative;"> 
            <van-icon class="leftIcon" @click="backgo"  name="arrow-left" style= "font-weight:900;position:absolute;top:19px;left:14px;"/>
            <img style="width:100%;height:380px;" :src=" data.pimg">
        </div>
        <div style="background:#F8F8F8 100%;margin-bottom:16px;">
            <van-row type="flex" justify="space-around">
                <van-col span="16"><i>{{"￥"+data.pprice}}</i></van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row type="flex" justify="space-around" style="margin-top:5px;">
                <van-col span="16" style="line-height:29px">{{data.pname}}</van-col>
                <van-col span="4"><router-link :to="'/cartwish/'+data.pid" tag="div" style="width:60px;height:29px;font-size:14px;background:#E8E8E8 100%;line-height:29px;text-align:center;">心愿单</router-link></van-col>
            </van-row>
            <van-row type="flex" justify="space-around" style="margin-top:5px;margin-bottom:6px;">
                <van-col span="16" style="line-height:29px"></van-col>
                <van-col span="4"><router-link to="" tag="div" style="width:60px;height:29px;color:#AAAAAA 100%;line-height:29px;text-align:center;">优惠券</router-link></van-col>
            </van-row>
        </div>
            <van-row type="flex" justify="center">
                <van-col span="18">
                    {{data.brief}}
                </van-col>
            </van-row>

        <van-goods-action>
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-mini-btn
                info="num"
                icon="cart-o"
                text="购物车"
            />
            <van-goods-action-mini-btn
                icon="shop-o"
                text="店铺"
            />
            <van-goods-action-big-btn text="加入购物车" @click="add()" />
            <van-goods-action-big-btn
                primary
                text="立即购买"
                to=""
                @click="buy()"
            />
        </van-goods-action>

        <van-sku
            v-model="showBase"
            :sku="sku"
            :goods="goods"
            :goods-id="data.pid"
            :hide-stock="sku.hide_stock"
            :quota-used="quotaUsed"
            :reset-stepper-on-hide="resetStepperOnHide"
            :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
            :close-on-click-overlay="closeOnClickOverlay"
            :disable-stepper-input="disableStepperInput"
            :initial-sku="initialSku"
            :message-config="messageConfig"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            stepper-change= "stepperchange({value:number})"
            ref = "getSkuData"
        />

    </div> 
</template>
<script>
import axios from "axios"
import qs from "qs"
var token = localStorage.getItem("token")
export default {
    name:"flwDetailX",
    data:function(){
        return{
            pernum:"",
            data:'',
            num:'',
            idnum:1,
            gid:"",
            id:"",
            quotaUsed:0,
            showBase:false,
            resetStepperOnHide:true,
            resetSelectedSkuOnHide:true,
            closeOnClickOverlay:true,
            disableStepperInput:false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                    k: '颜色', // skuKeyName：规格类目名称
                    v: [
                        {
                        id: '1215',
                        name: '蓝色',
                        imgUrl: ''
                        },
                        {
                        id: '2064', // skuValueId：规格值 id
                        name: '红色', // skuValueName：规格值名称
                        imgUrl: '' // 规格类目图片，只有第一个规格类目可以定义图片
                        }
                    ],
                    k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: 2259, // skuId，下单时后端需要
                    price: 100, // 价格（单位分）
                    s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                        // 商品留言
                        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                        multiple: '1', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        name: '留言', // 留言名称
                        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        required: '0' // 是否必填 '1' 表示必填
                    }
                ],
                 hide_stock: false // 是否隐藏剩余库存
                },
                goods: {
                    // 商品标题
                    title: '',
                    // 默认商品 sku 缩略图
                    picture: ''
                },
                messageConfig: {
                // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
                uploadImg: () => {
                    return new Promise((resolve) => {
                    setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                    });
                },
                // 最大上传体积 (MB)
                uploadMaxSize: 3,
                // placehold配置
                placeholderMap: {
                    text: 'xxx',
                    tel: 'xxx',
                }
            },
            initialSku:{
                // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
                // 值：skuValueId（规格值 id）
                s1: '30349',
                s2: '1193',
                // 初始选中数量
                selectedNum: 1
            },
            skuData: {
                // 商品 id
                goodsId: '946755',
                // 留言信息
                messages: {
                    message_0: '12',
                    message_1: ''
                },
                // 另一种格式的留言，key 不同
                cartMessages: {
                    '留言1': 'xxxx'
                },
                // 选择的商品数量
                selectedNum: 1,
                // 选择的 sku 组合
                selectedSkuComb: {
                    id: 2257,
                    price: 100,
                    s1: '30349',
                    s2: '1193',
                    s3: '0',
                    stock_num: 111
                }
                }
        }
    },
    methods: {
        backgo(){
            this.$router.go(-1)
        },
        buy(data){
            if(token != null){
                ///此处少一步 立即购买
                
            } else {
                this.$router.push("/login")
            }
        },
        add(data){  
            //直接加入购物车  
            var _this = this
            this.sku.price = this.data.pprice
            this.goods.title= this.data.pname
            this.goods.picture=this.data.pimg
            this.sku.tree[0].v[1].imgUrl = this.data.pimg
            this.sku.tree[0].v[0].imgUrl = this.data.pimg
            this.sku.tree[0].v[1].id = this.data.pid
            if(token != null){
                this.showBase = true
            } else {
                this.$router.push("/login")
            }
        },
        onBuyClicked(data){
            // console.log(data.selectedNum)
            

        },
        onAddCartClicked(data){
            var _this = this
            console.log(data.selectedNum)
            console.log(this.id)
            //showBase显示时的加入购物车
            // console.log(this.$router)
            axios({
                method:"get",
                url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
                params:{uid:199501115018,pid:_this.id,pnum:data.selectedNum}
            }).then(function(data){
                console.log(data)
                // axios({
                //     method:"get",
                //     url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
                //     params:{uid:'199501115018',pid:_this.id,pnum:data.selectedNum}
                // }).then(function(data){
                //     if(data){
                //         _this.$router.push("/cartlist")
                //         console.log("更新成功")
                //     }
                // }).catch(function(data){
                //     console.log("更新失败")
                // })
            }).catch(function(data){
                console.log("加入购物车失败")
            })
        },
        getSkuData(){

        }, 
    },
    mounted() {
        var _this = this
        this.id = this.$route.params.id
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
i{
    font-size:18px;
    margin-left:5%
}
p{
    font-size:14px;
}
</style>
