import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import bussImg from "../assets/img/bussiness-inquiry.gif";

const LabRegistrationSection = () => {
  const [formData, setFormData] = useState({
    labName: "",
    labLocation: "",
    labType: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col xs={12}>
            <div
              style={{
                textAlign: "center",
                paddingTop: "2rem",
                paddingBottom: "1rem",
                background: "rgb(108, 117, 125)",
                marginBottom: "2rem",
                borderRadius: "15px",
                color: "#fff",
                marginTop: "1rem",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Lab Registration
              </h2>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div
              style={{
                textAlign: "center",
                padding: "36px 40px",
                borderRadius: "15px",
                backgroundColor: "#f8f9fa",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e0e0e0",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  letterSpacing: "2px",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                  textTransform: "uppercase",
                }}
              >
                Let’s Make a Difference Together
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  color: "#444",
                  marginBottom: "25px",
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                We're excited to invite your lab to be part of a transformative
                journey.
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "rgb(83 136 204)",
                    padding: "0px 5px 2px",
                    borderRadius: "5px",
                    margin: "0 2px",
                  }}
                >
                  Collaborate
                </span>
                ,
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "rgb(83 136 204)",
                    padding: "0px 5px 2px",
                    borderRadius: "5px",
                    margin: "0 2px",
                  }}
                >
                  innovate
                </span>
                , and
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "rgb(83 136 204)",
                    padding: "0px 5px 2px",
                    borderRadius: "5px",
                    margin: "0 2px",
                  }}
                >
                  succeed
                </span>{" "}
                together.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                  fontWeight: "300",
                  lineHeight: "1.8",
                  marginTop: "20px",
                }}
              >
                Let's connect and create something extraordinary. Together, we
                can make an impact.
              </p>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <img
              src={bussImg}
              alt="Business Inquiry"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Col>
          <Col xs={12} md={12} style={{ margin: "2rem 0" }}>
            <Form
              onSubmit={handleSubmit}
              style={{
                padding: "2rem",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <Form.Group controlId="labName">
                <Form.Label>Lab Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab name"
                  name="labName"
                  value={formData.labName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="labLocation">
                <Form.Label>Lab Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab location"
                  name="labLocation"
                  value={formData.labLocation}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="labType">
                <Form.Label>Lab Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab type"
                  name="labType"
                  value={formData.labType}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LabRegistrationSection;
