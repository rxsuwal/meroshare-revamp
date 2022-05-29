import * as actionType from '../actionType'


export const setLoaderTrue =()=>{
    return{
        type:actionType.LOADING_TRUE
    }
}

export const setLoaderFalse =()=>{
    return{
        type:actionType.LOADING_FALSE
    }
}