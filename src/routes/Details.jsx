import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'

import * as Yup from 'yup'

import * as actionDetails from '../store/actionCreator/userDataAction'
import Loader from '../components/Loader/Loader'
import SelectWithSearch from '../components/SelectWithSearch'




const Details = () => {
    const provinceList = [
        { value: "Province 1", label: "Province 1" },
        { value: "Madhesh", label: "Madhesh" },
        { value: "Bagmati", label: "Bagmati" },
        { value: "Gandaki", label: "Gandaki" },
        { value: "Lumbini", label: "Lumbini" },
        { value: "Karnali", label: "Karnali" },
        { value: "Sudurpaschim", label: "Sudurpaschim" }

    ];

    // STORE STATES
    const userData = useSelector((state) => state?.auth?.userData)
    const userDetails = useSelector((state) => state?.userData?.details)

    // ACTION DISPATCH
    const dispatch = useDispatch()



    const DisplayingErrorMessagesSchema = Yup.object().shape({
        contact: Yup.string().required('Contact Required !'),
        province: Yup.string().required('Province Required !'),
        district: Yup.string().required('District Required !'),
        address: Yup.string().required('Address Required !'),
        profession: Yup.string().required('Profession Required !'),


    });


    useEffect(() => {
        if (!userDetails) {
            dispatch(actionDetails.getDetails())
        }
    }, [userData])





    let [editModeDetails, setEditModeDetails] = useState(false)

    const editModeToggle = () => {
        if (!editModeDetails) {
            setEditModeDetails(true)
        } else if (editModeDetails) {
            setEditModeDetails(false)
        }
    }

    return (
        <Layout pageTitle="My Details" pageGroup="General">
            {userDetails || userDetails == null ?

                <>
                    {/*--begin::Navbar*/}
                    <div className="card mb-5 mb-xl-10">
                        <div className="card-body pt-9 pb-0">
                            {/*--begin::Details*/}
                            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                                {/*--begin: Pic*/}
                                <div className="me-7 mb-4">
                                    <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                        <img src={"https://via.placeholder.com/500/ff1221/ffffff?text=" + userData?.users[0]?.displayName.charAt(0).toUpperCase()} alt="image" />
                                        <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                                    </div>
                                </div>
                                {/*--end::Pic*/}
                                {/*--begin::Info*/}
                                <div className="flex-grow-1">
                                    {/*--begin::Title*/}
                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                        {/*--begin::User*/}
                                        <div className="d-flex flex-column">
                                            {/*--begin::Name*/}
                                            <div className="d-flex align-items-center mb-2">
                                                <a role="button" className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">{userData?.users[0]?.displayName}</a>
                                                <a role="button">
                                                    {/*--begin::Svg Icon | path: icons/duotune/general/gen026.svg*/}
                                                    {userDetails ? <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="#00A3FF" />
                                                            <path className="permanent" d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
                                                        </svg>
                                                    </span> : <span class="badge badge-light-danger">Profile Not Complete !</span>}
                                                    {/*--end::Svg Icon*/}
                                                </a>
                                            </div>
                                            {/*--end::Name*/}
                                            {/*--begin::Info*/}
                                            <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                                <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                    {/*--begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                     <span className="svg-icon svg-icon-4 me-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
                                                            <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
                                                        </svg>
                                                    </span> 
                                                    {/*--end::Svg Icon*/}{userDetails?.profession}</a>
                                                <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                    {/*--begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                    <span className="svg-icon svg-icon-4 me-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*--end::Svg Icon*/}{userDetails?.province}</a>
                                                <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                                    {/*--begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                                    <span className="svg-icon svg-icon-4 me-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
                                                            <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*--end::Svg Icon*/}{userData?.users[0]?.email}</a>
                                            </div>
                                            {/*--end::Info*/}
                                        </div>
                                        {/*--end::User*/}

                                    </div>
                                    {/*--end::Title*/}
                                    {/*--begin::Stats*/}
                                    <div className="d-flex flex-wrap flex-stack">
                                        {/*--begin::Wrapper*/}
                                        <div className="d-flex flex-column flex-grow-1 pe-8">
                                            {/*--begin::Stats*/}
                                            <div className="d-flex flex-wrap">
                                                {/*--begin::Stat*/}
                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    {/*--begin::Number*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                        <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
                                                                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        {/*--end::Svg Icon*/}
                                                        <div className="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
                                                    </div>
                                                    {/*--end::Number*/}
                                                    {/*--begin::Label*/}
                                                    <div className="fw-bold fs-6 text-gray-400">Earnings</div>
                                                    {/*--end::Label*/}
                                                </div>
                                                {/*--end::Stat*/}
                                                {/*--begin::Stat*/}
                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    {/*--begin::Number*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                                        <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="black" />
                                                                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        {/*--end::Svg Icon*/}
                                                        <div className="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="75">0</div>
                                                    </div>
                                                    {/*--end::Number*/}
                                                    {/*--begin::Label*/}
                                                    <div className="fw-bold fs-6 text-gray-400">Projects</div>
                                                    {/*--end::Label*/}
                                                </div>
                                                {/*--end::Stat*/}
                                                {/*--begin::Stat*/}
                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    {/*--begin::Number*/}
                                                    <div className="d-flex align-items-center">
                                                        {/*--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                                        <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
                                                                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        {/*--end::Svg Icon*/}
                                                        <div className="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
                                                    </div>
                                                    {/*--end::Number*/}
                                                    {/*--begin::Label*/}
                                                    <div className="fw-bold fs-6 text-gray-400">Success Rate</div>
                                                    {/*--end::Label*/}
                                                </div>
                                                {/*--end::Stat*/}
                                            </div>
                                            {/*--end::Stats*/}
                                        </div>
                                        {/*--end::Wrapper*/}
                                        {/*--begin::Progress*/}
                                        <div className="d-flex align-items-center w-md-50 w-100 flex-column mt-3">
                                            <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                                <span className="fw-bold fs-6 text-gray-400">Profile Completion</span>
                                                <span className="fw-bolder fs-6">{userDetails ? `100%` : `50%`}</span>
                                            </div>
                                            <div className="h-5px mx-3 w-100 bg-light mb-3">
                                                <div className="bg-success rounded h-5px" role="progressbar" style={{ "width": userDetails ? `100%` : `50%` }} aria-valuenow={userDetails ? 100 : 50} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                        </div>
                                        {/*--end::Progress*/}
                                    </div>
                                    {/*--end::Stats*/}
                                </div>
                                {/*--end::Info*/}
                            </div>
                            {/*--end::Details*/}

                            {/*--begin::Navs*/}
                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">

                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo14/dist/account/settings.html">Overview</a>
                                </li>
                                {/*--end::Nav item*/}
                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo14/dist/account/security.html">Security</a>
                                </li>
                                {/*--end::Nav item*/}
                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo14/dist/account/billing.html">Billing</a>
                                </li>
                                {/*--end::Nav item*/}
                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo14/dist/account/statements.html">Statements</a>
                                </li>
                                {/*--end::Nav item*/}
                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo14/dist/account/referrals.html">Referrals</a>
                                </li>
                                {/*--end::Nav item*/}
                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo14/dist/account/api-keys.html">API Keys</a>
                                </li>
                                {/*--end::Nav item*/}
                                {/*--begin::Nav item*/}
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo14/dist/account/logs.html">Logs</a>
                                </li>
                                {/*--end::Nav item*/}
                            </ul>
                            {/*--begin::Navs*/}
                        </div>
                    </div>
                    {/*--end::Navbar*/}


                    {/*--begin::Basic info*/}
                    <div className="card mb-5 mb-xl-10">
                        {/*--begin::Card header*/}
                        <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
                            {/*--begin::Card title*/}
                            <div className="card-title m-0">
                                <h3 className="fw-bolder m-0">Profile Details</h3>
                            </div>
                            {/*--end::Card title*/}
                            <div>
                                {
                                    editModeDetails ?
                                        null :
                                        <button onClick={() => editModeToggle()} className="btn btn-primary">Edit</button>

                                }
                            </div>
                        </div>
                        {/*--begin::Card header*/}
                        {/*--begin::Content*/}
                        <div id="kt_account_settings_profile_details" className="collapse show">
                            {/*--begin::Form*/}

                            {userDetails || userDetails == null ?
                                <Formik
                                    initialValues={{
                                        "contact": userDetails?.contact,
                                        "address": userDetails?.address,
                                        "district": userDetails?.district,
                                        "province": userDetails?.province,
                                        "profession": userDetails?.profession
                                    }}

                                    validationSchema={DisplayingErrorMessagesSchema}
                                    onSubmit={values => {
                                        dispatch(actionDetails.updateDetails(values))
                                    }}
                                >

                                    {({ values, setFieldValue, handleChange }) => (
                                        <Form className="form">

                                            <div className="card-body border-top p-9">

                                                {/*--begin::Input group*/}
                                                <div className="row mb-6">
                                                    {/*--begin::Label*/}
                                                    <label className="col-lg-4 col-form-label fw-bold fs-6">
                                                        <span className="required">Contact Phone</span>
                                                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active"></i>
                                                    </label>
                                                    {/*--end::Label*/}
                                                    {/*--begin::Col*/}
                                                    <div className="col-lg-8 fv-row">
                                                        <Field type="number" name="contact" disabled={!editModeDetails} className="form-control form-control-lg form-control-solid" placeholder="Enter Phone number" />

                                                        <ErrorMessage name="contact" component="span" className='d-block text-danger' />

                                                    </div>
                                                    {/*--end::Col*/}
                                                </div>
                                                {/*--end::Input group*/}
                                                {/*--begin::Input group*/}
                                                <div className="row mb-6">
                                                    {/*--begin::Label*/}
                                                    <label className="col-lg-4 col-form-label fw-bold fs-6">
                                                        <span className="required">Profession</span>
                                                    </label>
                                                    {/*--end::Label*/}
                                                    {/*--begin::Col*/}
                                                    <div className="col-lg-8 fv-row">
                                                        <Field type="text" name="profession" disabled={!editModeDetails} className="form-control form-control-lg form-control-solid" placeholder="Enter Profession" />

                                                        <ErrorMessage name="profession" component="span" className='d-block text-danger' />

                                                    </div>
                                                    {/*--end::Col*/}
                                                </div>
                                                {/*--end::Input group*/}

                                                <div>
                                                    <h3 className='my-6'>Address</h3>

                                                    {/*--begin::Input group*/}
                                                    <div className="row mb-6">
                                                        {/*--begin::Label*/}
                                                        <label className="col-lg-4 col-form-label fw-bold fs-6">
                                                            <span className="required">Province</span>
                                                        </label>
                                                        {/*--end::Label*/}
                                                        {/*--begin::Col*/}
                                                        <div className="col-lg-8 fv-row">
                                                            <SelectWithSearch
                                                                disabled={!editModeDetails}
                                                                name="province"
                                                                options={provinceList}
                                                                value={values.province}
                                                                className="form-select form-select-solid form-select-lg"
                                                                onchange={(e) => {
                                                                    console.log(e)
                                                                    handleChange(e.value)
                                                                    setFieldValue("province", e.value)
                                                                    console.log(values.province)
                                                                }} />
                                                            {/* <Field component={SelectWithSearch} name="province" disabled={!editModeDetails} className="form-control form-control-lg form-control-solid" /> */}



                                                            <ErrorMessage name="province" component="span" className='d-block text-danger' />

                                                        </div>
                                                        {/*--end::Col*/}
                                                    </div>
                                                    {/*--end::Input group*/}


                                                    {/*--begin::Input group*/}
                                                    <div className="row mb-6">
                                                        {/*--begin::Label*/}
                                                        <label className="col-lg-4 col-form-label fw-bold fs-6">
                                                            <span className="required">District</span>
                                                        </label>
                                                        {/*--end::Label*/}
                                                        {/*--begin::Col*/}
                                                        <div className="col-lg-8 fv-row">
                                                            <Field type="tel" name="district" disabled={!editModeDetails} className="form-control form-control-lg form-control-solid" placeholder="Enter District" />
                                                            <ErrorMessage name="district" component="span" className='d-block text-danger' />

                                                        </div>
                                                        {/*--end::Col*/}
                                                    </div>
                                                    {/*--end::Input group*/}


                                                    {/*--begin::Input group*/}
                                                    <div className="row mb-6">
                                                        {/*--begin::Label*/}
                                                        <label className="col-lg-4 col-form-label fw-bold fs-6">
                                                            <span className="required">Address</span>
                                                        </label>
                                                        {/*--end::Label*/}
                                                        {/*--begin::Col*/}
                                                        <div className="col-lg-8 fv-row">
                                                            <Field type="tel" name="address" disabled={!editModeDetails} className="form-control form-control-lg form-control-solid" placeholder="Enter Address" />
                                                            <ErrorMessage name="address" component="span" className='d-block text-danger' />

                                                        </div>
                                                        {/*--end::Col*/}
                                                    </div>
                                                    {/*--end::Input group*/}

                                                </div>





                                                {/*--begin::Actions*/}
                                                {editModeDetails ? <div className="card-footer d-flex justify-content-end py-6 px-9">
                                                    <button type='reset' onClick={() => editModeToggle()} className="btn btn-light btn-active-light-primary me-2">Cancel</button>
                                                    <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit">Save Changes</button>
                                                </div> : null}
                                                {/*--end::Actions*/}
                                            </div>





                                        </Form>
                                    )}



                                </Formik> :
                                <Loader />}

                            {/*--end::Form*/}
                        </div>
                        {/*--end::Content*/}
                    </div>
                    {/*--end::Basic info*/}

                </> : <Loader />
            }

        </Layout>
    )
}

export default Details