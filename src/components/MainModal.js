import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Spinner, Alert } from "react-bootstrap";

export const MainModal = ({
  show,
  onHide,
  heading = "Book Appointment",
  className,
  registrationId,
  userData = {},
  ...props
}) => {
  const [formData, setFormData] = useState({
    registrationId: "",
    patient_name: "",
    age: "",
    relation: "Self",
    alternate_mobile: "",
    address: "",
    district: "",
    pin: "",
    status: "Pending"
  });

  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [error, setError] = useState(null);
  const [registrationError, setRegistrationError] = useState("");

  useEffect(() => {
    if (show) {
      const currentRegistrationId = userData.registrationId || registrationId || "";

      console.log("🆔 Registration ID (resolved):", currentRegistrationId);

      setFormData(prev => ({
        ...prev,
        registrationId: currentRegistrationId,
        patient_name: userData.name || "",
        alternate_mobile: userData.mobile || "",
        address: userData.address || "",
        district: userData.district || "",
        pin: userData.pin || ""
      }));

      if (!currentRegistrationId) {
        setRegistrationError("⚠️ Valid registration is required for booking");
      } else {
        setRegistrationError("");
        fetchBookingData(currentRegistrationId);
      }
    }
  }, [show, userData, registrationId]);

  const fetchBookingData = async (regId) => {
    if (!regId) return;

    setApiLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost/api-lab4everywhere/booking.php?registrationId=${regId}`
      );

      if (!response.ok) {
        throw new Error(`Failed to load booking data: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "success" && result.data) {
        setFormData(prev => ({
          ...prev,
          ...result.data,
          registrationId: regId
        }));
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to load booking details");
    } finally {
      setApiLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.registrationId) {
      setRegistrationError("Valid registration is required for booking");
      return;
    }

    if (!formData.patient_name || !formData.age || !formData.alternate_mobile) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost/api-lab4everywhere/booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save booking");
      }

      alert(result.message || "✅ Booking saved successfully!");
      onHide();
    } catch (err) {
      console.error("Submission Error:", err);
      alert(err.message || "❌ Failed to save booking");
    } finally {
      setLoading(false);
    }
  };

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

      <Modal.Body>
        {apiLoading ? (
          <div className="text-center py-4">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2">Loading booking information...</p>
          </div>
        ) : error ? (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="registrationIdDisplay">
                  <Form.Label>Registration ID</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="text"
                      value={formData.registrationId || "Not available"}
                      readOnly
                      plaintext
                      className={`fw-bold ps-0 border-bottom border-2 ${!formData.registrationId ? "text-danger" : ""}`}
                    />
                    <input 
                      type="hidden" 
                      name="registrationId" 
                      value={formData.registrationId} 
                    />
                  </div>
                  {registrationError && (
                    <Form.Text className="text-danger">
                      {registrationError}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="patientName">
                  <Form.Label>Patient Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="patient_name"
                    value={formData.patient_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter full name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="age">
                  <Form.Label>Age*</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    max="120"
                    placeholder="Enter age"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="relation">
                  <Form.Label>Relation</Form.Label>
                  <Form.Control
                    as="select"
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                  >
                    <option value="Self">Self</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Parent">Parent</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="alternateMobile">
                  <Form.Label>Mobile Number*</Form.Label>
                  <Form.Control
                    type="tel"
                    name="alternate_mobile"
                    value={formData.alternate_mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    placeholder="Enter 10-digit number"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="district">
                  <Form.Label>District*</Form.Label>
                  <Form.Control
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                    placeholder="Enter district"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="address">
                  <Form.Label>Address*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter full address"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="pin">
                  <Form.Label>PIN Code*</Form.Label>
                  <Form.Control
                    type="text"
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{6}"
                    maxLength="6"
                    placeholder="Enter 6-digit PIN"
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-4">
              <Button 
                variant="outline-secondary" 
                onClick={onHide} 
                className="me-2 px-4"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="primary" 
                className="px-4"
                disabled={loading || !formData.registrationId}
              >
                {loading ? (
                  <>
                    <Spinner as="span" size="sm" animation="border" className="me-2" />
                    Saving...
                  </>
                ) : (
                  "Submit Booking"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};
