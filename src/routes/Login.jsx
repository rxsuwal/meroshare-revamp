import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import * as actionAuth from "../store/actionCreator/authAction"


function Login(props) {

  // STATES
  const [loginCredential, setloginCredential] = useState({})

  // STORE SELECTOR
  const auth = useSelector(state => state.auth)

  // ACTION DISPATCH
  const dispatch = useDispatch()

  // NAVIGATE
  let navigate = useNavigate()


  useEffect(() => {
    // CHECK AUTH
    dispatch(actionAuth.authCheck())

  }, [])


  useEffect(() => {
    if (auth.user != null) {
      navigate('/dashboard')
    }
  }, [auth])





  // FUNCTIONS FOR ACTIONS

  // FORMDATA
  const formDataOnChange = (e) => {
    setloginCredential(prevValues => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value
      }
    })
  }


  // SIGNIN ON SUBMIT
  const signIN = () => {
    console.log('signIN')

    localStorage.setItem('user', JSON.stringify(loginCredential))

    // dispatch(actionAuth.signin(loginCredential))

    // actionAuth.signin(loginCredential)

    navigate("/dashboard")


  }


  return (
    // < !--begin:: Main-- >
    <div className="d-flex flex-column flex-root">
      {/* {/* <!--begin::Authentication - Sign-in --> */}
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{ "backgroundImage": "url(assets/media/illustrations/sketchy-1/14.png" }}>
        {/* <!--begin::Content--> */}
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          {/* <!--begin::Logo--> */}
          <a href="../../demo14/dist/index.html" className="mb-12">
            <img alt="Logo" src="assets/media/logos/logo-1.svg" className="h-40px" />
          </a>
          {/* <!--end::Logo--> */}
          {/* <!--begin::Wrapper--> */}
          <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            {/* <!--begin::Form--> */}
            <form className="form w-100" noValidate="noValidate" id="kt_sign_in_form" >
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-10">
                {/* <!--begin::Title--> */}
                <h1 className="text-dark mb-3">Sign In to Metronic</h1>
                {/* <!--end::Title--> */}
                {/* <!--begin::Link--> */}
                <div className="text-gray-400 fw-bold fs-4">New Here?

                  <Link to='/register' className="link-primary fw-bolder">Create an Account</Link>
                </div>
                {/* <!--end::Link--> */}
              </div>
              {/* <!--begin::Heading--> */}

              {/* <!--begin::Input group username--> */}
              <div className="fv-row mb-10">
                {/* <!--begin::Label--> */}
                <label className="form-label fs-6 fw-bolder text-dark">Username</label>
                {/* <!--end::Label--> */}
                {/* <!--begin::Input--> */}
                <input className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete='on' value={loginCredential?.username} onChange={formDataOnChange} />
                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group username--> */}

              {/* <!--begin::Input group password--> */}
              <div className="fv-row mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-stack mb-2">
                  {/* <!--begin::Label--> */}
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                  {/* <!--end::Label--> */}
                  {/* <!--begin::Link--> */}
                  <a href="../../demo14/dist/authentication/layouts/basic/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--end::Wrapper--> */}
                {/* <!--begin::Input--> */}
                <input className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete='on' value={loginCredential?.password} onChange={formDataOnChange} />
                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group password--> */}


              {/* <!--begin::Actions--> */}
              <div className="text-center">
                {/* <!--begin::Submit button--> */}
                <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5" onClick={signIN}>
                  <span className="indicator-label">Continue</span>
                  <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
                {/* <!--end::Submit button--> */}

              </div>
              {/* <!--end::Actions--> */}
            </form>
            {/* <!--end::Form--> */}
          </div>
          {/* <!--end::Wrapper--> */}
        </div>
        {/* <!--end::Content--> */}
        {/* <!--begin::Footer--> */}
        <div className="d-flex flex-center flex-column-auto p-10">
          {/* <!--begin::Links--> */}
          <div className="d-flex align-items-center fw-bold fs-6">
            <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2">About</a>
            <a href="mailto:support@keenthemes.com" className="text-muted text-hover-primary px-2">Contact</a>
            <a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2">Contact Us</a>
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