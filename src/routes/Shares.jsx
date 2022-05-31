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

const Shares = () => {
    const companies = useSelector((state) => state?.data?.companies)
    const shares = useSelector((state) => state?.userData?.shares)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionData.getCompanies())
        dispatch(actionUserData.getShares())




    }, [])




    let allCompanies = []
    let myShares = {
        header: [{
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


    useEffect(() => {
        for (let i = 0; i < companies?.length; i++) {
            let obj = {}
            obj["value"] = companies[i].scrip
            obj["label"] = companies[i].name
            allCompanies.push(obj)
        }
    }, [allCompanies])


    const [show, setShow] = useState(false)








    return (
        <Layout pageTitle="My Shares" pageGroup="Shares">
            <div className="d-flex align-items-center justify-content-between">
                <h1>Shares</h1>
                <button className='btn btn-primary' onClick={() => setShow(true)}>Add</button>
            </div>

            {shares ? <Table header={myShares.header} data={myShares.data} />
                : <Loader />}

            <PopUp title="Add Shares" close={() => setShow(false)} show={show} >
                <Formik initialValues={{
                    "company": "",
                    "quantity": ""
                }}

                    validationSchema={Yup.object().shape({
                        quantity: Yup.string().required('Quantity Required'),
                        company: Yup.string().required('Company Required!')
                    })}
                    onSubmit={values => {
                        dispatch(actionUserData.addShares(values))
                        setShow(false)
                    }}

                >
                    {({ values, setFieldValue, handleChange }) => (
                        <Form>

                            {/*--begin::Input group*/}
                            <div className="row mb-6">
                                {/*--begin::Label*/}
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Company</span>
                                </label>
                                {/*--end::Label*/}
                                {/*--begin::Col*/}
                                <div className="col-lg-8 fv-row">
                                    <SelectWithSearch
                                        name="company"
                                        options={allCompanies}
                                        value={values.province}
                                        className="form-select form-select-solid form-select-lg"
                                        onchange={(e) => {
                                            handleChange(e.value)
                                            setFieldValue("company", e.value)
                                        }} />
                                    {/* <Field type="number" name="quantity" className="form-control form-control-lg form-control-solid" placeholder="Enter Number of Shares" /> */}

                                    <ErrorMessage name="company" component="span" className='d-block text-danger' />

                                </div>
                                {/*--end::Col*/}
                            </div>
                            {/*--end::Input group*/}

                            {/*--begin::Input group*/}
                            <div className="row mb-6">
                                {/*--begin::Label*/}
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Quantity</span>
                                </label>
                                {/*--end::Label*/}
                                {/*--begin::Col*/}
                                <div className="col-lg-8 fv-row">
                                    <Field type="number" name="quantity" className="form-control form-control-lg form-control-solid" placeholder="Enter Number of Shares" />

                                    <ErrorMessage name="quantity" component="span" className='d-block text-danger' />

                                </div>
                                {/*--end::Col*/}
                            </div>
                            {/*--end::Input group*/}

                            <div className="text-end">

                                <button type='button' onClick={() => setShow(false)} className='btn btn-secondary btn-sm me-4'>Cancel</button>
                                <button type='submit' className="btn btn-primary btn-sm">Add</button>

                            </div>


                        </Form>
                    )}


                </Formik>


            </PopUp>
        </Layout >
    )
}

export default Shares