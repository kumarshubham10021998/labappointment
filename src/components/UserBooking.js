import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Row,
  Col,
  Spinner,
  Alert,
  Card,
  Badge,
} from "react-bootstrap";
import { FaUser, FaPhone, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

const UserBooking = ({ onHide, user }) => {
  const registrationId = user?.registrationId;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    registrationId: registrationId,
    patient_name: "",
    age: "",
    relation: "Self",
    alternate_mobile: "",
    address: "",
    district: "",
    pin: "",
    status: "Pending",
  });
  const [apiLoading, setApiLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [bookings, setBookings] = useState([]);
  const [formMode, setFormMode] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    console.log("UserBooking mounted with registrationId:", registrationId);
    if (!registrationId) {
      console.error("No registrationId provided");
      setError("No registration ID found. Please register first.");
      return;
    }
    fetchBookingData(registrationId);
  }, [registrationId, navigate]);

  const fetchBookingData = async (regId) => {
    setApiLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api-lab4everywhere/booking.php`, {
        params: { registrationId: regId },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const result = response.data;
      if (result.status === "success") {
        setBookings(result.data || []);
      } else {
        setError(result.message || "No bookings found");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load booking details");
    } finally {
      setApiLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      patient_name: "",
      age: "",
      relation: "Self",
      alternate_mobile: "",
      address: "",
      district: "",
      pin: "",
      status: "Pending",
    });
    setFormMode(null);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionError("");
    setSubmissionSuccess("");

    try {
      // Build payload manually, do NOT spread formData directly
      const payload = {
        registrationId: registrationId, // from props, always correct
        patient_name: formData.patient_name,
        age: formData.age,
        relation: formData.relation,
        alternate_mobile: formData.alternate_mobile,
        address: formData.address,
        district: formData.district,
        pin: formData.pin,
        status: "Pending",
      };

      console.log("Payload to send:", payload);

      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      };

      let response;
      if (formMode === "update") {
        console.log("Creating new booking with payload: put", payload);
        response = await axios.put(
          `/api-lab4everywhere/booking.php?regID=${registrationId}&ID=${editingId}`,
          JSON.stringify(payload),
          axiosConfig
        );
      } else {
        console.log("Creating new booking with payload: post", payload);
        response = await axios.post(
          "/api-lab4everywhere/booking.php",
          JSON.stringify(payload),
          axiosConfig
        );
      }

      const result = response.data;
      if (result.status !== "success") {
        throw new Error(result.message || "Failed to save booking");
      }

      setSubmissionSuccess(
        formMode === "update"
          ? "✅ Booking updated successfully!"
          : "✅ Booking created successfully!"
      );

      fetchBookingData(registrationId);
      resetForm();

      setTimeout(() => {
        setSubmissionSuccess("");
        if (onHide) onHide();
      }, 2500);
    } catch (err) {
      setSubmissionError(
        err.response?.data?.message ||
          err.message ||
          "❌ Failed to save booking. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (booking) => {
    setFormData({
      patient_name: booking.patient_name,
      age: booking.age,
      relation: booking.relation,
      alternate_mobile: booking.alternate_mobile,
      address: booking.address,
      district: booking.district,
      pin: booking.pin,
      status: booking.status,
    });
    setEditingId(booking.id);
    setFormMode("update");
  };

  if (apiLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading booking information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        {error}
        <div className="mt-2">
          <Button
            variant="primary"
            onClick={() => fetchBookingData(registrationId)}
          >
            Retry
          </Button>
        </div>
      </Alert>
    );
  }

  return (
    <div>
      {submissionSuccess && (
        <Alert
          variant="success"
          onClose={() => setSubmissionSuccess("")}
          dismissible
        >
          {submissionSuccess}
        </Alert>
      )}
      {submissionError && (
        <Alert
          variant="danger"
          onClose={() => setSubmissionError("")}
          dismissible
        >
          {submissionError}
        </Alert>
      )}

      {bookings.length > 0 && !formMode && (
        <div className="mb-4">
          <h5 className="mb-3">Your Bookings</h5>
          <div className="booking-list">
            {bookings.map((booking) => (
              <Card key={booking.id} className="mb-3 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <FaUser className="me-2 text-primary" />
                        <h5 className="mb-0">{booking.patient_name}</h5>
                        <Badge bg="light" text="dark" className="ms-2">
                          {booking.relation}
                        </Badge>
                        <Badge bg="info" className="ms-2">
                          {booking.age || "--"} yrs
                        </Badge>
                      </div>

                      <div className="d-flex align-items-center mb-1">
                        <FaPhone className="me-2 text-muted" />
                        <small>
                          {booking.alternate_mobile || "Not provided"}
                        </small>
                      </div>

                      <div className="d-flex align-items-start">
                        <FaMapMarkerAlt className="me-2 text-muted mt-1" />
                        <small>
                          {booking.address && <div>{booking.address}</div>}
                          {booking.district && (
                            <div>
                              {booking.district}, {booking.pin}
                            </div>
                          )}
                        </small>
                      </div>
                    </div>

                    <div className="d-flex">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(booking)}
                      >
                        <FaEdit className="me-1" /> Edit
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {!formMode && (
        <div className="mb-4">
          <Button
            variant="primary"
            onClick={() => setFormMode("create")}
            className="w-100"
          >
            + Create New Booking
          </Button>
        </div>
      )}

      {(formMode === "update" || formMode === "create") && (
        <Form onSubmit={handleSubmit}>
          <h5 className="mb-3">
            {formMode === "update" ? "Update Booking" : "Create New Booking"}
          </h5>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="patientName">
                <Form.Label>Patient Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="patient_name"
                  value={formData.patient_name || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={formData.age || ""}
                  onChange={handleChange}
                  min="0"
                  max="120"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="relation">
                <Form.Label>Relation</Form.Label>
                <Form.Select
                  name="relation"
                  value={formData.relation || ""}
                  onChange={handleChange}
                >
                  <option value="Self">Self</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Child">Child</option>
                  <option value="Parent">Parent</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="alternateMobile">
                <Form.Label>Alternate Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  name="alternate_mobile"
                  value={formData.alternate_mobile || ""}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={formData.address || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="district">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="pin">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                  type="text"
                  name="pin"
                  value={formData.pin || ""}
                  onChange={handleChange}
                  pattern="[0-9]{6}"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-between">
            <Button
              variant="secondary"
              onClick={() => {
                resetForm();
                if (onHide) onHide();
              }}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Saving...
                </>
              ) : formMode === "update" ? (
                "Update Booking"
              ) : (
                "Create Booking"
              )}
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default UserBooking;
