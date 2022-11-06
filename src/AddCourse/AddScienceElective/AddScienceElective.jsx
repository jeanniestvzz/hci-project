import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ScienceDropdown from '../ScienceDropdown';


function AddScienceElective() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to choose a science elective
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Science Electives</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ScienceDropdown />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddScienceElective;