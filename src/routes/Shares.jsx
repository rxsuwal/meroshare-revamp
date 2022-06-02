import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Table from '../components/Table'

import * as actionUserData from '../store/actionCreator/userDataAction'
import Loader from '../components/Loader/Loader'
import AddShares from '../components/AddShares'

const Shares = () => {
    let dispatch = useDispatch()

    // STORE SELECTORS
    const shares = useSelector((state) => state?.userData?.shares)
    const userData = useSelector((state) => state?.auth?.userData)

    // DISPATCH GET COMPANY,SHARES
    useEffect(() => {
        dispatch(actionUserData.getShares())

    }, [userData])
    // END DISPATCH GET COMPANY,SHARES


    let myShares = {
        header: [{
            label: 'Scrip',
            field: 'scrip',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },

        }, {
            label: 'Name',
            field: 'company',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },

        },
        {
            label: 'Quantity',
            field: 'quantity',
            width: 270,
        },
        ],
        data: shares

    }


    return (
        <Layout pageTitle="My Shares" pageGroup="Shares">
            <div className="d-flex align-items-center justify-content-between">
                <h1>Shares</h1>
                <AddShares />

            </div>


            {/* TABLE */}
            {shares ?
                <>
                    {
                        shares.length == "0" ?
                            <h4 className='text-center py-8'>Start Adding !</h4>
                            : <Table header={myShares.header} data={myShares.data} />
                    }
                </>
                : <Loader />}
            {/* END TABLE */}



        </Layout >
    )
}

export default Shares