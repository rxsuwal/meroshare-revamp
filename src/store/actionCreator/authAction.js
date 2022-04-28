import * as actionType from "../actionType"

// AUTH CHECK
export const authCheck =()=>{

    // GET DATA FROM LOCAL STORAGE
    let authData = localStorage.getItem('user')

    // STRING TO JSON
    let data = JSON.parse(authData)

    console.log(data)

    return{
        type:actionType.SIGN_IN,
        payload: data
    }
}


// SIGN IN
export const signin = (payload) => {

    return {
        type: actionType.SIGN_IN,
        payload: payload
    }
}


// REGISTER
export const register =(payload)=>{

    // SET DATA ON LOCAL STORAGE
    localStorage.setItem('user', JSON.stringify(payload))


    return{
        type:actionType.REGISTER,
        payload:payload
    }
}