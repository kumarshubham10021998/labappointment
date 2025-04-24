import React from "react";
import { Modal, Button } from "react-bootstrap";

export const MainModal = ({
  children,
  style,
  heading,
  className,
  show,
  onHide,
  footer,
  ...props
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      style={style}
      className={className || "custom-modal"}
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && (
        <Modal.Footer>
          <Button onClick={onHide} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};
