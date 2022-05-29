import * as actionType from '../actionType'

import { databaseInstancePrivate } from '../../axios/databaseInstance'
import toast from 'react-hot-toast'

import * as loader from './loaderAction'


export const updateDetails = (payload) => {

    return dispatch => {
        dispatch(loader.setLoaderTrue())

        databaseInstancePrivate.put('details.json', payload)
            .then(rspnse => {
                console.log(rspnse)
                dispatch(setDetails(rspnse.data))
                toast.success("Details Updated !")

                dispatch(loader.setLoaderFalse())
            }).catch(err => {
                console.log(err.response)
                toast.error(err.response.data.error)


            })

    }
}

export const getDetails = () => {


    return dispatch => {
        // dispatch(loader.setLoaderTrue())
        let getDetailsReturnData
        databaseInstancePrivate.get('/details.json')
            .then(rspnse => {
                getDetailsReturnData = rspnse
                // console.log(rspnse)
                // dispatch(setDetails(rspnse?.data))


            })
            .catch(err => {
                getDetailsReturnData = err.response
                // console.log(err?.response)
                // toast.error(err?.response?.data.error)


            }).then(() => {
                // dispatch(loader.setLoaderFalse())
                console.log("GET DETAIL DATA", getDetailsReturnData)
                if (getDetailsReturnData != null) {

                    if (getDetailsReturnData.status == "200") {
                        dispatch(setDetails(getDetailsReturnData.data))
                    } else if (getDetailsReturnData != "200") {
                        toast.error(getDetailsReturnData.data.error)
                    }
                } else if( getDetailsReturnData = null){
                    dispatch(setDetails(null))
                }
            })
    }
}


export const setDetails = (payload) => {

    return {
        type: actionType.SET_USER_DETAILS,
        payload: payload
    }
}

