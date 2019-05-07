import router from "@/router"
import axios from "axios"

var actions = {
    login({commit},users){   
            // 调用后台数据 以及正则验证
            //用户名验证
            var yhm = null
            //用户名正则，4到16位（字母，数字，下划线，减号）  
            var reg = /^[a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(users.username)){
                yhm = true
            } else {
                yhm = false
            }

            var mm1 = null 
            //密码正则，4到16位（字母，数字，下划线，减号）
            var reg = /^[a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(users.password)){
                mm1 = true
            } else {
                mm1 = false
            }
        axios({
            method:"get",
            url:"http://jx.xuzhixiang.top/ap/api/login.php",
            params:{username:users.username,password:users.password}
        }).then((data)=>{ 
            if(data.status==200 && yhm && mm1){
                commit("login",users.username)
                router.push("/mainfollow")  
            }else{
                router.push("/login")
            } 
        })
    }
}
export default actions