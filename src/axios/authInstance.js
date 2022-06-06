import { API_KEY } from '../firebase/config'
import * as BASE_URL from './baseURL'
import axios from 'axios'
import { store } from "../index";


// AUTH INSTANCE
const authInstance = axios.create({
    baseURL: BASE_URL.auth
})
authInstance.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['key'] = API_KEY

    return config

})
authInstance.interceptors.response.use((response) => {

    return response

})

// AUTH INSTANCE WITH TOKEN
const authInstanceWithToken = axios.create({
    baseURL: BASE_URL.auth
})

authInstanceWithToken.interceptors.request.use((config) => {

    config.params = config.params || {};
    config.params['key'] = API_KEY

    config.data = config.data || {}
    config.data['idToken'] = store.getState().auth.token
    config.data['returnSecureToken'] = true

    return config

})

authInstanceWithToken.interceptors.response.use((response) => {

    return response

})





export { authInstance, authInstanceWithToken }