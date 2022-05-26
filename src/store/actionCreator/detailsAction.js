import * as actionType from '../actionType'

import { databaseInstancePrivate } from '../../axios/databaseInstance'
import toast from 'react-hot-toast'

export const updateDetails = (payload) => {

    return dispatch => {
        databaseInstancePrivate.put('details.json', "payload")
            .then(rspnse => {
                console.log(rspnse)
                toast.success("Details Updated !")
            }).catch(err => {
                console.log(err.response)
                toast.error(err.response.data.error)


            })

    }
}

export const getDetails = () => {
    return dispatch => {
        databaseInstancePrivate.get('/details.json')
            .then(rspnse => {
                console.log(rspnse)
            })
            .catch(err=>{
                console.log(err.response)
                toast.error(err.response.data.error)
            })
    }
}

