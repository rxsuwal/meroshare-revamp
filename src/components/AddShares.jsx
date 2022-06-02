

import React, { useEffect, useState } from 'react'

import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import PopUp from './PopUp'
import SelectWithSearch from './SelectWithSearch'
import * as actionUserData from '../store/actionCreator/userDataAction'
import * as actionData from '../store/actionCreator/dataAction'
import { useDispatch, useSelector } from 'react-redux'


function AddShares() {
    let dispatch = useDispatch()
    const companies = useSelector((state) => state?.data?.companies)
    let allCompanies = []

    useEffect(() => {

        if (!companies) {
            dispatch(actionData.getCompanies())

        }

    }, [])

    useEffect(() => {
        for (let i = 0; i < companies?.length; i++) {
            let obj = {}
            obj["value"] = companies[i].scrip
            obj["label"] = companies[i].name
            allCompanies.push(obj)
        }
    }, [allCompanies])

    // ADD COMPANY POPUP
    const [show, setShow] = useState(false)
    // END ADD COMPANY POPUP

    return (
        <>

            <button className="btn btn-primary " onClick={() => setShow(true)}>
                {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr087.svg--> */}
                <span className="svg-icon svg-icon-primary svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                    <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                </svg></span>
                {/* <!--end::Svg Icon--> */}
                Add</button>

            {/* <button className='btn btn-primary' onClick={() => setShow(true)}>Add</button> */}

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

                            {values.quantity && values.pricePerUnit ?
                                <>
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
                                </> : null}

                            <div className="text-end">

                                <button type='button' onClick={() => setShow(false)} className='btn btn-secondary btn-sm me-4'>Cancel</button>
                                <button type='submit' className="btn btn-primary btn-sm">Add</button>

                            </div>


                        </Form>
                    )}


                </Formik>


            </PopUp>
            {/* ADD COMPANY POPUP */}

        </>
    )
}

export default AddShares