import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'

import * as actionData from '../store/actionCreator/dataAction'

import * as loader from '../store/actionCreator/loaderAction'

function Apply() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let location = useLocation()

    useEffect(() => {
        let pathname = location.pathname.split(':')

        if (pathname[1].includes('/')) {
            let final = pathname[1].split('/')
            dispatch(actionData.getOpeningsDetail(final[0]))


        } else if (!pathname[1].includes('/')) {
            dispatch(actionData.getOpeningsDetail(pathname[1]))

        }

    }, [])


    let data = useSelector(state => state?.data?.openingsDetail)


    return (
        <>
            <Formik initialValues={{

                "quantity": "",

            }}

                validationSchema={Yup.object().shape({
                    quantity: Yup.number()
                        .required('Units Required !').integer("No decimals !").positive("Negative Numbers not allowed!")

                })}
                onSubmit={values => {
                    toast.success(`${values.quantity} Units Applied for ${data.name} !`)
                    navigate(-1)

                }}

            >
                {({ values, setFieldValue, handleChange }) => (
                    <Form className='w-100 w-md-50 mt-10'>


                        {/*--begin::Input group*/}
                        <div className="row mb-6">
                            {/*--begin::Label*/}
                            <label className="col-lg-4 col-form-label fw-bold fs-6">
                                <span className="required">Apply Units</span>
                            </label>
                            {/*--end::Label*/}
                            {/*--begin::Col*/}
                            <div className="col-lg-8 fv-row">
                                <Field type="number" name="quantity" className="form-control form-control-lg form-control-solid" placeholder="Enter Units"
                                />

                                <ErrorMessage name="quantity" component="span" className='d-block text-danger' />

                            </div>
                            {/*--end::Col*/}
                        </div>
                        {/*--end::Input group*/}




                        <div className="text-end">

                            <button onClick={() => navigate(-1)} type='button' className='btn btn-secondary btn-sm me-4'>Cancel</button>
                            <button type='submit' className="btn btn-primary btn-sm">Apply</button>

                        </div>


                    </Form>
                )}


            </Formik>
        </>
    )
}

export default Apply