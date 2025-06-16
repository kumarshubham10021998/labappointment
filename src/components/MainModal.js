import React from "react";
import { Modal } from "react-bootstrap";

const MainModal = ({
  children,
  show,
  onHide,
  heading,
  className,
  registrationId,
  footer,
  ...props
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className={`${className} booking-modal`}
      size="lg"
      centered
      {...props}
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold">{heading}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      {footer && (
        <Modal.Footer className="border-0">
          <div className="d-flex justify-content-between w-100">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default MainModal;
// MainModal.js
