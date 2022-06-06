import React, { useEffect, useState } from 'react'

import Header from './Header'
import Aside from './Aside'
import { useDispatch, useSelector } from 'react-redux'

import * as actionAuth from '../store/actionCreator/authAction'

const Layout = (props) => {

    let dispatch = useDispatch()
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false)

    const menuToggle = () => {
        if (mobileMenuToggle === true) {
            setMobileMenuToggle(false)
        } else if ((mobileMenuToggle === false)) {
            setMobileMenuToggle(true)
        }

    }



    const emailVerifyStatus = useSelector((state) => state?.auth?.userData?.users[0].emailVerified)
    const token = useSelector((state) => state?.auth?.token)






    return (
        <div className="header-fixed header-tablet-and-mobile-fixed">
            {/* <!--begin::Main--> */}
            {/* <!--begin::Root--> */}
            <div className="d-flex flex-column flex-root">
                {/* <!--begin::Page--> */}
                <div className="page d-flex flex-row flex-column-fluid">
                    {/* <!--begin::Wrapper--> */}
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

                        {/* HEADER */}



                        <Header click={menuToggle} />

                        {/* END HEADER */}


                        {/* <!--begin::Content wrapper--> */}
                        <div className="d-flex flex-column-fluid">
                            <Aside clicked={menuToggle} mobileMenuToggle={mobileMenuToggle} />

                            {/* <!--begin::Container-->*/}
                            <div className="d-flex flex-column flex-column-fluid container-fluid">

                                <div className="toolbar mb-5 mb-lg-7" id="kt_toolbar">
                                    {/* <!--begin::Page title--> */}
                                    <div className="page-title d-flex flex-column me-3">
                                        {/* <!--begin::Title--> */}
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">{props.pageTitle}</h1>
                                        {/* <!--end::Title--> */}
                                        {/* <!--begin::Breadcrumb--> */}
                                        <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">

                                            {/* <!--begin::Item--> */}
                                            <li className="breadcrumb-item text-gray-600">{props.pageGroup}</li>
                                            {/* <!--end::Item--> */}
                                            {/* <!--begin::Item--> */}
                                            <li className="breadcrumb-item text-gray-600">{props.pageTitle}</li>
                                            {/* <!--end::Item--> */}

                                        </ul>
                                        {/* <!--end::Breadcrumb--> */}
                                    </div>
                                    {/* <!--end::Page title--> */}


                                </div>


                                {/* <!--begin::Post-->*/}
                                <div className="content flex-column-fluid" id="kt_content">

                                    <div className="card mb-5 mb-xxl-8">
                                        <div className="card-body">
                                            {emailVerifyStatus ?
                                                props.children :
                                                <div className='d-flex align-items-center  justify-content-between flex-wrap'>
                                                    <h4 className='mb-8 mb-md-0'>Email Not Verified</h4>
                                                    <div>
                                                        <span>Please check your mail for verification !</span> <br />
                                                        <span>Make you check spam folder too !</span>

                                                    </div>
                                                    <button onClick={() => dispatch(actionAuth.emailVerify(token))} className="btn-sm btn btn-success">Resend Email verfication !</button>
                                                </div>}


                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* <!--end::Content wrapper--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                </div>
                {/* <!--end::Page--> */}
            </div>
            {/* <!--end::Root--> */}

            {/* <!--end::Main--> */}



        </div>
    )
}

export default Layout