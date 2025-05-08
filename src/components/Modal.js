import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export const MainModal = ({
  show,
  onHide,
  heading,
  className,
  registrationId,
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

  useEffect(() => {
    if (show && registrationId) {
      console.log("Fetching booking data for:", registrationId);

      fetch(`http://localhost/api-lab4everywhere/booking.php?registrationId=${registrationId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          console.log("API Response:", data);
          if (data && data.booking) {
            setFormData({
              registrationId: data.booking.registrationId || registrationId,
              patient_name: data.booking.patient_name || "",
              age: data.booking.age || "",
              relation: data.booking.relation || "",
              alternate_mobile: data.booking.alternate_mobile || "",
              address: data.booking.address || "",
              district: data.booking.district || "",
              pin: data.booking.pin || "",
              status: "Pending",
            });
          } else {
            setFormData((prev) => ({
              ...prev,
              registrationId,
            }));
          }
        })
        .catch((err) => {
          console.error("❌ Failed to fetch booking data:", err);
        });
    }
  }, [show, registrationId]);

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
      console.log("POST result:", result);
      alert("✅ Booking submitted successfully!");
      onHide();
    } catch (error) {
      console.error("❌ Submit error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      className={className || "custom-modal"}
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Registration ID</Form.Label>
                <Form.Control
                  type="text"
                  name="registrationId"
                  value={formData.registrationId}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
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
              <Form.Group>
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
              <Form.Group>
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
              <Form.Group>
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
              <Form.Group>
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
              <Form.Group>
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
              <Form.Group>
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
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
