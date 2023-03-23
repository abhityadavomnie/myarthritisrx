import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default function ArthritisModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={()=>props.handleClose()}
      backdrop="static"
      keyboard={false}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
       {props.children}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={()=>props.handleClose()}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer> */}
    </Modal>
  )
}
