import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'

import * as actionData from '../store/actionCreator/dataAction'

const Shares = () => {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionData.getCompanies())
    }, [])
    
    return (
        <Layout pageTitle="My Shares" pageGroup="Shares">
            <h1>Shares</h1>
        </Layout>
    )
}

export default Shares