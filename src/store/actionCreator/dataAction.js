import * as actionType from '../actionType'

import { databaseInstancePublic } from '../../axios/databaseInstance'

const setCompanies = (payload) => {
    return {
        type: actionType.SET_COMPANIES,
        payload: payload
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


export const getOpenings = () => {
    return dispatch => {
        databaseInstancePublic.get('openings.json')
            .then(rspnse => {
                const openings = []
                for (let key in rspnse.data) {
                    openings.push({
                        ...rspnse.data[key],
                        id: key
                    })
                }
                dispatch(setOpenings(openings))
            }).catch(err => {
                console.log(err)
            })
    }
}

export const setOpenings = (payload) => {
    return {
        type: actionType.SET_OPENINGS,
        payload: payload
    }
}

export const getOpeningsDetail = (payload) => {
    return dispatch => {
        databaseInstancePublic.get(`openings/${payload}.json`)
            .then(rspnse => {
                dispatch(setOpeningsDetail(rspnse.data))
            }).catch(err => {
                console.log(err.response)
            })
    }
}

export const setOpeningsDetail = (payload) => {
    return {
        type: actionType.SET_OPENING_DETAIL,
        payload: payload
    }
}