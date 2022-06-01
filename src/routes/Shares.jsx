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
    let dispatch = useDispatch()

    // STORE SELECTORS
    const companies = useSelector((state) => state?.data?.companies)
    const shares = useSelector((state) => state?.userData?.shares)
    const userData = useSelector((state) => state?.auth?.userData)

    // DISPATCH GET COMPANY,SHARES
    useEffect(() => {
        dispatch(actionUserData.getShares())

        if (!companies) {
            dispatch(actionData.getCompanies())

        }

    }, [userData])
    // END DISPATCH GET COMPANY,SHARES

    // SET LIST OF ALL COMPANIES
    let allCompanies = []
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
    useEffect(() => {
        for (let i = 0; i < companies?.length; i++) {
            let obj = {}
            obj["value"] = companies[i].scrip
            obj["label"] = companies[i].name
            allCompanies.push(obj)
        }
    }, [allCompanies])
    // END SET LIST OF ALL COMPANIES

    // ADD COMPANY POPUP
    const [show, setShow] = useState(false)
    // END ADD COMPANY POPUP


    return (
        <Layout pageTitle="My Shares" pageGroup="Shares">
            <div className="d-flex align-items-center justify-content-between">
                <h1>Shares</h1>
                <button className='btn btn-primary' onClick={() => setShow(true)}>Add</button>
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

            {/* ADD COMPANY POPUP */}
            <PopUp title="Add Shares" close={() => setShow(false)} show={show} >
                <Formik initialValues={{
                    "company": "",
                    "scrip": "",
                    "quantity": "",
                    "pricePerUnit": "",
                    "totalAmount": ""
                }}

                    validationSchema={Yup.object().shape({
                        quantity: Yup.string().required('Quantity Required'),
                        company: Yup.string().required('Company Required!'),
                        pricePerUnit: Yup.string().required('Price per unit Required!')

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
                                            setFieldValue("company", e.label)
                                            setFieldValue("scrip", e.value)
                                            console.log(e)
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
                                    <Field type="number" name="quantity" className="form-control form-control-lg form-control-solid" placeholder="Enter Number of Shares"
                                        onChange={(e) => {
                                            handleChange(e)
                                            setFieldValue("totalAmount", values.quantity * e.target.value)

                                        }} />

                                    <ErrorMessage name="quantity" component="span" className='d-block text-danger' />

                                </div>
                                {/*--end::Col*/}
                            </div>
                            {/*--end::Input group*/}

                            {/*--begin::Input group*/}
                            <div className="row mb-6">
                                {/*--begin::Label*/}
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Price Per Unit</span>
                                </label>
                                {/*--end::Label*/}
                                {/*--begin::Col*/}
                                <div className="col-lg-8 fv-row">
                                    <Field type="number" name="pricePerUnit" className="form-control form-control-lg form-control-solid" placeholder="Enter Per Unit"
                                        onChange={(e) => {
                                            handleChange(e)
                                            setFieldValue("totalAmount", values.quantity * e.target.value)

                                        }} />

                                    <ErrorMessage name="pricePerUnit" component="span" className='d-block text-danger' />

                                </div>
                                {/*--end::Col*/}
                            </div>
                            {/*--end::Input group*/}

                            {/*--begin::Input group*/}
                            <div className="row mb-6">
                                {/*--begin::Label*/}
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Total Amount</span>
                                </label>
                                {/*--end::Label*/}
                                {/*--begin::Col*/}
                                <div className="col-lg-8 fv-row">
                                    <Field type="number" name="totalAmount" value={values.totalAmount} disabled className="form-control form-control-lg form-control-solid" placeholder="Enter Per Unit" />

                                    <ErrorMessage name="totalAmount" component="span" className='d-block text-danger' />

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
            {/* ADD COMPANY POPUP */}

        </Layout >
    )
}

export default Shares