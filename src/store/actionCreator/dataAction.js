import * as actionType from '../actionType'

import { databaseInstancePublic } from '../../axios/databaseInstance'

export const getCompanies = () => {
    return dispatch => {
        databaseInstancePublic.get('/companies.json')
            .then(rspnse => {
                console.log(rspnse)
            })
            .catch(err => {
                console.log(err?.response)
            })
    }
}