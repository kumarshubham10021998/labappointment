import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    registrationId: "",
    patient_name: "",
    age: "",
    relation: "",
    alternate_mobile: "",
    address: "",
    district: "",
    pin: "",
    status: "Pending", // default as in your example
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/api-lab4everywhere/booking.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form-main">
      <Form.Group className="mb-3" controlId="registrationId">
        <Form.Label>Registration ID</Form.Label>
        <Form.Control
          type="text"
          name="registrationId"
          placeholder="Enter Registration ID"
          value={formData.registrationId}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="patient_name">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control
          type="text"
          name="patient_name"
          placeholder="Enter Patient Name"
          value={formData.patient_name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="relation">
        <Form.Label>Relation</Form.Label>
        <Form.Control
          type="text"
          name="relation"
          placeholder="Enter Relation (e.g. Father, Mother)"
          value={formData.relation}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="alternate_mobile">
        <Form.Label>Alternate Mobile</Form.Label>
        <Form.Control
          type="text"
          name="alternate_mobile"
          placeholder="Enter Alternate Mobile"
          value={formData.alternate_mobile}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="district">
        <Form.Label>District</Form.Label>
        <Form.Control
          type="text"
          name="district"
          placeholder="Enter District"
          value={formData.district}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="pin">
        <Form.Label>PIN Code</Form.Label>
        <Form.Control
          type="text"
          name="pin"
          placeholder="Enter PIN Code"
          value={formData.pin}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Status is default to 'Pending' */}
      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          type="text"
          name="status"
          value={formData.status}
          readOnly
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BookingForm;
