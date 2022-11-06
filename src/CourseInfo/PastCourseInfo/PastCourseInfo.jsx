import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PastCourseInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to show past course description
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Course Overview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Taken Fall 2020</li>
            <li>COP 2510 - Programming Concepts</li>
            <li>Credit Hours: 3</li>
            <li>An examination of a modern programming language emphasizing programming concepts and design methodology.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PastCourseInfo