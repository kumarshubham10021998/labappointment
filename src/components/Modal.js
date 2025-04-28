import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

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
  const [formData, setFormData] = useState({
    registrationId: "",
    patient_name: "",
    age: "",
    relation: "",
    alternate_mobile: "",
    address: "",
    district: "",
    pin: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/api-lab4everywhere/booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      alert("Booking submitted successfully!");
      hideModal(); // Close modal after success
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

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
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formRegistrationId">
                <Form.Label>Registration ID</Form.Label>
                <Form.Control
                  type="text"
                  name="registrationId"
                  value={formData.registrationId}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPatientName">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formRelation">
                <Form.Label>Relation</Form.Label>
                <Form.Control
                  type="text"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formAlternateMobile">
                <Form.Label>Alternate Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="alternate_mobile"
                  value={formData.alternate_mobile}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPin">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                  type="text"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Control type="hidden" name="status" value={formData.status} />

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>

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
