import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FutureCourseInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to show future course description
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Upcoming Course Overview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>CEN 4020 - Software Engineering</li>
            <li>Credit Hours: 3</li>
            <li>An overview of software engineering techniques for producing high quality software. Student will participate in a software development team.</li>
            <li>COP 4530 with a minimum grade of C-</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FutureCourseInfo