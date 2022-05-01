import axios from "axios"
import toast from "react-hot-toast"

import * as actionType from "../actionType"

import { API_KEY } from "../../firebase/config"



// AUTH CHECK
export const authCheck = (navigate) => {

    // GET TOKEN FROM LOCAL STORAGE
    let token = localStorage.getItem('token')
    console.log(token)

    return dispatch => {

        { !token ? navigate('/') : dispatch(setUserToken(token)),dispatch(getUserData(token)) }

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
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, data)
            .then(rspnse => {
                console.log(rspnse.data)
                localStorage.setItem("token", rspnse.data.idToken)
                localStorage.setItem("refreshTOken", rspnse.data.refreshToken)
                localStorage.setItem("expiryTime", rspnse.data.expiresIn)

                dispatch(setUserToken(rspnse.data.idToken))

                dispatch(getUserData(rspnse.data.idToken))

                toast.success('Sign In Successfull !')

                navigate('/dashboard')

            })
            .catch(err => {
                console.log(err?.response?.data)
                toast.error(err.response?.data?.error?.message)

            })
    }
}
// SIGN OUT
export const signout = (navigate) => {
    localStorage.clear()
    return dispatch => {
        dispatch(authCheck(navigate))
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
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, data)
            .then(rspnse => {
                console.log(rspnse.data)
                localStorage.setItem("token", rspnse.data.idToken)
                localStorage.setItem("refreshTOken", rspnse.data.refreshToken)
                localStorage.setItem("expiryTime", rspnse.data.expiresIn)


                dispatch(setUserToken(rspnse.data.idToken))
                dispatch(getUserData(rspnse.data.idToken))

                toast.success('Registration Successfull !')

                navigate('/dashboard')

            })
            .catch(err => {
                console.log(err?.response?.data)

                toast.error(err.response?.data?.error?.message)


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

export const getUserData = (payload) => {
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + API_KEY, {"idToken":payload})
            .then(rspnse => {
                console.log(rspnse.data)
                dispatch(setUserData(rspnse.data))
            })
            .then(err => {
                console.log(err?.response?.data?.error)
            })
    }

}

export const setUserData = (payload) => {
    return {
        type: actionType.SET_USER_DATA,
        payload: payload
    }
}   