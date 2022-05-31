import authReducer from './authReducer'
import userDataReducer from './userDataReducer'
import loadingReducer from "./loaderReducer"

import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    userData: userDataReducer,
    data: dataReducer
})