import { Formik, validateYupSchema } from 'formik'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'


function PopUp(props) {

  return (
    <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={props.show}
      onHide={props.close}
    >

      <Modal.Header closeButton>
        <Modal.Title variant='h1'>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {props.children}


      </Modal.Body>


    </Modal>
  )
}

export default PopUp