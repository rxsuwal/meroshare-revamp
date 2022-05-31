import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import { Modal, Button } from 'react-bootstrap';
import * as actionAuth from '../store/actionCreator/authAction'


import * as Yup from 'yup';
import { useDispatch } from 'react-redux';


const UserDataUpdateModal = (props) => {

    let dispatch = useDispatch()

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const DisplayingErrorMessagesSchema = Yup.object().shape({
        name: Yup.string().required('Full Name Required'),
        photoURL: Yup.string().required('Image Required!')
    });

    return (
        <>
            <Modal {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show}>
                <Modal.Header>
                    <Modal.Title variant='h1'>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formik
                        initialValues={{
                            name: '',
                            photoURL: ''
                        }}
                        validationSchema={DisplayingErrorMessagesSchema}
                        onSubmit={values => {
                            // dispatch(actionAuth.updateUserData(values))
                        }}
                    >
                        {({ values, setFieldValue }) => (

                            <Form className="form w-100" noValidate="novalidate" >


                                <div className="fv-row mb-7">
                                    <label className="form-label fw-bolder text-dark fs-6">Full Name</label>

                                    <Field className="form-control form-control-lg form-control-solid" type="text" name="name" placeholder="Enter Full Name" />
                                    <ErrorMessage name="name" component="span" className='d-block text-danger' />

                                </div>

                                <div className="fv-row mb-7">
                                    <label className="form-label fw-bolder text-dark fs-6">Upload Photo</label>
                                    <br />

                                    {/*<!--begin::Image input-->*/}
                                    <div className="image-input image-input-outline">
                                        {/*<!--begin::Image preview wrapper-->*/}
                                        <div className="image-input-wrapper w-125px h-125px" >
                                            <img src={values.photoURL ? values.photoURL : "https://via.placeholder.com/150?text=Upload+Photo"} alt='photo' className='w-100 h-100' />

                                        </div>
                                        {/*<!--end::Image preview wrapper-->*/}

                                        {/*<!--begin::Edit button-->*/}
                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="change"
                                            data-bs-toggle="tooltip"
                                            data-bs-dismiss="click"
                                            title="Change avatar">
                                            <i className="bi bi-pencil-fill fs-7"></i>

                                            {/*<!--begin::Inputs-->*/}

                                            <Field type="file" name="PhotoURL" accept=".png, .jpg, .jpeg"
                                                onChange={(e) => {
                                                    setFieldValue('photoURL', URL.createObjectURL(e.target.files[0]))
                                                }}
                                            />


                                            {/*<!--end::Inputs-->*/}
                                        </label>
                                        {/*<!--end::Edit button-->*/}



                                        {/*<!--begin::Remove button-->*/}
                                        {values.photoURL ? <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                            data-kt-image-input-action="remove"
                                            onClick={() => {
                                                setFieldValue('photoURL', '')

                                            }}
                                        >
                                            <i className="bi bi-x fs-2"></i>
                                        </span> : null}
                                        {/*<!--end::Remove button-->*/}
                                    </div>
                                    {/*<!--end::Image input-->*/}

                                    {/* <Field className="form-control form-control-lg form-control-solid" type="file" name="PhotoURL"
                                        onChange={(e) => {
                                            setFieldValue('photoURL', URL.createObjectURL(e.target.files[0]))
                                        }}
                                    /> */}
                                    < ErrorMessage name="photoURL" component="span" className='d-block text-danger' />

                                </div>



                                {/*{/*<!--begin::Actions-->*/}
                                <div className="text-center">
                                    <button type="submit" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
                                        <span className="indicator-label">Submit</span>
                                        <span className="indicator-progress">Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                        </span>
                                    </button>
                                </div>
                                {/*{/*<!--end::Actions-->*/}
                            </Form>


                        )}
                    </Formik>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserDataUpdateModal