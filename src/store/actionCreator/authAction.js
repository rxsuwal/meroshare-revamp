// import axios from "axios"
import toast from "react-hot-toast"

import * as actionType from "../actionType"

// import * as loading from '../action'

import * as loader from './loaderAction'


import { authInstance, authInstanceWithToken } from '../../axios/authInstance'



// AUTH CHECK
export const authCheck = (navigate) => {



    // GET TOKEN FROM LOCAL STORAGE
    let token = localStorage.getItem('token')
    let expiryTime = localStorage.getItem('expiryTime')

    let nowDate = new Date();
    // console.log(expiryTime < nowDate)
    // { expiryTime > nowDate ? token : token = null }



    return dispatch => {



        { !token ? navigate('/') : dispatch(setUserToken(token)), dispatch(getUserData(token, navigate)) }


    }
}


// SIGN IN
export const signin = (payload, navigate) => {

    let data = {
        'email': payload.email,
        'password': payload.password,
        returnSecureToken: true
    }

    return dispatch => {


        dispatch(loader.setLoaderTrue())

        authInstance.post('accounts:signInWithPassword', data)
            .then(rspnse => {
                localStorage.setItem("token", rspnse.data.idToken)
                localStorage.setItem("refreshTOken", rspnse.data.refreshToken)
                console.log(new Date())
                let tokenExpireTime = new Date(new Date().setHours(new Date().getHours() + 1))
                localStorage.setItem("expiryTime", tokenExpireTime)

                dispatch(setUserToken(rspnse.data.idToken), getUserData(rspnse.data.idToken))

                toast.success('Sign In Successfull !')

                navigate('/dashboard')

                dispatch(loader.setLoaderFalse())


            })
            .catch(err => {
                console.log(err)
                console.log(err?.response?.data)
                toast.error(err.response?.data?.error?.message)
                dispatch(loader.setLoaderFalse())


            })
    }
}
// SIGN OUT
export const signout = (navigate) => {
    localStorage.clear()
    return dispatch => {
        dispatch(setSignOut(),navigate('/'))
        
    }
    
}

export const setSignOut =()=>{
    return{
        type:actionType.SIGN_OUT
    }
}


// REGISTER
export const register = (payload, navigate) => {


    let data = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
    }

    return dispatch => {

        dispatch(loader.setLoaderTrue())

        authInstance.post('accounts:signUp', data)
            .then(rspnse => {
                // console.log(rspnse.data)
                // localStorage.setItem("token", rspnse.data.idToken)
                // localStorage.setItem("refreshTOken", rspnse.data.refreshToken)
                // localStorage.setItem("expiryTime", rspnse.data.expiresIn)


                dispatch(updateUser(payload.name, rspnse.data.idToken, navigate))




            })
            .catch(err => {

                toast.error(err.response?.data?.error?.message)

                dispatch(loader.setLoaderFalse())


            })
    }
}

export const updateUser = (payload, token, navigate) => {
    console.log(payload)
    let data = {
        "idToken": token,
        "displayName": payload,
        returnSecureToken: true

    }
    return dispatch => {
        authInstance.post('accounts:update', data)
            .then(rspnse => {
                console.log(rspnse.data)
                toast.success('Registration Successfull !')

                navigate('/')
                dispatch(loader.setLoaderFalse())


            })
            .catch(err => {
                console.log(err?.response?.data)
                toast.error(err?.response?.data?.error?.message)
            })
    }
}

// SET USER IN STORE

export const setUserToken = (payload) => {
    return {
        type: actionType.SET_USER_TOKEN,
        payload: payload
    }
}

export const getUserData = (payload, navigate) => {
    return dispatch => {
        authInstance.post('accounts:lookup', { "idToken": payload })
            .then(rspnse => {
                dispatch(setUserData(rspnse.data))
                // dispatch(loading.setLoadingTrue())
            })
            .catch(err => {
                console.log(err?.response?.data?.error)
                toast.error(err?.response?.data?.error.message)
                // dispatch(loading.setLoadingTrue())

                signout(navigate)

            })
    }

}

export const setUserData = (payload) => {
    return {
        type: actionType.SET_USER_DATA,
        payload: payload
    }
}

// CHANGE PASSWORD
export const changePassword = (payload) => {

    console.log(payload)

    let data = {
        password: payload.confirmNewPassword,
    }
    return dispatch => {
        authInstanceWithToken.post("accounts:update", data)
            .then(rspnse => {
                console.log(rspnse)

                toast.success('Password Changed Successfully !')
            }).catch(err => {
                console.log(err.response.data.error.message)
                toast.error(err.response.data.error.message + '!')
            })
    }
}