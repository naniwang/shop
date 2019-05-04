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
          component:followFind
        },
        {
          path:"/followaround",
          name:"followAround",
          component:followAround
        }
      ]
    },
    {
      path:"/shopping",
      name:"Shopping",
      component:Shopping
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
