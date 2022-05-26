import * as actionType from './actionType'

export const setLoadingTrue =()=>{
    return{
        type:actionType.LOADING_TRUE
    }
}

export const setLoadingfalse =()=>{
    return{
        type:actionType.LOADING_FALSE
    }
}