import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Login from "../views/Login.vue"
import Register from "@/views/register.vue"
import Forgetpassword from "../views/forgetpassword.vue"
import Number from "../views/number.vue"
import Phonelogin from "../views/phonelogin.vue"
import mainIndex from "../views/mainIndex.vue"
import Shopping from "../views/shopping.vue"
import Message from "../views/message.vue"
import Me from "../views/me.vue"
import mainFollow from "../views/mainFollow.vue"
import followDetail from  "../views/followdetail.vue"
import followAround from "../views/followaround.vue"
import followFind from "../views/followFind.vue"
import Discuss from "../views/discuss.vue"
import Talk from "../views/talk.vue"
import flwFindRecommend from "../views/flwfindrecommend.vue"
import flwFindCosmetic from "../views/flwfindcosmetic.vue"
import flwFindCare from "../views/flwfindcare.vue"
import flwFindVideo from "../views/flwfindvideo.vue"
import shopRecommend from "../views/shoprecommend.vue"
import shopCosmetic from "../views/shopcosmetic.vue"
import shopCare from "../views/shopcare.vue"
import shopDetail from "../views/shopdetail.vue"
import cartWish from "../views/cartwish.vue"
import shopBuy from "../views/shopbuy.vue"
import shopLimit from "../views/shoplimit.vue"
import shopLimit8 from "../views/shoplimit8.vue"
import shopLimit9 from "../views/shoplimit9.vue"
import shopLimit10 from "../views/shoplimit10.vue"
import shopLimit11 from "../views/shoplimit11.vue"
import cartList from "../views/cartlist.vue"
import cartBuyList from "../views/cartbuylist.vue"
import Setting from "../views/setting.vue"
import followDetailX from "../views/followdetailx.vue" 
import myselfSetting from "../views/mysetting.vue"

//sue  进行挂载使用router ，全局可以使用
Vue.use(Router)


//routes 路由规则
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',  
      redirect:"/login",
      component: Index,
      children:[
        {
          path:"/login",
          name:"Login",
          component:Login
        },
        {
          path:"/register",
          name:'Register',
          component:Register
        },
        {
          path:"/forgetpassword",
          name:"Forgetpassword",
          component:Forgetpassword
        },
        {
          path:"/number",
          name:'Number',
          component:Number
        },
        
      ]
    },
    {
      path:"/phonelogin",
      name:'Phonelogin',
      component:Phonelogin
    },
    {
      path:"/mainindex",
      name:"mainIndex",
      redirect:"/mainfollow",
      component:mainIndex, 
      children:[
        {
          path:"/mainfollow",
          name:"mainFollow",
          component:mainFollow
        },
        {
          path:"/followdetail/:id",
          name:"followDetail",
          component:followDetail
        }, 
        {
          path:"/followfind",
          name:"followFind",
          redirect:"/flwfindrecommend",
          component:followFind,
          children:[
            {
              path:"/flwfindrecommend",
              name:"flwFindRecommend",
              component:flwFindRecommend
            },
            {
              path:"/flwfindcosmetic",
              name:"flwFindCosmetic",
              component:flwFindCosmetic
            },
            {
              path:"/flwfindcare",
              name:"flwFindCare",
              component:flwFindCare
            },
            {
              path:"/flwfindvideo",
              name:"flwFindVideo",
              component:flwFindVideo
            }
          ]
        },
        {
          path:"/followaround",
          name:"followAround",
          component:followAround
        },
      ]
    },
    {
      path:"/talk",
      name:"Talk",
      component:Talk
    },
    {
      path:"/shopping",
      name:"Shopping",
      redirect:"/shoprecommend",
      component:Shopping,
      children:[
        {
          path:"/shoprecommend",
          name:"shopRecommend",
          component:shopRecommend
        },
        {
          path:"/shopcosmetic",
          name:"shopCosmetic",
          component:shopCosmetic
        },
        {
          path:"/shopcare",
          name:"shopCare",
          component:shopCare
        }
      ]
    },
    {
      path:"/shopdetail/:id",
      name:"shopDetial",
      component:shopDetail
    },
    {
      path:"/cartwish/:id",
      name:"cartWish",
      component:cartWish
    },
    {
      path:"/shopbuy/:id",
      name:"shopBuy",
      component:shopBuy
    },
    {
      path:"/shoplimit",
      name:"shopLimit",
      redirect:"/shoplimit8",
      component:shopLimit,
      children:[
        {
          path:"/shoplimit8",
          name:"shopLimit8",
          component:shopLimit8
        },
        {
          path:"/shoplimit9",
          name:"shopLimit9",
          component:shopLimit9
        },
        {
          path:"/shoplimit10",
          name:"shopLimit10",
          component:shopLimit10
        },
        {
          path:"/shoplimit11",
          name:"shopLimit11",
          component:shopLimit11
        }
      ]
    },
    {
      path:"/message",
      name:"Message",
      component:Message
    },
    {
      path:"/me",
      name:"Me",
      component:Me,
    } ,
    {
      path:"/cartbuylist",
      name:"cartBuyList",
      component:cartBuyList
    },
    {
      path:"/setting",
      name:"Setting",
      component:Setting
    },
    {
      path:"/followdetailx/:id",
      name:"followDetailX",
      component:followDetailX
    },
    {
      path:"/myselfsetting",
      name:"myselfSetting",
      component:myselfSetting
    },
    {
      path:"/discuss",
      name:"Discuss",
      component:Discuss
    },
    {
      path:"/cartlist",
      name:"cartList",
      component:cartList
    }
  ]
})
