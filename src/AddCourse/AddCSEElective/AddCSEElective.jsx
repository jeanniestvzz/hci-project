import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HwDropdown from '../HwDropdown';
import SwDropdown from '../SwDropdown';
import TheDropdown from '../TheDropdown';

function AddCSEElective() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to choose a CSE elective
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>CSE Electives</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='electiveDropdowns'>
            <li><HwDropdown /></li>
            <br />
            <li><SwDropdown /></li>
            <br />
            <li><TheDropdown /></li>
          </ul>       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCSEElective;