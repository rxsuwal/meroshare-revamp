import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import PopUp from '../components/PopUp'
import Table from '../components/Table'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import * as actionData from '../store/actionCreator/dataAction'
import SelectWithSearch from '../components/SelectWithSearch'

import * as actionUserData from '../store/actionCreator/userDataAction'
import Loader from '../components/Loader/Loader'
import AddShares from '../components/AddShares'

function Portfolio() {

  let dispatch = useDispatch()

    // STORE SELECTORS
    const companies = useSelector((state) => state?.data?.companies)
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
        {
          label: 'Unit Price',
          field: 'pricePerUnit',
          width: 270,
      },
        {
          label: 'Amount',
          field: 'totalAmount',
          width: 270,
      },
        ],
        data: shares

    }
   

  

  return (
    <Layout pageTitle="My Portfolio" pageGroup="Shares">
        <div className="d-flex align-items-center justify-content-between">
                <h1>Portfolio</h1>
                <AddShares/>
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

         
    </Layout>
  )
}

export default Portfolio