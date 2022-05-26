import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import Layout from '../components/Layout'

import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import * as actionAuth from "../store/actionCreator/authAction"


function Settings() {

    const [togglePassword, setTogglePassword] = useState({
        oldPassword: 'password',
        newPassword: 'password'
    })


    const showHide = (password) => {

        if (password == "old" && togglePassword.oldPassword == "password") {
            setTogglePassword({ ...togglePassword, oldPassword: "text" })
        }
        else if (password == "old" && togglePassword.oldPassword == "text") {
            setTogglePassword({ ...togglePassword, oldPassword: "password" })
        }
        else if (password == "new" && togglePassword.newPassword == "password") {
            setTogglePassword({ ...togglePassword, newPassword: "text" })
        }
        else if (password == "new" && togglePassword.newPassword == "text") {
            setTogglePassword({ ...togglePassword, newPassword: "password" })
        }

    }


    const DisplayingErrorMessagesSchema = Yup.object().shape({
        newPassword: Yup.string().required('New Password Required !').min(8, 'Minimum 8 Characters !'),
        confirmNewPassword: Yup.string().required('Confirm New Password Required !').oneOf([Yup.ref('newPassword'), null], 'Confirm and New Password Must Match !'),

    });

    let dispatch = useDispatch()
    return (
        <Layout pageTitle="Settings" pageGroup="Account Settings">
            <h1>Change Password</h1>

            <div>
                <Formik
                    initialValues={{
                        newPassword: '',
                        confirmNewPassword: ''
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={values => {
                        dispatch(actionAuth.changePassword(values))
                    }}
                >
                    <Form className="form w-50 mt-6" noValidate="novalidate" >


                        {/*<!--begin::Input group-->*/}
                        <div className="mb-10 fv-row">
                            {/*<!--begin::Wrapper-->*/}
                            <div className="mb-1">
                                {/*<!--begin::Label-->*/}
                                <label className="form-label fw-bolder text-dark fs-6 required">New Password</label>
                                {/*<!--end::Label-->*/}
                                {/*<!--begin::Input wrapper-->*/}
                                <div className="position-relative mb-3">
                                    <Field className="form-control form-control-lg form-control-solid" type={togglePassword.newPassword} name="newPassword" placeholder="Enter New Password" />
                                    <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" onClick={() => showHide("new")}>
                                        {togglePassword.newPassword == "password" ?
                                            <i className="bi bi-eye fs-2"></i> :
                                            <i className="bi bi-eye-slash fs-2"></i>}

                                    </span>
                                </div>
                                {/*<!--end::Input wrapper-->*/}
                                <ErrorMessage name="newPassword" component="span" className='d-block text-danger' />


                            </div>
                            {/*<!--end::Wrapper-->*/}

                        </div>
                        {/*<!--end::Input group=-->*/}

                        {/*<!--begin::Input group-->*/}
                        <div className="mb-10 fv-row">
                            {/*<!--begin::Wrapper-->*/}
                            <div className="mb-1">
                                {/*<!--begin::Label-->*/}
                                <label className="form-label fw-bolder text-dark fs-6 required">Confirm New Password</label>
                                {/*<!--end::Label-->*/}
                                <Field className="form-control form-control-lg form-control-solid" type={togglePassword.newPassword} name="confirmNewPassword" placeholder="Confirm New Password" />
                                <ErrorMessage name="confirmNewPassword" component="span" className='d-block text-danger' />

                            </div>
                            {/*<!--end::Wrapper-->*/}

                        </div>
                        {/*<!--end::Input group-->*/}


                        {/*<!--begin::Actions-->*/}
                        <div className="text-end">
                            <button type="submit" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
                                <span className="indicator-label">Change Password</span>
                                <span className="indicator-progress">Please wait...
                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                        </div>
                        {/*<!--end::Actions-->*/}
                    </Form>

                </Formik>
            </div>






        </Layout>)
}

export default Settings