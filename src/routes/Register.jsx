import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import * as actionAuth from '../store/actionCreator/authAction'

export const Register = (props) => {

    // STORE STATES
    const states = useSelector((state) => {
        return {
            auth: state.auth
        }
    })

    // STORE DISPATCH
    const dispatch = useDispatch()

    // NAVIGATE
    let navigate = useNavigate()


    //STATES
    const [user, setuser] = useState({})



    // FUNCTIONS
    // FORM DATA ONCHANGE
    const formDataOnChange = (e) => {
        setuser(prevValues => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        }

        )

    }

    // REGISTER
    const register =()=>{
        dispatch(actionAuth.register(user))
        navigate('/dashboard')

        // if(states?.auth?.user){
        //     navigate('/dashboard')
        // }
    }



    // LIFE CYCLE METHODS
    useEffect(() => {
        
        // // CHECK AUTH
        dispatch(actionAuth.authCheck())
    

        // // REDIRECT IF USER EXIST
        // if (states?.auth?.user) { 
    
        //   navigate('/dashboard') }
    
      }, [])
    




    return (
        <>
            {/*<!--begin::Main-->*/}
            <div className="d-flex flex-column flex-root">
                {/*<!--begin::Authentication - Sign-up -->*/}
                <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                    {/*<!--begin::Aside-->*/}
                    <div className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative" style={{ "backgroundColor": "#F2C98A" }}>
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
                                <h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{ "color": "#986923" }}>Welcome to Metronic</h1>
                                {/*<!--end::Title-->*/}
                                {/*<!--begin::Description-->*/}
                                <p className="fw-bold fs-2" style={{ "color": "#986923" }}>Discover Amazing Metronic
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
                                {/*<!--begin::Form-->*/}
                                <form className="form w-100" noValidate="novalidate" id="kt_sign_up_form">
                                    {/*<!--begin::Heading-->*/}
                                    <div className="mb-10 text-center">
                                        {/*<!--begin::Title-->*/}
                                        <h1 className="text-dark mb-3">Create an Account</h1>
                                        {/*<!--end::Title-->*/}
                                        {/*<!--begin::Link-->*/}
                                        <div className="text-gray-400 fw-bold fs-4">Already have an account?
                                            <Link to='/' className="link-primary fw-bolder">Sign in here</Link>
                                        </div>
                                        {/*<!--end::Link-->*/}
                                    </div>
                                    {/*<!--end::Heading-->*/}


                                    {/*<!--begin::Input group-->*/}
                                    <div className="fv-row mb-7">
                                        <label className="form-label fw-bolder text-dark fs-6">Full Name</label>
                                        <input className="form-control form-control-lg form-control-solid" type="text" value={user?.name} onChange={formDataOnChange} placeholder="" name="name" autoComplete="off" />
                                    </div>
                                    {/*<!--end::Input group-->*/}

                                    {/*<!--begin::Input group-->*/}
                                    <div className="fv-row mb-7">
                                        <label className="form-label fw-bolder text-dark fs-6">Email</label>
                                        <input className="form-control form-control-lg form-control-solid" type="email" value={user?.email} onChange={formDataOnChange} placeholder="" name="email" autoComplete="off" />
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
                                                <input className="form-control form-control-lg form-control-solid" type="password" value={user?.password} onChange={formDataOnChange} placeholder="" confirm-password name="password" autoComplete="off" />
                                                <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                                    <i className="bi bi-eye-slash fs-2"></i>
                                                    <i className="bi bi-eye fs-2 d-none"></i>
                                                </span>
                                            </div>
                                            {/*<!--end::Input wrapper-->*/}
                                            {/*<!--begin::Meter-->*/}
                                            {/* <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                                            </div> */}
                                            {/*<!--end::Meter-->*/}
                                        </div>
                                        {/*<!--end::Wrapper-->*/}
                                        {/*<!--begin::Hint-->*/}
                                        {/* <div className="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div> */}
                                        {/*<!--end::Hint-->*/}
                                    </div>
                                    {/*<!--end::Input group=-->*/}
                                    {/*<!--begin::Input group-->*/}
                                    {/* <div className="fv-row mb-5">
                                        <label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
                                        <input className="form-control form-control-lg form-control-solid" type="password" value={user?.confirmPassword} onChange={formDataOnChange} placeholder="" name="confirmPassword" autoComplete="off" />
                                    </div> */}
                                    {/*<!--end::Input group-->*/}
                                    {/*<!--begin::Input group-->*/}
                                    <div className="fv-row mb-10">
                                        <label className="form-check form-check-custom form-check-solid form-check-inline">
                                            <input className="form-check-input" type="checkbox" name="toc" value="1" />
                                            <span className="form-check-label fw-bold text-gray-700 fs-6">I Agree
                                                <a href="#" className="ms-1 link-primary">Terms and conditions</a>.</span>
                                        </label>
                                    </div>
                                    {/*<!--end::Input group-->*/}
                                    {/*<!--begin::Actions-->*/}
                                    <div className="text-center">
                                        <button type="button" id="kt_sign_up_submit" className="btn btn-lg btn-primary" onClick={register}>
                                            <span className="indicator-label">Submit</span>
                                            <span className="indicator-progress">Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                        </button>
                                    </div>
                                    {/*<!--end::Actions-->*/}
                                </form>
                                {/*<!--end::Form-->*/}
                            </div>
                            {/*<!--end::Wrapper-->*/}
                        </div>
                        {/*<!--end::Content-->*/}
                        {/*<!--begin::Footer-->*/}
                        <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                            {/*<!--begin::Links-->*/}
                            <div className="d-flex flex-center fw-bold fs-6">
                                <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">About</a>
                                <a href="https://keenthemes.com/support" className="text-muted text-hover-primary px-2" target="_blank">Support</a>
                                <a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
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