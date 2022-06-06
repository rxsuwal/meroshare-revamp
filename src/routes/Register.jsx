
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import * as actionAuth from '../store/actionCreator/authAction'

export const Register = (props) => {


    // STORE DISPATCH
    const dispatch = useDispatch()

    // NAVIGATE
    let navigate = useNavigate()


    // FUNCTIONS




    // LIFE CYCLE METHODS
    useEffect(() => {

        if (localStorage.getItem('token')) {
            navigate('/dashboard')
        }

    }, [])



    const DisplayingErrorMessagesSchema = Yup.object().shape({
        name: Yup.string().required('Name Required'),
        email: Yup.string().email('Invalid email').required('Email Required'),
        password: Yup.string()
            .min(8, 'Minimum 8 Characters !')
            .required('Password Required'),
        toc: Yup.string().required('Agree Terms & Conditions !')
    });






    return (
        <>
            {/*<!--begin::Main-->*/}
            <div className="d-flex flex-column flex-root">
                {/*<!--begin::Authentication - Sign-up -->*/}
                <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                    {/*<!--begin::Aside-->*/}
                    <div className="d-none d-lg-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative" style={{ "backgroundColor": "#F2C98A", minHeight: "100vh" }}>
                        {/*<!--begin::Wrapper-->*/}
                        <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                            {/*<!--begin::Content-->*/}
                            <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                                {/*<!--begin::Logo-->*/}
                                <a href="../../demo14/dist/index.html" className="py-9 mb-5">
                                    <img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-60px" />
                                </a>
                                {/*<!--end::Logo-->*/}
                                {/*<!--begin::Title-->*/}
                                <h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{ "color": "#986923" }}>Welcome to MeroShare Revamped</h1>
                                {/*<!--end::Title-->*/}
                                {/*<!--begin::Description-->*/}
                                <p className="fw-bold fs-2" style={{ "color": "#986923" }}>Discover Amazing Meroshare
                                    <br />with great build tools
                                </p>
                                {/*<!--end::Description-->*/}
                            </div>
                            {/*<!--end::Content-->*/}
                            {/*<!--begin::Illustration-->*/}
                            <div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style={{ "backgroundImage": "url(assets/media/illustrations/sketchy-1/13.png" }}></div>
                            {/*<!--end::Illustration-->*/}
                        </div>
                        {/*<!--end::Wrapper-->*/}
                    </div>
                    {/*<!--end::Aside-->*/}
                    {/*<!--begin::Body-->*/}
                    <div className="d-flex flex-column flex-lg-row-fluid py-10">
                        {/*<!--begin::Content-->*/}
                        <div className="d-flex flex-center flex-column flex-column-fluid">
                            {/*<!--begin::Wrapper-->*/}
                            <div className="w-lg-600px p-10 p-lg-15 mx-auto">

                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: '',
                                        password: '',
                                        toc: ''
                                    }}
                                    validationSchema={DisplayingErrorMessagesSchema}
                                    onSubmit={values => {
                                        dispatch(actionAuth.register(values, navigate))
                                    }}
                                >
                                    {() => (

                                        <Form className="form w-100" noValidate="novalidate" >
                                            {/*<!--begin::Heading-->*/}
                                            <div className="mb-10 text-center">
                                                {/*<!--begin::Title-->*/}
                                                <h1 className="text-dark mb-3">Create an Account</h1>
                                                {/*<!--end::Title-->*/}
                                                {/*<!--begin::Link-->*/}
                                                <div className="text-gray-400 fw-bold fs-4">Already have an account?
                                                    <Link to='/' className="link-primary fw-bolder ms-4">Sign in here</Link>
                                                </div>
                                                {/*<!--end::Link-->*/}
                                            </div>
                                            {/*<!--end::Heading-->*/}

                                            {/*<!--begin::Input group-->*/}

                                            <div className="fv-row mb-7">
                                                <label className="form-label fw-bolder text-dark fs-6">Email</label>

                                                <Field className="form-control form-control-lg form-control-solid" type="text" name="name" placeholder="Enter Name" />
                                                <ErrorMessage name="name" component="span" className='d-block text-danger' />

                                            </div>
                                            {/*<!--end::Input group-->*/}

                                            {/*<!--begin::Input group-->*/}

                                            <div className="fv-row mb-7">
                                                <label className="form-label fw-bolder text-dark fs-6">Email</label>

                                                <Field className="form-control form-control-lg form-control-solid" type="email" name="email" placeholder="Enter Email" />
                                                <ErrorMessage name="email" component="span" className='d-block text-danger' />

                                            </div>
                                            {/*<!--end::Input group-->*/}
                                            {/*<!--begin::Input group-->*/}
                                            <div className="mb-10 fv-row" data-kt-password-meter="true">
                                                {/*<!--begin::Wrapper-->*/}
                                                <div className="mb-1">
                                                    {/*<!--begin::Label-->*/}
                                                    <label className="form-label fw-bolder text-dark fs-6">Password</label>
                                                    {/*<!--end::Label-->*/}
                                                    <Field className="form-control form-control-lg form-control-solid" type="password" name="password" placeholder="Enter password" />
                                                    <ErrorMessage name="password" component="span" className='d-block text-danger' />
                                             

                                                </div>
                                                {/*<!--end::Wrapper-->*/}

                                            </div>
                                            {/*<!--end::Input group=-->*/}

                                            {/*<!--begin::Input group-->*/}
                                            <div className="fv-row mb-10">
                                                <label className="form-check form-check-custom form-check-solid form-check-inline">
                                                    <Field className="form-check-input" type="checkbox" name="toc" />
                                                    <span className="form-check-label fw-bold text-gray-700 fs-6">I Agree
                                                        <a href="#" className="ms-1 link-primary">Terms and conditions</a>.</span>


                                                </label>
                                                <ErrorMessage name="toc" component="span" className='d-block text-danger' />

                                            </div>
                                            {/*<!--end::Input group-->*/}
                                            {/*<!--begin::Actions-->*/}
                                            <div className="text-center">
                                                <button type="submit" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
                                                    <span className="indicator-label">Submit</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            {/*<!--end::Actions-->*/}
                                        </Form>


                                    )}
                                </Formik>





                            </div>
                            {/*<!--end::Wrapper-->*/}
                        </div>
                        {/*<!--end::Content-->*/}
                        {/*<!--begin::Footer-->*/}
                        <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                            {/*<!--begin::Links-->*/}
                            <div className="d-flex flex-center fw-bold fs-6">
                                <Link to={"/about"} className="text-muted text-hover-primary px-2" target="_blank">About</Link>
                                <a href="#!" className="text-muted text-hover-primary px-2" target="_blank">Support</a>
                                <a href="#!" className="text-muted text-hover-primary px-2" target="_blank">Privacy Policy</a>
                            </div>
                            {/*<!--end::Links-->*/}
                        </div>
                        {/*<!--end::Footer-->*/}
                    </div>
                    {/*<!--end::Body-->*/}
                </div>
                {/*<!--end::Authentication - Sign-up-->*/}
            </div>
            {/*<!--end::Main-->*/}
        </>
    )
}



export default Register