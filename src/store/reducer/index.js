import authReducer from './authReducer'
import detailsReducer from './detailsReducer'
import loadingReducer from "./loaderReducer"

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    userDetails: detailsReducer
})