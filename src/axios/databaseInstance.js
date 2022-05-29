import { API_KEY } from '../firebase/config'
import * as BASE_URL from './baseURL'
import axios from 'axios'
import { store } from '../index'

const databaseInstancePrivate = axios.create({
    baseURL: BASE_URL.databasePrivate
})

databaseInstancePrivate.interceptors.request.use((config) => {
   config.baseURL = config.baseURL +  store.getState().auth.userData.users[0].localId

//    config.params = config.params || {};
//     config.params['key'] = store.getState().auth.userData.users[0].localId
    return config

})
databaseInstancePrivate.interceptors.response.use((response) => {

    return response

})


const databaseInstancePublic = axios.create({
    baseURL: BASE_URL.databasePublic
})

databaseInstancePublic.interceptors.request.use((config) => {

    config.params = config.params || {}
    config.params['idToken'] = store.getState().auth.token
    return config

})
databaseInstancePublic.interceptors.response.use((response) => {

    return response

})


export { databaseInstancePrivate,databaseInstancePublic }