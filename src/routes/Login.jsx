import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import * as Yup from 'yup';

import * as actionAuth from "../store/actionCreator/authAction"


function Login(props) {

  const [password, setPassword] = useState("password")

  const showHide = () => {
    if (password == "password") {
      setPassword("text")
    } else if (password == "text") {
      setPassword("password")
    }
  }

  // ACTION DISPATCH
  const dispatch = useDispatch()

  // NAVIGATE
  let navigate = useNavigate()

  // LIFE CYCLE METHODS
  useEffect(() => {

    if (localStorage.getItem('token')) {
      navigate('/dashboard')
    }

  }, [])


  const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
    password: Yup.string()
      .min(8, 'Minimum 8 Characters !')
      .required('Password Required'),
  });



  return (
    // < !--begin:: Main-- >
    <div className="d-flex flex-column flex-root">
      {/* {/* <!--begin::Authentication - Sign-in --> */}
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{ "backgroundImage": "url(assets/media/illustrations/sketchy-1/14.png",minHeight:"100vh" }}>
        {/* <!--begin::Content--> */}
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          {/* <!--begin::Logo--> */}
          <Link to={"/"} className="mb-12">
            <img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-40px" />
          </Link>
          {/* <!--end::Logo--> */}
          {/* <!--begin::Wrapper--> */}
          <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            {/* <!--begin::Form--> */}
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={DisplayingErrorMessagesSchema}
              onSubmit={values => {
                dispatch(actionAuth.signin(values, navigate))
              }}
            >
              <Form className="form w-100" noValidate="novalidate" >
                {/*<!--begin::Heading-->*/}
                <div className="mb-10 text-center">
                  {/*<!--begin::Title-->*/}
                  <h1 className="text-dark mb-3">Sign In to Meroshare Revamped</h1>
                  {/*<!--end::Title-->*/}
                  {/*<!--begin::Link-->*/}
                  <div className="text-gray-400 fw-bold fs-4">New Here?
                    <Link to='/register' className="link-primary fw-bolder ms-4">Create an Account</Link>
                  </div>
                  {/*<!--end::Link-->*/}
                </div>
                {/*<!--end::Heading-->*/}



                <div className="fv-row mb-7">
                  <label className="form-label fw-bolder text-dark fs-6">Email</label>

                  <Field className="form-control form-control-lg form-control-solid" type="email" name="email" placeholder="Enter mail" />
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
                    {/*<!--begin::Input wrapper-->*/}

                    <div className="position-relative mb-3">
                      <Field className="form-control form-control-lg form-control-solid" type={password} name="password" placeholder="Enter Password" />
                      <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" onClick={() => showHide()}>
                        <i className="bi bi-eye-slash fs-2"></i>
                        <i className="bi bi-eye fs-2 d-none"></i>
                      </span>
                    </div>
                    {/*<!--end::Input wrapper-->*/}
                    <ErrorMessage name="password" component="span" className='d-block text-danger' />


                  </div>
                  {/*<!--end::Wrapper-->*/}

                </div>
                {/*<!--end::Input group=-->*/}


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
            </Formik>
            {/* <!--end::Form--> */}
          </div>
          {/* <!--end::Wrapper--> */}
        </div>
        {/* <!--end::Content--> */}
        {/* <!--begin::Footer--> */}
        <div className="d-flex flex-center flex-column-auto p-10">
          {/* <!--begin::Links--> */}
          <div className="d-flex align-items-center fw-bold fs-6">
            <Link to={"/about"} className="text-muted text-hover-primary px-2">About</Link>
            <a href="#!" className="text-muted text-hover-primary px-2">Contact</a>
            <a href="#!" className="text-muted text-hover-primary px-2">Privacy Policy</a>
          </div>
          {/* <!--end::Links--> */}
        </div>
        {/* <!--end::Footer--> */}
      </div>
      {/* <!--end::Authentication - Sign-in--> */}
    </div>
    //* <!--end:: Main-- >
  )
}



export default Login