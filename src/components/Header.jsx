import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as actionAuth from '../store/actionCreator/authAction'

function Header() {

    // STORE STATES
    const auth = useSelector((state) => state.auth)

    // ACTION DISPATCH
    const dispatch = useDispatch()

    //NAVIGATE
    let navigate = useNavigate()

    useEffect(() => {
        // AUTH STATE CHECK
        dispatch(actionAuth.authCheck())

    }, [])

    useEffect(() => {

        console.log(auth.user)
        if (auth.user === null) {
            navigate('/')
        }
    }, [auth])




    return (
        <>
            {/* <!--begin::Header--> */}
            <div id="kt_header" className="header">
                {/* <!--begin::Container--> */}
                <div className="container-fluid d-flex flex-stack">
                    {/* <!--begin::Brand--> */}
                    <div className="d-flex align-items-center me-5">
                        {/* <!--begin::Aside toggle--> */}
                        <div className="d-lg-none btn btn-icon btn-active-color-white w-30px h-30px ms-n2 me-3" id="kt_aside_toggle">
                            {/* <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg--> */}
                            <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                                </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                        </div>
                        {/* <!--end::Aside  toggle--> */}
                        {/* <!--begin::Logo--> */}
                        <a href="../../demo14/dist/index.html">
                            <img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-25px h-lg-30px" />
                        </a>

                    </div>
                    {/* <!--end::Brand--> */}
                    {/* <!--begin::Topbar--> */}
                    <div className="d-flex align-items-center">
                        {/* <!--begin::Topbar--> */}
                        <div className="d-flex align-items-center flex-shrink-0">

                            {/* <!--begin::User--> */}
                            <div className="d-flex align-items-center ms-1" id="kt_header_user_menu_toggle">
                                {/* <!--begin::User info--> */}
                                <div className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    {/* <!--begin::Name--> */}
                                    <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
                                        <span className="text-muted fs-8 fw-bold lh-1 mb-1">Max</span>
                                        <span className="text-white fs-8 fw-bolder lh-1">UX Designer</span>
                                    </div>
                                    {/* <!--end::Name--> */}
                                    {/* <!--begin::Symbol--> */}
                                    <div className="symbol symbol-30px symbol-md-40px">
                                        <img src="assets/media/avatars/150-26.jpg" alt="image" />
                                    </div>
                                    {/* <!--end::Symbol--> */}
                                </div>
                                {/* <!--end::User info--> */}
                                {/* <!--begin::Menu--> */}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                        <div className="menu-content d-flex align-items-center px-3">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-50px me-5">
                                                <img alt="Logo" src="assets/media/avatars/150-26.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Username--> */}
                                            <div className="d-flex flex-column">
                                                <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                                    <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                <a href="" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                            </div>
                                            {/* <!--end::Username--> */}
                                        </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator my-2"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo14/dist/account/overview.html" className="menu-link px-5">My Profile</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo14/dist/pages/projects/list.html" className="menu-link px-5">
                                            <span className="menu-text">My Projects</span>
                                            <span className="menu-badge">
                                                <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                                            </span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}

                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo14/dist/account/statements.html" className="menu-link px-5">My Statements</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}

                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5 my-1">
                                        <a href="../../demo14/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator my-2"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo14/dist/authentication/flows/basic/sign-in.html" className="menu-link px-5">Sign Out</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}


                                </div>
                                {/* <!--end::Menu--> */}
                            </div>
                            {/* <!--end::User --> */}
                        </div>
                        {/* <!--end::Topbar--> */}
                    </div>
                    {/* <!--end::Topbar--> */}
                </div>
                {/* <!--end::Container--> */}
            </div>
            {/* <!--end::Header--> */}
        </>
    )
}

export default Header