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
// import Discuss from "../views/discuss.vue"
import Talk from "../views/talk.vue"
import flwFindRecommend from "../views/flwfindrecommend.vue"
import flwFindCosmetic from "../views/flwfindcosmetic.vue"
import flwFindCare from "../views/flwfindcare.vue"
import flwFindVideo from "../views/flwfindvideo.vue"
import shopRecommend from "../views/shoprecommend.vue"
import shopCosmetic from "../views/shopcosmetic.vue"
import shopCare from "../views/shopcare.vue"

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
        {
          path:"/phonelogin",
          name:'Phonelogin',
          component:Phonelogin
        }
      ]
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
      path:"/message",
      name:"Message",
      component:Message
    },
    {
      path:"/me",
      name:"Me",
      component:Me
    } 
  ]
})
