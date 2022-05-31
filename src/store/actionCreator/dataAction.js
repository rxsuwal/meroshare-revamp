import * as actionType from '../actionType'

import { databaseInstancePublic } from '../../axios/databaseInstance'

const setCompanies =(payload)=>{
    return{
        type:actionType.SET_COMPANIES,
        payload:payload
    }
}
export const getCompanies = () => {
    return dispatch => {
        databaseInstancePublic.get('/companies.json')
            .then(rspnse => {
            
                dispatch(setCompanies(rspnse.data))
            })
            .catch(err => {
                console.log(err?.response)
            })
    }
}

export const getProvinces = () => {
    return dispatch => {
        databaseInstancePublic.get('/provinces.json')
            .then(rspnse => {
                console.log(rspnse)
            })
            .catch(err => {
                console.log(err?.response)
            })
    }
}