import router from "@/router"
import axios from "axios"
import qs from "qs"
var actions = {
    login({commit},users){   
            // 调用后台数据 以及正则验证 
            console.log(users)
            //手机号正则验证
            var reg = /^[1]([3-9])[0-9]{9}$/
            var ph = null 
            if(reg.test(users.phone)){
                ph = true
            } else {
                ph = false
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
            url:"http://39.97.116.110:8081/girl/user/checkphone.do",
            params:{phone:users.phone,}
        }).then((data)=>{ 
            //注：此时是否注册的成功状态码是1001       描述下现在心情 "无数个个马儿策马奔腾"
            if(data.data.code==1001 && mm1 && ph){
                axios({
                    method:"post",
                    url:"http://39.97.116.110:8081/girl/user/login.do",
                    params:{password:users.password,phone:users.phone}
                }).then((data)=>{
                    //注:此时成功状态码是1000    
                    if(data.data.code==1000){
                        commit("login",data.data.data)
                        localStorage.setItem("token",data.data.data)
                        router.push("/mainfollow")
                    }
                })        
            }else{
                router.push("/login")
            } 
        })
    },

    //手机号登陆
    loginPhone({commit},loginphone){
        //手机号正则验证
        var reg = /^[1]([3-9])[0-9]{9}$/
        var ph = null 
        if(reg.test(loginphone.phone)){
            ph = true
        } else {
            ph = false
        }

        if(ph){
            //注：此时成功状态码是1001       描述下现在心情 "无数个个马儿策马奔腾" 
            axios({
                method:"get",
                url:"http://39.97.116.110:8081/girl/user/checkphone.do",
                params:{phone:loginphone.phone}
            }).then((data)=>{
                console.log(data.data.code)
                if(data.data.code == 1001 && ph){
                    axios({
                        method:"post",
                        url:"http://39.97.116.110:8081/girl/sms/sendmsg.do",
                        data:qs.stringify({phone:loginphone.phone})
                    }).then(function(data){
                        console.log(data.data.code)
                        if(data.data.code==1000){
                            router.push({name:"Number",query:{phone:loginphone.phone}}) 
                        }
                    })
                }
            })
        }
    },
    numberbtn({commit},number){
        var str = location.href.split("?")[1].split("=")[1] 
        axios({
            method:"post",
            url:"http://39.97.116.110:8081/girl/sms/checkcode.do",
            data:{code:number.number,phone:str}
        }).then(function(data){
            if(data.data.code == 1000){
                router.push("/mainindex")
            }
        })
    }





}
export default actions