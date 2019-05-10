var mutations = {
    login(state,token){
        state.token = token
    },
    loginPhone(state,phone){
        state.phone = phone
    },
    numberbtn(state,value){
        state.value = value
    }
}

export default mutations