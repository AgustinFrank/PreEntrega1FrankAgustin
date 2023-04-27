import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CartWidget() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        1 producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sus productos.</Modal.Title>
        </Modal.Header>
        <Modal.Body>1 producto</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Vaciar carrito.
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CartWidget;
