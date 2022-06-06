import authReducer from './authReducer'
import userDataReducer from './userDataReducer'
import loadingReducer from "./loaderReducer"

import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

import * as actionType from '../actionType'


const appReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    userData: userDataReducer,
    data: dataReducer
})

// export const rootReducer = combineReducers({
//     auth: authReducer,
//     loading: loadingReducer,
//     userData: userDataReducer,
//     data: dataReducer
// })

export const rootReducer = (state, action) => {
    if (action.type == actionType.SIGN_OUT) {
        // storage.removeItem('persist:root')
        return appReducer(undefined, action);

    }


    return appReducer(state, action);

}