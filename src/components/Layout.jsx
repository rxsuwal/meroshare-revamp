import React, { useEffect, useState } from 'react'

import Header from './Header'
import Aside from './Aside'

const Layout = (props) => {

    const [mobileMenuToggle, setMobileMenuToggle] = useState(false)

    const menuToggle = () => {
        if (mobileMenuToggle === true) {
            setMobileMenuToggle(false)
        } else if ((mobileMenuToggle === false)) {
            setMobileMenuToggle(true)
        }

    }






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
                                            {props.children}


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